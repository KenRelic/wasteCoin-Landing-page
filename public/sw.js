const filesToCache = [
  // 'css/privacy.css',
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
  'img/bg-img.webp',
  'img/leaf.svg',
  'webfonts/fa-solid-900.woff2',
  'webfonts/fa-brands-400.woff2'
];

const cacheName = 'wastecoin-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll(filesToCache)
          .then(() => console.log('files added'))
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  );
});

self.addEventListener('activate', event => {
  // console.log('Activating new service worker...');
  const cacheAllowlist = [cacheName];
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

self.addEventListener('fetch', function (event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function (response) {
      // Fall back to network
  
      //  const asset = event.request.url.replace(event.currentTarget.location.origin,'')
      //  if(filesToCache.includes(asset)){
      //    console.log(asset, 'found')
      //  }else if(filesToAlwaysRecache.includes(asset)){
      //    console.log(asset, 'will be recached always')
      //  }   
      
        return response || fetch(event.request)
        .then(response=>{
          // if(filesToAlwaysRecache.includes(asset)){
          //   console.log(asset, 'will be recached always')
          // }
          // console.log(response)
          return response
        });
    }).catch(function () {
      return caches.match('/offline.html');
    })
  );
});
