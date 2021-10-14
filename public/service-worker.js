console.log('service-worker.js file')

// variable array for urls - files to cache
const urls = [
 '/',
 '/db.js',
 '/index.html',
 '/index.js',
 'styles.css',
 '/manifest.json',
 '/icons/icon-192-192.png'
]

// event listener
self.addEventListener('install', event => {
 event.waitUntil(
  // static cache
  caches.open('budget-item-cache-v1')
   .then(cache => cache.addAll(urls))
 )
})

self.addEventListener('fetch', event => {

 if (event.request.url.includes('/api/')) {
  // open the budget item data cache
  event.respondWith(
   caches.open('budget-item-data-cache-v1').then(cache => {
    // return event request
    return fetch(event.request)
     .then(res => {
      if (res.status === 200) {
       cache.put(event.request.url, res.clone())
      }
      return res
     })
     // catch error
     .catch(err => cache.match(event.request))
   })
  )
  return
 }

 event.respondWith(fetch(event.request)
 // catch error
   .catch(err => {
    console.log(err)
    return caches.match(event.request).then(match => {
     if (match) {
      return match
     } else if (event.request.headers.get('accept').includes('text/html')) {
      return caches.match('/')
     }
    })
   })
 )
})