# Nota de datos — Europa (PetNear v10.18)

- **Archivo:** `datos-europa.js` (rama `desarrollo/mascotas-v10`, repo `radiolatinapp/mascotas`)
- **Ámbito:** Europa — 56 ciudades.
- **Fecha del trabajo:** 2026-10-26.
- **Fuente de todos los datos:** OpenStreetMap (ODbL) vía Overpass. No se inventó ningún dato, lugar ni función. Servicios gratuitos únicamente.
- **Total tras esta revisión:** 5.480 lugares (antes 5.482; −2 corregidos, ver §1).
- **Totales por categoría:** vet 2.670, tienda 2.340, refugio 308, zoo 162. El archivo sigue teniendo solo las 4 categorías de la cosecha original (vet/tienda/refugio/zoo); no hay ningún lugar `parque` ni `peluqueria` todavía (ver §4).
- **Ciudades en el tope de 120 lugares:** 33 de 56.

## 1. Validación automática de los 5.482 lugares

Script: `validar-europa-v1018.js` (Node; salida completa en `validacion-europa-v1018.json`).
Reglas comprobadas en cada lugar: nombre no vacío; categoría válida
(`vet`/`tienda`/`refugio`/`zoo`/`parque`/`peluqueria`); `lat`/`lng` numéricos y
en rango; coordenadas dentro de ±0,3° del centro de su ciudad; sin duplicados
(mismo nombre + mismas coordenadas); `horas` igual a `null`; sin campo `rating`;
nota exactamente `"Dato de OpenStreetMap"`.

| Tipo de error | Encontrados | Corregidos |
|---|---:|---:|
| Sin nombre | 0 | — |
| Sin categoría | 0 | — |
| Categoría inválida | 0 | — |
| Sin latitud / sin longitud | 0 | — |
| Latitud fuera de rango | 0 | — |
| Fuera del radio ±0,3° del centro | 2 | 2 eliminados |
| Duplicados (nombre + coordenadas) | 0 | — |
| `horas` distinto de `null` | 0 | — |
| Campo `rating` presente | 0 | — |
| Sin nota / nota distinta de OSM | 0 | — |
| Teléfono malformado | 0 | — |

**Únicos errores (2, ambos en Helsinki, eliminados con evidencia):**

1. `Talliklinikka`, vet, (60.209144, 24.643196) — longitud a 0,300345° al oeste
   del centro de Helsinki (24.943541): fuera del radio. Dirección en OSM:
   "7 Pitäjänristi" (Espoo, municipio vecino, no Helsinki).
2. `9lives Espoo`, vet, (60.210368, 24.642713) — longitud a 0,300828° del
   centro: fuera del radio. El propio nombre indica Espoo; dirección
   "8 Espoontie".

Ambos se eliminaron del archivo (no se reubicaron: pertenecen a Espoo, ciudad
que no está en la lista de 56). Helsinki queda con 114 lugares. Tras la
corrección, la validación se repitió: **0 errores en los 5.480 lugares**.
`node --check datos-europa.js` pasa sin errores. La cabecera del archivo se
actualizó de 5.482 a 5.480 lugares.

## 2. Distribución por ciudad y casos sospechosos

La cosecha original (`cosecha-europa.py`, 2026-10-25) ordenó los lugares por
datos completos (teléfono + dirección) y luego por distancia al centro, y
cortó en 120 por ciudad. Eso explica casi todas las distribuciones raras:
en las ciudades en tope, las veterinarias y tiendas con datos completos
llenan los 120 huecos antes de que entren refugios y zoos.

Ciudades con 0 refugios o 0 zoos en el archivo (con lo que hay en OSM en la
caja de ±0,3° para comparar):

