# NOTA — Datos Charlotte + Ibagué (PetNear v10.18)

**Fecha:** 2026-10-26
**Agente:** agente de datos PetNear
**Archivos:** `datos-charlotte.js` (NEGOCIOS_CHARLOTTE) y `datos-ibague.js` (NEGOCIOS_IBAGUE)
**Método:** verificación web con fichas de Google (nombre, dirección, coordenadas exactas, teléfono, horarios, rating) y sitios oficiales; enriquecimiento OSM vía Overpass.

## Resumen

| Ciudad | Lugares | Verificados | Correcciones aplicadas | Agregados OSM |
|---|---|---|---|---|
| Charlotte | 69 | 40/40 | 5 | 29 |
| Ibagué | 24 | 22/22 | 0 | 2 |
| **Total** | **93** | **62/62** | **5** | **31** |

- **Ningún lugar eliminado:** no se encontró evidencia de cierre definitivo en ninguno de los 62.
- **Sin duplicados:** comprobado por nombre+coordenadas (0 duplicados en ambas ciudades).
- **Sintaxis validada:** `node --check datos-charlotte.js datos-ibague.js` → OK.
- **Coordenadas dentro de la ciudad:** todas dentro de su cuadro salvo Lazy 5 Ranch y Carrigan Farms, que están en **Mooresville, NC** (área metropolitana de Charlotte, ~35 min al norte), ya incluidos así en la lista curada y con dirección verificada.

## 1. Ibagué — 22/22 verificados, sin correcciones

Veterinarias (10): CaniVet, Clínica Veterinaria Los Andes, Clínica Veterinaria Animalitos (rating 5.0, 4 reseñas), Clinipets, Clínica Veterinaria Bienestar Animal, Clínica Veterinaria Agrogan Mascotas (rating 5.0, 3 reseñas), Central Veterinaria Mimaos, My Vet, Animales La 14, Mundo de los Animales.
Tiendas (9): Paraíso Animal, Lovely Pet Shop, Garritas Felices, MAUU, Amazon Fish and Pets, La Tienda de Terry, KANIGATY, Concentrados y Mangueras, Agropecuaria de la Hacienda.
Agropecuarias/farma (3): Comercializadora Agropecuaria del Tolima (rating 4.2, 5 reseñas), Agropecuaria Ibagué, Agroempresarios.

Notas:
- **Concentrados y Mangueras:** el horario de Google muestra "7:00 AM - 6:30 AM" (error evidente del listado); se conserva el [7, 18.5] del archivo.
- **Agropecuaria de la Hacienda:** Google muestra horario partido 8–12 / 14–17; el [8, 17] del archivo es el rango exterior, aceptable.
- **Comercializadora Agropecuaria del Tolima:** Google solo muestra dirección "57"; el archivo "Calle 28 4C-95" es más específico y coherente con las coordenadas — se conserva.
- **Agropecuaria Ibagué:** Google "Cra 4 #2111" = archivo "Cra 4 #21-11", mismo lugar.
- **Nominatim (OpenStreetMap) no tiene ninguno de estos 16 negocios pequeños como POI con nombre** (16 consultas el 2026-10-26, todas sin resultado): no hay duplicados OSM que temer en Ibagué.

## 2. Charlotte — 40/40 verificados

