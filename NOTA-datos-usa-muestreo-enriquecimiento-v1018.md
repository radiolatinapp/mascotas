# NOTA — Muestreo y enriquecimiento datos USA v10.18

**Fecha:** 2026-10-26
**Agente:** datos USA (muestreo + enriquecimiento, continuación del trabajo de deduplicación)
**Alcance:** `datos-usa.js` (30 ciudades) + `datos-usa-extra.js` (29 ciudades), EE. UU.
**Nota previa (NO sobrescrita):** la deduplicación de 198 lugares entre ciudades vecinas
ya fue verificada por el coordinador (0 pérdidas) en
`NOTA-datos-usa-v1018.md`. Este informe cubre solo muestreo, enriquecimiento,
conteos finales y pendientes.

## 1. Resumen ejecutivo

| Concepto | Número |
|---|---|
| Lugares tras la deduplicación (punto de partida) | 4.411 (2.675 + 1.736) |
| Lugares muestreados y verificados contra Overpass | 154 |
| Verificados (nombre + coordenadas en OSM) | **139** |
| Fallidos (sin elemento de su categoría a ≤150 m) | **13** |
| Sin verificar por fallo de red (Boise) | 2 |
| Lugares nuevos agregados (parques + peluquerías) | **253 brutos / 251 netos** |
| **Total final** | **4.662 lugares (2.926 + 1.736), 59 ciudades** |
| Errores de validación automática al cierre | **0** |
| Sintaxis (`node --check`) | OK en ambos archivos |

## 2. Verificación por muestreo contra Overpass

**Método.** Una consulta Overpass por ciudad (bbox ±0,3° del centro) con las 6
categorías: `amenity=veterinary`, `shop=pet`, `amenity=animal_shelter`,
`amenity=animal_boarding`, `tourism=zoo`, `leisure=dog_park`,
`shop=pet_grooming`, solo elementos con nombre. Espejos en cascada:
`overpass-api.de` → `overpass.kumi.systems` → `overpass.private.coffee`,
con reintento en 429 (espera 65 s y cambio de espejo). Respuestas en caché en
`overpass-v1018/<ciudad>.json` (58 de 59 ciudades; falta Boise).
Un lugar se da por verificado si hay un elemento OSM de su misma categoría con
el mismo nombre normalizado (sin tildes/puntuación) a ≤150 m.
Fecha de los datos OSM: 2026-10-26 (timestamp base `2026-10-26T18:09Z` y ss.).

**Muestra.** 5 lugares en cada una de las 12 ciudades en tope de 120
(New York, Los Angeles, Chicago, Phoenix, Philadelphia, Dallas, San Jose,
San Francisco, Seattle, Denver, Baltimore, Portland) = 60; 2 en cada una de
las demás 47 ciudades = 94. Total **154**. Índices repartidos de forma
determinista dentro de cada ciudad.

**Resultado: 139 verificados, 13 fallidos, 2 sin red.**
Tasa de verificación sobre los 152 con respuesta de red: **91,4 %**.

### 2.1 Lugares fallidos (13) — NO eliminados, pendientes de decisión del coordinador

Todos con motivo "sin elemento de su categoría a menos de 150 m". La columna
"más cercano" es la distancia al elemento OSM más cercano de su misma categoría.

| Ciudad | Lugar | Cat. | Más cercano misma cat. |
|---|---|---|---|
| albuquerque | Dogtopia | refugio | 6.145 m |
| atlanta | Bark & Blossom Vet Studio | vet | 798 m |
| chicago | Doggie Works | refugio | 450 m |
| dallas | Urban Paws | refugio | 6.880 m |
| kansas-city | Pete & Mac's | refugio | 15.294 m |
| los-angeles | Pawsible | refugio | 10.958 m |
| nashville | City Pets Animal Care | vet | 6.213 m |
| new-york | Paws & Rec | refugio | 1.321 m |
| philadelphia | Villa La Paws Pet Resort | refugio | 14.883 m |
| sacramento | Leash and Collar | tienda | 1.159 m |
| salt-lake-city | Camp Barkalot | refugio | 3.800 m |
| san-francisco | Metro Dog | refugio | 3.845 m |
| tulsa | Top Dog Ranch | refugio | 1.842 m |

