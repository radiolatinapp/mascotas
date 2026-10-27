# v10.20 — Ampliación del tope de 120 lugares por ciudad

**Fecha:** 2026-10-26 (noche). **Rama:** `desarrollo/mascotas-v10`.
**Estado:** implementado y verificado. **SIN fusionar, SIN publicar.**
**Origen:** decisión del dueño en llamada de voz (26-oct ~16:40 EDT):
ampliar el tope de 120 para que quepan todas. Autorización de aplicar:
"Sí, aplica lo del tope" (26-oct 17:37 EDT).

## 1. Qué cambió

El tope de ~120 lugares por ciudad (aplicado en la cosecha) dejaba fuera
parques y peluquerías en las ciudades grandes. Ahora el tope es **300**
(máximo real tras el agregado: Londres, 267). Se agregaron **2.599
lugares** (parques `leisure=dog_park` y peluquerías `shop=pet_grooming`,
todo de OpenStreetMap vía Overpass en vivo, nada inventado) en 55
ciudades de Europa (33), LatAm (11, sin contar Guadalajara/Zapopan) y
Canadá (11). Guadalajara y Zapopan solo se contaron (10 candidatos
cada una, 0 agregados: son de otro agente y ya están unificadas en 143).

| Región | Antes | Ahora | Cambio |
|---|---|---|---|
| Europa (56 ciudades) | 5.480 | **7.345** | +1.865 |
| LatAm (62 ciudades) | 3.769 | **3.917** | +148 |
| Canadá (31 ciudades) | 2.074 | **2.674** | +600 (+586 tope, +14 unificación Ottawa/Gatineau) |
| **Total de la app** | **42.657** | **45.270** | **+2.613 (+2.599 tope, +14 unificación)** |

Totales de la cosecha (57 ciudades en tope): 2.907 candidatos OSM con
nombre, 73 excluidos (escuelas/clubes de adiestramiento, veterinarias
o `access=private`), 288 descartados por duplicado, 2.599 agregados.
Versión v10.19 -> **v10.20**; `sw.js`: caché `petnear-v119` ->
`petnear-v120`.

## 2. El nuevo tope

Máximo real tras el agregado: Londres, 267 lugares (120 + 147). El
tope 300 lo cubre con margen de 33 (el máximo teórico antes del
filtrado era 287). El tope vive en la cosecha: `MAX_LUGARES` en
`cosecha-europa.py`, `cosecha-latam.py` y `cosecha-canada.py`
(actualizado de 120 a 300) y documentado en `COMO_CARGAR_CIUDADES.md`.
`cosecha-ciudades.py` (Colombia y EE. UU.) queda en 120: fuera del
ámbito de esta ampliación; alinearlo queda pendiente.

## 3. Método

- **Cosecha** (`cosecha-v1019-tope.py`, 57/57 ciudades ok, 0 errores;
  empezó 20:47 UTC y terminó 22:25 UTC, con muchos 502 de Overpass y
  reintentos): una consulta Overpass por ciudad en tope de 120, con
  `leisure=dog_park` y `shop=pet_grooming`. Respuestas crudas en
  `overpass-v1019/`; estado en `cosecha-v1019-tope.json`.
- **Filtros y agregado** (`agregar-v1019-tope.py`): solo con nombre y
  coordenadas; `horas:null`; `nota:"Dato de OpenStreetMap"`; `dir`/`tel`
  solo si OSM los trae. Excluidos los `dog_park` que son escuela/club
  de adiestramiento, guardería/residencia u otro negocio (o
  `access=private`) y las veterinarias. Dedup: <100 m (cualquier
  nombre) o mismo nombre normalizado a <300 m (regla v10.18).
  Inserción quirúrgica al final del array `lugares` de cada ciudad;
  totales de cabecera actualizados. Estado en
  `agregar-v1019-tope.json`. Respaldo previo al agregado en
  `/tmp` (se perdió con el reinicio de la VM; la verificación contra
  el estado cubre la integridad: 55/55 ciudades con conteos exactos).
- **Verificación** (`verificar-v1019-tope.py`): re-consulta en vivo
  por ID de OSM de los 2.599 lugares, en lotes de 100. **2.599
  verificados, 0 fallidos.** La VM se reinició a las 22:51 UTC en
  mitad del lote 8; el verificador es reanudable y retomó sin perder
  los 700 ya verificados. Detalle en `verificar-v1019-tope.json`.

