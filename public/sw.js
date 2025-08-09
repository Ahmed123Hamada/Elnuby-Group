const CACHE_NAME = 'elnuby-website-v1';
const STATIC_CACHE = 'elnuby-static-v1';
const DYNAMIC_CACHE = 'elnuby-dynamic-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/')
        .then(response => response || fetch(request))
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Handle other requests with cache-first strategy for static assets
  if (request.url.includes('/static/')) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request).then(fetchResponse => {
            const responseClone = fetchResponse.clone();
            caches.open(STATIC_CACHE)
              .then(cache => cache.put(request, responseClone));
            return fetchResponse;
          });
        })
    );
    return;
  }

  // Handle images with cache-first strategy
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request).then(fetchResponse => {
            const responseClone = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, responseClone));
            return fetchResponse;
          });
        })
        .catch(() => {
          // Fallback for images
          return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image</text></svg>', {
            headers: { 'Content-Type': 'image/svg+xml' }
          });
        })
    );
    return;
  }

  // Default network-first strategy for other requests
  event.respondWith(
    fetch(request)
      .then(response => {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then(cache => cache.put(request, responseClone));
        return response;
      })
      .catch(() => caches.match(request))
  );
});