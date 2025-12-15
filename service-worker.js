const CACHE_NAME = 'prime-math-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    // Add your local image filenames here if you want them cached offline
    // e.g., './your-image.png', './your-logo.png'
];

// Install Event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
    );
});

// Fetch Event (Offline Capability)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                // Return cached response if found, otherwise fetch from network
                return response || fetch(e.request);
            })
    );
});s