11 de 13 son `refugio` y casi todos son guarderías/daycare de perros
(Dogtopia, Camp Bow Wow, Paws & Rec, etc.): en OSM muchos de estos negocios
se etiquetan `amenity=animal_boarding` o no están mapeados con ese nombre
(cierre o cambio de nombre desde la cosecha del 24-oct). No se eliminó
ninguno: la ausencia en OSM no prueba que el negocio no exista; la decisión
de borrarlos o re-etiquetarlos queda para el coordinador.

**Re-verificación dirigida (parcial):** se re-consultaron los fallidos con
radio de 200 m y TODAS las etiquetas plausibles (incl. `animal_boarding`).
Solo se completaron 2 de 13 antes de interrumpirla por la lentitud extrema de
los espejos (cada consulta tardaba minutos entre 502/504/000 y reintentos):
Dogtopia (Albuquerque) siguió **no-encontrado** incluso con etiquetas
amplias; Bark & Blossom Vet Studio (Atlanta) quedó **sin red**. Script:
`recheck-v1018.py`, log `overpass-recheck-run.log`.

### 2.2 Sin verificar por red (2)

**Boise** (2 lugares muestreados: "Boise Animal Health and Urgent Care" e
"Intermountain Pet Hospital"): la ciudad falló en los 3 espejos en todas las
pasadas (502/504/000). No hay caché de Boise (`overpass-v1018/boise.json`
no existe). Queda pendiente reintentarla otro día.

## 3. Enriquecimiento: parques y peluquerías

**Método.** Misma descarga Overpass por ciudad: `leisure=dog_park` →
`parque`, `shop=pet_grooming` → `peluqueria`. Solo se agregan lugares CON
nombre y coordenadas; `horas:null`; `nota:"Dato de OpenStreetMap"`;
dirección y teléfono solo si OSM los trae (si no, `null`). Sin duplicar
lugares ya presentes en la ciudad (mismo nombre o <100 m). Tope de 120
lugares por ciudad.

**Ciudades objetivo (21):** unión de las 15 mayores por población
(New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio,
San Diego, Dallas, Austin, San Jose, Fort Worth, Jacksonville, Columbus,
San Francisco) y las 15 mayores por nº de lugares en el dataset
(las 12 en tope de 120 + Boston, Austin, Kansas City).

**Resultado: 253 agregados brutos en 11 ciudades; 251 netos tras 2 correcciones
(ver §3.1).** 10 ciudades estaban en tope de 120 y no recibieron nada.

| Ciudad | Hueco | Candidatos OSM | Agregados | Parques | Peluquerías | Total final |
|---|---|---|---|---|---|---|
| austin | 16 | 60 | 16 | 13 | 3 | 120 |
| boston | 2 | 84 | 2 | 1 | 1 | 120 |
| columbus | 25 | 37 | 25 | 13 | 12 | 120 |
| dallas | 6 | 92 | 6 → **5 netos** | 2 | 4 | **119** |
| fort-worth | 70 | 43 | 43 | 28 | 15 | 93 |
| houston | 38 | 51 | 38 → **37 netos** | 25 | 13 | **119** |
| jacksonville | 84 | 12 | 12 | 5 | 7 | 48 |
| kansas-city | 23 | 43 | 23 | 9 | 14 | 120 |
| phoenix | 35 | 88 | 35 | 14 | 21 | 120 |
| san-antonio | 65 | 24 | 24 | 18 | 6 | 79 |
| san-diego | 29 | 60 | 29 | 18 | 11 | 120 |
| **Total** | | | **253 → 251 netos** | **146 → 145** | **107 → 106** | |

**En tope de 120 (sin agregados, solo reportado):** New York, Los Angeles,
Chicago, Philadelphia, San Jose, San Francisco, Seattle, Denver, Baltimore,
Portland.

**Candidatos no aprovechados:** Jacksonville solo tenía 12 candidatos con
nombre en OSM para un hueco de 84; San Antonio 24 de 65; Fort Worth 43 de 70.
El resto del hueco no se puede llenar con datos OSM de estas 2 categorías sin
inventar nada.

### 3.1 Dos correcciones tras la fusión (con evidencia)

La validación posterior a la fusión marcó 2 errores en los lugares nuevos;
ambos corregidos eliminando la copia sobrante:

1. **Houston — "Millie Bush Bark Park"** (parque, 29.726195,-95.668781):
   quedó a 0,301° de longitud del centro de Houston, fuera del cuadro de
   ±0,3° por ~100 m (estaba en el borde del bbox de la consulta). Eliminado
   de Houston.
