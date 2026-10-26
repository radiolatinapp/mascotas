# NOTA — Datos USA principales v10.18 (datos-usa.js + datos-usa-extra.js)

**Fecha:** 2026-10-26 (verificado por el coordinador tras el cierre del agente sin informe final)
**Agente:** USA principales (4/6). Terminó sin entregar informe final; el coordinador reconstruyó y verificó su trabajo por diff contra los respaldos.
**Alcance:** `datos-usa.js` (30 ciudades) + `datos-usa-extra.js` (29 ciudades). Los 6 archivos regionales NO se tocaron (mtime 25-oct, sin cambios).

## Qué hizo: deduplicación entre ciudades de la misma área metropolitana

Las cosechas originales listaban los mismos lugares bajo varias claves de ciudad vecina
(Phoenix↔Mesa, Minneapolis↔St. Paul, Dallas↔Fort Worth↔Arlington, Raleigh↔Durham).
El agente eliminó la copia duplicada en uno de los dos archivos, conservando la otra.

**Totales:** `datos-usa.js` 2.744 → **2.675** (−69). `datos-usa-extra.js` 1.865 → **1.736** (−129).
**Total eliminado: 198 lugares. Añadidos: 0. Modificados: 0.**

| Archivo | Ciudad | Antes | Después | − |
|---|---|---|---|---|
| datos-usa.js | phoenix | 120 | 85 | 35 |
| datos-usa.js | dallas | 120 | 114 | 6 |
| datos-usa.js | fort-worth | 78 | 50 | 28 |
| datos-usa-extra.js | mesa | 120 | 112 | 8 |
| datos-usa-extra.js | minneapolis | 120 | 88 | 32 |
| datos-usa-extra.js | st-paul | 120 | 66 | 54 |
| datos-usa-extra.js | raleigh | 110 | 105 | 5 |
| datos-usa-extra.js | arlington | 75 | 55 | 20 |
| datos-usa-extra.js | durham | 58 | 48 | 10 |

## Verificación del coordinador (independiente, por diff)

- Diff entrada por entrada contra los respaldos pre-v10.18
  (`/tmp/datos-usa.js.pre-v1018.bak`, `/tmp/datos-usa-extra.js.pre-v1018.bak`,
  dejados por el agente el 26-oct 18:12 UTC): 198 eliminados, 0 añadidos, 0 modificados.
- **Pérdida real de datos: 0.** Los 198 lugares eliminados siguen presentes en los datos
  actuales con las MISMAS coordenadas, bajo otra clave de ciudad. Comprobado buscando cada
  coordenada eliminada en los 14 archivos de datos actuales: 198/198 conservados.
- Ejemplos comprobados:
  - **Phoenix Zoo** (455 North Galvin Parkway, 33.449721,-111.946408): eliminado de la clave
    `phoenix`; sigue en `mesa` (datos-usa-extra.js) y en `tempe` (datos-usa-montana.js).
  - **Como Park Zoo** (1225 Estabrook Drive, 44.982478,-93.153894): eliminado de `minneapolis`;
    sigue en `st-paul` (datos-usa-extra.js) y en `falcon-heights` (datos-usa-medioeste.js).
  - PetSmart/Petco eliminados son sucursales distintas de la misma cadena (otra dirección y
    coordenadas); las sucursales restantes son otras tiendas reales, no la misma.
- Sintaxis: `node --check` OK en ambos archivos.
- Categorías sin cambio: solo vet/tienda/refugio/zoo. **No hay parque ni peluqueria nuevos.**

## Matiz honesto: la deduplicación es parcial

El agente solo deduplicó entre los dos archivos de su alcance. El mismo lugar sigue
apareciendo bajo varias claves entre estos archivos y los regionales (ej.: Phoenix Zoo
bajo `mesa` y bajo `tempe`). Eso NO infla los conteos de la app: `lugaresConteo()` en
v10.18 deduplica por `claveLugar` (nombre+coordenadas). Una deduplicación completa de
los 14 archivos queda como trabajo futuro posible, no bloquea v10.18.

## Trabajo del agente que quedó a medias (pendiente)

- **Muestreo de verificación:** el agente dejó 52 respuestas Overpass en caché
  (`~/workspace/app-mascotas/overpass-v1018/*.json`, una por ciudad) pero no dejó informe
  de muestreo. 7 de las 59 ciudades no tienen caché (fallos de red en los espejos).
- **Enriquecimiento parque/peluqueria en el top 15: NO hecho.** Las categorías siguen
  siendo solo las 4 cosechadas. Pasa al agente de reemplazo (4b).
- Espejos Overpass al cierre del agente: overpass-api.de daba 406/502; overpass.kumi.systems
  respondía al interpreter (con 504 ocasionales); overpass.private.coffee saturado. El
  agente dejó scripts de reintento en `/tmp/overpass_rest.sh` y `/tmp/overpass_retry_clt.sh`.

## Respaldos

- `/tmp/datos-usa.js.pre-v1018.bak` (443.208 bytes) y
  `/tmp/datos-usa-extra.js.pre-v1018.bak` (293.931 bytes), 26-oct 18:12 UTC.
- Respaldo antiguo `datos-usa.js.bak-tz` (24-oct) también presente en `~/workspace/app-mascotas/`.
