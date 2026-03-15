// ─── Anonymo AI — Service Worker ───
// Author: Chris Montgomery | ORCID: 0009-0009-5364-249X
// Copyright © 2025–2026

const CACHE_NAME = 'anonymo-ai-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala e faz cache dos arquivos essenciais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Estratégia: Cache First, fallback para rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        // Armazena novas requisições no cache
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      // Offline fallback: retorna index.html
      return caches.match('./index.html');
    })
  );
});
