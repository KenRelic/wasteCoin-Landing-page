const filesToCache = [
  '/',
  'index.html',
  './privacy-policy.html',
  './terms-of-service.html',
  './get-app.html',
  'css/privacy.css',
  'js/main.js',
  'css/all.css',
  'js/wow.min.js',
  './favicon.ico',
  'img/bg1.SVG',
  'img/art1.SVG',
  'img/art2.SVG',
  'img/art3.SVG',
  'img/art4.SVG',
  'img/wallet.svg',
  'img/flow1.svg',
  'img/flow2.SVG',
  'img/flow3.SVG',
  'img/bg-illustration.webp',
  'img/phone.svg',
  'img/logo.svg',
  'img/email.png',
  'img/twitter.png',
  'img/instagram.png',
  'img/bg-img.webp',
  'manifest.json',
  // 'webfonts/fa-solid-900.eot',
  // 'webfonts/fa-solid-900.svg',
  // 'webfonts/fa-solid-900.ttf',
  // 'webfonts/fa-solid-900.woff',
  'webfonts/fa-solid-900.woff2',
  'webfonts/fa-brands-400.woff2'
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