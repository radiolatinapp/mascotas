# Nota — Tope de 120 ampliado y enriquecimiento completo (PetNear v10.19)

- **Fecha del trabajo:** 2026-10-26.
- **Ámbito:** Europa (56 ciudades), LatAm fuera de Colombia (62) y Canadá (31).
- **Archivos tocados:** `datos-europa.js`, `datos-latam.js`, `datos-canada.js`
  (solo se agregan lugares; ningún lugar existente se tocó, salvo nada),
  `cosecha-*.py` (constante del tope), `COMO_CARGAR_CIUDADES.md` (tope
  documentado). NO se tocó `index.html`, `sw.js`, `datos-usa-*.js`,
  `datos-charlotte.js`, `datos-ibague.js`, `datos-colombia.js`, ni las
  entradas de Guadalajara y Zapopan en `datos-latam.js` (otro agente).
- **Fuente de todos los datos agregados:** OpenStreetMap (ODbL) vía Overpass
  en vivo. No se inventó ningún dato, lugar ni función. Solo servicios gratuitos.

## 1. El nuevo tope

**El nuevo tope es 300 lugares por ciudad.** Máximo real tras el
agregado: Londres, 267 lugares (120 + 147 agregados). El tope 300 lo
cubre con un margen de 33. El máximo teórico antes del filtrado era
120 + 167 (Londres, candidatos con nombre) = 287; también queda
cubierto. El tope se aplica en la cosecha (`MAX_LUGARES` en
`cosecha-europa.py`, `cosecha-latam.py` y `cosecha-canada.py`,
actualizado de 120 a 300 en la v10.20) y se documenta en
`COMO_CARGAR_CIUDADES.md`. `cosecha-ciudades.py` (Colombia y EE. UU.)
queda en 120: no es ámbito de esta ampliación; alinearlo queda
pendiente para una futura recosecha de esas regiones.

## 2. Conteos por ciudad antes/después

(PENDIENTE: tabla por ciudad — antes, candidatos OSM, excluidos por
adiestramiento, duplicados descartados, agregados, después.)

## 3. Método

- **Cosecha** (`cosecha-v1019-tope.py`): una consulta Overpass por ciudad en
  tope de 120 (33 Europa + 13 LatAm + 11 Canadá = 57), con
  `leisure=dog_park` → `parque` y `shop=pet_grooming` → `peluqueria`.
  Caja Europa: centro ±0,3° (misma que `verificar-europa-v3.py`, de donde
  salen los 2.115 candidatos de v10.18). Caja LatAm/Canadá: caja de cosecha
  (±0,15°; 0,18° grandes, misma que `enriquecer-v1018.py`, de donde salen
  los 626 de v10.18). Respuestas crudas en `overpass-v1019/`; estado en
  `cosecha-v1019-tope.json`.
- **Filtros** (`agregar-v1019-tope.py`): solo con nombre y coordenadas;
  `horas:null`; `nota:"Dato de OpenStreetMap"`; `dir`/`tel` solo si OSM los
  trae. Excluidos los `dog_park` que son escuela/club/negocio de
  adiestramiento, guardería/residencia u otro negocio (o `access=private`) y
  los que son veterinarias; un "Parque de adiestramiento canino" municipal
  SÍ se conserva (es área pública). `shop=pet_grooming` se conserva salvo
  nombre claramente de veterinaria sin palabra de peluquería.
  Dedup: <100 m (cualquier nombre) o mismo nombre normalizado a <300 m
  (regla v10.18); mismo nombre lejos = sucursal distinta y se conserva.
- **Verificación** (`verificar-v1019-tope.py`): re-consulta en vivo por ID
  de OSM de los lugares agregados, por lotes de 100; acierto = existe, mismo
  nombre (normalización Unicode, sin vaciar cirílico/griego) y coordenadas
  a <100 m.

## 4. Verificación

Verificación por ID de OSM en vivo (`verificar-v1019-tope.py`, lotes de
100): **2.599 verificados, 0 fallidos, de 2.599.** Detalle por ciudad en
`verificar-v1019-tope.json`. La verificación se hizo en dos pasadas: la
VM se reinició a las 22:51 UTC en mitad del lote 8 y el verificador es
reanudable — retomó en el lote 8 sin perder los 700 ya verificados.
Cero lugares purgados: no hizo falta excluir nada tras la verificación.

## 5. Lo que quedó pendiente y por qué

- **Guadalajara y Zapopan:** solo conteo (otro agente es dueño de esas dos
  ciudades); sus candidatos quedan para él.
- **Parques y peluquerías de las ciudades SIN tope** (23 en Europa, resto en
  LatAm/Canadá): no se agregaron en esta pasada; el tope no las bloqueaba,
  pero la tarea era los candidatos que quedaron fuera POR el tope.
- **El tope no garantiza mezcla por categoría en una re-cosecha:** una
  cosecha futura con el tope nuevo vuelve a ordenar por completitud y
  distancia y puede volver a dejar fuera parques/peluquerías; harían falta
  huecos reservados por categoría (pendiente ya anotado en v10.18 §5).

## 6. Archivos de trabajo

- `cosecha-v1019-tope.py` + `cosecha-v1019-tope.json` + `overpass-v1019/` —
  cosecha de candidatos.
- `agregar-v1019-tope.py` + `agregar-v1019-tope.json` — filtros y agregado.
- `verificar-v1019-tope.py` + `verificar-v1019-tope.json` — verificación por ID.
- `datos-europa-v1019.json`, `datos-latam-v1019.json`, `datos-canada-v1019.json`
  — exportaciones JSON de trabajo.
