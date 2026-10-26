# Diseño: versiones en inglés y portugués de la web

Fecha: 25 de octubre de 2026. Estado: borrador para aprobación de Diego. Cuando esté aprobado, se ejecuta desde acá (el plan de implementación se escribe aparte).

## Para qué

Que familias que buscan en inglés o en portugués encuentren a Parents' Break en Google (turistas y residentes extranjeros en Montevideo, Canelones y Punta del Este) y puedan leer la página y pedir un servicio en su idioma. El objetivo principal es ser encontradas; el secundario, atender bien a quien llega por recomendación.

## Decisiones ya tomadas (Diego, 25/10/2026)

- Rutas por idioma: el español sigue en `/` (sin cambiar la dirección actual), inglés en `/en` y portugués en `/pt`.
- Mensaje de WhatsApp del simulador:
  - Español: igual que hoy.
  - Inglés: el mensaje completo sale en inglés, etiquetas y valores. El equipo lee inglés y responde en inglés.
  - Portugués: la web se lee en portugués, pero el mensaje sale en español con una línea final `*Idioma:* Português`, porque el equipo responde en español. Junto al botón de enviar se avisa a la familia que la respuesta va a ser en español (texto a aprobar antes de aplicar).
- Las traducciones se entregan como borrador para que Diego y las dueñas las revisen antes de publicar. No se publican textos sin esa revisión.
- Sin redirección automática por el idioma del navegador. Como mucho, más adelante, una línea discreta ofreciendo la versión en inglés cuando el navegador viene en inglés.

## Metas, no metas y lo que sería un fracaso

Metas:
- Tres versiones completas de la página (todas las secciones, el simulador y los textos de validación), cada una con su URL, su `<html lang>`, su título y descripción para Google, y las etiquetas `hreflang` cruzadas.
- Un selector de idioma visible en la Navbar (compu) y en el menú de celular.
- El simulador funciona igual en las tres versiones, con las mismas validaciones, y el mensaje de WhatsApp sale como se decidió arriba.

No metas:
- No se traducen nombres propios ni zonas (Montevideo, Pocitos, Punta del Este, etc.).
- No se traduce la página de redirección a WhatsApp más allá de su texto visible ("Abriendo WhatsApp…").
- No se agregan páginas nuevas: sigue siendo una sola página por idioma.
- No se cambia el diseño.

Sería un fracaso si:
- La versión en español cambia de dirección o Google deja de indexarla como hasta ahora.
- El simulador se rompe en alguna versión (mensaje incompleto, validaciones distintas, fechas mal formateadas).
- Se publican traducciones sin revisar.
- La página pesa más en el celular por cargar los tres idiomas a la vez.

## Cómo funciona (arquitectura)

### Rutas

Todo lo que hoy está en `src/app/` (layout, página, página de redirección) pasa a `src/app/[lang]/`. `lang` es un parámetro de raíz con tres valores: `es`, `en`, `pt`.

- `generateStaticParams` devuelve los tres idiomas: las tres versiones se generan estáticas en el build, igual que hoy.
- `src/proxy.ts` (el nombre que Next 16 da al middleware) reescribe `/` a `/es` sin cambiar la URL que ve el visitante, así el español sigue en `/`. Un pedido a `/es` redirige a `/` (una sola dirección canónica para el español). `/en` y `/pt` se sirven tal cual. Todo lo que empieza con `/_next`, `/ir/` (ver abajo) y los archivos estáticos no pasa por el proxy.
- La página de redirección a WhatsApp queda como `/ir/whatsapp/<origen>` en las tres versiones; no lleva prefijo de idioma. Recibe el mensaje ya armado en el idioma correcto, así que no necesita saber el idioma. Su único texto visible se muestra en español, inglés y portugués a la vez, en tres líneas cortas, para no complicarla.

### Textos

Los textos salen de los componentes y van a tres diccionarios con las mismas claves:

```
src/dictionaries/es.json
src/dictionaries/en.json
src/dictionaries/pt.json
```

Organizados por sección (`navbar`, `hero`, `numeros`, `quienesSomos`, `servicios`, `comoFunciona`, `nineras`, `simulador`, `ctaFinal`, `footer`, `metadatos`, `redireccion`). Las listas (ítems de cada servicio, pasos, cualidades) son arreglos.

`src/dictionaries/index.ts` expone `getDictionary(lang)` con `import 'server-only'`: los diccionarios solo existen en el servidor y no engordan el JavaScript que baja el celular. La página (`src/app/[lang]/page.tsx`) es un Server Component que carga el diccionario y se lo pasa a cada sección como `t`.

Los componentes que hoy son `"use client"` (todos) siguen siéndolo; reciben sus textos por props. El simulador recibe su bloque completo del diccionario (etiquetas, opciones visibles, mensajes de validación, textos del mensaje de WhatsApp).

### Simulador y mensaje de WhatsApp

- Los valores internos del formulario no cambian (`"Babysitting"`, `"Petsittings"`, `"Evento"`, `"Puntual"`, `"Fijo"`, los nombres de zonas…): son los que usan la preselección desde Servicios y las pruebas. Lo que se traduce es la etiqueta visible de cada opción.
- El mensaje se arma con una función `armarMensaje(form, idiomaMensaje)` donde `idiomaMensaje` es `es` o `en`:
  - En `/`: `es`, igual que hoy.
  - En `/en`: `en`. Etiquetas ("Name", "Service", "Date"…) y valores traducidos ("Babysitting", "Pet sitting", "Event", "One-off", "Recurring", días de la semana, tipos de evento, "To be confirmed"/"Open-ended", etc.). Las fechas van en `dd/mm/yyyy`, como hoy, porque las lee el equipo en Uruguay.
  - En `/pt`: `es`, más la línea final `*Idioma:* Português`.
