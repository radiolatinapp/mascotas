# NOTA de despliegue — PetNear v10.17 (reglas Firestore/Storage)

Corrección de la auditoría integral v10.16 (26-oct-2026). Solo reglas:
`firestore.rules` y `storage.rules`. No cambia `index.html` ni `sw.js`,
no cambia números de versión de la app.

## Verificación PN-23 (rama main, 2026-10-26 ~04:00 EDT, vía API de GitHub)

- Rama `main` en `cb6d8e79da78f7738df55fdc7bf5e79fc3dc09a9` (95 blobs).
- Archivos prohibidos (`.py` / `.log` / `.bak` / `.db` / `.out`): **0**.
- Capturas (rutas con "captura" o "screenshot"): **0**.
- Archivos `.md`: solo `README.md`.
- Veredicto: main está limpio; lo auditado como "árbol del sitio" (scripts
  de cosecha, logs, respaldos, capturas, base SQLite) vive solo en el
  espacio de trabajo local, NO en el repo.

OJO: `firestore.rules` y `storage.rules` **NO estaban en el repo** (ni en
`main` ni en `desarrollo/mascotas-v10`): se desplegaban a mano desde la
Firebase Console. Este commit las mete por primera vez en control de
versiones, para que las reglas que se despliegan sean las del repo.

## Qué SÍ va al repo (allowlist)

- `index.html`, `sw.js`, `manifest.json`
- `firestore.rules`, `storage.rules`
- `datos-*.js`, `pins-*.js`, `PINS_*.js`
- `icono-*.png`
- `mascota/` (avatares e imágenes de la mascota)
- `vendor/` (MapLibre y librerías vendorizadas)
- `README.md`
- Esta nota (`NOTA-despliegue.md`) y otras `NOTA-*.md` de versión.

## Qué NUNCA va al repo (ni al despliegue)

- Scripts `.py` (cosecha, pruebas, PUSH/PR: viven solo en el espacio
  de trabajo local; `test-reglas-v1017.py` tampoco se sube).
- Logs y salidas: `.log`, `.out`.
- Respaldos y temporales: `.bak`, `.db` (incluida la base SQLite de
  trabajo, ~205 MB), `.tmp`, `*.orig`.
- Capturas: `capturas/` y cualquier `*.png`/`*.jpg` de capturas de
  pantalla fuera de `mascota/` e `icono-*.png`.
- `node_modules/`, `.env`, credenciales, tokens y claves de cualquier tipo.
- Videos originales sin optimizar y material fuente fuera de `mascota/`.

Regla práctica: si no está en la allowlist de arriba, no se sube. Antes
de cada push, revisar la lista de archivos del commit contra esta nota.

## Qué cambió en las reglas v10.17 (resumen por hallazgo)

- **PN-01 (CRÍTICO):** `/premium/{uid}` ya no se puede escribir desde el
  cliente (`create/update/delete: if false`). Solo lectura del propio uid.
  Premium queda en modo DEMO/informativo: sin verificador de compras no
  hay Premium real. El documento solo lo podrá escribir un proceso de
  servidor futuro (que hoy NO existe).
- **PN-02:** las ofertas ya no admiten `descripcion` ni en create ni en
  update. La oferta pública es solo teaser (negocio, título, descuento,
  fechas, `soloPremium`). Las reglas no pueden filtrar campos en lectura:
  la protección es que el detalle exclusivo nunca llega a escribirse.
- **PN-03:** crear negocio exige `premium == false`. El update ya no
  tocaba `premium` y sigue sin tocarlo (verificado).
- **PN-26:** crear oferta o aviso exige que el `negocioId` exista y que
  su `creadoPor` sea el usuario (`get()` del documento de negocio).
- **PN-04:** tipos y rangos en alertas/adopciones/negocios/ofertas/avisos/
  avistamientos/reportes: strings con tope (nombre ≤100, descripcion
  ≤1000, nota ≤500, contactoValor ≤100, fotoUrl/logoUrl ≤200000),
  lat [-90,90], lng [-180,180], timestamps obligatorios, descuento int
  0-100, campos fuera de la lista exacta rechazados.
- **PN-05:** el dueño ya NO puede tocar `avistamientos`, `reportes` ni
  `expiraEn` a voluntad. Solo `estado` (con transiciones válidas:
  alertas activa→encontrada/resuelta/oculta, encontrada/resuelta→oculta;
  adopciones disponible→adoptado/oculta, adoptado→oculta), `contactoValor`
  y la renovación única (`renovada` false→true una sola vez, con
  `expiraEn` hacia adelante en ese mismo update). La app usa estado
  `encontrada` (no `resuelta`): ambos se admiten como destino.
- **PN-06:** el ocultado por 3 reportes es SOLO filtro del cliente, NO
  moderación autoritativa (documentado en las reglas). Sin backend no se
  puede imponer. Reporte 1-por-usuario como estaba; contadores no
  editables por el dueño (PN-05).
- **PN-25:** Storage NO está activado: `storage.rules` deniega todo
  (`allow read, write: if false`) y documenta las validaciones que se
  aplicarían al activarlo (solo imágenes, máx. 2 MB, solo el dueño de la
  carpeta, rutas limitadas).

## Consecuencias para la app (index.html) — pendientes del agente cliente

Estas reglas rompen lo siguiente si la app no se adapta (trabajo de otro
agente, NO de este commit):

1. **Publicar oferta** envía `descripcion`: ahora será denegado. Quitar
   `descripcion` del documento que se crea (y no mostrarla).
2. **Crear negocio** envía `premium` según el Premium local: con Premium
   local activo será denegado. Enviar siempre `premium:false`.
3. **Contadores** (`fbIncrementar` de `avistamientos`/`reportes`): ya no
   los puede subir nadie desde el cliente (antes solo el dueño podía, lo
   cual era el abuso). Los contadores quedan en 0 y el filtro
   "ocultar a los 3 reportes" deja de activarse por conteo. Contar
   reportes exige leer la subcolección o un backend; no inventarlo aquí.
4. **Renovar** sigue funcionando igual (la app ya manda `expiraEn` +
   `renovada:true` juntos, una sola vez): permitido.
5. **Marcar encontrada / adoptado** sigue funcionando igual.

## Pruebas

- `test-reglas-v1017.py` (local, NO se sube): validación estática
  37/37 PASS (sintaxis, patrones por PN, matriz de 32 casos negativos
  documentada). Incluye el test JS del emulador
  (`test-reglas-v1017.emulator.js`, se genera con
  `--write-emulator-test`).
- **Prueba de emulador PENDIENTE:** en el sandbox no hay `firebase-tools`
  ni Java (el emulador los exige). Ejecutar antes de desplegar las reglas
  a producción, en el PC o en una máquina con Java 17+ y firebase-tools:
  `npx firebase emulators:exec --only firestore "node
  test-reglas-v1017.emulator.js" --project mascotas-cerca-de-ti`.
- Las reglas NO se han desplegado a Firebase todavía: este commit solo las
  deja en la rama `desarrollo/mascotas-v10`. Desplegar desde la Console
  (copiar el contenido) o con `firebase deploy --only firestore:rules`
  DESPUÉS de que el emulador dé verde.
