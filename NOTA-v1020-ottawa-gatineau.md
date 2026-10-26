# v10.20 — Unificación Ottawa/Gatineau con `comparteCon`

**Fecha:** 2026-10-26 (noche). **Rama:** `desarrollo/mascotas-v10`, PR #15
(segundo commit, encima del commit del tope 7ede762e).
**Estado:** implementado y verificado en local. Sin fusionar (el PR #15
sigue abierto hasta la orden del dueño).
**Origen:** decisión del dueño (26-oct): unificar Ottawa/Gatineau con el
mismo patrón que Guadalajara/Zapopan en la v10.19.

## 1. Solape recalculado = 154 (no 41)

Recálculo exacto por nombre normalizado + coordenadas (scripts
`/tmp/solape-ott-gat.js`, `/tmp/solape-ott-gat2.js`, `/tmp/solape-ott-gat3.js`,
sobre el archivo real `datos-canada.js`):

| Concepto | Número |
|---|---|
| Ottawa (antes) | 161 lugares |
| Gatineau (antes) | 161 lugares |
| Compartidos exactos (mismo nombre + mismas coords) | 154 |
| Compartidos cerca (mismo nombre + ≤150 m) | 0 |
| **Compartidos totales** | **154** |
| Solo Ottawa | 7 |
| Solo Gatineau | 7 |
| Mismo punto (≤10 m) con nombre distinto | 0 |
| **Unión** | **168 lugares** |

**Corrección al encargo:** el "41" de la NOTA-v1020-tope.md §6 eran solo
los lugares **agregados en la pasada del tope** (45 candidatos, 4
duplicados, 41 agregados en cada ciudad). El solape real es mucho mayor:
de los 120 originales ya se compartían 114, y de los 41 agregados se
comparten 40. Los 2 agregados no compartidos son `Bark Avenue Pet Spa`
(solo Ottawa, way/576883856) y `Kirsten's Pet Grooming` (solo Gatineau,
way/68708564). Total de agregados v10.20 distintos entre ambas: 42.
La unión se hizo con el solape real (154), no con el 41, siguiendo el
patrón GDL/ZAP al pie de la letra: si solo se hubiera asignado la
referencia sin añadir los 7 solo-Gatineau, esos 7 lugares se habrían
perdido de la app.

Solo Ottawa (7): Orleans Veterinary Hospital, Global Pet Foods
(1675 Tenth Line Road), Global Pet Foods (3191 Strandherd Drive),
Pet Valu (665 River Road), Pet Valu (1581 Greenbank Road), Cumberland
Veterinary Hospital, Bark Avenue Pet Spa.

Solo Gatineau (7): Canada Agriculture and Food Museum, PetSmart
(255 Kanata Avenue), Britannia Heights Veterinary Clinic, Furry Tails,
Centrepointe Animal Hospital, Animalerie 4 Pattes et Cie, Kirsten's
Pet Grooming. El más cercano a un lugar de Ottawa es Britannia Heights
Veterinary Clinic, a 80 m de "Canine Touch and Tell" (nombre distinto:
negocios distintos, se conservan ambos, como en GDL/ZAP).

## 2. Implementación (mismo patrón que Guadalajara/Zapopan v10.19)

**Copia canónica en Ottawa** (`datos-canada.js`, script
`/tmp/aplicar-ottawa-gatineau.py`, respaldo en
`/tmp/datos-canada.js.v1020-ott.bak` y `datos-canada.js.bak-v1020-ott`):
- A la lista de Ottawa se le añadieron **verbatim las 7 líneas de los
  lugares solo de Gatineau** (con su `dir` original en Gatineau, para que
  se siga viendo dónde está cada negocio). Ottawa queda con **168**.
- La lista vieja de Gatineau se vació (queda un comentario que remite a
  la asignación) y al final del archivo se asigna **la misma referencia**:
  `CIUDADES_CANADA["gatineau"].lugares = CIUDADES_CANADA["ottawa"].lugares;`
  Sin copia duplicada: cualquier edición futura en Ottawa se refleja en
  Gatineau sin desincronizarse.
- Ambas cabeceras llevan `comparteCon`: Ottawa → `"gatineau"`,
  Gatineau → `"ottawa"`.
