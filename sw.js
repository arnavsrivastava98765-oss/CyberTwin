// CyberTwin Max - Offline PWA Service Worker
const CACHE_NAME = 'cybertwin-v5.5-enterprise-suite';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './assets/dazy_chibi.jpg',
  './assets/dazy_chibi_scared.jpg',
  './assets/dazy_chibi_shield.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Let external API queries (XposedOrNot, HaveIBeenPwned) pass through to network
  if (e.request.url.includes('api.xposedornot.com') || e.request.url.includes('api.pwnedpasswords.com')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResp) => {
      return (
        cachedResp ||
        fetch(e.request).catch(() => {
          if (e.request.destination === 'document') {
            return caches.match('./index.html');
          }
        })
      );
    })
  );
});
