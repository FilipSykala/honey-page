'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

module.exports = function createApi(directory) {
  fs.mkdirSync(directory, { recursive: true });
  const filename = path.join(directory, 'pasieki.json');
  if (!fs.existsSync(filename)) fs.writeFileSync(filename, '{"apiaries":[],"owners":{}}\n', { flag: 'wx' });
  // Fail at startup if the store is damaged; never replace existing data with an empty list.
  const read = () => {
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if (!Array.isArray(data.apiaries) || !data.owners || typeof data.owners !== 'object') throw Error('Niepoprawny plik danych pasiek.');
    return data;
  };
  read();
  const reply = (res, status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    res.end(JSON.stringify(body));
  };
  const productTypes = new Set(['lipowy', 'gryczany', 'wielokwiatowy', 'akacjowy', 'rzepakowy', 'spadziowy', 'wrzosowy', 'faceliowy', 'mniszkowy', 'nawlociowy', 'malinowy', 'pylek', 'pierzga', 'propolis', 'wosk', 'swiece']);
  function validate(a) {
    if (!a || !/^local-[a-zA-Z0-9-]{1,100}$/.test(a.id)) throw Error('Niepoprawny identyfikator pasieki.');
    const result = { id: a.id, demo: false, rating: null, reviews: [] };
    for (const field of ['name', 'city', 'beekeeper', 'address', 'region', 'phone', 'email', 'wni', 'description']) {
      if (typeof a[field] !== 'string' || a[field].length > (field === 'description' ? 10000 : 500)) throw Error('Niepoprawne pole: ' + field);
      result[field] = a[field].trim();
    }
    if (!result.name || !result.city || !result.beekeeper) throw Error('Uzupełnij nazwę, miejscowość i pszczelarza.');
    const regions = ['dolnoslaskie', 'kujawsko-pomorskie', 'lubelskie', 'lubuskie', 'lodzkie', 'malopolskie', 'mazowieckie', 'opolskie', 'podkarpackie', 'podlaskie', 'pomorskie', 'slaskie', 'swietokrzyskie', 'warminsko-mazurskie', 'wielkopolskie', 'zachodniopomorskie'];
    if (!regions.includes(result.region)) throw Error('Niepoprawne województwo.');
    if (!Number.isFinite(a.lat) || a.lat < 49 || a.lat > 55 || !Number.isFinite(a.lng) || a.lng < 14 || a.lng > 24.2) throw Error('Niepoprawna lokalizacja.');
    result.lat = a.lat; result.lng = a.lng;
    for (const field of ['shipping', 'pickup', 'bio', 'workshops', 'wandering']) result[field] = a[field] === true;
    if (!Array.isArray(a.products) || a.products.length > 30 || !a.products.every(p => p && productTypes.has(p.type) && typeof p.name === 'string' && p.name.length <= 500)) throw Error('Niepoprawne produkty.');
    result.products = a.products.map(p => ({ type: p.type, name: p.name }));
    if (typeof a.photo !== 'string' || a.photo.length > 2 * 1024 * 1024 || !/^(assets\/[a-z-]+\.webp|data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+)$/.test(a.photo)) throw Error('Niepoprawne lub zbyt duże zdjęcie.');
    result.photo = a.photo;
    return result;
  }
  return async function api(req, res, pathname) {
    const token = req.headers['x-apiary-key'];
    const owner = typeof token === 'string' && /^[a-f0-9]{64}$/.test(token) ? crypto.createHash('sha256').update(token).digest('hex') : null;
    try {
      if (req.method === 'GET' && pathname === '/api/pasieki') {
        const data = read();
        return reply(res, 200, { apiaries: data.apiaries, ownedIds: data.apiaries.filter(a => owner && data.owners[a.id] === owner).map(a => a.id) });
      }
      if (!['POST', 'PUT', 'DELETE'].includes(req.method)) return reply(res, 405, { error: 'Niedozwolona metoda.' });
      if (!owner) return reply(res, 401, { error: 'Brak klucza do zapisu pasieki.' });
      if (req.headers.origin && new URL(req.headers.origin).host !== req.headers.host) return reply(res, 403, { error: 'Niedozwolone źródło żądania.' });
      const chunks = []; let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 3 * 1024 * 1024) { reply(res, 413, { error: 'Zdjęcie lub wpis jest zbyt duży.' }); return; }
        chunks.push(chunk);
      }
      let body;
      try { body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch { return reply(res, 400, { error: 'Niepoprawne dane JSON.' }); }
      const id = pathname === '/api/pasieki' ? body.id : pathname.slice('/api/pasieki/'.length);
      if (!/^local-[a-zA-Z0-9-]{1,100}$/.test(id)) return reply(res, 400, { error: 'Niepoprawny identyfikator.' });
      // Read and atomically replace synchronously after receiving the body, so concurrent requests cannot lose another write.
      const data = read();
      const index = data.apiaries.findIndex(a => a.id === id);
      if (req.method === 'POST') {
        if (pathname !== '/api/pasieki') return reply(res, 404, { error: 'Nie znaleziono adresu.' });
        if (index !== -1) return reply(res, 409, { error: 'Pasieka o tym identyfikatorze już istnieje.' });
      } else {
        if (index === -1) return reply(res, 404, { error: 'Pasieka już nie istnieje.' });
        if (data.owners[id] !== owner) return reply(res, 403, { error: 'Możesz zmieniać tylko własne pasieki.' });
        if (body.revision !== data.apiaries[index].revision) return reply(res, 409, { error: 'Wpis zmienił się w międzyczasie. Otwórz ponownie edycję aktualnego wpisu.' });
      }
      if (req.method === 'DELETE') {
        data.apiaries.splice(index, 1); delete data.owners[id];
      } else {
        let a;
        try { a = validate(body); } catch (error) { return reply(res, 400, { error: error.message }); }
        if (a.id !== id) return reply(res, 400, { error: 'Identyfikator nie zgadza się z adresem.' });
        a.revision = index === -1 ? 1 : data.apiaries[index].revision + 1;
        a.updatedAt = new Date().toISOString();
        if (index === -1) data.apiaries.unshift(a); else data.apiaries[index] = a;
        data.owners[id] = owner;
      }
      fs.writeFileSync(filename + '.tmp', JSON.stringify(data, null, 2) + '\n');
      fs.renameSync(filename + '.tmp', filename);
      return reply(res, 200, { ok: true });
    } catch (error) {
      console.error('Błąd danych pasiek:', error.message);
      reply(res, 500, { error: 'Nie udało się odczytać lub zapisać danych na serwerze.' });
    }
  };
};
