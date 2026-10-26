# PetNear — Datos Colombia v10.18 (nota de datos)

**Fecha:** 2026-10-26 · **Archivo:** `datos-colombia.js` · **Ámbito:** solo Colombia
**Fuente:** OpenStreetMap (ODbL) vía Overpass API (espejos en cascada).
**No se fusionó ni se publicó nada** (lo hace el coordinador con el PR).

## 1. Resumen

| Concepto | Antes | Después |
|---|---|---|
| Ciudades | 20 | 20 |
| Lugares totales | 427 | **451 (+24)** |
| Categorías | vet, tienda, refugio, zoo | + **parque, peluqueria** (nuevas) |
| Por categoría | vet 258, tienda 138, refugio 19, zoo 12 | vet **265**, tienda **139**, refugio 19, zoo 12, parque **9**, peluqueria **7** |
| Verificación por muestreo | — | **54/54 verificados, 0 fallos** |
| Errores de validación automática | — | **0** |

Conteos finales por ciudad: Bogotá 120, Medellín 94, Cali 28, Barranquilla 15,
Bucaramanga 21, Cartagena 21, Pereira 29, Manizales 9, Armenia 30, Cúcuta 28,
Santa Marta 1, Villavicencio 11, Pasto 2, Neiva 6, Popayán 14, Tunja 12,
Montería 1, Valledupar 2, Sincelejo 3, Riohacha 4.

## 2. Validación automática de los 427 lugares

Script: `validar-colombia-v1018.js` (node). Reglas comprobadas en los 427 lugares:
nombre y categoría presentes, categoría válida, lat/lng numéricos y en rango,
coordenadas dentro de ±0.3° del centro de su ciudad, sin duplicados
(mismo nombre + mismas coordenadas), `horas: null`, sin campos de rating ni
campos no permitidos.

- **Errores: 0.** No se corrigió ni se eliminó ningún lugar existente.
- **Advertencias: 4** (mismas coordenadas, nombres distintos — nodos OSM
  distintos en el mismo punto, p. ej. veterinaria y tienda en el mismo local).
  Se conservaron porque son negocios distintos con nombre propio en OSM:
  - Bogotá: "Botique Del Gato" (tienda) junto a "Animal Center" (vet).
  - Medellín: "Local pequeño" (tienda) junto a "Agromascotas" y
    "Tienda de mascotas". El nombre genérico "Local pequeño" es el nombre
    literal del nodo en OSM y **se verificó OK contra Overpass** en el muestreo.
  - Cartagena: "Club de Huellitas" (tienda) junto a "Unidad Médica Veterinaria".
  - Cúcuta: "Veterinaria Mym Sas" junto a "Venta de Purina".

## 3. Verificación por muestreo contra Overpass

Método: una consulta Overpass por ciudad (bbox ±0.3° del centro, tags
`amenity=veterinary`, `shop=pet`, `amenity=animal_shelter`,
`amenity=animal_boarding`, `tourism=zoo`, `leisure=dog_park`,
`shop=pet_grooming`), y comparación local de cada lugar muestreado con los
elementos OSM a ≤500 m (nombre exacto, contenido o coincidencia de tokens).
5 lugares por ciudad grande (6 cuando había un caso sospechoso), índices
repartidos por toda la lista.

**Resultado: 54 de 54 verificados, 0 fallos.**

| Ciudad | Verificados | Fallos |
|---|---|---|
| Bogotá | 6/6 | 0 |
| Medellín | 6/6 | 0 |
| Cali | 5/5 | 0 |
| Barranquilla | 5/5 | 0 |
| Bucaramanga | 5/5 | 0 |
| Cartagena | 6/6 | 0 |
| Pereira | 5/5 | 0 |
| Armenia | 5/5 | 0 |
| Cúcuta | 6/6 | 0 |
| Popayán | 5/5 | 0 |