Veterinarias (16): Hight Veterinary Hospital (4.7, 46 reseñas), VCA Stoney Creek, Mallard Creek Animal Hospital (4.9, 102 reseñas), Banfield Pet Hospital, Brookdale Animal Hospital (5.0, 63 reseñas — coordenadas exactas confirmadas por la ficha de Google; latlong.net daba coordenadas ~130 m distintas y estaba mal), Ark Veterinary Services, CLT Vets, CityVet Charlotte Uptown, Queen City Animal Hospital, South End Veterinary Clinic (5.0, 38 reseñas), Crown Town Animal Hospital, Partners Animal Hospital, GoodVets Plaza Midwood, Livewell Animal Hospital of Elizabeth, Long Animal Hospital & Emergency Center (24 h), Animal Medical Hospital (4.6, 233 reseñas; urgencias 24/7), Monroe Road Animal Hospital.
Tiendas (8): Hollywood Feed, Pet Supplies Plus Elizabeth, Pet Supplies Plus Pineville-Matthews, Four Dogs Pet Supplies (4.9, 107 reseñas), Pet Wants Uptown, Pet Wants Brevard, Pet Wants Camden (5.0, 40 reseñas según ficha de Google; loc8nearme dice 4.8 — se conserva 5.0 por ser dato de Google), Petco Metropolitan.
Farma (2), zoo (2): Lazy 5 Ranch (4.7, 5.676 reseñas), SEA LIFE Charlotte-Concord (4.0, 1.178 reseñas).
Granja (1): Carrigan Farms (4.4, 422 reseñas). Refugio (1): CMPD Animal Care & Control. Adopción (1): Humane Society of Charlotte (4.7, 929 reseñas). Facultad (1): Central Piedmont CC (4.2, 457 reseñas).
Restaurantes dog-friendly (8): The Goodyear House, NoDa Brewing Company (4.8, 430 reseñas), Triple C Brewing Company (4.7, 583 reseñas), Birdsong Brewing Co. (4.7, 780 reseñas), Seoul Food Meat Company (4.8, 468 reseñas), Optimist Hall, The Suffolk Punch, Lucky Dog Bark & Brew Steele Creek.

Coordenadas confirmadas por ficha de Google (eran las 3 pendientes): Lazy 5 Ranch 35.622964, -80.720769 (idénticas al archivo), Carrigan Farms 35.600222, -80.768861 (idénticas al archivo), Humane Society of Charlotte 35.220766, -80.879215 (idénticas al archivo).

## 3. Correcciones aplicadas a datos-charlotte.js (5)

1. **Pet Supplies Plus Elizabeth — rating 5.0 → 4.5.** El 5.0 del archivo corresponde a la sub-ficha de Google "Grooming" (10 reseñas); la tienda en conjunto tiene 4.5 (508 reseñas, guide.in.ua) / 4.4 (loc8nearme).
2. **Lazy 5 Ranch — horas [9,17] → [9,16].** Fuentes (ficha de Google, glartent.com, city-data.com, kiddingaroundcharlotte.com): lun–sáb 9:00–17:00, dom 12:00–17:00, con última entrada una hora antes del cierre ("hasta una hora antes del atardecer"); hora efectiva de cierre 16:00.
3. **Optimist Hall — rating 4.0 → 4.7.** El 4.0 venía de una ficha de Google con 1 sola reseña; findglocal agrega 4.7 con 646 reseñas.
4. **The Suffolk Punch — horas [9,22.75] → [11,24]; rating añadido 4.4.** Ficha de Google: dom 10–21, lun–jue 11–22, vie 11–24, sáb 10–24 (apertura real 11:00 lun–vie, no 9:00); rating 4.4 (163 reseñas; restaurantji 4.3, 373 reseñas).
5. **Lucky Dog Bark & Brew Steele Creek — teléfono y horas añadidos (eran null).** Teléfono +1 980-443-6097 según el sitio oficial luckydogbarkandbrew.com (la ficha de Google muestra +1 980-326-1737 y BBB/Tripadvisor (704) 583-4750; se usa el del sitio oficial). Horas [6.5,21] (daycare lun–vie 6:30–19:00, bar 16:00–21:00; rango exterior según ficha de Google 6:30–21:00).

## 4. Casos en disputa / no corregidos

- **The Goodyear House — rating 4.3 (archivo) vs 5.0 (ficha de Google, solo 4 reseñas).** Se conserva 4.3: la muestra de 4 reseñas es demasiado pequeña para invalidar el dato del archivo. Pendiente de una fuente con más reseñas.
- **Pet Wants Camden — rating 5.0 (archivo, ficha de Google, 40 reseñas) vs 4.8 (loc8nearme).** Se conserva 5.0 por ser dato de Google.
- **Carrigan Farms — rating 4.4 (archivo y ficha de Google, 422 reseñas) vs 2.9 (Trip.com, 129 reseñas).** Se conserva 4.4.
- **Triple C Brewing — horas [12,22] del archivo son el rango exterior aceptable** (Google: lun–jue 16–22, vie–sáb 12–22, dom 12–20; sitio oficial igual). Ojo: Triple C tiene también un tasting room en el aeropuerto (5501 Josh Birmingham Pkwy) con el mismo teléfono; el archivo usa correctamente la sede de Griffith St.
- **Seoul Food Meat Company** tiene segunda sede en 421 E 26th St (mismo teléfono); el archivo usa correctamente la sede de 1400 S Church St.

