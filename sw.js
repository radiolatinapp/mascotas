/* PetNear — service worker (v10.17; corrección auditoría PN-13 / PN-14 / PN-27).
   Solo same-origin. NO intercepta teselas ni APIs externas
   (CARTO/OpenFreeMap/Overpass/OSRM/Firebase).
   - PN-13: precaché mínima del app shell, por recurso y con registro de
     fallos (nunca aborta la instalación). Datos regionales (datos-*.js)
     y avatares (mascota/*) NO van en precaché: se cachean bajo demanda.
   - PN-14: estrategias separadas por ruta; solo se cachean respuestas
     r.ok, same-origin, no privadas y dentro del tamaño límite. Nada de
     404/500, nada privado, nada enorme. Límite de entradas y de edad.
   - PN-27: mismo nombre de caché (petnear-v117
     a v117 al integrar). skipWaiting()/clients.claim() se mantienen,
     pero la activación limpia primero TODAS las cachés viejas
     (petnear-v*) y solo después reclama los clientes, para no mezclar
     versiones entre pestañas. */
const CACHE = 'petnear-v119';
const CACHE_PREFIX = 'petnear-v';

/* PN-13 — app shell mínimo: solo lo imprescindible para abrir la app
   sin red. Sin datos regionales, sin avatares. */
const SHELL = [
  './',
  'index.html',
  'firebase.js', /* imprescindible: sin él la app no arranca offline (fbConfigEfectiva is not defined) — hallazgo verificación v10.17, 1ª visita offline */
  'manifest.json',
  'icono-192.png',
  'icono-512.png',
  'vendor/maplibre-gl.css',
  'vendor/maplibre-gl.js'
];

/* PN-14 — límites de la caché. */
const MAX_ENTRIES = 150;                    /* entradas máx. (shell + bajo demanda) */
const MAX_AGE_MS = 7 * 24 * 3600 * 1000;    /* 7 días: pasado ese plazo se revalida */
const MAX_ENTRY_BYTES = 10 * 1024 * 1024;   /* 10 MiB por respuesta cacheable */
const HTML_TIMEOUT_MS = 4000;               /* network-first con timeout para HTML */

/* ¿Esta respuesta puede guardarse? Solo r.ok, same-origin (type 'basic'),
   sin directivas privadas y dentro del tamaño límite. */
function cacheableResponse(r) {
  if (!r || !r.ok) return false;
  if (r.type !== 'basic') return false; /* opaco o de otro origen: no */
  const cc = (r.headers.get('cache-control') || '').toLowerCase();
  if (cc.indexOf('no-store') !== -1 || cc.indexOf('private') !== -1) return false;
  const len = r.headers.get('content-length');
  if (len !== null && Number(len) > MAX_ENTRY_BYTES) return false;
  return true;
}

/* ¿La respuesta cacheada sigue fresca? Usa su cabecera Date. */
function isFresh(r) {
  if (!r) return false;
  const d = r.headers.get('date');
  if (!d) return true; /* sin fecha no se puede juzgar: se trata como fresca */
  return (Date.now() - Date.parse(d)) < MAX_AGE_MS;
}

/* PN-14 — poda por número de entradas: se borran las más antiguas. */
function trimCache(cache) {
  return cache.keys().then(function (keys) {
    if (keys.length <= MAX_ENTRIES) return;
    const sobran = keys.slice(0, keys.length - MAX_ENTRIES);
    return Promise.all(sobran.map(function (k) { return cache.delete(k); }));
  }).catch(function () {});
}

/* Guarda si es cacheable; si no, lo registra y no guarda nada. */
function putIfCacheable(cache, request, response) {
  if (!cacheableResponse(response)) {
    console.warn('[sw] no cacheado (HTTP ' + response.status +
      ', tipo ' + response.type + '):', request.url);
    return Promise.resolve(false);
  }
  return cache.put(request, response.clone()).then(function () {
    return trimCache(cache).then(function () { return true; });
  }).catch(function (err) {
    console.warn('[sw] no se pudo guardar en caché:', request.url, err && err.message);
    return false;
  });
}

/* PN-13 — instalación por recurso: cada archivo se añade con su propio
   catch y se REGISTRA el fallo (console.warn) sin abortar la instalación.
   Un 404 en un recurso ya no tira abajo toda la precaché. */