Muestras verificadas (todas con coincidencia exacta de nombre en OSM):
Bogotá: Pet Shop Variedades La 65, Botique Del Gato, Mascotas Fantásticas,
Mi Mascota Salitre, D'pelos Spa, Pet Market. Medellín: MASCOTECNO,
Samy Distri Pets, Salud y Bienestar Animal, Suescun, Local pequeño,
Finca hotel perronalidad. Cali: Zoológico de Cali, Centro Veterinario
El Sabueso, Med Vet, Kninos, Paraiso de la Mascota. Barranquilla: MasKoticas,
Zoológico de Barranquilla, Mascolandia, Mi Corral, Agro-Veterinaria
El Proveedor. Bucaramanga: Pet Loving, Surtiacuarios,
Pequeños animales Drs.Reyes, Veterinaria ladralo.com,
Zoológico de Aves la Fantasía. Pereira: Contegral,
Clínica Veterinaria El Arca de Noé, Dido, Almacén comité de Cafeteros,
Huella Segura. Armenia: Veterinaria Mi Hacienda, Amigos y Mascotas,
Manchitas, Fundavet, Guardería Canina. Cúcuta: Estetica Canina y Felina
Mis Joyitas, Veterinaria Mym Sas, Mascotas Bonanza 2000,
Veterinario Dr Juan R Barroso, Pilos Pet, Venta de Productos Veterinarios.
Popayán: La Granjita, Seprovez, Animal house, Veterinaria Gaviria, Tu mascota.
Detalle completo (incl. ID OSM de cada coincidencia) en
`/tmp/overpass-colombia-v1018-resultado.json` (sección `muestreo`).

## 4. Enriquecimiento: 24 lugares nuevos (todos de OSM, con nombre y coordenadas)

Solo se agregaron lugares **con nombre** en OSM, `horas: null`,
`nota: "Dato de OpenStreetMap"`, dentro de ±0.3° del centro y con tope de 120
por ciudad. Dirección y teléfono solo cuando OSM los trae.

### Medellín +8 (86 → 94)
| Lugar | Cat. | OSM |
|---|---|---|
| Parque de las masacotas | parque | node/9121162293 |
| SPA Bigotes Y Patitas (+57 323 5820243) | peluqueria | node/9133584479 |
| Tu Mejor Versión Pets (+57 315 3165093) | peluqueria | node/9866391117 |
| Tienda y baño de mascotas | peluqueria | node/10062786923 |
| Parque el mirador | parque | node/12057552369 |
| Pet Club Laureles | peluqueria | node/13115312745 |
| Parque Canino | parque | way/522696131 |
| Parque los naranjos | parque | way/1280036926 |

### Cali +1 (27 → 28)
- Parque para perros parque natura (parque, node/12081048310).

### Barranquilla +1 (14 → 15)
- Parque de Mascotas (parque, way/907109762).

### Bucaramanga +1 (20 → 21)
- Complejo Canino MUNDOG (parque, node/11191726703; dir. OSM:
  "Finca Potosi Vereda Aranzoque").

### Cartagena +1 (20 → 21)
- Peluquería Canina Fashion Style (peluqueria, way/1223375197).

### Pereira +3 (26 → 29)
- Magic Pets (peluqueria, node/11098563914; Carrera 21).
- Parque para Mascotas (parque, way/627396844).
- Parque Cancha Villavicencio (parque, way/1452387828).

### Tunja +8 (4 → 12) — ciudad delgada, se agregaron todas las categorías
- Drogueria Veterinaria (vet, node/5664423523; Carrera 3 Calle 5).
- Veterinaria El Corcel (vet, node/6182096586).
- Ceagro syngenta (vet, node/6182346585; así lo etiqueta OSM como veterinaria).
- Onimaux (tienda, node/6240464788).
- Mundo Vet (vet, node/9262459495).
- Veterinaria el porky (vet, way/535349427; Carrera 2).
- Agroveterinaria Somex (vet, way/589691860).
- El Establo (vet, way/589691864).

### Riohacha +1 (3 → 4)
- La PerruQuerria (Peluqueria Canina) (peluqueria, node/5705926495; Calle 12).

### Sin agregados
- Bogotá +0 (ya en el tope de 120; OSM devolvió 543 elementos con tag, pero
  ningún `dog_park` ni `pet_grooming` con nombre que no estuviera ya).
- Armenia +0 (ver §5: sus 4 candidatos eran de Pereira).
- Cúcuta +0, Popayán +0 (OSM no tiene `dog_park`/`pet_grooming` con nombre
  en su radio que falte en los datos).

## 5. Descartados en la fusión: 4 duplicados entre ciudades (Pereira/Armenia)