## 5. Enriquecimiento OSM — COMPLETADO EN CHARLOTTE (2026-10-26, agente de reemplazo)

**Resultado: 29 lugares OSM agregados a Charlotte (40 → 69). Ibagué: 2 zoos agregados (22 → 24)** — Parque Temático Tacuraí y Mariposario del Tolima; dog_park, pet_grooming y animal_shelter confirmados en 0 en OSM (ver §5.4).

### 5.1 Script de reintento del agente anterior (`/tmp/overpass_rest.sh`, pid 10402, espejo overpass.private.coffee, timeout 280 s) — terminó 2026-10-26 ~19:24 EDT

| Consulta | Resultado |
|---|---|
| clt_dogpark | FAIL (2 intentos) |
| clt_groom | FAIL (2 intentos) |
| clt_shelter | FAIL (2 intentos) |
| clt_zoo | OK, 1 elemento → Carolina Raptor Center (agregado) |
| ibg_groom | OK, **0 elementos** (OSM no tiene peluquerías en Ibagué) |
| ibg_shelter | FAIL (2 intentos) |
| ibg_zoo | FAIL (2 intentos) |
| ibg_dogpark (consulta previa) | OK, **0 elementos** (OSM no tiene parques para perros en Ibagué) |

### 5.2 Reintento único del agente de reemplazo (`/tmp/overpass_retry_clt.sh`, 2026-10-26 ~19:25–19:37 EDT)

Una pasada por la cascada overpass-api.de → overpass.kumi.systems → overpass.private.coffee, timeout 280 s, con pausa de 60 s entre consultas:

- **overpass-api.de devolvió 406 Not Acceptable en las 3 consultas** (bloqueo del proxy de egress, igual que antes).
- **overpass.kumi.systems respondió bien en las 3**: clt_dogpark2.json **106 elementos**, clt_groom2.json **13 elementos**, clt_shelter2.json **5 elementos**. (No hizo falta llegar a private.coffee.)
- Otros agentes del proyecto seguían consultando Overpass en paralelo (overpass-v1018.py, overpass-fetch2.py), pero kumi.systems respondió en minutos, no en timeouts.

### 5.3 Lugares agregados a datos-charlotte.js (29, todos con horas:null, sin rating, nota:"Dato de OpenStreetMap")

**Zoo (1):** Carolina Raptor Center — way 566006865, 35.3503494, -80.9183712, 6000 Sample Rd, Huntersville, NC 28078.

**Parques para perros (13):** Lucky Dog Bark and Brew — nodo 12485260601, 35.2338452, -80.8725736, 2220 Thrift Rd, Charlotte, NC 28208 (coordenada confirmada por Nominatim y por la API de OSM, dos fuentes independientes; sede Uptown, distinta de la de Steele Creek que ya estaba como resto); Heather Ridge Dog Park — way 577304871, 35.2930975, -80.7341031; Agility Park — way 762574214, 35.0288987, -80.9626626; Pet Station Dog Park — way 775766340, 35.1434311, -80.864321; Canine Commons Dog Park — way 777519515, 35.0761841, -80.892893, 181 Lake Dr, Pineville; Weddington Road Bark Park — way 803908018, 35.3723237, -80.7041531, 8955 Weddington Rd, Concord; McAlpine Creek Dog Park — way 858762369, 35.1525195, -80.7449955, 8617 Monroe Rd, Charlotte; The Vineyards on Lake Wylie Dog Park — way 1066285545, 35.2286691, -80.9960801; Rosedale Dog park — way 1116348463, 35.4099492, -80.8658513; 9th Street Dog Park — way 1181005441, 35.2339839, -80.8413403, 417 W 9th St, Charlotte; Skiptown — way 1217875888, 35.2092087, -80.8643671, 222 Rampart St, Charlotte; Broadstone Ayrsley Dog Park — way 1227462459, 35.1322047, -80.9329177; Story University North Dog Park — way 1526234838, 35.3498027, -80.7009049, 3800 Morehead Rd, Charlotte.