| Ciudad | En archivo | En OSM (caja ±0,3°, con nombre) | Explicación |
|---|---|---|---|
| Madrid | vet 85, tienda 32, refugio 3, zoo 0 | vet 273, tienda 140, refugio 20, zoo 2 | Tope 120: los 2 zoos de OSM no entraron |
| Bilbao | vet 46, tienda 27, refugio 1, zoo 0 | vet 53, tienda 29, refugio 2, zoo 0 | Fiel a OSM: no hay ningún zoo en la caja |
| Londres | vet 85, tienda 34, refugio 1, zoo 0 | vet 318, tienda 187, refugio 10, zoo 17 | Tope 120: hay 17 zoos en OSM y ninguno entró |
| Milán | vet 54, tienda 58, refugio 8, zoo 0 | vet 175, tienda 186, refugio 27, zoo 4 | Tope 120 |
| Turín | vet 43, tienda 67, refugio 10, zoo 0 | vet 54, tienda 74, refugio 14, zoo 4 | Tope 120 |
| Atenas | tienda 97, vet 23, refugio 0, zoo 0 | tienda 261, vet 89, refugio 5, zoo 3 | Tope 120; ver detalle abajo |
| Kyiv | tienda 79, vet 37, refugio 4, zoo 0 | tienda 350, vet 122, refugio 4, zoo 30 | Tope 120: hay 30 zoos en OSM y ninguno entró |
| Reikiavik | vet 10, tienda 8, refugio 1, zoo 0 | vet 10, tienda 8, refugio 1, zoo 0 | Fiel a OSM: no hay zoo en la caja |
| Tirana | tienda 6, vet 4, zoo 1, refugio 0 | tienda 6, vet 5, zoo 1, refugio 0 | Fiel a OSM: no hay refugio en la caja |

**Atenas (el caso más sospechoso: 97 tiendas / 23 vets, 0 refugios, 0 zoos):**
verificado contra OSM en vivo. En la caja hay 261 `shop=pet`, 89 veterinarias,
5 refugios y 3 zoos con nombre. Los 3 zoos son `mini zoo`, `Αττικό Ζωολογικό
Πάρκο` (el zoo de Ática) y `Συλλογή Ζώων - Φυτών`. No es un error de datos de
OSM ni de la cosecha: la cosecha priorizó lugares con teléfono y dirección y
el tope de 120 se llenó con tiendas y veterinarias antes de llegar a los
refugios y zoos. La distribución es real según las reglas de la cosecha, pero
deja fuera categorías enteras en Atenas, Londres, Kyiv, Milán, Turín y Madrid.

**Ámsterdam (15 zoos, el valor más alto):** en OSM hay 86 `tourism=zoo` en la
caja, casi todos `kinderboerderij` (granjas urbanas infantiles holandesas:
Kinderboerderij de Pijp, Boerderij Westerpark, De Ezelkeet, etc.) más el zoo
Artis. Los 15 del archivo son 14 granjas urbanas + Artis. No es un error: es
como OSM etiqueta esas granjas (`tourism=zoo`). Si se quiere distinguir
"zoo de verdad" de "granja urbana", hace falta una regla aparte (no existe
hoy en la app).

## 3. Verificación por muestreo contra Overpass

- **Método:** una consulta Overpass por ciudad (caja centro ±0,3°, etiquetas
  vet/tienda/refugio/zoo + `animal_boarding`, `dog_park`, `pet_grooming`),
  con `curl -G` (`data=`), espejos en cascada
  (`overpass-api.de` → `overpass.kumi.systems` → `overpass.private.coffee`).
  Emparejamiento: nombre normalizado exacto + distancia < 300 m. Si un lugar
  no aparecía en la caja, reintento dirigido `around:250` con su categoría.
  Script: `verificar-europa-v3.py`; resultados en
  `verificacion-europa-v1018.json` (detalle lugar por lugar) y
  `verificacion-europa-v1018.log`.
- **Muestra:** 211 lugares — 5 en cada una de las 33 ciudades en tope de 120
  y 2 en cada una de las otras 23 (se muestreó de más a propósito: la tarea
  pedía 5 en las 15 más grandes y 2 en las demás; con 5 en las 33 en tope se
  cumple bajo cualquier lectura de "las más grandes"). Selección estratificada
  por categoría (refugio 83, tienda 66, vet 35, zoo 27 en la muestra).
- **Resultado: 211 verificados, 0 fallidos, 0 sin respuesta.** Distancia media
  entre las coordenadas del archivo y OSM: 1,8 m; mediana 0,0 m. Ningún lugar
  muestreado necesitó el reintento `around:250`.
