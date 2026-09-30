/* Hockey Bench Manager service worker
   Eigen bestanden: eerst uit de cache (snel opstarten, ook met slecht bereik aan het veld).
   Een nieuwe versie komt binnen via een nieuwe sw.js, met een nieuwe cache. */
const CACHE = "hbm-3.3.1";
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
    /* cache: "reload" = voorbij de browsercache, zodat de nieuwe versie echt nieuw is */
    Promise.all(ASSETS.map(u => fetch(new Request(u, { cache: "reload" }))
        .then(r => r.ok ? c.put(u, r) : null).catch(() => {})))
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

function fromNet(req, key) {
  return fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(key || req, copy)).catch(() => {}); }
    return r;
  });
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (req.url.startsWith(FB)) {
    e.respondWith(caches.match(req).then(hit => hit || fromNet(req)));
    return;
  }
  /* al het andere van buiten deze site (aanmelden, databank) nooit aanraken */
  if (url.origin !== self.location.origin) return;

  /* de pagina zelf (ook met ?code=...) altijd als index.html uit de cache */
  const scopePath = new URL(self.registration.scope).pathname;
  if (req.mode === "navigate" && (url.pathname === scopePath || url.pathname === scopePath + "index.html")) {
    e.respondWith(
      caches.match("./index.html").then(hit => hit || fromNet(req, "./index.html"))
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fromNet(req))
      .catch(() => caches.match("./index.html"))
  );
});