- Cabecera del archivo actualizada: 31/31 (2660 → **2674** lugares).

**Dos copias con teléfono extra (sin pérdida de información):** en 133
de los 154 pares compartidos la única diferencia es la ciudad del `dir`
(Ottawa vs Gatineau). En 2 pares la copia de Gatineau trae un teléfono
que la de Ottawa no tenía: `VCA Animal Hospital` (+1-613-565-0588) y
`Purrdy Paws` (+1-613-882-7077). Se conserva la línea **verbatim de
Gatineau** para esos 2 (con su `dir` en Gatineau, como las 23 líneas de
Zapopan en la lista de Guadalajara). No hay ningún otro par con
diferencias fuera del `dir`.

**Efectos medidos (Node, `vm` sobre el archivo real):**
- `ottawa.lugares.length = 168`, `gatineau.lugares.length = 168`,
  **misma referencia (`===`) = true**.
- La unión contiene los 7 solo-Gatineau y los 7 solo-Ottawa
  (0 faltantes) y 0 duplicados internos.
- La unión contiene los 42 agregados v10.20 distintos (41+41−40).
- Los 2 teléfonos conservados verificados por coordenadas.
- Las cajas (`_caja`) de ambas ciudades quedan idénticas (misma lista):
  los conteos por ciudad del usuario y por viewport dan lo mismo para
  ambas. La fusión (`fusionarCiudad`) no se ve afectada: slugs
  distintos, sin colisión.
- Diff contra el respaldo: 167 líneas eliminadas (161 entradas viejas
  de Gatineau + 2 líneas viejas de Ottawa sin teléfono + 1 línea con
  cambio de coma + 2 cabeceras + 1 totales) y 28 añadidas (7 solo-G +
  2 líneas con teléfono + 1 línea con coma + 2 cabeceras + 1 totales +
  2 comentario en Gatineau + 12 comentario final + 1 asignación).
  Ninguna otra ciudad tocada.

## 3. Letrero visible en ambas ciudades

No hizo falta tocar `index.html`: el mecanismo creado en v10.19 para
GDL/ZAP es genérico (`ciudadActualSlug` + `actualizarAvisoCiudad` +
`comparteCon` + clave i18n `ciudadComparte` en los 8 idiomas). Al caer
el punto en la caja de ambas se elige la ciudad de centro más cercano,
así que estando en Gatineau el letrero dice Gatineau y no Ottawa.

Textos esperados (ES): en Ottawa, "Esta ciudad comparte su información
con Gatineau"; en Gatineau, "Esta ciudad comparte su información con
Ottawa".

## 4. Totales

- Canadá: 2.660 → **2.674** lugares (+14: Ottawa +7, Gatineau +7).
- Total de la app: 45.256 → **45.270** lugares.
- Versión sigue **v10.20**; `sw.js` sigue en caché `petnear-v120`
  (la unificación entra en el mismo PR #15, sin cambio de versión).

## 5. Verificación

- `node --check` OK en `datos-canada.js`.
- **Playwright** (Chromium local, móvil 390×844; script
  `v1020_verify_ottawa.py`): **TODO PASS** — GPS Ottawa: todos==168,
  letrero visible "Esta ciudad comparte su información con Gatineau";
  GPS Gatineau: todos==168, letrero visible "Esta ciudad comparte su
  información con Ottawa"; letrero oculto en CDMX; conteos sin cambios
  (Londres 267, Madrid 177, Toronto 214, CDMX 136, Charlotte 107,
  Ibagué 24); cero pageerror; versión visible v10.20.

## 6. Archivos cambiados

- `datos-canada.js` (Ottawa 161→168, Gatineau 161→168 por referencia).
- `NOTA-v1020-tope.md` (§1, §5 y §6 actualizados con la unificación).
- `NOTA-v1020-ottawa-gatineau.md` (esta nota).
- Scripts de trabajo (no se empujan): `v1020_verify_ottawa.py`.
- Respaldo previo: `datos-canada.js.bak-v1020-ott` (local, no se empuja).

Nada fusionado: el PR #15 sigue abierto hasta la orden del dueño.
