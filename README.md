# PWA-scripts
Small scripts related to PWA or service worker to help improving site performance, loading speed, caching etc.

##### Cached First Strategy for PWA site: (sw-cachedFirst.js)
 - always check for file from cache first
 - faster performance, reduce server load, work offline better
 - new files will be updated later in background, then we can prompt user to refresh or we can update the new part in our app automatically.
