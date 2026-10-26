# NOTA — Datos LatAm + Canadá v10.18 (2026-10-26)

Agente de datos PetNear — ámbito: Latinoamérica (fuera de Colombia) y Canadá.
Repo `radiolatinapp/mascotas`, rama `desarrollo/mascotas-v10`.
Archivos tocados: `datos-latam.js`, `datos-canada.js` (nada más; sin fusión ni publicación).

## 1. Estado final

| Archivo | Ciudades | Lugares antes | Lugares ahora | Cambio |
|---|---|---|---|---|
| `datos-latam.js` | 62 | 3.723 | **3.723** | 0 (sin cambios de lugares) |
| `datos-canada.js` | 31 | 2.028 | **2.074** | −1 eliminado + 48 agregados − 1 duplicado = +46 |
| **Total** | **93** | **5.751** | **5.797** | **+46** |

Categorías finales — LatAm: vet 2.306, tienda 1.244, refugio 101, zoo 72.
Canadá: vet 850, tienda 1.007, refugio 144, zoo 26, **peluqueria 22, parque 25** (categorías nuevas).
`node --check datos-latam.js datos-canada.js`: **OK**.
Cabeceras actualizadas a "(verificado 2026-10-26)" y con las 6 categorías en el comentario.

## 2. Validación automática de los 5.751 lugares (paso 1)

Script: `validar-latam-canada-v1018.js` (Node; carga los JS tal cual y verifica:
`n`/`cat`/`lat`/`lng` presentes; `cat` válida; coordenadas dentro de ±0,3° del centro
de su ciudad; sin duplicados mismo nombre normalizado + mismas coordenadas;
`horas` null; sin campo `rating`/`stars`/`valoracion`; sin campos extra;
`nota` = "Dato de OpenStreetMap"; `dir`/`tel` no vacíos).

**Resultado: 0 errores en los 5.751 lugares.** Conteo de errores por tipo:

| Tipo | Cantidad |
|---|---|
| nombre_faltante | 0 |
| cat_invalida | 0 |
| coords_faltantes | 0 |
| fuera_de_radio (±0,3°) | 0 |
| horas_no_null | 0 |
| rating_inventado | 0 |
| duplicado (misma ciudad) | 0 |
| campo_extra | 0 |
| nota_distinta | 0 |
| dir_vacia / tel_vacio | 0 |

Revalidado al final sobre los 5.797 lugares (con las 2 categorías nuevas): **0 errores**.
Detalle en `validacion-v1018.json`.

## 3. Verificación por muestreo contra Overpass (paso 2)

Script: `verificar-muestreo-v1018.py` (2 fragmentos en paralelo, estado en
`verificacion-muestreo-v1018.json`). Una consulta por ciudad con las 4 categorías
de la cosecha y la misma caja; si una muestra no aparece, reintento dirigido
`around:250` con su etiqueta. Criterio de acierto: mismo nombre normalizado y
distancia ≤ 250 m.

- Ciudades: **93/93** (0 con error de consulta).
- Muestras: **255** — 5 en cada una de las 23 ciudades de 120 lugares
  (13 LatAm + 10 Canadá) y 2 en cada una de las otras 70.
- **Verificadas: 254. Fallidas: 1.**

### Único fallo → eliminado con evidencia

- **Vancouver — "North Burnaby Pet Hospital"** (vet, 49.281184, -123.004756,
  4431 Hastings Street). No aparece en la consulta de caja ni en el reintento
  `around:250`. Confirmado con 5 consultas adicionales por nombre
  (`name~"North Burnaby Pet Hospital"`, `around:500`, sin filtro de etiqueta):
  **4 devolvieron 0 elementos en OSM** (la 5ª dio 502 por saturación) — el nodo fue eliminado o renombrado entre la cosecha
  del 25-oct y hoy. **Lugar eliminado de `datos-canada.js`** (Vancouver 120 → 119
  antes del enriquecimiento). No estaba en la lista de Burnaby.

### Disponibilidad de Overpass durante el trabajo (2026-10-26 ~18:00–19:30 UTC)

- `overpass.kumi.systems` y `overpass.private.coffee`: **sin respuesta** desde este
  sandbox (HTTP 000, timeout) durante toda la sesión.
- `overpass-api.de`: responde rápido pero con **502 "at capacity"** intermitente;
  se usó backoff exponencial (15/30/60/120/240 s) como recomienda el propio 502.
  También probados sin éxito: `overpass.nchc.org.tw` (000) y
  `overpass.openstreetmap.ru` (000). Todas las consultas terminaron saliendo por
  `overpass-api.de`.

## 4. El sesgo vet de Guadalajara / Zapopan / Guayaquil: REAL en OSM, amplificado por el tope

Conteos brutos de OSM en la caja de cada ciudad (antes de tope/dedup/orden;
solo Buenos Aires truncó a 800 elementos, sus cifras son cotas inferiores):

