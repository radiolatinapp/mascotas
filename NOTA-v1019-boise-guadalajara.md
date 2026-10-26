# NOTA — v10.19: Boise + Guadalajara/Zapopan + versión (y 2 correcciones USA)

**Fecha:** 2026-10-26
**Agente:** Boise + Guadalajara/Zapopan + versión (v10.19)
**Alcance:** `index.html`, `sw.js`, entrada `boise` en `datos-usa-extra.js`,
entradas `guadalajara` y `zapopan` en `datos-latam.js`. Ampliación:
correcciones `Camp Barkalot` y `Top Dog Ranch` en `datos-usa-extra.js`
(ninguna otra entrada de ese archivo tocada).
**Estado:** trabajo local terminado. NO fusionado, NO empujado, NO se abrió
otro PR (el coordinador empuja una sola vez al final; PR #14 sigue abierto).

## 1. Boise: VERIFICADO (reintento con éxito)

En v10.18 Boise quedó sin verificar: los 3 espejos Overpass fallaron en
todas las pasadas (502/504/000) y no existía `overpass-v1018/boise.json`
(`NOTA-datos-usa-muestreo-enriquecimiento-v1018.md` §2.2).

**Reintento v10.19** (misma consulta y misma cascada de espejos de
`overpass-v1018.py`, script `/tmp/retry-boise.py`): el **primer espejo
(`overpass-api.de`) respondió a la primera** con 72 elementos con nombre
en la bbox ±0,3° del centro (43.616616, −116.200886). Caché guardado en
`overpass-v1018/boise.json` (28.194 bytes; `timestamp_osm_base`
`2026-10-26T20:45:50Z`).

**Muestra (misma regla v10.18: índices 0 y 44 de 45 lugares): 2/2 verificados.**

| Lugar | Resultado |
|---|---|
| Boise Animal Health and Urgent Care (vet, 43.59862, −116.194443) | VERIFICADO — OSM mismo nombre a 0 m |
| Intermountain Pet Hospital (vet, 43.662143, −116.381961) | VERIFICADO — OSM mismo nombre a 0 m |

Boise ya no tiene pendientes de verificación. No se tocó su entrada en
`datos-usa-extra.js` (45 lugares, sin cambios).

## 2. Guadalajara/Zapopan: solape recalculado = 97 (confirmado)

Recálculo exacto por nombre normalizado + coordenadas
(script `/tmp/solape-gdl.js`, sobre el archivo real; detalle en
`/tmp/solape-gdl.json`):

| Concepto | Número |
|---|---|
| Guadalajara (antes) | 120 lugares |
| Zapopan (antes) | 120 lugares |
| Compartidos exactos (mismo nombre + mismas coords) | 96 |
| Compartidos cerca (mismo nombre + ≤150 m) | 1 |
| **Compartidos totales** | **97** |
| Solo Guadalajara | 23 |
| Solo Zapopan | 23 |
| Mismo punto (≤10 m) con nombre distinto | 0 |
| **Unión** | **143 lugares** |

El caso "cerca" es el mismo negocio con coordenadas levemente distintas:
`VETERINARIA MEXICO` (GDL, 20.677656, −103.397106, "144 HOMERO,
Guadalajara") vs `Veterinaria México` (ZAP, 20.677945, −103.397113,
"144 Boulevard Homero, Zapopan"): 32 m, misma calle y mismo teléfono de
referencia. La copia canónica es la de Guadalajara; la de Zapopan no se
añadió a la unión. Sin duplicados internos en la unión (nombre+coords: 0).

## 3. Implementación de lo compartido

**Copia canónica en Guadalajara** (`datos-latam.js`, script
`/tmp/aplicar-gdl-zap.py`, backup en `/tmp/datos-latam.js.v1018.bak`):
- A la lista de Guadalajara se le añadieron **verbatim las 23 líneas de
  los lugares solo de Zapopan** (con su `dir` original en Zapopan, para que
  se siga viendo dónde está cada negocio). Guadalajara queda con **143**.
- La lista vieja de Zapopan se vació (queda un comentario que remite a la
  asignación) y al final del archivo se asigna **la misma referencia**:
  `CIUDADES_LATAM["zapopan"].lugares = CIUDADES_LATAM["guadalajara"].lugares;`
  Sin copia duplicada: cualquier edición futura en Guadalajara se refleja
  en Zapopan sin desincronizarse.
- Ambas cabeceras llevan `comparteCon`: Guadalajara → `"zapopan"`,
  Zapopan → `"guadalajara"`.
- Cabecera del archivo actualizada: 62/62 (3769 lugares; antes 3723).

**Efectos medidos (Node, `vm` sobre el archivo real):**
- `guadalajara.lugares.length = 143`, `zapopan.lugares.length = 143`,
  **misma referencia (`===`) = true**.
- La unión contiene los 23 solo-Zapopan y los 23 solo-Guadalajara (0
  faltantes) y 0 duplicados internos.
- Las cajas (`_caja`) de ambas ciudades quedan idénticas (misma lista):
  los conteos por ciudad del usuario y por viewport (v10.18) dan lo mismo
  para ambas. La fusión (`fusionarCiudad`) no se ve afectada: slugs
  distintos, sin colisión.
- **Tope de 120:** ambas ciudades quedan con 143, por encima del viejo
  tope de 120. Coherente con la decisión del dueño (26-oct) de ampliar el
  tope para que quepan todas; el cambio del tope en sí queda para el
  coordinador (v10.19 global).

## 4. Letrero visible en ambas ciudades

No existía mecanismo de letrero por ciudad; se creó (`index.html`):

- **Elemento:** `<div id="avisoCiudad" class="avisoCiudad">` (píldora
  ámbar `#FFF3CD`, borde `#E6C87A`, texto `#6B4E00`), fuera del flujo de
  la barra superior para no mover el resto del layout.
- **Posición:** absoluta, `top:284px; left:12px; max-width:66vw`. Primera
  versión iba dentro de la barra superior y **tapaba la barra de vistas**
  (`.views`, `top:196px`); se corrigió tras verlo en captura. La posición
  final no choca con nada: medida en navegador, borde derecho del letrero
  352,8 px vs botón "Mi ubicación" 359,3 px (6,5 px libres); convive con
  el chip transitorio `#zonaEstado` (`top:238px`, arriba del letrero).
- **Lógica** (`ciudadActualSlug` + `actualizarAvisoCiudad`, junto a
  `crearPinesCiudad`): se muestra cuando el centro del mapa —o, si no hay
  mapa, la ubicación del usuario— cae en una ciudad con `comparteCon`.
  Si el punto cae en la caja de ambas, se elige la ciudad de **centro más
  cercano** (así, estando en Zapopan el letrero dice Zapopan y no
  Guadalajara: `ciudadDePunto` devolvería siempre la primera,
  Guadalajara). Se actualiza en `moveend` del mapa y en `applyLang`
  (cambio de idioma).
- **i18n** (clave nueva `ciudadComparte`, con `{otra}`, en los 8 idiomas):
  - EN: "This city shares its information with {otra}"
  - ES: "Esta ciudad comparte su información con {otra}"
  - PT: "Esta cidade compartilha suas informações com {otra}"
  - FR: "Cette ville partage ses informations avec {otra}"
  - DE: "Diese Stadt teilt ihre Informationen mit {otra}"
  - IT: "Questa città condivide le sue informazioni con {otra}"
  - NL: "Deze stad deelt haar informatie met {otra}"
  - PL: "To miasto udostępnia swoje informacje miastu {otra}"

**Textos observados en el navegador:**
- En Zapopan: "Esta ciudad comparte su información con Guadalajara".
- En Guadalajara: "Esta ciudad comparte su información con Zapopan".
- En inglés (Zapopan): "This city shares its information with Guadalajara".
- En Ciudad de México: letrero oculto.

**Nota:** los pines de ciudad conservan su etiqueta inicial en inglés
("Guadalajara · 143 places"): se crean una sola vez al arrancar con el
idioma por defecto y no se re-renderizan al cambiar de idioma (conducta
preexistente de v10.4, no tocada). El letrero sí se re-traduce al cambiar
de idioma.

## 5. Correcciones USA en `datos-usa-extra.js` (ampliación)

### 5.1 Camp Barkalot — ELIMINADO de `salt-lake-city`

Línea 1200 (antes): `{n:"Camp Barkalot", cat:"refugio",
lat:40.738204, lng:-111.901447, dir:"360 West Whitney Avenue, Salt Lake
City", tel:"+1-801-485-2030", ...}`. **Eliminada.** Salt Lake City pasa
de 81 a 80 lugares en `datos-usa-extra.js`; total del archivo 1736 → 1735
(cabecera actualizada).

**Verificación de que es el mismo negocio (antes de borrar):**
- Listado de `campbarkalot.com` (búsqueda web): dirección **360 Whitney
  Ave, Salt Lake City, UT**; teléfono **+1-801-485-2030**; coordenadas
  **40.738176, −111.901491** (≈5 m de la entrada del archivo);
  web `http://www.campbarkalot.com/`; categoría primaria
  **Dog Day Care Center**. Dirección, teléfono y coordenadas coinciden
  con la entrada del archivo.
- **Operating Status: Permanently Closed** (mismo listado). La web propia
  (campbarkalot.com) anuncia el retiro el 31-jul-2026 tras 20 años
  (según el encargo; la web muestra verificación anti-bot y no se pudo
  leer el texto directo — el estado "Permanently Closed" del listado es
  la evidencia verificada).
- El agente USA ya lo había eliminado de `datos-usa-montana.js`:
  verificado — `salt-lake-city` existe en ese archivo (línea 3085) y
  `Camp Barkalot` ya no aparece en él (0 coincidencias).
- Matiz honesto: OSM **sigue** teniendo el nodo 13607428477
  (`amenity=animal_boarding`, `name=Camp Barkalot`, mismas
  dirección/teléfono/web, creado 2026-02-28, sin cambios desde entonces)
  en las coordenadas exactas del archivo. OSM está desactualizado aquí;
  la eliminación se apoya en el estado "Permanently Closed" del negocio,
  no en la ausencia en OSM. (De paso, esto explica el fallo de muestreo
  v10.18 —"sin elemento de su categoría a menos de 150 m", más cercano a
  3.800 m—: ese nodo no llegó en la respuesta cacheada de v10.18.)

### 5.2 Top Dog Ranch — RE-ETIQUETADO en `tulsa`

Línea 836 (antes): `{n:"Top Dog Ranch", cat:"refugio", lat:35.988994,
lng:-95.778867, ...}`. **Ahora:** `{n:"Top Dog Ranch", cat:"tienda",
guarderia:true, lat:35.988994, lng:-95.778867, ...}`. Tulsa sigue con 73
lugares (sin cambio de conteo).

**Verificación:**
- OSM **way/803414018** (API de OSM, consultado directo): `name=Top Dog
  Ranch`, `amenity=animal_boarding`, `animal_boarding=dog`,
  `opening_hours=Mo-Fr 07:30-18:00; Sa,Su 08:00-09:00,15:00-18:00`.
  Es guardería/daycare, no refugio.
- Es el mismo mapeo que el fallback Overpass de la app
  (`index.html:6213`): `amenity==='animal_boarding'` →
  `cat='tienda', guarderia=true`. El campo `guarderia` ya existe en la
  app (`textoNotaOSM` lo muestra como nota OSM de guardería).
- La copia de `datos-usa-surcentral.js:561` ya estaba así
  (`cat:"tienda", guarderia:true`, misma coords, dir "1050 E Tucson
  Street, Broken Arrow", tel +1-918-379-4909, horas [7.5, 18.0]):
  la de `extra.js` era la copia desactualizada. Tras la corrección ambas
  coinciden en categoría; la fusión conserva la de Surcentral (se fusiona
  primero, con más datos), sin pérdida.

## 6. Versión v10.19

- `index.html`: `v10.18` → `v10.19` en el pie del mapa, el panel "Acerca
  de" y el JS que escribe el pie (2 ocurrencias en esa línea). Los
  comentarios `v10.18 — Ciudad del usuario / Conteos...` se dejan como
  historia (describen la versión que introdujo cada función).
- `sw.js`: caché `petnear-v118` → `petnear-v119` (la activación PN-27
  borra las cachés viejas `petnear-v*`, así que la v118 se limpia sola).

## 7. Verificación

- `node --check` OK en `datos-latam.js`, `datos-usa-extra.js`, `sw.js` y
  en los 2 bloques `<script>` inline de `index.html` (extraídos y
  comprobados).
- **Playwright** (Chromium local, `file://`, red externa abortada;
  script `/tmp/verificar-v1019.py`): **12/12 checks PASS** —
  `#avisoCiudad` existe; versión visible v10.19; 7.721 pines de ciudad
  creados; letrero visible y correcto en Zapopan y en Guadalajara;
  oculto en CDMX; en inglés correcto; pines "Guadalajara · 143 places" y
  "Zapopan · 143 places"; 0 errores JS en la página.
- Capturas: `capturas/v1019-aviso-zapopan.png` (letrero final, revisado
  visualmente: texto completo, sin solapes) y
  `capturas/v1019-aviso-guadalajara.png`.
- Nota: el script de la app corre dentro de `DOMContentLoaded`, así que
  `CIUDADES_TODAS`/`setLang` no son globales; la verificación en
  navegador usó solo `window.map` y el DOM (los conteos de datos se
  verificaron en Node con `vm`).

## 8. Totales y pendientes para el coordinador

- LatAm: 3723 → **3769** lugares (+46: GDL +23, ZAP +23).
- USA extra: 1736 → **1735** lugares (−1 Camp Barkalot).
- Por el mismo criterio de suma por ciudad de v10.18 (42.613 lugares):
  **42.658** (+45 netos). Confirmar al actualizar el título del PR.
- El tope de 120 queda superado por GDL/ZAP (143): falta aplicar la
  ampliación del tope decidida por el dueño (alcance global v10.19, no
  de este agente).
- Archivos cambiados: `index.html`, `sw.js`, `datos-latam.js`,
  `datos-usa-extra.js`; nuevo: `overpass-v1018/boise.json`,
  `capturas/v1019-aviso-zapopan.png`,
  `capturas/v1019-aviso-guadalajara.png`, esta NOTA. Nada fusionado,
  nada empujado, ningún PR nuevo.
