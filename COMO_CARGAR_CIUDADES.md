# Cómo cargar las 50 ciudades pre-cargadas (nota interna para la v10.2)

Fecha: 2026-10-24. Datos extraídos de OpenStreetMap vía Overpass (ODbL).
NO se tocó `index.html` (lo está editando otro agente con la v10.1). Este archivo
solo explica cómo conectar lo ya construido. NO publicar sin autorización expresa
del dueño.

## Archivos

- `datos-colombia.js` — `CIUDADES_COLOMBIA` (20 ciudades, 427 lugares, 58.653 bytes)
- `datos-usa.js` — `CIUDADES_USA` (30 ciudades, 2.744 lugares, 442.500 bytes)
- Total: 50 ciudades, 3.171 lugares. Ibagué y Charlotte NO están aquí: siguen en
  sus archivos curados (`datos-ibague.js`, `datos-charlotte.js`).

## Formato (igual que los datos curados)

```js
const CIUDADES_USA = {
 "new-york": {nombre:"New York", centro:[40.712728, -74.006015], lugares:[
   {n:"...", cat:"vet", lat:40.7, lng:-74.0, dir:"...", tel:"...", horas:null, nota:"Dato de OpenStreetMap"},
   ...
 ]},
 ...
};
```

- `cat`: `vet` (veterinaria), `tienda` (shop=pet), `refugio` (animal_shelter;
  `amenity=animal_boarding` también se mapeó a `refugio`), `zoo` (tourism=zoo).
- `horas` siempre `null` (OSM no publica horarios fiables aquí) y `rating` no
  existe: NUNCA inventar horarios, teléfonos ni calificaciones.
- `dir` y `tel` solo aparecen cuando OSM los tiene (etiquetas `addr:*`,
  `phone`/`contact:phone`, tal cual). Sin nombre o sin coordenadas el lugar
  se descartó. Sin duplicados. Todo verificado con `node --check` y con un
  validador (0 errores: nombre, categoría, coordenadas dentro del cuadro de
  su ciudad, `horas:null`, nota correcta).

## Cómo debe cargarlo `index.html` (mismo patrón que NEGOCIOS_CHARLOTTE/IBAGUE)

1. Añadir los dos `<script src="datos-colombia.js">` y `<script src="datos-usa.js">`
   junto a los de Charlotte e Ibagué.
2. Unificar en un solo registro por ciudad (clave = slug, p. ej. `"bogota"`,
   `"new-york"`): nombre, centro `[lat, lng]` y `lugares`.
3. Al moverse el mapa o al fijar el GPS: calcular la distancia del centro del
   mapa (o del usuario) al `centro` de cada ciudad pre-cargada; si está dentro
   del área de la ciudad (mismo cuadro usado en la cosecha: ±0,13° lat en
   Colombia, ±0,18° en EE. UU.), mostrar sus lugares directamente SIN llamar
   a Overpass. Charlotte e Ibagué ya funcionan así; estas 50 deben comportarse
   igual.
4. Overpass (`cargarZona`) queda SOLO como respaldo para ciudades que no estén
   en la lista pre-cargada, con su pill de error reintentable de la v10.
5. Mantener el tope de 300 lugares por ciudad (ampliado en la v10.20; antes ~120) y
   el orden por cercanía al usuario como hoy.

## Reglas vigentes que el siguiente paso debe respetar

- **Rama `desarrollo/mascotas-v10`; NADA directo en main; no fusionar ni
  publicar sin autorización expresa del dueño** (instrucción maestra v10,
  2026-10-24). Esta nota y estos archivos son trabajo local, sin publicar.
- Conservar identidad visual, carreterita, mascota y animaciones; no eliminar
  funciones; sin funciones simuladas ni datos inventados.
- Las visitas NUNCA se confirman solo por proximidad/GPS: se pregunta al usuario.
- Solo servicios gratuitos.

## Ciudades con muy pocos datos en OSM (real, no es un error)

Santa Marta 1, Montería 1, Pasto 2, Valledupar 2, Sincelejo 3, Riohacha 3,
Tunja 4, Neiva 6, Manizales 9. En esas ciudades la app mostrará pocos lugares
porque OSM casi no tiene nada etiquetado ahí; no rellenar con nada inventado.
Bogotá, New York, Los Angeles, Chicago, Phoenix, Philadelphia, Dallas,
San Jose, San Francisco, Seattle, Denver, Baltimore y Portland llegaron al
tope de 300 lugares (v10.20).

## Para refrescar los datos después

Scripts en este mismo directorio (reanudables, con estado en
`cosecha-estado-{0,1,2}.json` y centros en `centros.json`):
`cosecha-centros.py` (centros por Nominatim) → `cosecha-ciudades.py --chunk 0|1|2`
(Overpass por GET con cascada `.de → kumi → private.coffee`, reintentos) →
`cosecha-merge.py` (regenera los dos archivos). Overpass estaba saturado
durante la cosecha (429 y 406 al principio; el POST da 406 desde este entorno,
el GET con `data=` es el que funciona): paciencia y reintentos, como se hizo.
