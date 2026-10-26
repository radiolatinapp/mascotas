/* PetNear — service worker mínimo (v10.15).
   Solo same-origin, network-first con fallback a caché.
   NO intercepta teselas ni APIs externas (CARTO/OpenFreeMap/Overpass/OSRM/Firebase). */
const CACHE='petnear-v115';
const NUCLEO=['./','index.html','manifest.json','icono-192.png','icono-512.png',
 'vendor/maplibre-gl.css','vendor/maplibre-gl.js',
 'datos-ibague.js','datos-charlotte.js','datos-colombia.js','datos-usa.js','datos-usa-extra.js','datos-usa-noreste.js','datos-usa-sureste.js','datos-usa-medioeste.js','datos-usa-surcentral.js','datos-usa-montana.js','datos-usa-pacifico.js','datos-europa.js','datos-latam.js','datos-canada.js',
 'mascota/gstop.png','mascota/g1.png','mascota/g2.png','mascota/g3.png','mascota/g4.png',
 'mascota/avatares/pug-negro.png','mascota/avatares/naranja-peludo.png','mascota/avatares/husky.png','mascota/avatares/dorado.png','mascota/avatares/negro-marron.png','mascota/avatares/dalmata.png','mascota/avatares/chihuahua.png','mascota/avatares/boxer.png','mascota/avatares/bulldog-frances.png','mascota/avatares/canela-claro.png','mascota/avatares/dalmata-bebe.png','mascota/avatares/beagle.png','mascota/avatares/basset.png','mascota/avatares/salchicha-negro.png','mascota/avatares/rottweiler-bebe.png','mascota/avatares/bulldog-blanco.png','mascota/avatares/beagle-marron.png','mascota/avatares/cocker-dorado.png','mascota/avatares/pastor-bebe.png','mascota/avatares/cachorro-crema.png','mascota/avatares/blanco-gris.png','mascota/avatares/manchas-negras.png','mascota/avatares/boxer-canela.png','mascota/avatares/negro-blanco.png','mascota/avatares/beagle-tricolor.png','mascota/avatares/blanco-ojos-azules.png','mascota/avatares/yorkie-mono.png','mascota/avatares/terrier-cafe.png','mascota/avatares/dalmata-ojos-azules.png'];
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