2. **Dallas/Fort Worth — "Autumn's Pampered Paws"** (peluquería, Euless,
   node/13796979679): el enriquecimiento la añadió en AMBAS ciudades (la
   deduplicación solo miraba dentro de cada ciudad). Distancia al centro:
   Fort Worth 0,2847° vs Dallas 0,2869° → se conserva en Fort Worth y se
   eliminó la copia de Dallas.

Tras estas 2 eliminaciones la validación vuelve a **0 errores**.

### 3.2 Incidencia: primer cálculo descartado (error de parser, sin fusión)

La primera pasada del script de Overpass contó mal los lugares por ciudad
(el regex exigía `dir`+`tel` y muchas líneas traen solo `dir` o ninguno:
p. ej. Baltimore contaba 69 en vez de 120). Eso infló los huecos y produjo
un enriquecimiento de **655 lugares que NUNCA se fusionó**. Se corrigió el
parser (campos `n/cat/lat/lng` como núcleo, resto opcional), se añadió
`amenity=animal_boarding` a la categoría `refugio`, y se recalculó todo desde
cero con la caché: 253 lugares. El resultado de 655 queda guardado como
`overpass-v1018/resultado-v1018-run1.json` solo como evidencia del error;
el válido es `overpass-v1018/resultado-v1018.json`.

## 4. Validación automática final

Script `valida-v1018.js` (reglas: `n/cat/lat/lng` presentes, cat válida,
coordenadas dentro de ±0,3° del centro, sin duplicados por nombre+coordenadas
—también entre los dos archivos—, `horas:null`, sin `rating`, nota OSM):

- **Antes de corregir (4.609 lugares):** 198 errores, todos duplicados
  (101 dentro de `datos-usa-extra.js` + 97 entre ambos archivos). Corregidos
  eliminando la copia de la ciudad con centro más lejano; el lugar se conserva
  una vez. Verificado por el coordinador en `NOTA-datos-usa-v1018.md`.
- **Después de la deduplicación (4.411 lugares):** 0 errores.
- **Después del enriquecimiento y las 2 correcciones (§3.1): 0 errores.**

**Conteos finales:**

| Archivo | Ciudades | Lugares | vet | tienda | refugio | zoo | parque | peluqueria |
|---|---|---|---|---|---|---|---|---|
| datos-usa.js | 30 | 2.926 | 1.232 | 1.054 | 343 | 46 | 145 | 106 |
| datos-usa-extra.js | 29 | 1.736 | 808 | 650 | 227 | 51 | 0 | 0 |
| **Total** | **59** | **4.662** | 2.040 | 1.704 | 570 | 97 | 145 | 106 |

Sintaxis: `node --check datos-usa.js datos-usa-extra.js` → OK.
Cabeceras de ambos archivos actualizadas con el conteo nuevo.
Respaldos: `/tmp/datos-usa.js.pre-v1018.bak` y
`/tmp/datos-usa-extra.js.pre-v1018.bak` (pre-deduplicación, dejados por el
agente anterior); `/tmp/datos-usa.js.pre-enrich.bak` y
`/tmp/datos-usa-extra.js.pre-enrich.bak` (pre-enriquecimiento).

## 5. Validación de los 6 archivos regionales (solo lectura, SIN editar)

Mismo validador (`valida-v1018.js --regionales`), mismos criterios que para
los archivos principales. Totales: 7.532 ciudades/pueblos, 26.130 lugares.

| Archivo | Ciudades | Lugares | Marcas totales |
|---|---|---|---|
| datos-usa-noreste.js | 1.969 | 4.989 | 1.514 |
| datos-usa-sureste.js | 1.580 | 5.209 | 1.635 |
| datos-usa-medioeste.js | 1.906 | 5.447 | 1.433 |
| datos-usa-surcentral.js | 644 | 2.595 | 856 |
| datos-usa-montana.js | 532 | 2.836 | 803 |
| datos-usa-pacifico.js | 901 | 5.054 | 1.080 |
| **Total** | **7.532** | **26.130** | **7.321** |

**Desglose de las 7.321 marcas (NO son 7.321 errores reales):**

