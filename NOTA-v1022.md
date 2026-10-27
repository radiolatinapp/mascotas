# PetNear v10.22 — Pantalla de inicio (splash) propia

**Fecha:** 2026-10-27 ~08:15 EDT. **Rama:** `desarrollo/mascotas-v10`. **Versión:** v10.21 → v10.22. **Caché sw.js:** petnear-v121 → petnear-v122. **NO fusionado** (espera la palabra del dueño).

## Problema (foto del dueño en su teléfono, 2026-10-27 04:11 EDT)

La pantalla de inicio era el splash automático de Chrome (no había splash propio en el HTML):
1. El logo salía sobre un **cuadro blanco** que no se fusionaba con el fondo verde pálido. Causa: `icono-512.png` era RGB (512×512, SIN transparencia) — el fondo blanco estaba metido en la imagen.
2. **No aparecía el nombre** de la aplicación ("PetNear").
3. **No había barra de carga.**

## Lo que se hizo

### 1. Logo transparente (sin redibujar ni cambiar colores)
- `icono-512.png` e `icono-192.png`: fondo blanco eliminado por flood-fill desde el borde (solo el fondo conectado al borde; la huella blanca y los brillos del pin, que están dentro del pin, quedan intactos). Ahora son RGBA.
- Verificado por lectura: el logo está intacto (pin verde, Toby, collar rojo con cascabel dorado, huella blanca) y al componerlo sobre `#E8F0E4` las esquinas son exactamente el color de fondo — sin cuadro blanco ni halo.
- Originales guardados solo en local: `icono-512.png.bak-orig-blanco`, `icono-192.png.bak-orig-blanco` (NO se empujan).

### 2. Splash propio en `index.html`
- Overlay a pantalla completa (`#splash`, z-index 9999, fondo `#E8F0E4` = mismo `background_color` del manifest, así el splash automático de Chrome también se ve integrado si aparece antes).
- Contenido, en orden: logo transparente (196×196), nombre **"PetNear"** grande en verde `#0E7C66`, frase ("Encuentra veterinarias, tiendas y más cerca de ti" / "Find vets, pet stores and more near you" según el idioma del navegador), barra de carga y porcentaje.
- Barra de carga: pista de 228×12 px, relleno verde `#0E7C66` y un **huesito de perro SVG** (blanco con borde verde) que avanza en el borde del relleno. Cero emojis como íconos.
- El texto de carga se adapta al idioma del navegador (es → "Cargando…", otro → "Loading…").

### 3. Progreso real + nunca bloquea
- El splash expone `window.__splash` con `set(p)` y `hide()`.
- Progreso: empieza en 8%, auto-avanza suave hasta 80%, salta a 55% cuando se crea el mapa y se esconde cuando el mapa dispara `load`.
- Seguridad: se esconde solo a los 8 s como máximo, aunque algo tarde — nunca bloquea la app.
- Al esconderse se desvanece (opacidad 0.55 s) y se elimina del DOM.

### 4. Versión
- `index.html`: v10.21 → v10.22 (pie de mapa, panel Acerca y el JS que pone el pie). El comentario histórico de v10.21 (Toby) no se tocó.
- `sw.js`: caché `petnear-v121` → `petnear-v122`.
- `manifest.json`: **sin cambios** (`background_color` ya era `#E8F0E4`).

## Verificación (Playwright, móvil 390×844, servidor local)
- Splash capturado en varios momentos: logo SIN cuadro blanco (fusionado), "PetNear" bien visible, barra con el huesito en el borde del relleno y en sincronía con el porcentaje (69% medido = 69% en barra y huesito; 81% = 80-81%).
- El splash se desvanece y se elimina del DOM; la app queda lista (mapa con canvas, buscador, botón Categorías, marca "PetNear", pie "v10.22").
- **Cero pageerror.** Los errores de consola son solo `ERR_TUNNEL_CONNECTION_FAILED` de los tiles/mapa (el Chromium del sandbox no abre túnel a internet público; no son errores del splash ni de la app).
- Sintaxis JS verificada (`node --check` del script del splash y del init principal).

## Archivos del commit
- `index.html`, `sw.js`, `icono-512.png`, `icono-192.png`, `NOTA-v1022.md`.
- NO se empujan: scripts .py, respaldos `.bak-orig-blanco`, capturas locales, JSON de estado.
