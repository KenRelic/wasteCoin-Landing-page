const filesToCache = [
  '/',
  // 'index.html',
  './privacy-policy.html',
  './terms-of-service.html'
  // 'css/style.css',
  // 'css/all.css',
  // 'js/wow.js',
  // 'img/bg.webp',
  // 'img/bg-1.webp',
  // 'img/bg-2.webp',
  // 'img/bg-3.webp',
  // 'img/bg-illustration.webp',
  // 'img/logo.png',
  // 'img/email.png',
  // 'img/twitter.png',
  // 'img/footer-logo.png',
  // 'img/instagram.png',
  // 'img/bg-img.webp',
  // 'manifest.json',
  // 'webfonts/fa-solid-900.eot',
  // 'webfonts/fa-solid-900.svg',
  // 'webfonts/fa-solid-900.ttf',
  // 'webfonts/fa-solid-900.woff',
  // 'webfonts/fa-solid-900.woff2'
];

const staticCacheName = 'wastecoin-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)

          .then(response => {
            return caches.open(staticCacheName).then(cache => {
              cache.put(event.request.url, response.clone());
              return response;
            });
          });

      }).catch(error => {
        //offline page
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [staticCacheName];

  self.skipWaiting();
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});