self.addEventListener('install', function (e) {
  e.waitUntil((async function () {
    const cache = await caches.open(CACHE);
    let ok = 0;
    await Promise.all(SHELL.map(async function (url) {
      try {
        const res = await fetch(url, { cache: 'reload' });
        if (!res.ok) {
          console.warn('[sw] precaché omitida (HTTP ' + res.status + '):', url);
          return;
        }
        if (!cacheableResponse(res)) {
          console.warn('[sw] precaché omitida (no cacheable):', url);
          return;
        }
        await cache.put(url, res);
        ok++;
      } catch (err) {
        console.warn('[sw] precaché fallida:', url, err && err.message);
      }
    }));
    console.info('[sw] precaché shell: ' + ok + '/' + SHELL.length +
      ' recursos en ' + CACHE);
  })());
  self.skipWaiting();
});

/* PN-27 — activación segura: primero se borran TODAS las cachés viejas
   de PetNear (cualquier petnear-v* distinto de la actual) y solo cuando
   la limpieza termina se reclama a los clientes. Así ninguna pestaña
   queda sirviendo una mezcla de versión vieja y nueva. */
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      const viejas = keys.filter(function (k) {
        return k !== CACHE && k.indexOf(CACHE_PREFIX) === 0;
      });
      return Promise.all(viejas.map(function (k) {
        console.info('[sw] borrando caché vieja:', k);
        return caches.delete(k);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* PN-27 — protocolo de activación controlada: la página puede pedirle al
   worker en espera que se active (mensaje 'SKIP_WAITING') en vez de
   depender solo del skipWaiting() inmediato de install. */
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

/* PN-14 — fetch con estrategias separadas por ruta. */
self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== self.location.origin) return; /* solo same-origin */
  if (req.headers.has('range')) return; /* rangos (vídeo/audio): no tocar */

  const esHtml = req.mode === 'navigate' || req.destination === 'document' ||
    u.pathname === '/' || u.pathname.endsWith('/') ||
    u.pathname.endsWith('.html') || u.pathname.endsWith('.htm');
  const esEstatico = !esHtml && (
    req.destination === 'script' || req.destination === 'style' ||
    req.destination === 'image' || req.destination === 'font' ||
    /\.(js|css|png|jpg|jpeg|webp|svg|ico|json|woff2?|mp4|webm)$/i.test(u.pathname));

  /* HTML: network-first con timeout; si la red falla o tarda, caché. */
  if (esHtml) {
    e.respondWith((async function () {
      const cache = await caches.open(CACHE);
      try {
        const ctrl = new AbortController();
        const t = setTimeout(function () { ctrl.abort(); }, HTML_TIMEOUT_MS);
        let res;
        try {
          res = await fetch(req, { signal: ctrl.signal });
        } finally {
          clearTimeout(t);
        }
        if (res.ok) putIfCacheable(cache, req, res);
        return res;
      } catch (err) {
        const enCache = await cache.match(req, { ignoreSearch: true }) ||
          await cache.match('index.html') || await cache.match('./');
        if (enCache) return enCache;
        return new Response(
          '<!doctype html><title>PetNear sin conexión</title>' +
          '<h1>PetNear</h1><p>Sin conexión y sin copia guardada. ' +
          'Vuelve a intentarlo con internet.</p>',
          { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }
    })());
    return;
  }

  /* Estáticos versionados (js/css/png/datos-*.js/mascota/*...):
     stale-while-revalidate. Si la copia cacheada caducó (>7 días),
     se trata como si no existiera y se va a la red. */
  if (esEstatico) {
    e.respondWith((async function () {
      const cache = await caches.open(CACHE);
      const enCache = await cache.match(req);
      const revalidar = fetch(req).then(function (res) {
        putIfCacheable(cache, req, res);
        return res;
      }).catch(function (err) {
        console.warn('[sw] revalidación fallida:', req.url, err && err.message);
        return null;
      });
      if (enCache && isFresh(enCache)) {
        e.waitUntil(revalidar);
        return enCache;
      }
      try {
        const res = await revalidar;
        if (res && res.ok) return res;
      } catch (err) { /* cae al fallback de caché */ }
      if (enCache) return enCache; /* copia vieja antes que nada */
      return new Response(null, { status: 504, statusText: 'Sin conexión' });
    })());
    return;
  }

  /* Resto de GET same-origin: network-first con fallback a caché,
     cacheando solo respuestas válidas (putIfCacheable lo verifica). */
  e.respondWith((async function () {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req);
      if (res.ok) putIfCacheable(cache, req, res);
      return res;
    } catch (err) {
      const enCache = await cache.match(req);
      if (enCache) return enCache;
      throw err;
    }
  })());
});