| Ciudad | vet | tienda | refugio | zoo | Total caja | En datos |
|---|---|---|---|---|---|---|
| Guadalajara | **311** | 10 | 1 | 5 | 327 | 120 vet (100%) |
| Zapopan | **309** | 7 | 1 | 5 | 322 | 117 vet (98%) |
| Guayaquil | **126** | 17 | 2 | 1 | 146 | 106 vet (88%) |
| Lima | 340 | 74 | 6 | 8 | 428 | 101 vet (84%) |
| Arequipa | 28 | 1 | 0 | 1 | 30 | 23 vet (92%) |
| Ciudad de México | 185 | 71 | 9 | 9 | 274 | 80 vet (67%) |
| São Paulo | 200 | 362 | 12 | 4 | 578 | 50 vet (42%) |
| Buenos Aires | ≥355 | ≥444 | ≥1 | — | 800 (trunc.) | 70 vet (58%) |

**Veredicto: el sesgo es REAL en OpenStreetMap, no un artefacto de la cosecha.**
En Guadalajara OSM mapea 31 veterinarias por cada tienda de mascotas. El tope de
120 y el orden (completitud tel+dir, luego distancia) lo amplifican hasta el 100%:
las 10 `shop=pet` de la caja de Guadalajara tienen en su mayoría **sin teléfono ni
dirección** (solo 2 de 10 tienen tel+dir: Petco Acueducto y Petco Ávila Camacho),
y esas 2 están a ~7,0 y ~9,7 km del centro, más lejos que el vet nº 120 (6,8 km),
así que el orden por distancia las deja fuera del corte. Los 120 vet de Guadalajara
tienen todos tel y dirección (120/120).

### Observación adicional: Guadalajara y Zapopan comparten 97 lugares

Son municipios vecinos del mismo área metropolitana con cajas de cosecha
solapadas: **97 de los 120 lugares aparecen en ambas ciudades** (mismo nombre
normalizado a < 0,3 km). No es un error de validación (el dedup es por ciudad),
pero el usuario ve los mismos lugares en dos ciudades distintas. Queda anotado;
corregirlo (p. ej. asignar cada lugar a una sola ciudad) es decisión del coordinador.

## 5. Enriquecimiento: parques y peluquerías (paso 3)

Script: `enriquecer-v1018.py --aplicar` (estado en `enriquecimiento-v1018.json`).
Consultas Overpass `leisure=dog_park` → `parque` y `shop=pet_grooming` →
`peluqueria`, misma caja de la cosecha. Solo con nombre y coordenadas;
`horas:null`; `nota:"Dato de OpenStreetMap"`. Dedup contra lugares existentes
(mismo nombre normalizado a < 0,3 km). Tope 120 por ciudad.

**Criterio de "10 ciudades más grandes": por población.** (Lectura alternativa —
top 10 por nº de lugares — dejaría las 20 ciudades en 120 y el resultado sería
0 altas en todas partes; se documenta para que el coordinador lo tenga en cuenta.)

### Lugares agregados: 47 netos (48 brutos − 1 duplicado eliminado, ver §6)

| Ciudad | Antes | Candidatos OSM (parque/peluqueria) | Agregados | No caben | Dup descartados |
|---|---|---|---|---|---|
| Edmonton | 96 | 27 (17/10) | **24** (14 parque + 10 peluqueria) | 3 | 0 |
| Winnipeg | 52 | 13 (5/8) | **12** (5 parque + 7 peluqueria) | 0 | 1 |
| Vancouver | 119 | 79 (38/41) | **1** (peluqueria) | 77 | 1 |
| Hamilton | 98 | 11 (7/4) | **11** (7 parque + 4 peluqueria) | 0 | 0 |
| **Total Canadá** | — | **130** | **48 brutos / 47 netos** | **80** | **2** |

Edmonton y Hamilton quedan en 120; Vancouver queda en 120; Winnipeg queda en 63
(64 tras el alta bruta, menos 1 duplicado eliminado después, ver §6).

### Ciudades en tope (120): 0 agregados, candidatos que NO caben

LatAm (145 candidatos; 144 sin sitio, 1 dup descartado en Santiago): São Paulo 29 (9 parque + 20 peluqueria),
Ciudad de México 17 (11+6), Lima 10 (5+5), Buenos Aires 25 (14+11),
Santiago 37 (19+18; 1 dup descartado), Río de Janeiro 6 (4+2), Salvador 3 (0+3),
Quito 6 (2+4), Guayaquil 2 (1+1), Guadalajara 10 (9+1).
Canadá (533 candidatos; 482 sin sitio): Toronto 108 (38+70), Montreal 122 (74+48),
Calgary 51 (32+19; 1 dup descartado), Ottawa 45 (16+29), Brampton 13 (7+6),
Surrey 64 (47+17).
**Total que no cabe por el tope: 626 lugares reales de OSM** (144 LatAm + 482 Canadá).

### Lista de los 47 lugares agregados (fuente: OpenStreetMap vía Overpass, 2026-10-26)