## 4. Verificación en la app (Playwright, móvil 390x844)

Script `v1020_verify_tope.py`: **TODO PASS.**

- GPS Charlotte: versión v10.20, todos==107 (sin cambios), cero pageerror.
- Sin GPS (Ibagué por defecto): todos==24 (sin cambios).
- GPS en ciudades ampliadas, conteo "todos" exacto al total de los datos:
  Londres **267**, Madrid **177**, Toronto **214**, Ciudad de México **136**.
- GPS Charlotte con el mapa movido al Atlántico: sigue en 107 (regresión
  v10.18).
- `node --check` OK en los 3 archivos de datos. Cero `rating` inventados
  (solo aparece en el comentario de cabecera); todos los lugares nuevos
  con `horas:null`.

## 5. Tabla por ciudad (antes / candidatos / excluidos / duplicados / agregados / después)

| Ciudad | Antes | Candidatos | Excl. | Dup | Agregados | Después |
|---|---|---|---|---|---|---|
| Brampton | 120 | 13 | 0 | 1 | 12 | 132 |
| Burnaby | 120 | 87 | 0 | 17 | 70 | 190 |
| Calgary | 120 | 50 | 1 | 7 | 43 | 163 |
| Edmonton | 120 | 27 | 0 | 24 | 3 | 123 |
| Gatineau | 120 | 45 | 0 | 4 | 41 | 161 |
| Mississauga | 120 | 52 | 0 | 6 | 46 | 166 |
| Montreal | 120 | 122 | 0 | 6 | 116 | 236 |
| Ottawa | 120 | 45 | 0 | 4 | 41 | 161 |
| Surrey | 120 | 64 | 0 | 7 | 57 | 177 |
| Toronto | 120 | 108 | 0 | 14 | 94 | 214 |
| Vancouver | 120 | 79 | 0 | 16 | 63 | 183 |
| Ámsterdam | 120 | 30 | 0 | 0 | 30 | 150 |
| Atenas | 120 | 62 | 0 | 6 | 56 | 176 |
| Barcelona | 120 | 64 | 2 | 4 | 60 | 180 |
| Belgrado | 120 | 49 | 0 | 11 | 38 | 158 |
| Berlín | 120 | 90 | 10 | 3 | 87 | 207 |
| Birmingham | 120 | 20 | 0 | 6 | 14 | 134 |
| Bratislava | 120 | 44 | 0 | 3 | 41 | 161 |
| Bruselas | 120 | 89 | 6 | 5 | 84 | 204 |
| Bucarest | 120 | 11 | 0 | 2 | 9 | 129 |
| Budapest | 120 | 162 | 0 | 22 | 140 | 260 |
| Colonia | 120 | 104 | 15 | 9 | 95 | 215 |
| Cracovia | 120 | 30 | 0 | 3 | 27 | 147 |
| Fráncfort | 120 | 63 | 4 | 3 | 60 | 180 |
| Hamburgo | 120 | 73 | 7 | 3 | 70 | 190 |
| Kyiv | 120 | 21 | 0 | 1 | 20 | 140 |
| Lisboa | 120 | 51 | 0 | 1 | 50 | 170 |
| Londres | 120 | 163 | 1 | 16 | 147 | 267 |
| Lyon | 120 | 35 | 0 | 3 | 32 | 152 |
| Madrid | 120 | 63 | 1 | 6 | 57 | 177 |
| Manchester | 120 | 59 | 0 | 3 | 56 | 176 |
| Milán | 120 | 98 | 3 | 7 | 91 | 211 |
| Múnich | 120 | 44 | 4 | 7 | 37 | 157 |
| París | 120 | 129 | 5 | 3 | 126 | 246 |
| Porto | 120 | 15 | 0 | 2 | 13 | 133 |
| Praga | 120 | 50 | 0 | 4 | 46 | 166 |
| Riga | 120 | 10 | 0 | 3 | 7 | 127 |
| Roma | 120 | 50 | 0 | 6 | 44 | 164 |
| Róterdam | 120 | 34 | 0 | 2 | 32 | 152 |
| Sofía | 120 | 55 | 0 | 9 | 46 | 166 |
| Turín | 120 | 34 | 3 | 2 | 32 | 152 |
| Varsovia | 120 | 101 | 0 | 11 | 90 | 210 |
| Viena | 120 | 92 | 5 | 2 | 90 | 210 |
| Zúrich | 120 | 42 | 4 | 4 | 38 | 158 |
| Buenos Aires | 120 | 25 | 0 | 0 | 25 | 145 |
| Ciudad de México | 120 | 17 | 0 | 1 | 16 | 136 |
| Guadalajara | 143 | 10 | 0 | — | 0 (solo conteo) | 143 |
| Guayaquil | 120 | 2 | 0 | 1 | 1 | 121 |
| Lima | 120 | 10 | 0 | 1 | 9 | 129 |
| Montevideo | 120 | 1 | 0 | 0 | 1 | 121 |
| Quito | 120 | 6 | 0 | 0 | 6 | 126 |
| Río de Janeiro | 120 | 6 | 0 | 0 | 6 | 126 |
| Salvador | 120 | 3 | 0 | 1 | 2 | 122 |
| San José | 120 | 23 | 1 | 1 | 22 | 142 |
| Santiago | 120 | 37 | 0 | 4 | 33 | 153 |
| São Paulo | 120 | 28 | 1 | 1 | 27 | 147 |
| Zapopan | 143 | 10 | 0 | — | 0 (solo conteo) | 143 |

