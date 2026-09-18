// Serwer strony i wspólnego zapisu pasiek. Uruchamiaj jedną instancję dla jednego folderu danych.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { execFile } = require('node:child_process');

const root = __dirname;
const port = Number(process.env.PORT || 8765);
const host = process.env.HOST || '0.0.0.0';
const address = 'http://127.0.0.1:' + port;
const api = require('./pasieki-api.cjs')(process.env.APIARY_DATA_DIR || path.join(root, 'dane-pasiek'));
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, address).pathname);
  } catch {
    response.writeHead(400);
    response.end('Niepoprawny adres.');
    return;
  }

  if (pathname === '/api/pasieki' || pathname.startsWith('/api/pasieki/')) {
    api(request, response, pathname);
    return;
  }
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, {Allow: 'GET, HEAD'}); response.end(); return;
  }
  // Serve only public site files; the store contains private ownership hashes.
  const publicPath = pathname.endsWith('/') ? pathname + 'index.html' : pathname;
  if (!(/^\/[a-z0-9-]+\.html$/.test(publicPath) || ['/script.js', '/style.css', '/dane-pasiek/przykladowe.json'].includes(publicPath) || /^\/(assets|vendor)\/[a-zA-Z0-9_./-]+$/.test(publicPath)) || publicPath.split('/').some(part => part.startsWith('.'))) {
    response.writeHead(404); response.end('Nie znaleziono pliku.'); return;
  }
  const filename = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
  if (!filename.startsWith(root + path.sep)) {
    response.writeHead(403);
    response.end();
    return;
  }

  fs.readFile(filename, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end('Nie znaleziono pliku.');
      return;
    }
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filename)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-cache'
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  });
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? 'Port 8765 jest zajety. Zamknij poprzedni podglad strony i uruchom ponownie.'
    : 'Nie mozna uruchomic podgladu: ' + error.message);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log('Miodna Mapa: ' + address);
  console.log('Pozostaw to okno otwarte. Aby zakonczyc, nacisnij Ctrl+C.');
  if (process.platform === 'win32' && process.env.NO_OPEN !== '1') {
    execFile('cmd.exe', ['/c', 'start', '', address], { windowsHide: true }, () => {});
  }
});
