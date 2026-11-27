self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('btech-planner-v1').then((cache) =>
      cache.addAll([
        '/B.Tech-CGPA-and-Student-Attendance-Calculator/',
        '/B.Tech-CGPA-and-Student-Attendance-Calculator/index.html'
      ])
    )
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
