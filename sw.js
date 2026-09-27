/* Hockey Bench Manager service worker — netwerk eerst, cache als terugval */
const CACHE = "hbm-3.0.0";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./apple-touch-icon-v5.png", "./favicon-16-v5.png", "./favicon-32-v5.png",
  "./favicon-64-v5.png", "./icon-192-v5.png", "./icon-512-v5.png"];
/* Firebase-bestanden van Google: vaste versie, dus ze veranderen nooit */
const FB = "https://www.gstatic.com/firebasejs/12.19.0/";
const FB_FILES = [FB + "firebase-app.js", FB + "firebase-auth.js", FB + "firebase-firestore.js"];

/* geen skipWaiting hier: de app beslist zelf wanneer ze overschakelt,
   zodat er nooit midden in een wedstrijd herladen wordt */
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c =>
    c.addAll(ASSETS).catch(() => {})
      .then(() => Promise.all(FB_FILES.map(u => c.add(u).catch(() => {}))))
  ));
});

self.addEventListener("message", e => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  /* Firebase-bestanden: eerst uit de cache (vaste versie) */
  if (req.url.startsWith(FB)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
        return r;
      }))
    );
    return;
  }

  /* al het andere van buiten deze site (aanmelden, databank) nooit aanraken */
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(r => {
        if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
        return r;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
