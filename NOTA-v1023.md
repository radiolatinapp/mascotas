# NOTA v10.23 — Fondo del splash automático de Chrome en blanco

## El problema
El dueño confirmó que la pantalla de inicio propia (v10.22: logo fusionado,
"PetNear", barra con huesito) SÍ sale. Pero ANTES de ella sale una imagen fea:
el logo de Toby sobre un CUADRO BLANCO, sin nombre ni barra. Esa imagen es el
splash AUTOMÁTICO de Chrome (el que muestra el navegador al abrir la PWA
instalada, antes de que cargue la página). Chrome lo arma con el
`background_color` y el ícono del `manifest.json`. El `background_color` era
`#E8F0E4` (verde pálido) y el teléfono del dueño tiene guardado en caché el
ícono VIEJO (`icono-512.png` RGB con fondo blanco), así que el cuadro blanco
se veía sobre el fondo verde pálido. El ícono nuevo ya es transparente (RGBA,
v10.22), pero el teléfono no lo ha recogido.

## La solución
`background_color` del `manifest.json`: `#E8F0E4` → `#FFFFFF` (blanco). Así el
fondo del splash automático de Chrome queda blanco y el cuadro blanco del
ícono viejo se funde por completo (no se ve ningún cuadro), y el ícono nuevo
transparente también se fusiona sobre blanco. Esto quita la imagen fea sin
importar si el teléfono tiene el ícono viejo o el nuevo en caché.

## Reglas respetadas
- La pantalla de inicio propia (`#splash` en `index.html`) NO se tocó: sigue
  con su fondo verde pálido `#E8F0E4`, el logo fusionado, el nombre "PetNear"
  y la barra con el huesito, tal como el dueño la aprobó en v10.22.
- Solo se cambió el `background_color` del manifest, la versión y el caché.
- No se tocó nada más de la app (precios, datos, mapa, funciones, íconos).

## Cambios (4 archivos)
- `manifest.json` — `background_color`: `#E8F0E4` → `#FFFFFF` (theme_color
  `#0E7C66` sin cambios).
- `sw.js` — caché `petnear-v122` → `petnear-v123` (para forzar que la PWA
  se actualice).
- `index.html` — versión visible v10.22 → v10.23 (pie de página, panel
  "Acerca de" y `attrMapa` en JS; 4 cadenas). Los comentarios históricos
  v10.22 del splash quedan como estaban (describen cuándo se creó el splash).
- `NOTA-v1023.md` — esta nota.

## Verificación (Playwright, móvil 390×844, servidor local)
- Manifest servido: `background_color` `#FFFFFF`, `theme_color` `#0E7C66`.
- Splash propio: presente, fondo `rgb(232, 240, 228)` = `#E8F0E4` (sin
  cambios), logo `icono-512.png` (512 px), nombre "PetNear", frase según
  idioma, barra con huesito SVG. Capturado a 61% ("Loading… 61%").
- El splash se desvanece y se elimina del DOM cuando la app está lista.
- App lista: mapa con canvas, buscador, botón Categorías, pie "v10.23".
- **Cero pageerror.** JS verificado con `node --check` (script principal y
  `sw.js`).
- Nota: el teléfono del dueño puede seguir mostrando el splash viejo hasta
  que la PWA se actualice (caché petnear-v123) o se reinstale; el cambio del
  fondo a blanco hace que, en cuanto se actualice el manifest, el cuadro
  blanco ya no se vea.

## Estado
En rama `desarrollo/mascotas-v10`, SIN fusionar. Esperando la palabra del
dueño para abrir el PR v10.23 y fusionar a `main`.