- **Corrección metodológica aplicada:** el primer emparejamiento usaba una
  normalización que elimina caracteres no ASCII, lo que vaciaba los nombres
  cirílicos y griegos (`"" == ""`) y produjo 2 falsos positivos (Sofía
  `Софийски зоопарк` emparejado con otra cosa a 288,6 m; Kyiv
  `Кототель "Мир Мяу"` a 58,2 m). Se re-verificaron con normalización Unicode
  (`reverificar-no-latinos-v1018.py`): ambos existen en OSM con su nombre
  exacto a 0,1 m y 0,0 m. El conteo final de 211/211 ya incluye esa corrección.
  Un tercer caso (Bucarest, `Grădina Zoologică București` vs OSM `Bucureşti`,
  11,2 m) es el mismo lugar con variante ortográfica rumana (ș/ş), verificado.
- **Estado de los espejos durante la corrida (2026-10-26 ~18:30–19:51 UTC):**
  `overpass-api.de` responde pero se satura a menudo (HTTP 502, "at
  capacity"); `overpass.kumi.systems` y `overpass.private.coffee` no responden
  desde este sandbox (HTTP 000 / timeout). Todas las consultas terminaron
  saliendo por `overpass-api.de` con backoff (esperas de 30–120 s). La corrida
  completa tardó ~1 h 20 min por esa saturación. Las cajas OSM descargadas
  quedan en `/tmp/overpass-europa-v1018/` (56 archivos JSON, no en el repo).

## 4. Enriquecimiento: parques y peluquerías (ciudades en tope de 120)

- **Método:** en las mismas consultas por ciudad se recogieron
  `leisure=dog_park` → `parque` y `shop=pet_grooming` → `peluqueria` con
  nombre y coordenadas.
- **Resultado: 0 lugares agregados.** Las 33 ciudades en tope ya están en
  120 lugares, así que por la regla del tope no se agregó nada en ninguna.
  Candidatos nuevos disponibles (con nombre, no presentes ya en el archivo):
  **2.115 en total** — 883 parques y 1.232 peluquerías.

| Ciudad | Parques OSM | Peluquerías OSM | Candidatos nuevos | Agregados |
|---|---:|---:|---:|---:|
| Londres | 40 | 127 | 167 | 0 (tope 120) |
| Budapest | 58 | 104 | 162 | 0 (tope 120) |
| París | 47 | 88 | 135 | 0 (tope 120) |
| Colonia | 66 | 53 | 119 | 0 (tope 120) |
| Milán | 56 | 45 | 101 | 0 (tope 120) |
| Berlín | 48 | 52 | 100 | 0 (tope 120) |
| Varsovia | 8 | 93 | 100 | 0 (tope 120) |
| Viena | 59 | 38 | 97 | 0 (tope 120) |
| Bruselas | 59 | 36 | 95 | 0 (tope 120) |
| Hamburgo | 46 | 34 | 80 | 0 (tope 120) |
| Fráncfort | 45 | 22 | 67 | 0 (tope 120) |
| Barcelona | 40 | 26 | 66 | 0 (tope 120) |
| Madrid | 37 | 28 | 65 | 0 (tope 120) |
| Atenas | 10 | 53 | 63 | 0 (tope 120) |
| Manchester | 8 | 51 | 59 | 0 (tope 120) |
| Sofía | 3 | 52 | 54 | 0 (tope 120) |
| Lisboa | 35 | 16 | 51 | 0 (tope 120) |
| Roma | 36 | 14 | 50 | 0 (tope 120) |
| Praga | 32 | 18 | 49 | 0 (tope 120) |
| Belgrado | 16 | 33 | 49 | 0 (tope 120) |
| Múnich | 12 | 36 | 48 | 0 (tope 120) |
| Zúrich | 11 | 35 | 46 | 0 (tope 120) |
| Bratislava | 23 | 22 | 44 | 0 (tope 120) |
| Turín | 18 | 21 | 39 | 0 (tope 120) |
| Lyon | 13 | 22 | 35 | 0 (tope 120) |
| Róterdam | 16 | 18 | 34 | 0 (tope 120) |
| Ámsterdam | 17 | 14 | 31 | 0 (tope 120) |
| Cracovia | 5 | 25 | 30 | 0 (tope 120) |
| Kyiv | 9 | 14 | 23 | 0 (tope 120) |
| Birmingham | 1 | 19 | 20 | 0 (tope 120) |
| Porto | 6 | 9 | 15 | 0 (tope 120) |
| Bucarest | 2 | 9 | 11 | 0 (tope 120) |
| Riga | 1 | 9 | 10 | 0 (tope 120) |
| **Total 33 ciudades** | **883** | **1.232** | **2.115** | **0** |

Ejemplos de candidatos (no agregados, solo contados): Madrid — "Parque
Dogville", "Lugar para Perros"; Londres — 127 peluquerías; París — "Caniparc",
"Espace canin"; Budapest — 104 peluquerías. Los 5 primeros ejemplos por ciudad
están en `verificacion-europa-v1018.json` (`resumen.enriquecimiento[].ejemplos_nuevos`).

**Advertencia sobre los candidatos:** no están verificados uno por uno. Varios
`leisure=dog_park` de OSM no son parques públicos para perros sino clubes o
escuelas de adiestramiento (p. ej. "Hundeschule24.de" en Berlín, "Kanstak
Educación Canina" en Barcelona, "Club Canin" en París), y algunos están lejos
del centro aunque dentro de la caja de ±0,3° (p. ej. candidatos de Barcelona a
~30 km, en municipios vecinos). Si algún día se agregan, hay que filtrarlos
(por distancia al centro y por tipo) y verificarlos antes.

## 5. Lo que quedó pendiente y por qué

1. **Parques y peluquerías sin agregar (2.115 candidatos):** las 33 ciudades
   grandes están en el tope de 120 y la regla prohíbe agregar ahí. Para que
   entren haría falta una decisión del coordinador/usuario: subir el tope,
   o sustituir entradas de vet/tienda por parques y peluquerías, o reservar
   huecos por categoría en la próxima cosecha. Yo no tomé esa decisión.
2. **Refugios y zoos ausentes en ciudades en tope (Atenas, Londres, Kyiv,
   Milán, Turín, Madrid):** existen en OSM pero no entraron por el orden de
   la cosecha (datos completos + distancia, tope 120). Corregirlo exige una
   nueva cosecha con huecos reservados por categoría, no un parche manual.
3. **Verificación por muestreo, no exhaustiva:** se verificaron 211 de 5.480
   lugares (3,9 %). El resto se validó solo automáticamente (§1). Una
   verificación completa exigiría muchas más consultas Overpass y el servidor
   estaba saturado (ver §3).
4. **Espejos Overpass:** `kumi` y `private.coffee` no responden desde este
   sandbox; solo `overpass-api.de` funciona, con 502 frecuentes. Si se repite
   la verificación en horas de menos carga, irá más rápido.
5. **Las 23 ciudades que no están en tope** (Valencia 95, Sevilla 56,
   Bilbao 74, Marsella 49, Glasgow 76, Dublín 102, Ginebra 54, Nápoles 58,
   Estocolmo 116, Gotemburgo 55, Oslo 51, Copenhague 74, Helsinki 114,
   Zagreb 80, Liubliana 35, Vilna 82, Tallin 96, Reikiavik 19, Luxemburgo 54,
   La Valeta 57, Sarajevo 18, Tirana 11, Chisináu 94) no se enriquecieron en
   esta pasada porque la tarea pedía solo las ciudades más grandes; sus
   parques y peluquerías de OSM no se contaron.

## 6. Archivos de trabajo

- `validar-europa-v1018.js` + `validacion-europa-v1018.json` — validación automática.
- `verificar-europa-v3.py` + `verificacion-europa-v1018.json` + `verificacion-europa-v1018.log` — muestreo Overpass y enriquecimiento.
- `reverificar-no-latinos-v1018.py` — corrección de los 2 falsos positivos de normalización.
- `dump-europa-json.js` — volcado auxiliar del JS a JSON para los scripts.
- Copia de seguridad previa a la corrección: `/tmp/datos-europa-v1017.bak` (no en el repo).
- Cajas OSM descargadas: `/tmp/overpass-europa-v1018/` (56 archivos JSON, no en el repo).

No se tocó `index.html`, `sw.js`, `firebase.js`, `manifest.json` ni archivos de
otros agentes. No se fusionó ni publicó nada; el coordinador hace el PR.
