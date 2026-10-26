# NOTA — Los 13 lugares fallidos USA v10.18, resueltos en v10.19

**Fecha:** 2026-10-26
**Agente:** datos USA — 13 lugares fallidos
**Alcance:** `datos-usa-montana.js`, `datos-usa-medioeste.js`, `datos-usa-noreste.js`,
`datos-usa-pacifico.js`, `datos-usa-surcentral.js`, `datos-usa-sureste.js`
(ramal `desarrollo/mascotas-v10`, PR #14 abierto, sin fusionar)
**NO tocados por orden:** `index.html`, `sw.js`, `datos-usa-extra.js`.

## 1. Resumen

| Resultado | N.º |
|---|---|
| Re-etiquetados a `tienda` + `guarderia:true` (guarderías/daycare verificadas) | **9** |
| Sin cambio: categoría ya correcta y negocio activo (2 vet + 1 tienda) | **3** |
| Eliminado: cierre documentado por el propio negocio | **1** |
| **Total** | **13** |
| Eliminados por descarte (sin evidencia) | **0** |

**Hallazgo principal.** Los 13 no eran lugares inexistentes: el muestreo v10.18
solo buscó elementos OSM de la *misma* categoría (`amenity=animal_shelter`,
`amenity=veterinary`, `shop=pet`). Las 9 guarderías están en OSM como
`amenity=animal_boarding` — etiqueta que el propio fallback Overpass de la app
(`index.html` ~línea 6165) ya mapea a `cat='tienda'` + `guarderia:true`.
La re-etiqueta aplica ese mismo mapeo a los datos precargados, sin inventar
ninguna categoría nueva y sin perder información: ningún lugar se borró salvo
el único con cierre documentado.

**Cómo se ve el flag `guarderia` en precargados.** `textoNotaOSM`
(`index.html` ~línea 4136) solo se aplica cuando `b.osm` es `true`; los
precargados llevan `nota:"Dato de OpenStreetMap"` y su nota visible no cambia.
El flag es semántico (coherente con el mapeo del fallback) y el cambio visible
es el filtro: estos 9 lugares pasan de "Refugios" a "Tiendas de mascotas".
La clave i18n `osmGuarderia` existe en los 8 idiomas
("Guardería" / "Boarding" / "Hospedagem" / "Garderie" / "Tierpension" /
"Pensione" / "Dierenpension" / "Hotel dla zwierząt").

**Método de verificación.** Overpass directo (radio 300 m, etiquetas amplias:
`animal_boarding`, `animal_shelter`, `veterinary`, `shop=pet`,
`shop=pet_grooming`, `leisure=dog_park`, `tourism=zoo`, `office=veterinarian`,
`healthcare=veterinary` + nombre) completó 4/13 antes de atascarse en el
espejo con Kansas City; los 9 restantes se confirmaron con Nominatim
(índice de OSM, con ID de objeto y etiqueta exactos) más búsqueda web
(sitio oficial del negocio o directorio con estado activo y reseñas 2026).
Script Overpass: `/tmp/usa13-recheck.py` (log parcial `/tmp/usa13-recheck.log`).
Script Nominatim: `/tmp/usa13-nominatim.py`.

## 2. Tabla por lugar

| Ciudad | Lugar | Fuente de verificación | Decisión | Categoría nueva |
|---|---|---|---|---|
| albuquerque | Dogtopia | OSM node/13807606683 `amenity=animal_boarding`, 3301 Coors Blvd NW, tel. coincide; dogtopia.com/albuquerque-west activo, reseñas sep-2026 | Re-etiquetar; coordenadas corregidas a la ubicación verificada (35.118898, -106.702951), las del dato estaban ~200 m desviadas | `tienda` + `guarderia:true` |
| atlanta | Bark & Blossom Vet Studio | OSM node/14185903742 `amenity=veterinary`, 670 DeKalb Ave NE, tel. y web coinciden; bbvetstudio.com activo (crawl hace 5 h) | Sin cambio: ya era `vet` y es veterinaria real | `vet` (sin cambio) |
| chicago | Doggie Works | OSM node/12141260595 `amenity=animal_boarding`, 2340 W Nelson St; doggieworks.net activo: daycare + boarding | Re-etiquetar | `tienda` + `guarderia:true` |
| dallas | Urban Paws | OSM node/5132199321 `amenity=animal_boarding`, 2526 Elm St; urbanpawsdallas.com activo: boarding + daycare + grooming | Re-etiquetar | `tienda` + `guarderia:true` |
| kansas-city | Pete & Mac's | OSM way/683033248 `animal_boarding`, 600 NE Pavestone Dr, Lee's Summit (coordenadas del dato exactas); petemac.com/location/lees-summit-mo activo | Re-etiquetar; añadidas dirección y tel. +1-816-246-1116 (faltaban) | `tienda` + `guarderia:true` |
| los-angeles | Pawsible | OSM node/14272171949 `animal_boarding`, 555 N Spring St; pawsible.app activo: pet hotel, daycare, grooming, training | Re-etiquetar | `tienda` + `guarderia:true` |
| nashville | City Pets Animal Care | OSM node/13910954901 `amenity=veterinary`, 1016 Jefferson St; citypetsanimalcare.com activo, reseñas ene-2026 | Sin cambio: ya era `vet` y es veterinaria real | `vet` (sin cambio) |
| new-york | Paws & Rec | OSM node/2562015558 `animal_boarding`, 857 4th Ave, Brooklyn; pawsandrec.com activo: daycare + boarding + grooming | Re-etiquetar | `tienda` + `guarderia:true` |
| philadelphia | Villa La Paws Pet Resort | OSM way/951332676 `animal_boarding`, Kings Hwy, Maple Shade NJ; BringFido + PetStay: resort cage-free, boarding/daycare/grooming, activo | Re-etiquetar; añadida dirección "119 Kings Highway, Maple Shade" | `tienda` + `guarderia:true` |
| sacramento | Leash and Collar | OSM node/14205604734 `shop=pet`, 1901 Q St; leashandcollarsacramento.com activo: boutique de mascotas, reseñas may-2026 | Sin cambio: ya era `tienda` y es tienda real | `tienda` (sin cambio) |
| salt-lake-city | Camp Barkalot | OSM node/13607428477 `animal_boarding` existe, PERO su propia web campbarkalot.com anuncia: "As of July 31st 2026 we will be retiring from the doggy daycare business" (Chris y Stephen, tras 20 años); el listado de lugares marca "Permanently Closed" | **Eliminado** (único con evidencia de cierre) | — (eliminado) |
| san-francisco | Metro Dog | OSM node/6141499416 `animal_boarding`, 3117 Pierce St, Richmond; metrodog.com activo: daycare + boarding, personal 24/7 | Re-etiquetar; añadido tel. +1-510-524-3647 (faltaba) | `tienda` + `guarderia:true` |
| tulsa | Top Dog Ranch | OSM way/803414018 `animal_boarding`, E Tucson St, Broken Arrow; topdogranch.com activo: boarding, daycare, grooming, training | Re-etiquetar; añadidas dirección "1050 E Tucson Street, Broken Arrow" y tel. +1-918-379-4909 (faltaban) | `tienda` + `guarderia:true` |

## 3. Cambios aplicados (archivos)

- `datos-usa-montana.js`: Dogtopia (albuquerque) re-etiquetado + coordenadas
  corregidas; **Camp Barkalot eliminado** (línea del bloque `salt-lake-city`).
- `datos-usa-medioeste.js`: Doggie Works (chicago) y Pete & Mac's
  (unity-village / kansas-city) re-etiquetados.
- `datos-usa-noreste.js`: Paws & Rec (new-york) y Villa La Paws Pet Resort
  (maple-shade / philadelphia) re-etiquetados.
- `datos-usa-pacifico.js`: Pawsible (los-angeles) y Metro Dog (el-cerrito /
  san-francisco) re-etiquetados.
- `datos-usa-surcentral.js`: Urban Paws (dallas-texas) y Top Dog Ranch
  (broken-arrow / tulsa) re-etiquetados.
- `datos-usa-sureste.js`: sin cambios (Bark & Blossom y City Pets ya correctos).

Validación: `node --check` OK en los 6 archivos editados.
Ningún lugar quedó sin verificar: 13/13 con fuente en vivo citada arriba.

## 4. Pendientes para el coordinador (fuera de mi alcance por orden)

1. **`datos-usa-extra.js` NO tocado (Boise es de otro agente).** Tres de estos
   13 lugares tienen copia duplicada allí y quedan inconsistentes:
   - `datos-usa-extra.js:1200` — **Camp Barkalot (salt-lake-city): ELIMINAR
     también aquí**; el negocio cerró el 31-jul-2026 y la copia seguiría
     mostrando un negocio cerrado.
   - `datos-usa-extra.js:836` — Top Dog Ranch (tulsa): sigue como `refugio`;
     aplicar la misma re-etiqueta (`tienda` + `guarderia:true`).
   - `datos-usa-extra.js:430` — Leash and Collar (sacramento): ya es `tienda`,
     sin cambio necesario.
2. Pawsible (los-angeles) aparece en un anuncio de venta de negocio
   (BizBuySell) pero sigue operando con normalidad (web, Meetup y estado
   activo); no es evidencia de cierre, solo conviene vigilarlo en la próxima
   revisión.
3. Metro Dog figura en el bloque `el-cerrito-california` pero su dirección
   verificada es Richmond, CA (3117 Pierce St, ciudad limítrofe); se dejó la
   dirección tal cual consta en el dato y solo se añadió el teléfono.