**Nota (segundo commit del PR #15):** tras la unificación Ottawa/Gatineau,
ambas quedan en **168 lugares** (no 161): la unión real es 154 compartidos
+ 7 solo-Ottawa + 7 solo-Gatineau. Ver `NOTA-v1020-ottawa-gatineau.md`.

## 6. Lo que quedó fuera o pendiente

- **Ottawa y Gatineau UNIFICADAS (v10.20, segundo commit del PR #15):**
  el solape real es de **154 lugares** (no 41: los 41 eran solo los
  agregados en esta pasada; 114 de los 120 originales también se
  compartían). Unión: **168 lugares** en ambas ciudades, con
  `comparteCon` y letrero en las dos. Detalle en
  `NOTA-v1020-ottawa-gatineau.md`. Total de la app: 45.256 -> **45.270**.
- **Parques y peluquerías de las ciudades SIN tope** (23 en Europa,
  resto en LatAm/Canadá): no se agregaron en esta pasada; el tope no
  las bloqueaba, pero la tarea era los candidatos que quedaron fuera
  POR el tope. **Hecho en v10.21** (+876 lugares, ver NOTA-v1021.md §3).
- **El tope no garantiza mezcla por categoría en una re-cosecha:**
  una cosecha futura con el tope nuevo vuelve a ordenar por
  completitud y distancia y puede volver a dejar fuera
  parques/peluquerías; harían falta huecos reservados por categoría
  (pendiente ya anotado en v10.18 §5).
- `cosecha-ciudades.py` (Colombia y EE. UU.) sigue en tope 120.

## 7. Archivos tocados

- `datos-europa.js` (+1.865), `datos-latam.js` (+148),
  `datos-canada.js` (+586).
- `index.html` (versión visible v10.19 -> v10.20, 3 sitios; los
  comentarios históricos v10.19 no se tocaron), `sw.js` (caché
  `petnear-v119` -> `petnear-v120`).
- `cosecha-europa.py`, `cosecha-latam.py`, `cosecha-canada.py`
  (`MAX_LUGARES` 120 -> 300), `COMO_CARGAR_CIUDADES.md` (tope 300).
- `NOTA-v1019-tope.md` (§1 y §4 completados con los números reales),
  `NOTA-v1020-tope.md` (esta nota).
- Scripts de trabajo (no se empujan): `cosecha-v1019-tope.py`,
  `agregar-v1019-tope.py`, `verificar-v1019-tope.py`,
  `v1020_verify_tope.py`, `totales-v1020.json`,
  `totales-antes-v1020.json`.
- Respaldo previo: `index.html.bak-v1020`, `sw.js.bak-v1020`.

**NO fusionar sin la orden expresa del dueño.**
