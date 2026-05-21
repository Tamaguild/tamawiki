/*const CACHE_NAME = "tamawiki-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/data.js",
  "/general/textures/icons/orby.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("SW registered"))
      .catch(err => console.log("SW error:", err));
  });
}*/