/* Mascotas cerca de ti — service worker mínimo (v10.5).
   Solo same-origin, network-first con fallback a caché.
   NO intercepta teselas ni APIs externas (CARTO/OpenFreeMap/Overpass/OSRM/Firebase). */
const CACHE='mascotas-v105';
const NUCLEO=['./','index.html','manifest.json','icono-192.png','icono-512.png',
 'vendor/maplibre-gl.css','vendor/maplibre-gl.js',
 'datos-ibague.js','datos-charlotte.js','datos-colombia.js','datos-usa.js',
 'mascota/gstop.png','mascota/g1.png','mascota/g2.png','mascota/g3.png','mascota/g4.png',
 'mascota/avatares/pug-negro.png','mascota/avatares/naranja-peludo.png','mascota/avatares/husky.png','mascota/avatares/dorado.png','mascota/avatares/negro-marron.png','mascota/avatares/dalmata.png','mascota/avatares/chihuahua.png','mascota/avatares/boxer.png','mascota/avatares/bulldog-frances.png','mascota/avatares/canela-claro.png','mascota/avatares/dalmata-bebe.png','mascota/avatares/beagle.png','mascota/avatares/basset.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(NUCLEO)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return; /* solo same-origin */
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{
    const c=r.clone();
    caches.open(CACHE).then(cc=>cc.put(e.request,c)).catch(()=>{});
    return r;
  }).catch(()=>caches.match(e.request)));
});
