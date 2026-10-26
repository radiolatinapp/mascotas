# v10.19 — Controles del mapa estilo Google Maps

**Fecha:** 2026-10-26 ~17:30 EDT
**Rama:** `desarrollo/mascotas-v10` (copia local `~/workspace/app-mascotas/`)
**Estado:** implementado y verificado localmente. **SIN fusionar, SIN PR, SIN publicar.**
**Origen:** captura del dueño (Charlotte, Tryon Street) — la barra ancha de
estilos y los botones sueltos de "modo GPS" y "Mi ubicación" se veían
desordenados. Pidió organizarlos con su icono, como Google Maps, y ver
una foto de cómo queda.

## Qué cambió

Antes: una barra horizontal ancha con 4 botones de texto (Ilustrado /
Satélite / Mapa 3D / Vivir) y, debajo, dos píldoras de texto sueltas
("modo GPS", "Mi ubicación"), brújula y zoom en columna suelta.

Ahora: una sola columna a la derecha del mapa (right: 12 px), como
Google Maps, de arriba a abajo:

| Control | Posición | Qué es |
|---|---|---|
| Botón de capas `#btnCapas` | top 196 px, 48×48, esquinas redondeadas | Icono SVG de capas sobre una miniatura del estilo actual; al tocarlo despliega el panel de vistas |
| Panel de vistas `#capasPop` | top 252 px, 236 px de ancho, rejilla 2×2 | 4 tarjetas: Ilustrado, Satélite, Mapa 3D, Vivir. Cada una con miniatura SVG, etiqueta y check verde en la activa. Se cierra al elegir o al tocar fuera del mapa |
| Mi ubicación `#btnYo` | top 256 px, redondo 46 px | Icono SVG de mira (crosshair). Centra el mapa en el usuario y activa el seguimiento |
| Modo GPS `#btnGps` | top 310 px, redondo 46 px | Icono SVG de flecha de navegación. Verde cuando está activo (`.on`), gris cuando no |
| Brújula `#btnBrujula` | top 364 px | Igual que antes, solo bajó para hacer sitio |
| Zoom + / − | top 420 / 458 px | Igual que antes, solo bajaron para hacer sitio |

## Reglas respetadas

- **Cero emojis como iconos:** todos los iconos son SVG reales (capas,
  mira, flecha de navegación, miniaturas de las 4 vistas, check).
- **Identidad PetNear:** verde `#0E7C66` / `#14342B`, misma tipografía y
  sombras de los controles anteriores.
- **Ninguna función eliminada:** los 4 estilos, el modo GPS, Mi ubicación,
  brújula y zoom hacen exactamente lo mismo que antes. Los IDs de los
  botones no cambiaron (`vIlus`, `vSat`, `v3d`, `vActual`, `btnGps`,
  `btnYo`, `btnBrujula`, `btnZoomMas`, `btnZoomMenos`), así que el panel
  de configuración sigue funcionando (sus chips llaman a `.click()` sobre
  estos botones).
- **Idiomas:** las etiquetas de las vistas usan las claves i18n que ya
  existían; solo se añadió `capasTitulo` ("Estilo de mapa" / "Map style")
  en es y en. Los demás idiomas caen al inglés por el fallback de `t()`.
  Los botones de icono usan `data-i18n-title` (tooltip) en vez de texto.
- **Detalle técnico:** los manejadores de las vistas pasaron de
  `e.target` a `e.currentTarget`, porque ahora dentro de cada botón hay
  SVG y spans; con `e.target` el clic sobre el icono rompía el estado
  activo. `vista()` además cierra el panel y actualiza la miniatura del
  botón de capas (`data-vista`).

## Verificación (Playwright, móvil 390×844, GPS Charlotte)

Script: `captura-controles-mapa.py` — **22/22 PASS, cero pageerror.**

- Botón de capas visible, vista inicial `ilus`, panel cerrado al cargar.
- Al tocar capas: panel abre con las 4 opciones, Ilustrado marcada.
- Al tocar Satélite: panel se cierra, Satélite queda activa y el botón de
  capas muestra la miniatura oscura de satélite.
- Mi ubicación centra y deja el GPS activo; Modo GPS alterna on/off.
- Clic fuera del panel lo cierra.
- Corrección aplicada tras la primera captura: el icono de capas era
  blanco sobre miniatura clara y no se leía; ahora es verde oscuro en
  miniaturas claras e blanco en la de satélite.

## Fotos

- `capturas/controles-cerrado.png` — controles cerrados (columna compacta).
- `capturas/controles-capas.png` — panel de las 4 vistas abierto.
- `capturas/controles-satelite.png` — tras cambiar a Satélite (botón de
  capas con miniatura oscura, chip "7 lugares en esta zona").

**Limitación honesta de las fotos:** en el entorno de pruebas (navegador
sin interfaz del sandbox) los azulejos del mapa no cargan — las
peticiones a `tiles.basemaps.cartocdn.com` fallan (15 peticiones
fallidas) por la red del sandbox, no por la app. El mapa carga, los
pines aparecen y el cambio de estilo funciona, pero el fondo sale en
blanco. En el teléfono del dueño el mapa se ve normal (su propia captura
muestra las calles). La foto muestra los controles tal cual quedan; el
fondo del mapa en su teléfono tendrá las calles como siempre.

## Archivos tocados

- `index.html` (CSS, bloque HTML de controles, JS `vista()` y
  manejadores, claves i18n `capasTitulo`).
- `captura-controles-mapa.py` (nuevo, verificación + fotos).
- `capturas/controles-cerrado.png`, `capturas/controles-capas.png`,
  `capturas/controles-satelite.png` (nuevas).
- Respaldo previo al cambio: `index.html.bak-v1019-controles`.

## Pendiente del visto bueno del dueño

- ¿Le gusta la columna así o quiere algún control en otro sitio?
- ¿Las miniaturas de las 4 vistas se entienden bien?
- Con su "sí", este cambio se suma al PR de la v10.19 (no se publica
  solo). Sin su palabra, no se fusiona nada.
