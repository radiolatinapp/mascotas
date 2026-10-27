# Nota — Tope de 120 ampliado a 300 y enriquecimiento completo (PetNear v10.19 → v10.20)

- **Fecha del trabajo:** 2026-10-26 (cosecha 20:47–22:25 UTC; verificación 22:36–23:11 UTC).
- **Ámbito:** Europa (56 ciudades), LatAm fuera de Colombia (62) y Canadá (31).
- **Versión:** la tarea se abrió como v10.19 (PR #14). El PR #14 se fusionó el
  26-oct 17:24 EDT **sin** esta ampliación; el coordinador versionó este cambio
  como **v10.20** (así lo dicen ya las cabeceras de los tres archivos de datos).
  Esta nota documenta el trabajo con el nombre de archivo pedido
  (`NOTA-v1019-tope.md`) y el contenido corresponde a la v10.20.
- **Archivos tocados:** `datos-europa.js`, `datos-latam.js`, `datos-canada.js`
  (solo se agregan lugares; ningún lugar existente se modificó ni eliminó),
  `cosecha-europa.py`, `cosecha-latam.py`, `cosecha-canada.py` (tope 120 → 300;
  el coordinador aplicó ese cambio a las 23:13 UTC),
  `COMO_CARGAR_CIUDADES.md` (tope documentado). NO se tocó `index.html`,
  `sw.js`, `datos-usa-*.js`, `datos-charlotte.js`, `datos-ibague.js`,
  `datos-colombia.js`, ni las entradas de Guadalajara y Zapopan en
  `datos-latam.js` (otro agente; aquí solo se contaron sus candidatos).
- **Fuente de todos los datos agregados:** OpenStreetMap (ODbL) vía Overpass
  en vivo. No se inventó ningún dato, lugar ni función. Solo servicios gratuitos.

## 1. El nuevo tope: 300 (antes 120)

**Decisión: ampliar, no quitar.** Justificación con números:

| Dato | Valor |
|---|---:|
| Máximo teórico sin filtrar (120 + mayor nº de candidatos, Londres 167) | 287 |
| Máximo real tras filtros y dedup (Londres) | **267** |
| 2.º mayor (Budapest) | 260 |
| 3.º mayor (París) | 246 |
| Mayor en Canadá (Montreal) | 236 |
| Mayor en LatAm (Santiago) | 153 |
| **Nuevo tope** | **300** |

300 es el menor número redondo que cubre el máximo real con margen
(+33 lugares, +12 %) y cubre incluso el máximo teórico sin filtrar (287)
con +13. No se quitó el tope: sin tope, una re-cosecha de Londres traería
~700 lugares (532 vet/tienda/refugio/zoo en su caja + 167
parques/peluquerías) y los archivos crecerían sin cota; el tope acota el
tamaño de los datos y el coste de carga de la app. Los topes de viewport
de `index.html` (15/50/100/150) no se tocaron: son otra cosa.

El tope vive en `MAX_LUGARES` de `cosecha-europa.py`, `cosecha-latam.py` y
`cosecha-canada.py` (ahora 300) y está documentado en
`COMO_CARGAR_CIUDADES.md` (líneas 51 y 71). `cosecha-ciudades.py`
(Colombia+EE. UU.), `cosecha-usa-extra.py` y
`cosecha-usa-sureste-merge.py` siguen en 120: el coordinador los consideró
(`cosecha-ciudades.py` se tocó a las 22:38 UTC y se dejó en 120) y el
cambio de esos tres es decisión del trabajo de EE. UU./Colombia, fuera de
este ámbito. La línea 71 de `COMO_CARGAR_CIUDADES.md` decía que Bogotá,
New York, etc. "llegaron al tope de 300": corregido — llegaron al tope
**viejo de 120**; con el tope en 300, una re-cosecha podría agregar más ahí.

## 2. Resultado global

| Archivo | Ciudades | Antes | Después | Cambio |
|---|---:|---:|---:|---:|
| `datos-europa.js` | 56 | 5.480 | **7.345** | +1.865 |
| `datos-latam.js` | 62 | 3.723 | **3.917** | +194 (+46 fusión Guadalajara/Zapopan v10.19 + 148 este trabajo) |
| `datos-canada.js` | 31 | 2.074 | **2.660** | +586 |
| **Total 3 archivos** | **149** | **11.277** | **13.922** | **+2.645** |

**Agregados por este trabajo: 2.599 lugares** (1.865 Europa + 148 LatAm +
586 Canadá), todos verificados contra OSM en vivo (ver §4): 0 fallidos.
Categorías nuevas por ciudad: parques 1.166, peluquerías 1.433.

## 3. Conteos por ciudad antes/después

Columnas: antes (lugares en el archivo) | candidatos OSM únicos con nombre
(parques/peluquerías) | excluidos (escuela/club/negocio o veterinaria, no
parque ni peluquería) | duplicados descartados | agregados (parques/peluquerías)
| después. Candidatos = tras colapsar nodo+vía del mismo lugar (ver §5).

### Europa (33 ciudades en tope)

| Ciudad | Antes | Candidatos | Excl. | Dup | Agregados | Después |
|---|---:|---:|---:|---:|---:|---:|
| Atenas | 120 | 62 (9/53) | 0 | 6 | 56 (9/47) | 176 |
| Barcelona | 120 | 64 (39/25) | 2 | 4 | 60 (39/21) | 180 |
| Belgrado | 120 | 49 (16/33) | 0 | 11 | 38 (14/24) | 158 |
| Berlín | 120 | 90 (39/51) | 10 | 3 | 87 (39/48) | 207 |
| Birmingham | 120 | 20 (1/19) | 0 | 6 | 14 (1/13) | 134 |
| Bratislava | 120 | 44 (22/22) | 0 | 3 | 41 (22/19) | 161 |
| Bruselas | 120 | 89 (53/36) | 6 | 5 | 84 (51/33) | 204 |
| Bucarest | 120 | 11 (2/9) | 0 | 2 | 9 (2/7) | 129 |
| Budapest | 120 | 162 (58/104) | 0 | 22 | 140 (51/89) | 260 |
| Colonia | 120 | 104 (51/53) | 15 | 9 | 95 (44/51) | 215 |
| Cracovia | 120 | 30 (5/25) | 0 | 3 | 27 (5/22) | 147 |
| Fráncfort | 120 | 63 (41/22) | 4 | 3 | 60 (40/20) | 180 |
| Hamburgo | 120 | 73 (39/34) | 7 | 3 | 70 (39/31) | 190 |
| Kyiv | 120 | 21 (8/13) | 0 | 1 | 20 (7/13) | 140 |
| Lisboa | 120 | 51 (35/16) | 0 | 1 | 50 (35/15) | 170 |
| Londres | 120 | 163 (40/123) | 1 | 16 | 147 (33/114) | **267** |
| Lyon | 120 | 35 (13/22) | 0 | 3 | 32 (13/19) | 152 |
| Madrid | 120 | 63 (36/27) | 1 | 6 | 57 (32/25) | 177 |
| Manchester | 120 | 59 (8/51) | 0 | 3 | 56 (8/48) | 176 |
| Milán | 120 | 98 (53/45) | 3 | 7 | 91 (47/44) | 211 |
| Múnich | 120 | 44 (8/36) | 4 | 7 | 37 (7/30) | 157 |
| París | 120 | 129 (42/87) | 5 | 3 | 126 (42/84) | 246 |
| Porto | 120 | 15 (6/9) | 0 | 2 | 13 (6/7) | 133 |
| Praga | 120 | 50 (32/18) | 0 | 4 | 46 (32/14) | 166 |
| Riga | 120 | 10 (1/9) | 0 | 3 | 7 (1/6) | 127 |
| Roma | 120 | 50 (36/14) | 0 | 6 | 44 (33/11) | 164 |
| Róterdam | 120 | 34 (16/18) | 0 | 2 | 32 (16/16) | 152 |
| Sofía | 120 | 55 (3/52) | 0 | 9 | 46 (2/44) | 166 |
| Turín | 120 | 34 (13/21) | 3 | 2 | 32 (12/20) | 152 |
| Varsovia | 120 | 101 (8/93) | 0 | 11 | 90 (7/83) | 210 |
| Viena | 120 | 92 (54/38) | 5 | 2 | 90 (53/37) | 210 |
| Zúrich | 120 | 42 (7/35) | 4 | 4 | 38 (7/31) | 158 |
| Ámsterdam | 120 | 30 (16/14) | 0 | 0 | 30 (16/14) | 150 |
| **Total Europa** | **3.960** | **2.037** | **70** | **172** | **1.865** | **5.825** |

### LatAm (13 ciudades en tope; Guadalajara y Zapopan solo conteo)

| Ciudad | Antes | Candidatos | Excl. | Dup | Agregados | Después |
|---|---:|---:|---:|---:|---:|---:|
| Buenos Aires | 120 | 25 (14/11) | 0 | 0 | 25 (14/11) | 145 |
| Ciudad de México | 120 | 17 (11/6) | 0 | 1 | 16 (10/6) | 136 |
| Guadalajara | 143 | 10 | 0 | 0 | 0 (solo conteo) | 143 |
| Guayaquil | 120 | 2 (1/1) | 0 | 1 | 1 (0/1) | 121 |
| Lima | 120 | 10 (5/5) | 0 | 1 | 9 (5/4) | 129 |
| Montevideo | 120 | 1 (0/1) | 0 | 0 | 1 (0/1) | 121 |
| Quito | 120 | 6 (2/4) | 0 | 0 | 6 (2/4) | 126 |
| Río de Janeiro | 120 | 6 (4/2) | 0 | 0 | 6 (4/2) | 126 |
| Salvador | 120 | 3 (0/3) | 0 | 1 | 2 (0/2) | 122 |
| San José (CR) | 120 | 23 (18/5) | 1 | 1 | 22 (17/5) | 142 |
| Santiago | 120 | 37 (19/18) | 0 | 4 | 33 (17/16) | 153 |
| São Paulo | 120 | 28 (9/19) | 1 | 1 | 27 (9/18) | 147 |
| Zapopan | 143 | 10 | 0 | 0 | 0 (solo conteo) | 143 |
| **Total LatAm (11 agregadas)** | **1.320** | **158** | **2** | **10** | **148** | **1.468** |

Guadalajara y Zapopan figuran con 143 lugares porque la fusión v10.19
(17:24 EDT) ya estaba en la copia local cuando se exportaron los datos
para este trabajo; sus 10+10 candidatos quedan para el agente dueño de
esas dos ciudades.

### Canadá (11 ciudades en tope)

| Ciudad | Antes | Candidatos | Excl. | Dup | Agregados | Después |
|---|---:|---:|---:|---:|---:|---:|
| Brampton | 120 | 13 (7/6) | 0 | 1 | 12 (7/5) | 132 |
| Burnaby | 120 | 87 (46/41) | 0 | 17 | 70 (43/27) | 190 |
| Calgary | 120 | 50 (31/19) | 1 | 7 | 43 (31/12) | 163 |
| Edmonton | 120 | 27 (17/10) | 0 | 24 | 3 (3/0) | 123 |
| Gatineau | 120 | 45 (16/29) | 0 | 4 | 41 (16/25) | 161 |
| Mississauga | 120 | 52 (16/36) | 0 | 6 | 46 (16/30) | 166 |
| Montreal | 120 | 122 (74/48) | 0 | 6 | 116 (73/43) | 236 |
| Ottawa | 120 | 45 (16/29) | 0 | 4 | 41 (16/25) | 161 |
| Surrey | 120 | 64 (47/17) | 0 | 7 | 57 (45/12) | 177 |
| Toronto | 120 | 108 (38/70) | 0 | 14 | 94 (37/57) | 214 |
| Vancouver | 120 | 79 (38/41) | 0 | 16 | 63 (36/27) | 183 |
| **Total Canadá** | **1.320** | **692** | **1** | **106** | **586** | **1.906** |

Edmonton solo suma 3: 24 de sus 27 candidatos ya se habían agregado en
v10.18 (los 24 de entonces) y son duplicados ahora.

## 4. Método

- **Cosecha** (`cosecha-v1019-tope.py`): una consulta Overpass por ciudad en
  tope de 120 (33 Europa + 13 LatAm + 11 Canadá = 57), con
  `leisure=dog_park` → `parque` y `shop=pet_grooming` → `peluqueria`,
  `out center`. Caja Europa: centro ±0,3° (misma que
  `verificar-europa-v3.py`, de donde salen los 2.115 candidatos de v10.18).
  Caja LatAm/Canadá: caja de cosecha (±0,15°; 0,18° grandes, misma que
  `enriquecer-v1018.py`, de donde salen los 626 de v10.18). Respuestas
  crudas en `overpass-v1019/` (57 archivos JSON); estado en
  `cosecha-v1019-tope.json`. Resultado: **57/57 ciudades ok, 0 errores**.
  Overpass estuvo saturado toda la sesión (`overpass-api.de` con 502
  "at capacity" frecuentes, backoff 30–240 s; `kumi` y `private.coffee`
  sin respuesta desde este sandbox, como en v10.18). La cosecha tardó
  ~1 h 40 min.
- **Filtros** (`agregar-v1019-tope.py`): solo con nombre y coordenadas;
  `horas:null`; `nota:"Dato de OpenStreetMap"`; `dir`/`tel` solo si OSM los
  trae (etiquetas `addr:*`, `phone`/`contact:phone`, tal cual). Excluidos
  los `dog_park` que son escuela/club/negocio de adiestramiento,
  guardería/residencia u otro negocio (o `access=private`) y los que son
  veterinarias; un "Parque de adiestramiento canino" municipal SÍ se
  conserva (es área pública). `shop=pet_grooming` se conserva salvo nombre
  claramente de veterinaria sin palabra de peluquería. Dedup contra
  lugares existentes y entre candidatos: <100 m (cualquier nombre) o mismo
  nombre normalizado a <300 m (regla v10.18); mismo nombre lejos = sucursal
  distinta y se conserva (precedente: las 2 sucursales de "The Pawsh Dog"
  en Winnipeg, v10.18). Inserción quirúrgica al final del array
  `lugares:[]` de cada ciudad (patrón de `enriquecer-v1018.py`); totales
  de cabecera actualizados.
- **Excluidos (73 en total, detalle en `agregar-v1019-tope.json`):**
  Europa 70 (p. ej. "Hundeschule24.de", "Hundeschule" ×varias, "Club
  Canin" ×varias en París, "Kanstak Educación Canina" en Barcelona,
  "Canhotel residencia canina" en Madrid, "Centro Cinofilo" ×3 en Milán,
  "Hundesportverein" ×varias en Berlín/Colonia/Hamburgo; veterinarias
  "Sant Andreu Veterinària", "Tierarztpraxis Bärenwiese",
  "North Weald Veterinary Surgery"; `access=private` ×varias), LatAm 2
  ("Centro Clínico Veterinário Animal Zool" en São Paulo, veterinaria;
  "Parque para mascotas Khaya" en San José, `access=private`), Canadá 1
  ("North Service Centre Dog Training" en Calgary).

## 5. Verificación (muestreo por ciudad, en vivo, por ID de OSM)

- **Método** (`verificar-v1019-tope.py`): re-consulta en vivo en Overpass
  de **los 2.599 lugares agregados, todos**, por ID de OSM
  (`node(id:…)`/`way(id:…)`/`relation(id:…)`), en 26 lotes de 100. Acierto
  = el objeto existe, el nombre coincide (normalización Unicode, sin
  vaciar cirílico/griego; lección v10.18) y las coordenadas están a <100 m.
  Lección durante el trabajo: `node(1,2,3)` NO es sintaxis de IDs en
  Overpass (lo interpreta como bbox y da 400 "bbox requires four
  arguments"); la sintaxis correcta es `node(id:1,2,3)`, verificada con
  3 objetos de Riga antes de lanzar la corrida.
- **Resultado: 2.599 verificados, 0 fallidos, en las 55 ciudades.**
  Distancia entre las coordenadas agregadas y OSM: media 0,0 m, mediana
  0,0 m, máxima 0,1 m; 2.095 a 0,0 m exactos y los 2.599 dentro de 10 m
  (esperable: la verificación re-consulta los mismos objetos por ID).
  Detalle lugar por lugar en `verificar-v1019-tope.json`.
- **Validación automática** (validadores v10.18, sin tocar): Europa
  7.345 lugares, **0 errores**; LatAm+Canadá 6.577 lugares,
  **0 errores** (nombre, categoría válida, coordenadas en ±0,3° del
  centro, sin duplicados, `horas:null`, sin `rating`, nota OSM).
- **`node --check`**: `datos-europa.js`, `datos-latam.js` y
  `datos-canada.js` pasan sin errores (también tras los retoques de
  cabecera de §7).

## 6. Conciliación con los conteos v10.18 (2.115 + 626)

- **Cosecha en vivo de hoy:** 2.994 elementos con nombre en las 57
  ciudades. Tras colapsar 14 duplicados exactos del mismo lugar
  (nodo+vía con mismo nombre a <100 m) y excluir 73 no-parques, quedan
  2.907 candidatos únicos; menos 288 ya presentes en los archivos y menos
  20 de Guadalajara/Zapopan (solo conteo) = **2.599 agregados**.
- **Europa:** v10.18 contó 2.115 candidatos **brutos** (elementos con
  nombre no presentes en el archivo, sin dedup entre ellos ni filtro de
  adiestramiento). Hoy: 2.037 candidatos únicos post-filtro, menos 172
  dups = 1.865 agregados. Por ciudad, mis conteos coinciden con v10.18
  en ±1 salvo Colonia 119→104, Berlín 100→90 y Bruselas 95→89 (áreas de
  perros partidas en varios segmentos/vías con el mismo nombre, colapsadas
  a un lugar) y deriva de OSM desde el 26-oct (Varsovia 100→101, Praga
  49→50, Bratislava 44→45, Sofía 54→55; el resto exacto).
- **LatAm/Canadá:** v10.18 contó 626 solo en las 10+6 ciudades top por
  población. Yo consulté **todas** las ciudades en tope (13+11): las 5 no
  contadas en v10.18 aportan Montevideo 1, San José CR 23, Gatineau 45,
  Burnaby 87 y Mississauga 52 candidatos. En las ciudades ya contadas,
  mis números coinciden en ±1 (São Paulo 29→28, Calgary 51→50; resto
  exactos; Vancouver 79 y Toronto 108, Montreal 122, Ottawa 45, Brampton
  13, Surrey 64 idénticos).

## 7. Ejecución y retoques posteriores

- El coordinador aplicó los agregados y el tope 300 en los 3 scripts
  regionales + `COMO_CARGAR_CIUDADES.md` (23:13 UTC) usando los archivos
  de estado de este trabajo; mi corrida `--aplicar` posterior (23:17 UTC)
  encontró las 55 ciudades ya en estado "aplicado" y no insertó nada más
  ("aplicados ahora: 0"): los totales 7.345/3.917/2.660 ya estaban
  correctos y se confirmaron por conteo independiente con Node
  (2.599/2.599 agregados presentes en los JS, 0 ausentes).
- Retoques míos tras esa aplicación: (1) docstring de
  `cosecha-canada.py` ("Tope 120" → "Tope 300 … v10.20; antes 120");
  (2) cabecera de `datos-europa.js`: el comentario de categorías no
  listaba `parque`/`peluqueria` (sí lo hacían LatAm y Canadá); añadidas;
  (3) `COMO_CARGAR_CIUDADES.md` línea 71: corrección factual (ver §1).
  `node --check` OK tras los tres retoques. Respaldos previos a la
  aplicación en `/tmp/datos-{europa,latam,canada}.js.pre-v1019.bak`.

## 8. Lo que quedó pendiente y por qué

1. **Guadalajara y Zapopan (10+10 candidatos):** solo conteo, para el
   agente dueño de esas dos ciudades.
2. **Parques y peluquerías de las ciudades SIN tope** (23 en Europa, resto
   en LatAm/Canadá): no se agregaron en esta pasada; el tope no las
   bloqueaba, pero la tarea era los candidatos que quedaron fuera POR el
   tope. **Hecho en v10.21** (+876 lugares, ver NOTA-v1021.md §3).
3. **Distancia al centro (observación, sin filtro aplicado):** 782 de los
   2.599 agregados (30 %) están a más de 15 km del centro de su ciudad
   (Europa 619/1.865, 33 %, máx. 39,8 km en la esquina de la caja ±0,3°;
   LatAm 28/148, máx. 23,6 km; Canadá 135/586, máx. 24,7 km). Es la
   consecuencia de la caja ±0,3° de Europa (la misma que usa el validador
   y que usó v10.18 para contar los 2.115; la nota v10.18 ya advertía
   candidatos a ~30 km en municipios vecinos). No apliqué un corte de
   distancia porque habría sido una regla inventada que cambia el
   conjunto acordado; si el coordinador quiere un radio menor, es una
   decisión con su número.
4. **Ciudades vecinas que comparten lugares:** el mismo fenómeno que
   Guadalajara/Zapopan existe en Canadá y ya estaba en los datos: Ottawa
   y Gatineau comparten 114 de sus 120 lugares anteriores (40 de los 41
   agregados nuevos en cada una son los mismos objetos), Vancouver y
   Burnaby 92 (55 de los nuevos), Burnaby y Surrey 64 (41 de los nuevos).
   Es consecuencia de las cajas solapadas y del dedup por ciudad; no se
   tocó (la decisión del dueño sobre Guadalajara/Zapopan — asignar a la
   ciudad más central con letrero — fue solo para esas dos).
5. **El tope no garantiza mezcla por categoría en una re-cosecha:** una
   cosecha futura con el tope 300 vuelve a ordenar por completitud y
   distancia y puede volver a dejar fuera parques/peluquerías; harían
   falta huecos reservados por categoría (pendiente ya anotado en
   v10.18 §5).
6. **Colombia y EE. UU. siguen en tope 120** en sus scripts de cosecha
   (ver §1); sus datos no se re-cosecharon aquí.
7. **Muestreo de verificación:** se verificaron los 2.599 agregados por
   ID (no una muestra), pero la verificación es contra Overpass en vivo
   del 26-oct por la noche; si OSM cambia, un lugar verificado hoy puede
   desaparecer mañana (como le pasó al "North Burnaby Pet Hospital" en
   v10.18).

## 9. Archivos de trabajo (en `~/workspace/app-mascotas/`)

- `cosecha-v1019-tope.py` + `cosecha-v1019-tope.json` + `overpass-v1019/`
  (57 respuestas crudas Overpass) — cosecha de candidatos.
- `agregar-v1019-tope.py` + `agregar-v1019-tope.json` — filtros, dedup y
  agregado (listas completas de agregados, excluidos y duplicados).
- `verificar-v1019-tope.py` + `verificar-v1019-tope.json` +
  `verificar-v1019-tope.log` — verificación por ID (2.599/2.599).
- `datos-europa-v1019.json`, `datos-latam-v1019.json`,
  `datos-canada-v1019.json` — exportaciones JSON de trabajo (hechas tras
  la fusión v10.19: Guadalajara/Zapopan figuran con 143; ver §3 LatAm).
- `validar-europa-v1018.js`, `validar-latam-canada-v1018.js` — validadores
  reutilizados (0 errores en ambos).

No se tocó `index.html`, `sw.js`, `firebase.js`, `manifest.json` ni archivos
de otros agentes. No se fusionó ni publicó nada; el coordinador hace el PR.