- **7.223 × `horas-no-null`:** los regionales guardan las horas como
  array `[apertura, cierre]` (p. ej. `[8.0, 19.0]`), no como `null`. Es su
  esquema documentado, distinto del de los archivos principales. No es un
  error de datos, es una diferencia de formato entre archivos.
- **92 × `cat-invalida`:** 77 `resto` + 15 `farma`. Las cabeceras de los
  propios regionales documentan esas categorías: `resto` = restaurantes
  dog-friendly, `farma` = farmacias veterinarias. Son categorías legítimas
  de su esquema, no inventadas.
- **6 × `fuera-del-cuadro-0.3`:** SÍ son atípicos geográficos reales
  (lugares a >0,3° del centro de su pueblo). Ningún archivo regional fue
  editado; se listan para el coordinador:
  - sureste / frostproof: "River Ranch Petting Zoo" (27.769008,-81.195937;
    centro 27.745863,-81.530631)
  - montana / green-river: "Pet Exercise Area" (38.951732,-109.684769;
    centro 38.995229,-110.161725)
  - montana / lamoille: "Mustang Monument" (40.752465,-115.03114;
    centro 40.727983,-115.478392)
  - montana / winslow: "Pet Ramada" (35.033273,-111.021471;
    centro 35.024198,-110.697346)
  - pacifico / big-lake: "Alaska Equine and Small Animal"
    (61.408664,-149.487148; centro 61.541746,-149.830355)
  - pacifico / north-pole: "Chena Kennel" (65.055725,-146.061711;
    centro 64.750997,-147.349319)

## 6. Lo que quedó pendiente y por qué

1. **Boise sin verificar** (2 lugares muestreados): los 3 espejos Overpass
   fallaron en todas las pasadas (502/504/tiempo agotado). Reintentar otro
   día; no es un problema de los datos.
2. **13 lugares fallidos en el muestreo (§2.1):** no se eliminó ninguno.
   Falta que el coordinador decida si se borran, se re-etiquetan o se
   conservan (11 son guarderías/daycare, probablemente `animal_boarding`
   o negocios cerrados/renombrados).
3. **Re-verificación dirigida incompleta:** 2 de 13 intentadas; el resto
   quedó sin hacer porque cada consulta Overpass tardaba varios minutos
   (espejos saturados: 502/504 frecuentes, `overpass-api.de` llegó a dar
   406 sin `User-Agent`). No bloquea nada.
4. **Huecos sin llenar en enriquecimiento:** Jacksonville (72 de 84),
   San Antonio (41 de 65), Fort Worth (27 de 70) no tenían más candidatos
   con nombre en OSM para parque/peluquería. Solo se llenarían con otra
   fuente gratuita o esperando a que OSM crezca.
5. **Regionales sin tocar** (por orden): sus 6 lugares fuera de cuadro y
   la diferencia de esquema de `horas` quedan para quien los lleve.
6. **Deduplicación entre archivos principales y regionales:** fuera de
   alcance (el coordinador ya anotó que `lugaresConteo()` deduplica por
   nombre+coordenadas en la app, así que no infla conteos).

## 7. Archivos y scripts usados

- `datos-usa.js`, `datos-usa-extra.js` (editados: deduplicación ya hecha,
  enriquecimiento fusionado, 2 correcciones).
- `valida-v1018.js` + `valida-v1018-errores.json` + `valida-v1018-final.txt`
  (validación automática; el validador comparte el mapa de duplicados entre
  ambos archivos).
- `overpass-v1018.py` (muestreo + enriquecimiento; log
  `overpass-v1018-run.log` primera pasada y `overpass-v1018-run2.log`
  recómputo) + `overpass-fetch2.py` (segundo trabajador de descarga).
- `overpass-v1018/*.json`: 58 respuestas Overpass en caché (una por ciudad;
  falta Boise) + `resultado-v1018.json` (válido) +
  `resultado-v1018-run1.json` (primera pasada con el bug de parser, solo
  evidencia).
- `recheck-v1018.py` + `overpass-recheck-run.log` (re-verificación dirigida,
  parcial).
- `merge-enrich-v1018.py` (fusión del enriquecimiento) y
  `fix-dups-v1018.py` (deduplicación, ya aplicada antes de este informe).

**No se fusionó ni publicó nada** (el coordinador hace el PR). Solo servicios
gratuitos (OpenStreetMap/Overpass). No se inventó ningún dato, lugar o función.
