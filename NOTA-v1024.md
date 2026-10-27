# PetNear v10.24 — Rediseño estilo Google Maps (pantalla principal + Cómo llegar)

Rama: `desarrollo/mascotas-v10` · Cuenta: **radiolatinapp** (la cuenta
Ecoandesdrone NO se tocó) · Versión: v10.24 · Caché SW: `petnear-v124`.

NO se fusiona: queda en la rama listo para aprobación del dueño con vista
previa. NO se tocó `main`, ni `#splash` (v10.22/v10.23 intacta), ni los
datos (46.221 lugares), ni el motor del mapa, ni el manifest
(`background_color` #FFFFFF), ni los íconos `-v3` transparentes.

## Parte A — Pantalla principal (igual al mockup aprobado)

- **Barra flotante** estilo Google Maps: píldora blanca sobre el mapa, con
  el logo de Toby, el buscador ("Buscar veterinarias, tiendas, parques…"),
  micrófono y avatar circular (Toby) que abre el menú hamburguesa.
- **Píldoras de categorías** debajo de la barra (fila desplazable):
  Veterinarias (activa al inicio, verde #0E7C66), Tiendas, Parques,
  Guarderías y las demás categorías de la app. Al tocar una se filtra el
  mapa; al tocar la activa, el filtro vuelve a Todos (ninguna píldora
  queda marcada, como en la foto, donde solo una categoría está activa).
- **Mapa a pantalla completa** con los pines verdes de huella y etiquetas
  (sin cambios en datos ni motor).
- **Hoja inferior** blanca "Lugares cerca de ti" con tirador y "Ver más":
  tarjetas con LUGARES REALES (nombre, distancia, horario y etiqueta
  verde; estrellas solo si el lugar tiene rating). Sin foto inventada:
  las tarjetas usan el glifo de categoría porque los datos no traen
  fotos. Sin nombres del mockup ("San Roque", "Mascotas Felices" son
  ilustrativos y NO aparecen).
- **Navegación inferior** con 3 botones: Explorar (activo, brújula),
  Favoritos (corazón) y Mi mascota (cara de perro), conectados a las
  funciones que ya existían.
- El menú hamburguesa (avatar) conserva TODO: Mascota perdida,
  Adopciones, Mis visitas, Hazte premium, Idioma, Configuración, Ayuda
  y Acerca de. Ninguna función se perdió.
- **Micrófono**: búsqueda por voz REAL con la Web Speech API del
  navegador. Sin soporte (o si el servicio de voz falla), mensaje
  honesto en el cuadro de sugerencias; nada simulado.
- Filtro inicial `vet` (Veterinarias activa, como la foto).

## Parte B — Pantalla "Cómo llegar / Direcciones" (estilo Google Maps)

- Se abre al tocar un lugar y luego "Cómo llegar", o desde el botón de
  dirección de una tarjeta de la hoja.
- Arriba: flecha para volver, campo "Tu ubicación" (punto azul) y campo
  de destino (pin rojo), con el ícono para intercambiar origen y destino.
- Modos de transporte: carro (seleccionado), transporte público y a pie;
  al tocar uno cambia el modo.
- Atajos: Casa y Trabajo (se establecen y se guardan en local; si no
  están, muestran "Establecer") y Más.
- Sección "Recientes": lugares REALES que el usuario buscó o visitó
  (historial en el teléfono, tope 8); si no hay, mensaje honesto
  ("Aún no tienes lugares recientes"), nunca lugares inventados.
- **PetNear no tiene motor de rutas propio**: el botón "Cómo llegar"
  abre Google Maps con la ruta desde la ubicación del usuario hasta el
  lugar, en el modo elegido:
  `https://www.google.com/maps/dir/?api=1&destination=<lat,lng>&travelmode=driving|transit|walking`
  (con `origin=` solo cuando el origen es Casa/Trabajo o un lugar; con
  "Tu ubicación" se omite y Google Maps usa la ubicación viva del
  teléfono). La ruta en la app (OSRM) sigue calculándose sola al
  seleccionar un lugar, y "Iniciar viaje" sigue funcionando.
- Todo en blanco limpio con el verde PetNear #0E7C66 y la esencia de
  mascotas (Toby, huellas, lugares de mascotas).

## Correcciones encontradas al verificar (también en v10.24)

1. **El evento `load` de MapLibre no se dispara solo** (preexistente):
   solo se emite dentro de un frame de render, y con el mapa quieto el
   bucle se detiene (verificado: `loaded()=true`, 2 frames, `load` nunca
   llega; un `triggerRepaint()` lo dispara al instante). Antes solo lo
   cubrían el fallback de 8 s del splash y la carga de zona por `moveend`.
   Ahora `alCargarMapa()` corre si el mapa ya cargó, o por el evento, o
   por sondeo de `loaded()` cada 500 ms (máx. 20 s), una sola vez. La
   hoja y las píldoras ya aparecen solas al cargar.
2. **"Cómo llegar" no aparecía en lugares sin teléfono** (preexistente):
   toda la fila de contacto (incluido `#bIr`) se ocultaba cuando el lugar
   no tenía `tel`. Ahora la fila siempre se muestra y solo Llamar y
   WhatsApp dependen del teléfono.
3. **El micrófono no mostraba el mensaje cuando la voz fallaba**:
   ahora el mensaje honesto aparece también si el servicio de voz da
   error al arrancar, no solo si el navegador no tiene la API.
4. **"Guarderías" en singular** en la píldora: ahora usa la clave
   `pill.guarderia` ("Guarderías", como el mockup) en los 8 idiomas.
5. **Cosmético**: en Recientes, si el lugar no tiene dirección ya no
   sale un "·" inicial suelto.

## Verificación (Playwright móvil 390×844, GPS Charlotte)

Script `v1024_verify.py` (local, no se empuja): **76 checks, TODO PASS**,
cero pageerror, `node --check` OK. Secciones A–K: splash intacto (fondo
#E8F0E4, logo `icono-512-v3.png`, "PetNear", se elimina del DOM, v10.24);
barra flotante, píldoras, hoja con tarjetas reales (verificadas contra
`datos-*.js` y contra los títulos de los marcadores), navegación
inferior; píldoras filtran y retocar la activa vuelve a Todos;
direcciones con destino real (URL verificada: `destination=35.232283,
-80.838015&travelmode=walking`, sin `origin` con "Tu ubicación");
Casa como destino y como origen (`35.227100,-80.843100`); intercambio
origen/destino; Recientes vacío con mensaje honesto; menú desde el
avatar; favoritos y mi mascota; buscador con sugerencias; micrófono real
("Escuchando…") y mensaje honesto sin API; categorías Charlotte
(todos=107); inglés (Vets, Places near you, Explore).

Límite del sandbox: el navegador sin internet no carga Google Maps ni
las teselas del mapa, así que la URL de Google Maps se verificó
capturando la URL exacta que la app pasa a `window.open`, y la carga
real de Google Maps y de las teselas queda para la vista previa en el
teléfono del dueño. Los pines sí se verificaron en el DOM (42 visibles,
5 en vista a zoom 14.7).

## Qué del diseño de la foto no se pudo hacer igual (y por qué)

- **Foto de perfil real**: no existe foto del usuario; el avatar es el
  ícono de Toby (no se inventa una foto).
- **Fotos en las tarjetas de la hoja**: los datos de lugares no traen
  fotos; las tarjetas usan el glifo de categoría (como la lista que ya
  tenía la app). Estrellas y horario solo aparecen si el lugar real los
  tiene.
- **Nombres del mockup**: "Clínica Veterinaria San Roque" y "Pet Store
  Mascotas Felices" son ilustrativos; las tarjetas muestran solo lugares
  reales de los datos.
- **Mapa base**: en el sandbox las teselas no cargan (sin internet); en
  el teléfono se ven las calles como siempre. El diseño no cambió el
  motor del mapa.

## Archivos del empuje

- `index.html` (582.461 caracteres, 9.084 líneas) — rediseño completo.
- `manifest.json` — íconos `-v3`, `background_color` #FFFFFF (ya estaba
  en locales; la rama aún estaba en v10.23, así que se incluye aquí).
- `sw.js` — caché `petnear-v124`, íconos `-v3`.
- `icono-512-v3.png`, `icono-192-v3.png` — mismos íconos transparentes
  RGBA (la rama no los tenía).
- `NOTA-v1024.md` — esta nota.

Scripts locales (no se empujan): `v1024_build.py` (reproduce
`index.html` byte a byte desde `index.html.bak-v1024`, verificado),
`v1024_verify.py`, `PUSH_v1024.py`. Capturas en `capturas/`:
`v1024-principal.png`, `v1024-direcciones.png`, `v1024-menu.png`,
`v1024-en.png`.