- El saludo inicial de los botones directos (Navbar, Hero, flotante, CTA, Footer, menú) sigue la misma regla: en español en `/` y `/pt` (en `/pt` con la línea `*Idioma:* Português`), en inglés en `/en`.
- Junto al botón "Enviar por WhatsApp" de la versión en portugués va una nota de una línea avisando que la respuesta es en español. Texto a aprobar; propuesta de borrador: "Sua mensagem será enviada em espanhol e a nossa resposta também será em espanhol."
- Los mensajes de error de fecha y hora (que hoy están en los componentes `TimeSelector` y `FinSelector`) también salen del diccionario.

### Selector de idioma

- Compu: tres letras pequeñas `ES · EN · PT` en la Navbar, a la izquierda del botón amarillo, con el idioma actual resaltado. Son links a `/`, `/en` y `/pt`.
- Celular: la misma fila dentro del menú (hoja inferior), encima del botón verde.
- Son links normales (no JavaScript): funcionan sin hidratación y Google los sigue.

### SEO

- `<html lang="es" | "en" | "pt">` desde el layout, según `lang`.
- En los metadatos de cada versión: `title`, `description` y `keywords` traducidos (borradores a revisar), `openGraph.locale` (`es_UY`, `en_US`, `pt_BR`) y `alternates`:
  - `canonical`: la URL propia de cada versión (`/`, `/en`, `/pt`).
  - `languages`: `es` → `/`, `en` → `/en`, `pt` → `/pt`, `x-default` → `/`. Next genera con esto las etiquetas `<link rel="alternate" hreflang="…">`.
- `src/app/sitemap.ts` con las tres URL y sus alternativas de idioma.
- `src/app/robots.ts` que permite todo salvo `/ir/`.
- La imagen de vista previa (`opengraph-image`) es la misma para las tres versiones.

### Qué no pasa por el proxy ni se duplica

`/ir/whatsapp/<origen>`, `/opengraph-image.jpg`, `/icon.png`, `/apple-icon.png`, `/_next/*` y los archivos de `public/`.

## Restricciones

- Sin dependencias nuevas: Next 16 trae todo lo necesario (`proxy.ts`, `generateStaticParams`, `alternates`, `sitemap.ts`). No se agrega una biblioteca de i18n.
- Build estático para las tres versiones; Vercel Hobby no cambia.
- El peso de JavaScript en el celular no debe subir por los diccionarios (se quedan en el servidor).
- Las pruebas existentes del simulador (mensajes y validaciones de los tres servicios, 65 secuencias de tipeo en los campos de hora) tienen que seguir pasando en `/` y repetirse en `/en` y `/pt`, verificando además el idioma del mensaje y la línea `*Idioma:* Português`.
- `npm run build` antes de cada commit; commits separados por tema; PR sin merge hasta que Diego lo pida.

## Trabajo estimado

Grande: una sesión entera de trabajo, en un PR con estos commits aproximados:

1. Diccionario en español: extraer todos los textos de los diez componentes, el simulador y los metadatos a `es.json`, y que la página en español salga del diccionario sin cambios visibles (verificación: el HTML generado es idéntico al actual salvo el orden de atributos).
2. Rutas `[lang]` + `proxy.ts` + `generateStaticParams`, con el español en `/`.
3. Simulador: `armarMensaje(form, idiomaMensaje)` y los valores traducibles.
4. Diccionarios `en.json` y `pt.json` (borradores marcados como tales), con una tabla legible en `docs/traducciones-borrador.md` para revisar.
5. Selector de idioma en Navbar y menú.
6. Metadatos, `hreflang`, `sitemap.ts`, `robots.ts`.
7. Pruebas en los tres idiomas y Lighthouse en las tres versiones.
8. CLAUDE.md.

Más el tiempo de revisión de las traducciones por parte de Diego y las dueñas.

## Riesgos

- Regresiones en el simulador: lo cubre repetir las pruebas existentes en cada idioma.
- Que el español quede en `/es` por error en el proxy: lo cubre una prueba que pide `/`, `/es`, `/en`, `/pt` y verifica URL final, `lang` y `canonical`.
- Traducciones con términos del negocio mal elegidos (por ejemplo "sitter" vs "nanny", "babá" vs "cuidadora"): por eso van como borrador y se revisan antes de publicar.

## Lo que queda a criterio de quien ejecuta

- Nombres exactos de las claves del diccionario y cómo tipar `t` (sugerencia: un tipo derivado de `es.json`, así las otras dos versiones no pueden olvidar claves).
- Cómo pasar `lang` a los componentes cliente que lo necesiten (el simulador, para el idioma del mensaje): por props desde la página.
- Si el selector de idioma en compu va como texto `ES · EN · PT` o como un desplegable pequeño; la propuesta es el texto, por simplicidad.

## Decisiones pendientes de Diego

- Aprobar este diseño.
- Aprobar el texto de la nota en portugués junto al botón de enviar.
- Definir si los textos "Montevideo, Canelones y Punta del Este" se mantienen idénticos (propuesta: sí).
