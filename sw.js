// Service Worker for NP CPD Logger - Offline-First PWA
// Enables offline functionality and intelligent caching

const CACHE_NAME = 'np-cpd-logger-v1';
const RUNTIME_CACHE = 'np-cpd-runtime-v1';
const CRITICAL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.min.js',
  'https://cdn.tailwindcss.com'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  console.log('[SW] Install event');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching critical assets');
      return cache.addAll(CRITICAL_ASSETS).catch(err => {
        console.warn('[SW] Some assets failed to cache (expected for CDNs):', err);
        // Silently fail - CDNs may not be cacheable immediately
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement offline-first strategy with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Don't cache certain requests (external APIs, etc.)
  if (url.hostname !== location.hostname && !CRITICAL_ASSETS.includes(request.url)) {
    return;
  }

  // Strategy: Cache First for static assets, Network First for everything else
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

// Cache First strategy: check cache first, fall back to network
function cacheFirst(request) {
  return caches.match(request).then(response => {
    if (response) {
      console.log('[SW] Cache hit:', request.url);
      return response;
    }

    return fetch(request).then(response => {
      // Cache successful responses
      if (response && response.status === 200) {
        const responseClone = response.clone();
        caches.open(RUNTIME_CACHE).then(cache => {
          cache.put(request, responseClone);
        });
      }
      return response;
    }).catch(error => {
      console.log('[SW] Network error, returning offline fallback:', request.url);
      // Return offline fallback if available
      return caches.match(request).then(r => r || new Response('Offline - asset not cached', { status: 503 }));
    });
  });
}

// Network First strategy: try network, fall back to cache
function networkFirst(request) {
  return fetch(request).then(response => {
    // Cache successful responses
    if (response && response.status === 200) {
      const responseClone = response.clone();
      caches.open(RUNTIME_CACHE).then(cache => {
        cache.put(request, responseClone);
      });
    }
    return response;
  }).catch(error => {
    console.log('[SW] Network failed, checking cache:', request.url);
    return caches.match(request).then(response => {
      if (response) {
        return response;
      }
      // Return offline page or error response
      return new Response('Offline - please check your connection', { status: 503 });
    });
  });
}

// Determine if a URL is a static asset (JS, CSS, images)
function isStaticAsset(url) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.svg', '.gif', '.woff2', '.woff', '.ttf'];
  return staticExtensions.some(ext => url.endsWith(ext));
}

// Background sync for future feature - sync data when online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-cpd-data') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(syncData());
  }
});

// Placeholder for future sync functionality
function syncData() {
  return Promise.resolve();
}

// Message handling - allows app to control cache
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
    });
  }
});

console.log('[SW] Service Worker loaded and ready');
