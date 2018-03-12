const cacheName = 'myCache';

self.onfetch = (event) => {
  const request = event.request,
        networkResponsePromise = fetch(request).catch(() => {}),
        cachedResponsePromise = caches.match(request);
        
  event.respondWith(async function() {
    const cacheResponse = await cachedResponsePromise;
    if (cacheResponse) // always serve files from cache first
      return cacheResponse;
      
    const networkResponse = await networkResponsePromise;
    if (networkResponse) // load file from server if there's no files in cache yet
      return networkReponse.clone();
      
    throw new Error(`There's no such file in cache or network for ${request.url}`);
  }());
  
  event.waitUntil(async function() { // Fetch new files from server later to update the caches
    const networkResponse = await networkResponsePromise;
    if (networkResponse)
      cache.put(request, networkResponse.clone());
  }());
};
