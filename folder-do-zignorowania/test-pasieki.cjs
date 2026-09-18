const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const createApi = require('./pasieki-api.cjs');
const vm = require('node:vm');

test('dwie przeglądarki widzą migrację, edycję i usunięcie tej samej pasieki', async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'pasieki-client-'));
  const handler = createApi(directory);
  const server = http.createServer((req, res) => handler(req, res, new URL(req.url, 'http://localhost').pathname));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const legacy = {id: 'local-legacy', name: 'Stara pasieka', beekeeper: 'Jan', city: 'Łódź', address: 'Polna', region: 'lodzkie', lat: 51.7, lng: 19.4, photo: 'assets/pasieka.webp', products: [{type: 'lipowy', name: 'Miód lipowy'}]};
  function client(entries = []) {
    const storage = new Map(entries);
    const context = vm.createContext({
      fetch: (url, options) => fetch(base + url, options),
      AbortSignal, Event, crypto: require('node:crypto').webcrypto,
      location: {protocol: 'http:'}, matchMedia: () => ({matches: false}),
      document: {addEventListener() {}, dispatchEvent() {}},
      localStorage: {getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key)}
    });
    vm.runInContext(fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8') + '\nnotify = () => {};', context);
    return {run: code => vm.runInContext(code, context), storage};
  }
  try {
    const owner = client([['miodna-mapa-v2-apiaries', JSON.stringify([legacy])]]), visitor = client();
    await owner.run('refreshApiaries()');
    await owner.run('migrateApiaries()');
    assert.equal(owner.storage.has('miodna-mapa-v2-apiaries'), false);
    await visitor.run('refreshApiaries()');
    assert.equal(visitor.run('customApiaries[0].name'), legacy.name);
    assert.equal(visitor.run('ownedApiaries().length'), 0);
    assert.equal(owner.run('ownedApiaries().length'), 1);
    await owner.run("saveApiary({...customApiaries[0], name: 'Nowa nazwa'}, true, 1)");
    await visitor.run('refreshApiaries()');
    assert.equal(visitor.run('customApiaries[0].name'), 'Nowa nazwa');
    await assert.rejects(visitor.run('deleteApiary(customApiaries[0])'), /własne/);
    await owner.run('deleteApiary(customApiaries[0])');
    await visitor.run('refreshApiaries()');
    assert.equal(visitor.run('customApiaries.length'), 0);
    const damaged = client([['miodna-mapa-v2-apiaries', 'bad json']]);
    await damaged.run('migrateApiaries()');
    assert.equal(damaged.storage.get('miodna-mapa-v2-apiaries'), 'bad json');
  } finally {
    await new Promise(resolve => server.close(resolve));
    fs.rmSync(directory, {recursive: true});
  }
});

test('wspólny zapis, uprawnienia, konflikty, restart i walidacja', async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'pasieki-test-'));
  let handler = createApi(directory);
  const server = http.createServer((req, res) => handler(req, res, new URL(req.url, 'http://localhost').pathname));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  async function request(method, suffix = '', body, key = 'a'.repeat(64)) {
    const response = await fetch(base + '/api/pasieki' + suffix, {method, headers: {'X-Apiary-Key': key, 'Content-Type': 'application/json'}, ...(body ? {body: JSON.stringify(body)} : {})});
    return {status: response.status, data: await response.json()};
  }
  const a = {id: 'local-test', name: 'Pasieka Żółta', beekeeper: 'Łukasz', city: 'Łódź', address: 'Polna 1', region: 'lodzkie', phone: '', email: '', wni: '', description: 'Świeży miód', lat: 51.7, lng: 19.4, photo: 'assets/pasieka.webp', products: [{type: 'faceliowy', name: 'Miód faceliowy'}]};
  try {
    assert.equal((await request('POST', '', a)).status, 200);
    const publicView = await request('GET', '', null, '');
    assert.equal(publicView.data.apiaries[0].name, a.name);
    assert.deepEqual(publicView.data.ownedIds, []);
    assert.equal(JSON.stringify(publicView.data).includes('owners'), false);
    assert.deepEqual((await request('GET')).data.ownedIds, [a.id]);
    assert.equal((await request('PUT', '/'+a.id, {...a, revision: 1}, 'b'.repeat(64))).status, 403);
    assert.equal((await request('DELETE', '/'+a.id, {revision: 1}, 'b'.repeat(64))).status, 403);
    const updates = await Promise.all(['Nowa nazwa', 'Inna nazwa'].map(name => request('PUT', '/'+a.id, {...a, name, revision: 1})));
    assert.deepEqual(updates.map(r=>r.status).sort(), [200, 409]);
    assert.equal((await request('POST', '', {...a, id:'local-invalid', lat: 999})).status, 400);
    assert.equal((await request('POST', '', {...a, id:'local-anonymous'}, '')).status, 401);
    const creates = await Promise.all(['local-first', 'local-second'].map(id => request('POST', '', {...a, id})));
    assert.ok(creates.every(r=>r.status===200));
    handler = createApi(directory);
    assert.equal((await request('GET')).data.apiaries.length, 3);
    assert.equal((await request('DELETE', '/'+a.id, {revision: 1})).status, 409);
    assert.equal((await request('DELETE', '/'+a.id, {revision: 2})).status, 200);
    assert.equal((await request('GET', '', null, '')).data.apiaries.length, 2);
    const persisted = JSON.parse(fs.readFileSync(path.join(directory, 'pasieki.json'), 'utf8'));
    assert.equal(persisted.apiaries.length, 2);
    assert.equal(persisted.owners[a.id], undefined);
    fs.writeFileSync(path.join(directory, 'pasieki.json'), 'uszkodzone dane');
    assert.throws(() => createApi(directory));
    assert.equal(fs.readFileSync(path.join(directory, 'pasieki.json'), 'utf8'), 'uszkodzone dane');
  } finally {
    await new Promise(resolve => server.close(resolve));
    fs.rmSync(directory, {recursive: true});
  }
});