**Edmonton (24):** peluqueria — DK's Pet Grooming; Sadie's Pet Stop; Happy Pet Spa;
Wagsmore; Warm Hearts & Wet Noses; So Fetch!; Canine Addiction; The Posh Paw;
Doggie Stylz Salon; Pet Spaw. parque — Off-Leash Area; 104th Avenue Off-Leash Dog
Park; South Bark; Lauderdale Dog Park; Buena Vista Dog Park; Belgravia Dog Park;
Pleasantview Dog Park; Royal Gardens Corridor Off Leash Area (×4 segmentos
distintos, a 333–1.099 m entre sí); Central Bark Off-Leash Dog Park; Terwillegar
Off-Leash Dog Park; Sally Stewart Park off-leash area.
**Winnipeg (11):** peluqueria — The Pawsh Dog (2 sucursales); Fetching Style;
Hip Pooch; Barks n' Bubbles Pet Spa; Sophisticuts; The Belly Rub Club. parque —
Downtown Dog Park; Brenda Leipsic Off-leash Dog Park; Maple Grove Off-Leash Dog Park;
Sturgeon Road and Silver Avenue Dog Park.
**Vancouver (1):** peluqueria — Fetching Forever Dog Daycare & Spa.
**Hamilton (11):** peluqueria — The Blue Collar; A&P K9 Training and Daycare;
Pa-La's Pride & Groom; Pets N Groom. parque — Norton Leash Free Dog Park;
Pathfinder Park; Corktown Dog Park; Birch Avenue Dog Park; Borer's Falls Dog Park;
Corporal Nathan Cirillo Leashfree Dog Park; Day Use Leash Free area.
Coordenadas, direcciones y teléfonos (cuando OSM los trae) están en
`datos-canada.js`; el detalle con coordenadas está en `enriquecimiento-v1018.json`.

## 6. Correcciones aplicadas a los datos

1. **Eliminado "North Burnaby Pet Hospital"** (Vancouver) — ya no existe en OSM
   (5 consultas por nombre: 4 vacías y 1 con 502 por saturación + fallo en muestreo). Canadá 2.028 → 2.027.
2. **Eliminado "Maple Gtrove off-leash dog park"** (Winnipeg, agregado en este
   mismo paso) — mismo parque que "Maple Grove Off-Leash Dog Park" a 7 m de
   distancia; el nombre con errata ("Gtrove") es el que trae OSM para el segundo
   objeto (nodo vs vía del mismo parque). Se conserva el de nombre correcto y
   con dirección. Winnipeg 64 → 63.
3. Cabeceras de ambos archivos: fecha de verificación 2026-10-26, comentario de
   categorías con `parque` y `peluqueria`, totales actualizados.

No se corrigió nada más porque la validación dio 0 errores.

## 7. Pendiente y por qué

- **626 lugares reales de OSM (parques y peluquerías) no caben por el tope de 120**
  en las 16 ciudades grandes ya llenas (10 LatAm + Toronto, Montreal, Calgary,
  Ottawa, Brampton, Surrey). Entrarían solo si el coordinador sube el tope o
  reordena con otro criterio (p. ej. reservar hueco por categoría). Toronto (108)
  y Montreal (122) son los casos más grandes.
- **Guadalajara/Zapopan: 97 lugares compartidos** entre ambas ciudades (ver §4).
  Sin orden del coordinador no se toca: asignar cada lugar a una sola ciudad
  cambiaría el conteo de ambas.
- **Buenos Aires**: la caja truncó a 800 elementos en la verificación; los
  conteos brutos por categoría son cotas inferiores, no exactos.
- **Muestreo**: verificado contra OSM en vivo el 2026-10-26; si OSM cambia, un
  lugar verificado hoy puede desaparecer mañana (como le pasó al de Vancouver).
  El fallo de 1/255 (0,4%) es el nivel esperable de deriva entre cosecha y
  verificación.
- **Overpass**: kumi y private.coffee no respondieron en toda la sesión; todo
  salió por overpass-api.de con backoff por saturación (502). Si se repite el
  trabajo en horas de saturación, prever esperas largas.

## 8. Archivos de trabajo (en `~/workspace/app-mascotas/`)

- `validar-latam-canada-v1018.js` — validador (0 errores).
- `validacion-v1018.json` — resultado detallado de la validación.
- `verificar-muestreo-v1018.py` + `verificacion-muestreo-v1018.json`
  (y fragmentos `-s0`/`-s1`) — muestreo 255 lugares.
- `enriquecer-v1018.py` + `enriquecimiento-v1018.json` — enriquecimiento 47 netos.
- `datos-latam-v1018.json`, `datos-canada-v1018.json` — exportaciones JSON de
  trabajo (la de Canadá es anterior a la eliminación del duplicado de Winnipeg).
- Respaldo previo a la eliminación: `/tmp/datos-canada.js.bak-v1018`.