Los centros de Pereira (4.814316, -75.694678) y Armenia (4.536307, -75.672375)
distan 0.278° en latitud, así que sus radios de ±0.3° se solapan y la consulta
de Armenia devolvió lugares de Pereira. La fusión aplicó deduplicación
**global** (mismo nombre normalizado a ≤100 m en cualquier ciudad) y descartó:
Magic Pets, Caninos y Felinos, Parque para Mascotas y Parque Cancha
Villavicencio — los 4 con **el mismo ID de OSM** que los ya agregados en
Pereira (p. ej. Magic Pets = node/11098563914) y con `addr:city=Pereira` en OSM.
Armenia queda en 30 lugares, sin duplicar a Pereira.

## 6. Ciudades delgadas en OSM (nada inventado)

Se revisaron con los 6 tags. "Elementos OSM" = nodos/vías con tag válido en el
radio ±0.3°; "sin nombre" = elementos reales de OSM sin etiqueta `name`,
que **no se pueden agregar** (regla: solo con nombre).

| Ciudad | Lugares | Elementos OSM con tag | Sin nombre (descartados) | Agregados | Veredicto |
|---|---|---|---|---|---|
| Santa Marta | 1 | 3 | 2 | 0 | Delgada en OSM: solo 1 lugar con nombre en todo el radio |
| Montería | 1 | 1 | 0 | 0 | Delgada en OSM: 1 solo elemento con tag |
| Pasto | 2 | 3 | 1 | 0 | Delgada en OSM |
| Valledupar | 2 | 3 | 1 | 0 | Delgada en OSM |
| Sincelejo | 3 | 3 | 0 | 0 | Delgada en OSM: los 3 ya estaban |
| Riohacha | 3 → 4 | 7 | 3 | 1 | Sigue delgada (4 lugares) |
| Tunja | 4 → 12 | 23 | 11 | 8 | Mejoró; quedan 11 elementos sin nombre sin agregar |

Total de elementos OSM sin nombre descartados en toda la corrida: 237
(Bogotá 107, Medellín 22, Cali 4, Barranquilla 7, Bucaramanga 8, Cartagena 3,
Pereira 22, Armenia 19, Cúcuta 25, Popayán 2, Santa Marta 2, Montería 0,
Pasto 1, Valledupar 1, Sincelejo 0, Riohacha 3, Tunja 11). Son sobre todo
parques caninos y veterinarias sin nombre en OSM; si alguien los nombra en
OSM en el futuro, podrán entrar en una próxima cosecha.

No revisadas en esta ronda (fuera del encargo: no son de las 10 grandes ni de
las 7 delgadas): Manizales (9), Villavicencio (11), Neiva (6).

## 7. Incidencias con Overpass

- `overpass-api.de` devolvió varias veces HTTP 502 "server at capacity".
- `overpass.kumi.systems` y `overpass.private.coffee` dieron timeouts de 120 s
  en varios intentos. Se aplicó la cascada de espejos con backoff exponencial
  (5 s → 120 s) según lo ordenado.
- **Valledupar falló en la corrida principal** (6 intentos agotados) y se
  recuperó con un reintento aparte (`reintento-valledupar-v1018.py`, 10
  intentos): éxito al primer intento — OSM solo tiene 3 elementos con tag
  (2 ya estaban, 1 sin nombre). No es un problema de datos, es delgadez real.
- Manizales, Neiva y Villavicencio no se consultaron (fuera del encargo).

## 8. Verificación final y archivos

- `node --check datos-colombia.js`: **OK**.
- `validar-colombia-v1018.js` tras la fusión: **451 lugares, 0 errores**,
  las mismas 4 advertencias preexistentes (§2).
- Encabezado actualizado: "Ciudades cargadas: 20/20 (451 lugares)" y la
  leyenda de categorías incluye parque y peluqueria.
- Backup del estado previo: `datos-colombia.js.bak-v1018`.
- Scripts de esta ronda (en `~/workspace/app-mascotas/`):
  `validar-colombia-v1018.js`, `overpass-colombia-v1018.py`,
  `reintento-valledupar-v1018.py`, `fusion-colombia-v1018.py`,
  `extraer-colombia-v1018.js`.
- Datos crudos de Overpass: `/tmp/overpass-colombia-v1018-resultado.json`
  (muestreo, enriquecimiento y elementos por ciudad).
- **No se tocó** `index.html`, `sw.js`, `firebase.js`, `manifest.json` ni
  archivos de otros agentes. No se fusionó ni se publicó nada.