**Peluquerías (13):** Million Dollar Dog, Inc — nodo 8700162068, 35.2473792, -81.0185364, 7202 Wilkinson Blvd, Belmont; QC Canine Design — nodo 10977961159, 35.2350646, -80.8405603; Bubbly Paws — nodo 11158426315, 35.199421, -80.8685335, 141 New Bern St, Charlotte; Whiskers Dog Spa — nodo 11874448224, 35.1468553, -80.8085411; Splash and Dash — nodo 12087779247, 35.1777435, -80.7561693; Tiffany's Pet Salon — nodo 12150538053, 35.1728188, -80.6567494, 11300 Lawyers Rd, Mint Hill; Grateful Pets — nodo 13480371196, 35.1475769, -80.7457742; Zoom Room Huntersville-Lake Norman — nodo 13566099000, 35.4123763, -80.854674, Statesville Rd, Huntersville; Feline Fabulous — way 323195436, 35.2218266, -80.8196102; Woof Gang Bakery & Grooming — way 323196843, 35.2209162, -80.8136904, 1311 Pecan Ave, Charlotte; Four Paws Dog Retreat — way 324522321, 35.1140681, -80.9118884, 10901 Downs Rd, Pineville; Grateful Pets Pet Grooming & Boarding — way 830373070, 35.3222069, -80.9539366, 10317 Rozzelles Ferry Rd, Charlotte; Zoom Room Dog Training - Fort Mill — way 1478750938, 34.9834174, -80.9400518, 5525 Arden Mill Dr, Fort Mill, SC.

**Refugios (2):** Cabarrus County Animal Shelter — nodo 9905272954, 35.3724337, -80.5625683, 244 Betsy Carpenter Pl SW, Concord; Carolina Waterfowl Rescue — way 894980471, 35.0900204, -80.594814, 5403 Poplin Rd, Indian Trail.

### 5.4 Elementos OSM NO agregados (con motivo)

- **The Humane Society of Charlotte** (way 1091924867, refugio): duplicado exacto del lugar ya existente como adopción (1348 Parker Dr; coordenadas a ~35 m). No se duplicó.
- **Dog Owner's Academy** (nodo 11237390319, etiquetado amenity=animal_shelter): el nombre indica academia de adiestramiento canino, no refugio; la etiqueta OSM parece errónea. No se agregó como refugio.
- **"Large Dog Park" / "Small Dog Park"** (ways 556630800/556630802) y **"Small Dogs Park" / "Large Dogs Park"** (ways 813219962/813219966): son las dos secciones cercadas (perros grandes/pequeños) de un mismo parque sin nombre propio; agregarlas como 4 lugares distintos sería ruido en el mapa. Tampoco se agregó **"Dog Run"** (way 1313563032, 1200 S Mint St), nombre genérico sin identidad de lugar. Los 88 elementos restantes de dog_park no tenían nombre.
- **Ibagué:** dog_park 0 elementos y pet_grooming 0 elementos (respuestas OK del espejo); animal_shelter 0 elementos y tourism=zoo 2 elementos — consulta combinada del coordinador por kumi.systems (~19:50 EDT, `/tmp/ibg_shelter_zoo.json`): **Parque Temático Tacuraí** (way 1041471960, 4.4768664, -75.2131132, zoo=wildlife_park) y **Mariposario del Tolima** (way 1265316598, 4.4576703, -75.195002), ambos agregados como zoo a datos-ibague.js (horas:null, nota:"Dato de OpenStreetMap"). Ibagué queda cerrada en 24 lugares.

### 5.5 Notas del enriquecimiento

