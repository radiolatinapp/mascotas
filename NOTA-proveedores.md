# PetNear — Inventario de proveedores gratuitos (PN-20, auditoría v10.16)

Fecha: 2026-10-26. Todo gratis, sin claves de pago. Ningún proveedor de esta
lista ofrece SLA: si uno cae, la app degrada con un mensaje honesto y sigue
funcionando; nunca promete lo que no puede cumplir.

## 1. Nominatim — geocodificación (búsqueda de lugares por texto)
- URL: `https://nominatim.openstreetmap.org/search`
- Uso en la app: solo bajo demanda al pulsar Enter sin coincidencia local
  (`buscarLugar()`); el autocompletado al teclear es 100 % local.
- Política oficial (usage policy de Nominatim/OSM): máximo **1 petición por
  segundo** por aplicación; sin autocompletado; se exige `User-Agent` /
  referer identificable en uso intensivo. La app ya respeta 1,1 s entre
  peticiones (`ultimoGeoAt`) y cachea 30 días con tope de 100 entradas (PN-21).
- Fallo: `buscarLugar()` devuelve `[]`; la UI muestra "sin resultados".
  La app no se rompe.
- Atribución: © OpenStreetMap contributors.

## 2. Overpass API — comercios de mascotas por zona (veterinarias, tiendas…)
- URLs (carrera escalonada, gana la primera): 
  `https://overpass-api.de/api/interpreter`,
  `https://overpass.kumi.systems/api/interpreter`,
  `https://overpass.private.coffee/api/interpreter`.
- Uso en la app: `cargarZona()` solo con zoom ≥ 11 y solo fuera de ciudades
  pre-cargadas; bbox limitado a 3° × 3°; `timeout:25` en la consulta;
  `out center 300` (máx. 300 elementos).
- Política: servicio comunitario sin SLA; uso intensivo puede ser limitado
  (429) o bloqueado. Por eso: PN-19 aborta las consultas perdedoras al
  primer éxito, mínimo 1,5 s entre inicios de consulta, y las zonas ya
  cargadas no se vuelven a pedir (`zonasCargadas`).
- Fallo: 1 reintento a los 5 s; después la pill muestra el mensaje de error
  de zona + "Reintentar" (tocable) y el mapa sigue usable con los datos
  locales. La app no se rompe.

## 3. OSRM — cálculo de rutas (carro / a pie / bici)
- URLs (2 hosts alternos, 3 intentos): `https://router.project-osrm.org/`
  y `https://routing.openstreetmap.de/routed-{car|foot|bike}/`.
- Uso en la app: `pedirRuta()` al seleccionar un lugar; reintentos a 1,5 s
  y 3 s alternando host.
- Política: demo pública sin SLA ni garantía de disponibilidad; uso
  razonable (no scraping masivo).
- Fallo: tras 3 intentos se dibuja la ruta recta y se muestra el aviso
  "sin ruta". La app no se rompe.

## 4. Tiles de mapa (MapLibre GL)
- CARTO Voyager (`https://tiles.basemaps.cartocdn.com/.../voyager-gl-style/`):
  estilo ilustrado y actual. Atribución: © OpenStreetMap contributors,
  © CARTO.
- OpenFreeMap (`https://tiles.openfreemap.org/styles/liberty` y
  `/planet/`): estilo 3D. Atribución OSM.
- OSM raster (`https://tile.openstreetmap.org/`): satélite. Política de
  teselas de OSM: uso razonable, sin scraping masivo; aplicaciones con
  mucho tráfico deben usar su propio mirror o un proveedor de teselas.
- Fallo: si un proveedor de teselas cae, el mapa queda vacío en esa vista
  pero la UI, la búsqueda y los datos locales siguen funcionando. Sin SLA.

## 5. Firebase (Google) — Auth anónima + Firestore por REST
- Proyecto `mascotas-cerca-de-ti` (plan Spark, gratuito). La `apiKey` web
  es una clave de cliente pública, no un secreto (PN-29): el riesgo real
  son las reglas, que son trabajo de otro agente de esta corrección.
- Fallo: si Firebase no responde, `fbInit()` devuelve `false` y la app
  trabaja en modo local (localStorage) y lo avisa en el panel.
- Límites del plan gratuito a vigilar: lecturas/escrituras diarias de
  Firestore y cuota de Auth anónima (ver consola de Firebase).

## Resumen de fallbacks (qué ve el usuario cuando algo falla)
| Proveedor | Fallo | Lo que ve el usuario |
|---|---|---|
| Nominatim | error/timeout | "sin resultados" en el buscador |
| Overpass | los 3 espejos fallan | pill "error de zona · Reintentar" |
| OSRM | 3 intentos fallan | ruta recta + aviso "sin ruta" |
| Tiles | proveedor caído | mapa vacío en esa vista, resto funciona |
| Firebase | no responde | modo local (solo en este teléfono) |

## Qué NO se promete
- No hay SLA de disponibilidad, latencia ni exactitud de horarios/datos
  (ver etiqueta de frescura PN-28 en la lista y en la tarjeta del lugar).
- Si el uso crece (~50 usuarios o más), hay que revisar las políticas y
  cuotas de cada proveedor y, si hace falta, migrar a un proveedor con
  plan gratuito mayor o propio. Nunca se contrata nada de pago sin orden
  expresa del dueño.
