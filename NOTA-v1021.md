# v10.21 — Toby, unificación Vancouver/Burnaby y parques/peluquerías de ciudades sin tope

**Fecha:** 2026-10-27. **Rama:** `desarrollo/mascotas-v10` (PR por abrir).
**Estado:** implementado y verificado en local. Fusión autorizada por el
dueño (27-oct 02:13 EDT).
**Origen:** órdenes del dueño (27-oct 01:50 EDT): nombre de la mascota,
Vancouver/Burnaby como Ottawa/Gatineau, e incluir todo lo de Europa,
Latinoamérica y Canadá.

## 0. Aclaración sobre el encargo (dato desactualizado)

El encargo decía que los 2.115 candidatos de Europa + 626 de LatAm/Canadá
"nunca se agregaron". **Eso ya no era cierto:** la v10.20 (fusionada en
main como `b28fd651`, PR #15) YA procesó esos candidatos de las ciudades
EN TOPE y agregó **2.599 lugares netos** (1.865 Europa + 148 LatAm +
586 Canadá), todos verificados por ID de OSM con 0 fallidos
(NOTA-v1019-tope.md §6 y §8; NOTA-v1020-tope.md §6). Verificado en local
antes de empezar: totales Europa 7.345, LatAm 3.917, Canadá 2.674, y una
muestra aleatoria de 108 de los 2.599 agregados (2 por ciudad) está
presente en los archivos. **No se volvieron a agregar** (serían
duplicados; el dedup los descartaría).

Lo que SÍ quedó fuera y es lo que se agrega en esta versión: los parques
(`leisure=dog_park`) y peluquerías (`shop=pet_grooming`) de las ciudades
SIN TOPE (23 en Europa, resto en LatAm/Canadá) — nunca se cosecharon ni
se agregaron, porque la pasada v10.20 solo cubrió las ciudades que
habían llegado al tope de 120 (NOTA-v1019-tope.md §8 punto 2,
NOTA-v1020-tope.md §6).

## 1. La mascota se llama Toby

El dueño escogió "Toby" (de Toby, Max, Rocky, Bruno). El logo y la imagen
del perro NO cambian; solo el nombre.

- La etiqueta del avatar clásico (el labrador chocolate, `mascota/gstop.png`,
  "la mascota por defecto" desde v10.5) pasa de "Clásico"/"Classic"/… a
  **"Toby"** en los 8 idiomas (`avatar.clasico` en `index.html`).
- El panel Acerca de PetNear presenta a la mascota con una línea nueva,
  clave i18n `aceMascota` en los 8 idiomas: ES "Nuestra mascota es Toby,
  el labrador chocolate." / EN "Our mascot is Toby, the chocolate
  Labrador." / PT "Nosso mascote é o Toby, o labrador chocolate." /
  FR "Notre mascotte est Toby, le labrador chocolat." / DE "Unser
  Maskottchen ist Toby, der Schokoladen-Labrador." / IT "La nostra
  mascotte è Toby, il labrador cioccolato." / NL "Onze mascotte is Toby,
  de chocolade labrador." / PL "Naszą maskotką jest Toby, czekoladowy
  labrador." (el nombre propio "Toby" no se traduce; la frase sí).
- No se tocó el nombre de la mascota del usuario ("Mi mascota" sigue
  siendo el nombre que cada usuario pone a su propio perro).

Verificado en Playwright: panel Acerca muestra "Toby" (ES y EN) y la
rejilla de avatares muestra "Toby" como primera etiqueta.

## 2. Vancouver/Burnaby unificadas con `comparteCon`

Mismo patrón que Ottawa/Gatineau (NOTA-v1020-ottawa-gatineau.md) y
Guadalajara/Zapopan (v10.19).

### 2.1 Solape recalculado = 148 exactos (no 92)

Recálculo exacto por nombre normalizado + coordenadas sobre el archivo
real `datos-canada.js` (script `/tmp/solape-van-bur.js`):

| Concepto | Número |
|---|---|
| Vancouver (antes) | 183 lugares |
| Burnaby (antes) | 190 lugares |
| Compartidos exactos (mismo nombre + mismas coords) | 148 |
| Compartidos cerca (mismo nombre + ≤150 m) | 0 |
| **Compartidos totales** | **148** |
| Solo Vancouver | 35 |
| Solo Burnaby | 42 |
| Mismo punto (≤10 m) con nombre distinto | 2 |
| **Unión por regla exacta** | **225** |

**Corrección al encargo:** el "92" era el análisis v10.19 (antes de la
v10.20); tras v10.20 Vancouver tiene 183 y Burnaby 190, y el solape real
es 148, no 92 — igual que en Ottawa/Gatineau, donde el solape real fue
154 y no 41.

**Los 2 pares en el mismo punto con nombre distinto:**

- "Paws on Fraser Vetrinary Hospital" (Vancouver) vs "Paws on Fraser
  Veterinary Hospital" (Burnaby): mismo negocio, mismo punto (0 m),
  misma categoría (vet), misma dirección (3465 Fraser Street). La copia
  de Vancouver trae una errata ("Vetrinary"). Se fusiona: se conserva la
  línea verbatim de Burnaby (ortografía correcta). Es el único par
  fusionado por errata; la regla de dedup del proyecto (<100 m, cualquier
  nombre = mismo lugar, v10.18) lo respalda.
- "Doggie Daycare" (Vancouver, tienda) vs "Dog Swim" (Burnaby, refugio),
  mismo punto (2213 Granville Street): nombres Y categorías distintos,
  sin evidencia de que sean el mismo negocio. Se conservan ambos, como
  en Ottawa/Gatineau (Britannia Heights a 80 m de otro negocio).

**Unión aplicada: 224** (148 compartidos + 1 par fusionado por errata +
34 solo-Vancouver + 41 solo-Burnaby).

### 2.2 Implementación (script `aplicar-vancouver-burnaby.py`, respaldo en `datos-canada.js.bak-v1021-van`)

- A la lista de Vancouver se le añadieron **verbatim las 41 líneas de
  los lugares solo de Burnaby** (con su `dir` original en Burnaby).
  Vancouver queda con **224**.
- La lista vieja de Burnaby se vació (queda un comentario que remite a
  la asignación) y al final del archivo se asigna **la misma
  referencia**: `CIUDADES_CANADA["burnaby"].lugares = CIUDADES_CANADA["vancouver"].lugares;`
  Sin copia duplicada.
- Ambas cabeceras llevan `comparteCon`: Vancouver → `"burnaby"`,
  Burnaby → `"vancouver"`.
- Cabecera del archivo actualizada: 31/31 (2674 → **2749** lugares, +75).

**Cinco copias con teléfono extra (sin pérdida de información):** en 5
pares compartidos la copia de Burnaby trae un teléfono que la de
Vancouver no tenía: `Bosley's` (+1-604-708-0186), `Vancouver Animal
Wellness Hospital` (+1-604-738-4664), `West King Edward Animal Clinic`
(+1-604-873-4433), `Woofgang` (+1-604-876-8759) y `NHV Natural Pet`
(+1-778-929-1574). Se conserva la línea **verbatim de Burnaby** para
esos 5 (con su `dir` en Burnaby). No hay ningún otro par con diferencias
fuera del `dir`.

**Efectos medidos (Node sobre el archivo real):**
- `vancouver.lugares.length = 224`, `burnaby.lugares.length = 224`,
  **misma referencia (`===`) = true**.
- 0 duplicados internos; la unión contiene los 34 solo-Vancouver y los
  41 solo-Burnaby (0 faltantes).
- Los 5 teléfonos conservados verificados por coordenadas (el Bosley's
  de 3425 Fraser Street trae +1-604-708-0186; hay otros 9 Bosley's
  distintos en la lista, cada uno con su propio teléfono).
- Ottawa/Gatineau intactos (168/168, misma referencia).

### 2.3 Letrero visible en ambas ciudades

No hizo falta tocar `index.html`: el mecanismo genérico de v10.19
(`comparteCon` + `ciudadComparte`) ya lo cubre. Textos esperados (ES):
en Vancouver, "Esta ciudad comparte su información con Burnaby"; en
Burnaby, "Esta ciudad comparte su información con Vancouver".
Verificado en Playwright (GPS en ambas + letrero oculto en CDMX).

### 2.4 Nota sobre el validador v10.18 (10 `fuera_de_radio`, esperados)

El validador `validar-latam-canada-v1018.js` reporta 10 errores
`fuera_de_radio`, todos en Vancouver (índices ≥183, el bloque
solo-Burnaby añadido): lugares de Surrey/Coquitlam (p. ej. Tynehead
Leash-Optional Area, dlng 0,355) que están a más de 0,3° de longitud del
centro de Vancouver. Antes del cambio el archivo tenía 0. **No son
errores de datos:** son lugares reales de OSM, correctamente asignados
a la lista compartida; la regla de radio del validador es de una sola
ciudad y no contempla las ciudades `comparteCon` (en Ottawa/Gatineau y
Guadalajara/Zapopan las vecinas caen dentro del radio y no se notó).
Resto de errores del validador: 0 en LatAm/Canadá; Europa 0 (DETALLE
TOTAL: 0).

## 3. Parques y peluquerías de las ciudades SIN TOPE

Cosecha en vivo por Overpass (`cosecha-v1021-sintope.py`, misma caja y
mismos filtros que v10.20) en las **92 ciudades sin tope** (23 Europa,
49 LatAm, 20 Canadá — las de menos de 120 lugares; corrección al
encargo: son 92, no 93; LatAm tiene 49, no 50). La primera pasada murió
sin dejar rastro a las 06:39 UTC con 53/92 (la VM/sesión mató el
proceso; el script es reanudable y retomó desde ahí sin perder nada).
**92/92 ciudades ok, 0 errores.** Respuestas crudas en `overpass-v1021/`.

- Elementos brutos OSM: 1.890; con nombre: 1.019. De esos, 13 se
  colapsaron por clave idéntica dentro de la cosecha (mismo nombre +
  mismas coordenadas + misma categoría en la misma respuesta).
- Candidatos con nombre y coordenadas: 997 (Europa 719, LatAm 144,
  Canadá 134). Excluidos: **9** (escuela/club de adiestramiento,
  veterinaria o `access=private`): Clínica Veterinària 13 & Abril
  (Valencia, vet), Happy dog park centro cinofilo y Centro Cinofilo
  Flegreo (Nápoles), Dog daycare (Gotemburgo), Domus Vista Hundegård
  (Copenhague, private), Koirien koulutusalue: Petikko 2 (Helsinki,
  private), Club canin y Agility Team (Luxemburgo, el segundo private),
  Takhini Outdoor Dog Training Facility (Whitehorse).
- Descartados por duplicado (regla v10.18: <100 m cualquier nombre, o
  mismo nombre normalizado a <300 m): **121**.
- **Agregados: 876** (Europa +654, LatAm +123, Canadá +99): **590
  parques y 286 peluquerías**. Todos con `horas:null`,
  `nota:"Dato de OpenStreetMap"`, `dir`/`tel` solo si OSM los trae, sin
  ratings inventados. Nada inventado: solo OSM verificado.
- 21 ciudades con 0 agregados: 17 sin ningún candidato en OSM
  (Asunción, Belém, Cancún, Cusco, Kingston, La Plata, Manaus, Mar del
  Plata, Maracaibo, Mendoza, Moncton, Puerto Príncipe, San Salvador,
  Santa Cruz de la Sierra, Tegucigalpa, Tirana, Tucumán) y 4 con todos
  sus candidatos duplicados de lo ya existente (Winnipeg 13/13,
  Hamilton 11/11, Monterrey 1/1, Cochabamba 1/1).

**Verificación por ID de OSM en vivo** (`verificar-v1021-sintope.py`,
lotes de 100): **876 verificados, 0 fallidos, de 876.** (Varios 502/504
de Overpass con reintentos; el verificador es reanudable.)

**Integridad del agregado:** 92/92 ciudades con conteos exactos contra
el estado; el diff contra el respaldo previo solo añade líneas (las
únicas líneas "eliminadas" son el cambio de coma de cierre de cada
array tocado + 2 líneas de cabecera por archivo: 0 lugares borrados ni
modificados); `node --check` OK en los 3 archivos.

**Validadores v10.18:** Europa 0 errores (DETALLE TOTAL: 0).
LatAm/Canadá: 10 errores, todos `fuera_de_radio` en Vancouver (ver
§2.4, artefacto del `comparteCon`, sin relación con este agregado);
0 errores de ningún otro tipo.

### Tabla por ciudad (antes / candidatos / excluidos / duplicados / agregados / después)

| Ciudad | Antes | Candidatos | Excl. | Dup | Agregados | Después |
|---|---|---|---|---|---|---|
| Bilbao | 74 | 20 | 0 | 1 | 19 | 93 |
| Chisináu | 94 | 2 | 0 | 0 | 2 | 96 |
| Copenhague | 74 | 98 | 1 | 4 | 94 | 168 |
| Dublín | 102 | 33 | 0 | 7 | 26 | 128 |
| Estocolmo | 116 | 142 | 0 | 3 | 139 | 255 |
| Ginebra | 54 | 15 | 0 | 0 | 15 | 69 |
| Glasgow | 76 | 42 | 0 | 11 | 31 | 107 |
| Gotemburgo | 55 | 17 | 1 | 2 | 15 | 70 |
| Helsinki | 114 | 158 | 1 | 14 | 144 | 258 |
| La Valeta | 57 | 9 | 0 | 1 | 8 | 65 |
| Liubliana | 35 | 9 | 0 | 1 | 8 | 43 |
| Luxemburgo | 54 | 13 | 2 | 1 | 12 | 66 |
| Marsella | 49 | 12 | 0 | 1 | 11 | 60 |
| Nápoles | 58 | 16 | 2 | 1 | 15 | 73 |
| Oslo | 51 | 14 | 0 | 0 | 14 | 65 |
| Reikiavik | 19 | 4 | 0 | 0 | 4 | 23 |
| Sarajevo | 18 | 3 | 0 | 1 | 2 | 20 |
| Sevilla | 56 | 22 | 0 | 0 | 22 | 78 |
| Tallin | 96 | 21 | 0 | 8 | 13 | 109 |
| Tirana | 11 | 0 | 0 | 0 | 0 | 11 |
| Valencia | 95 | 31 | 1 | 6 | 25 | 120 |
| Vilna | 82 | 5 | 0 | 1 | 4 | 86 |
| Zagreb | 80 | 33 | 0 | 2 | 31 | 111 |
| Arequipa | 25 | 1 | 0 | 0 | 1 | 26 |
| Asunción | 79 | 0 | 0 | 0 | 0 | 79 |
| Belo Horizonte | 47 | 2 | 0 | 0 | 2 | 49 |
| Belém | 18 | 0 | 0 | 0 | 0 | 18 |
| Brasilia | 110 | 5 | 0 | 0 | 5 | 115 |
| Cancún | 6 | 0 | 0 | 0 | 0 | 6 |
| Caracas | 64 | 7 | 0 | 0 | 7 | 71 |
| Ciudad Juárez | 13 | 5 | 0 | 0 | 5 | 18 |
| Ciudad de Guatemala | 72 | 4 | 0 | 0 | 4 | 76 |
| Ciudad de Panamá | 49 | 6 | 0 | 1 | 5 | 54 |
| Cochabamba | 72 | 1 | 0 | 1 | 0 | 72 |
| Concepción | 50 | 1 | 0 | 0 | 1 | 51 |
| Cuenca | 78 | 1 | 0 | 0 | 1 | 79 |
| Curitiba | 83 | 11 | 0 | 1 | 10 | 93 |
| Cusco | 17 | 0 | 0 | 0 | 0 | 17 |
| Córdoba | 73 | 3 | 0 | 0 | 3 | 76 |
| Fortaleza | 71 | 2 | 0 | 0 | 2 | 73 |
| Goiânia | 13 | 2 | 0 | 0 | 2 | 15 |
| Kingston | 6 | 0 | 0 | 0 | 0 | 6 |
| La Habana | 93 | 9 | 0 | 1 | 8 | 101 |
| La Paz | 100 | 8 | 0 | 2 | 6 | 106 |
| La Plata | 70 | 0 | 0 | 0 | 0 | 70 |
| León | 3 | 1 | 0 | 0 | 1 | 4 |
| Managua | 68 | 1 | 0 | 0 | 1 | 69 |
| Manaus | 18 | 0 | 0 | 0 | 0 | 18 |
| Mar del Plata | 32 | 0 | 0 | 0 | 0 | 32 |
| Maracaibo | 6 | 0 | 0 | 0 | 0 | 6 |
| Mendoza | 43 | 0 | 0 | 0 | 0 | 43 |
| Monterrey | 23 | 1 | 0 | 1 | 0 | 23 |
| Mérida | 17 | 2 | 0 | 1 | 1 | 18 |
| Nasáu | 6 | 1 | 0 | 0 | 1 | 7 |
| Porto Alegre | 71 | 10 | 0 | 1 | 9 | 80 |
| Puebla | 44 | 6 | 0 | 2 | 4 | 48 |
| Puerto Príncipe | 7 | 0 | 0 | 0 | 0 | 7 |
| Punta del Este | 24 | 1 | 0 | 0 | 1 | 25 |
| Querétaro | 26 | 10 | 0 | 1 | 9 | 35 |
| Recife | 61 | 6 | 0 | 0 | 6 | 67 |
| Rosario | 71 | 5 | 0 | 2 | 3 | 74 |
| San Juan | 49 | 7 | 0 | 3 | 4 | 53 |
| San Salvador | 41 | 0 | 0 | 0 | 0 | 41 |
| Santa Cruz de la Sierra | 72 | 0 | 0 | 0 | 0 | 72 |
| Santo Domingo | 56 | 1 | 0 | 0 | 1 | 57 |
| Tegucigalpa | 14 | 0 | 0 | 0 | 0 | 14 |
| Tijuana | 24 | 14 | 0 | 2 | 12 | 36 |
| Toluca | 41 | 3 | 0 | 0 | 3 | 44 |
| Trujillo | 68 | 2 | 0 | 0 | 2 | 70 |
| Tucumán | 6 | 0 | 0 | 0 | 0 | 6 |
| Valencia | 2 | 1 | 0 | 0 | 1 | 3 |
| Valparaíso | 61 | 4 | 0 | 2 | 2 | 63 |
| Charlottetown | 10 | 1 | 0 | 0 | 1 | 11 |
| Fredericton | 20 | 1 | 0 | 0 | 1 | 21 |
| Halifax | 51 | 8 | 0 | 1 | 7 | 58 |
| Hamilton | 109 | 11 | 0 | 11 | 0 | 109 |
| Kelowna | 21 | 7 | 0 | 0 | 7 | 28 |
| Kitchener | 74 | 15 | 0 | 0 | 15 | 89 |
| London | 55 | 5 | 0 | 0 | 5 | 60 |
| Moncton | 16 | 0 | 0 | 0 | 0 | 16 |
| Oshawa | 63 | 6 | 0 | 2 | 4 | 67 |
| Quebec | 35 | 7 | 0 | 0 | 7 | 42 |
| Regina | 25 | 6 | 0 | 1 | 5 | 30 |
| Saint John | 13 | 2 | 0 | 1 | 1 | 14 |
| Saskatoon | 17 | 11 | 0 | 2 | 9 | 26 |
| Sherbrooke | 13 | 3 | 0 | 1 | 2 | 15 |
| St. John's | 18 | 4 | 0 | 1 | 3 | 21 |
| Victoria | 72 | 7 | 0 | 2 | 5 | 77 |
| Whitehorse | 3 | 1 | 1 | 0 | 1 | 4 |
| Windsor | 66 | 24 | 0 | 0 | 24 | 90 |
| Winnipeg | 63 | 13 | 0 | 13 | 0 | 63 |
| Yellowknife | 10 | 2 | 0 | 0 | 2 | 12 |

## 4. Totales

| Región | Antes (v10.20) | Ahora (v10.21) | Cambio |
|---|---|---|---|
| Europa (56 ciudades) | 7.345 | **7.999** | +654 (sin tope) |
| LatAm (62 ciudades) | 3.917 | **4.040** | +123 (sin tope) |
| Canadá (31 ciudades) | 2.674 | **2.848** | +174 (+75 unificación Vancouver/Burnaby, +99 sin tope) |
| **Total de la app** | **45.270** | **46.146** | **+876** |

- Versión v10.20 -> **v10.21** (`index.html`, 3 sitios); `sw.js`:
  caché `petnear-v120` -> `petnear-v121`.

## 5. Verificación

- `node --check` OK en los 3 archivos de datos.
- Verificación por ID de OSM en vivo: **876 verificados, 0 fallidos**.
- Playwright (`v1021_verify.py`, móvil 390×844): **TODO PASS (65
  checks, 0 fallos)** — GPS Vancouver: todos **224**, letrero "Esta
  ciudad comparte su información con Burnaby"; GPS Burnaby: todos
  **224**, letrero "...con Vancouver"; letrero oculto en CDMX; conteos
  sin cambios (Londres 267, Madrid 177, Toronto 214, CDMX 136, Ottawa
  168, Gatineau 168, Guadalajara 143, Zapopan 143, Charlotte 107,
  Ibagué 24); GPS en ciudades ampliadas exacto a los datos (Helsinki
  **258**, Estocolmo **255**, Copenhague **168**, Glasgow **107**,
  Zagreb **111**, Dublín **128**, Kitchener **89**, Valencia **120**,
  Sevilla **78**); pines "Vancouver · 224 places", "Burnaby ·
  224 places", "Windsor · 90 places", "Tijuana · 36 places"; Toby
  visible en Acerca (ES y EN) y como primera etiqueta de avatares;
  Charlotte sigue en 107 con el mapa movido al Atlántico; cero
  pageerror; versión visible v10.21.
- **Limitación conocida (preexistente, no de v10.21):** el conteo
  "todos" por GPS no sirve en Windsor y Tijuana porque la app resuelve
  la ciudad por la primera caja que contiene el punto (`ciudadDePunto`):
  el GPS de Windsor cae en la caja de Detroit (92) y el de Tijuana en
  la de Imperial Beach (8 lugares). En v10.20 pasaba igual (Windsor 66,
  Tijuana 24). Los datos están bien (Node: Windsor 90, Tijuana 36) y
  los pines de ciudad muestran el total exacto. No se tocó la lógica de
  resolución (fuera del ámbito de esta versión).

## 6. Archivos cambiados

- `index.html` (Toby + versión v10.21), `sw.js` (caché petnear-v121).
- `datos-canada.js` (Vancouver 183→224, Burnaby 190→224 por referencia).
- `datos-europa.js`, `datos-latam.js` (agregado sin tope — ver §3).
- `NOTA-v1021.md` (esta nota), `NOTA-v1020-tope.md` (§6: sin tope hecho
  en v10.21) y `NOTA-v1019-tope.md` (§8.2: sin tope hecho en v10.21).
- Scripts de trabajo (no se empujan): `cosecha-v1021-sintope.py`,
  `agregar-v1021-sintope.py`, `verificar-v1021-sintope.py`,
  `aplicar-vancouver-burnaby.py`, `v1021_verify.py`.
- Respaldos previos: `index.html.bak-v1021`, `sw.js.bak-v1021`,
  `datos-canada.js.bak-v1021-van` (locales, no se empujan).

**Fusión autorizada por el dueño (27-oct 02:13 EDT: "cuando ya tengas
todo listo, FUSIONA").**