- overpass-api.de y overpass.kumi.systems devuelven 406 Not Acceptable (incluso `/api/status`, también por curl directo; el proxy de egress los bloquea). Probado varias veces el 2026-10-26. **Novedad: kumi.systems SÍ respondió a las consultas del intérprete por GET/POST con datos en esta corrida (19:28–19:37 EDT), aunque su /api/status daba 406** — el 406 afecta al status, no siempre al intérprete. overpass-api.de siguió dando 406 en el intérprete.
- overpass.private.coffee funcionó una vez (prueba el 2026-10-26 ~18:10: JSON válido con nodos `leisure=dog_park`, entre ellos "Lucky Dog Bark and Brew", 2220 Thrift Rd, Charlotte, sin nombre el otro nodo), pero después se volvió inusable: consultas pequeñas agotan 120 s (curl exit 28) y las 3 primeras consultas del lote (dog_park, pet_grooming y animal_shelter de Charlotte) fallaron tras 2 intentos de 170 s cada una. Se canceló el script de lote para no saturar el espejo.
- **El espejo SÍ responde con timeouts largos:** la consulta de `leisure=dog_park` de Ibagué tardó **207,8 s y devolvió HTTP 200 con 0 elementos** — OSM no tiene ningún parque para perros mapeado en Ibagué. Se relanzaron las 7 consultas restantes con timeout de 280 s (script `/tmp/overpass_rest.sh`, log `/tmp/overpass_rest.log`): dog_park, pet_grooming, animal_shelter y tourism=zoo de Charlotte; pet_grooming, animal_shelter y tourism=zoo de Ibagué. Tiempo estimado ~25 min.
- **overpass.osm.ch** (espejo adicional probado fuera de la cascada): el `/api/status` responde, pero la consulta al intérprete también agotó 120 s.
- Otros agentes del proyecto estaban consultando Overpass en paralelo (procesos overpass-colombia-v1018.py, overpass-fetch2.py, overpass-v1018.py activos al mismo tiempo), lo que puede haber contribuido a la saturación.
- **Cierre de Ibagué (coordinador, ~19:50 EDT):** la consulta combinada animal_shelter + tourism=zoo por kumi.systems devolvió 2 elementos (los 2 zoos de §5.4, ya agregados) y 0 refugios. Ibagué queda cerrada en 24 lugares; no queda ninguna consulta pendiente.
- **"Lucky Dog Bark and Brew" (2220 Thrift Rd, Charlotte NC 28208):** coordenada exacta RESUELTA (35.2338452, -80.8725736, Nominatim + API OSM) y ya agregado como parque (ver §7.3).

## 6. Validación

- `node --check datos-charlotte.js datos-ibague.js` → OK (sin errores), verificado de nuevo tras agregar los 29 lugares OSM (2026-10-26 ~19:40 EDT).
- Duplicados (mismo nombre): 0 en ambas ciudades. Duplicados por coordenadas aproximadas (4 decimales): 0 en Charlotte; 1 en Ibagué — preexistente, no es duplicado real: Agropecuaria de la Hacienda (4.439315, -75.2246) y Comercializadora Agropecuaria del Tolima (4.439282, -75.224559) son dos negocios distintos verificados en la misma cuadra (Cl. 28 #4c-85 vs Calle 28 4C-95).
- Conteos tras los cambios: Charlotte 69 (vet 16, tienda 8, farma 2, zoo 3, parque 13, peluqueria 13, refugio 3, granja 1, adopcion 1, facultad 1, resto 8); Ibagué 24 (vet 10, tienda 9, farma 3, zoo 2).
- No se fusionó ni publicó nada; el coordinador hace el PR.

## 7. Pendientes

1. ~~Enriquecimiento OSM de Ibagué — PARCIALMENTE PENDIENTE.~~ RESUELTO por el coordinador ~19:50 EDT: consulta combinada animal_shelter + tourism=zoo por kumi.systems → 0 refugios, 2 zoos (Parque Temático Tacuraí y Mariposario del Tolima, ya agregados). Ibagué cerrada en 24 lugares.
2. Rating de The Goodyear House (4.3 vs 5.0 con 4 reseñas) — falta fuente con más reseñas.
3. ~~Coordenada exacta en OSM del dog_park "Lucky Dog Bark and Brew" (2220 Thrift Rd) para agregarlo como parque.~~ RESUELTO 2026-10-26 ~19:15 EDT: 35.2338452, -80.8725736 (Nominatim + API OSM), ya agregado como parque.
