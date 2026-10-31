# Parents' Break - Landing web

## Qué es esto

Landing page de Parents' Break, un servicio premium de cuidado infantil en Uruguay (Montevideo, Canelones y Punta del Este). El negocio conecta familias con niñeras previamente seleccionadas y validadas.

Las dueñas son Paulina (Pau) y Delfina (Delfi); Federica (Fede) se sumó como socia. Públicamente el negocio se presenta como Delfi y Fede: en los textos de la web van esos nombres, no Pau. Diego es el developer que construye y mantiene la web y responde a ellas. Si hay una decisión de negocio o de contenido que no está acá, se consulta con Diego antes de inventarla.

**No es una plataforma automática.** Es un servicio operado manualmente. La coordinación final ocurre por WhatsApp. La tecnología acompaña, no lidera: el valor está en la selección de niñeras, la confianza y la experiencia del cliente, no en la complejidad técnica.

## Objetivo de la web

La web existe para:

- generar confianza
- explicar el servicio en segundos
- estructurar la solicitud del cliente
- llevar al usuario a WhatsApp con un mensaje prellenado

El flujo esperado: el usuario entra, entiende el servicio, usa el simulador o el botón, se abre WhatsApp con el mensaje armado y la conversación sigue ahí. Los clientes recurrentes no vuelven a la web, van directo a WhatsApp.

## Reglas de producto (no negociables sin que Diego lo pida)

- Todo termina en WhatsApp.
- NO mostrar precios en ningún lado. El precio se define después del matching, por WhatsApp.
- NO login, NO autenticación.
- NO reservas automáticas, NO pagos online.
- NO automatizar el matching de niñeras.
- NO guardar datos todavía: sin base de datos, sin Supabase por ahora (queda como opción futura cuando escale).
- NO mostrar caras de niñeras.
- Los testimonios son una sección futura: no inventar testimonios ni reseñas falsas.

## Stack

- Tailwind se usa muy poco. Está instalado en su versión 4 (vía `postcss.config.mjs` y `@tailwindcss/postcss`), pero casi todo el estilo vive en las variables CSS de `src/app/globals.css` y en bloques `<style>` o estilos inline de cada componente. Al tocar un componente, seguir el estilo que ya usa.
- Hosting: Vercel (plan gratis)
- Vercel Web Analytics activado: sin cookies, visitante identificado con un hash que se descarta a las 24 horas. Plan Hobby: 50.000 eventos por mes, un mes de historial, sin eventos personalizados. Por eso los toques en WhatsApp se cuentan como páginas vistas de `/ir/whatsapp/<origen>`.
- Node.js 24, fijado con `engines` en `package.json`. Vercel dejó de aceptar Node 20 (con esa versión el deploy falla antes de instalar): no bajarlo.
- Fuentes: Baloo 2 y Source Sans 3 están en `src/app/fonts` (subconjunto latino, licencia OFL) y se cargan con `next/font/local` desde `src/app/fuentes.ts`, que usan los dos layouts raíz (variables `--font-baloo` y `--font-source`). No volver a `next/font/google`: descarga las fuentes en cada build y el build fallaba cuando Google no respondía. Tampoco a Google Fonts por `<link>` ni `@import`: bloqueaba el render y hacía saltar el texto.
- Componentes de servidor: Hero, Barra de números, Quiénes somos, Servicios, Cómo funciona, Niñeras, CTA final y Footer no llevan `"use client"`. Los efectos al pasar el mouse van en CSS (`:hover`), no en `onMouseEnter`; los estilos que cambian con el mouse no pueden ir en `style={{}}` porque le ganan al CSS. Lo que necesita JavaScript va en componentes cliente chicos (`IrAlSimulador`, `FadeIn`). Los desplegables ("Ver todo lo que incluye", "Leer más") son `<details>` nativos: sin JavaScript y accesibles.
- No cambiar de stack ni agregar dependencias pesadas sin que Diego lo pida.

## Estructura de la página (una sola página)

Orden actual en `src/app/[lang]/page.tsx` (la misma página para los tres idiomas, ver "Idiomas"):

1. Navbar (links a cada sección + selector de idioma `ES · EN · PT` + botón "Coordinar servicio" a WhatsApp, que muestra solo el ícono por debajo de 960 px; en celular solo logo y menú). El menú de celular es una hoja que sube desde abajo (`MenuCelular.tsx`): diálogo modal con foco atrapado, Escape y fondo para cerrar, fila de idiomas y botón verde de WhatsApp. El link del menú se llama "Solicitar servicio"; los botones, "Completar formulario"
2. Hero: título, subtítulo, zonas, "¿Qué necesitás?" con tres accesos directos al simulador (Babysitting, Petsitting, Eventos; en compu arriba de los botones, en celular debajo para que el botón de WhatsApp entre en la primera pantalla), botón principal (WhatsApp con mensaje inicial) y botón secundario "Completar formulario →" (lleva al simulador; el CTA final usa el mismo texto), y debajo la nota "Sin compromiso. Te respondemos por WhatsApp" (también en el CTA final)
3. Barra de números (+80 niñeras, +3 años)
4. Quiénes somos: dos oraciones a la vista y el resto en un desplegable "Leer más"
5. Servicios: Babysitting, Petsitting y Eventos. Cada tarjeta muestra la primera oración y tres ítems; el resto va en "Ver todo lo que incluye"
6. Cómo funciona (pasos simples)
7. Niñeras: proceso de selección y "Podés elegir según"
8. Simulador (formulario dinámico)
9. CTA final (WhatsApp)
10. Footer

Además hay un botón flotante de WhatsApp siempre visible (`WhatsAppFloat.tsx`). En compu es una píldora con texto abajo a la derecha que se achica a círculo mientras el simulador o el Footer están en pantalla. En celular es un círculo abajo a la derecha que, mientras el Hero, el simulador o el Footer están en pantalla, se acomoda en la Navbar al lado del menú, así nunca tapa los botones de esas secciones. Hace un solo pulso a los 4 segundos.

El simulador queda en esa posición por decisión del negocio.

Fotos (en `public/`):

- `hero.jpg`: Hero. En celular se muestra más baja (2:1, y 5:2 en pantallas de hasta 380px) para que los botones entren en la primera pantalla.
- `Lleno.jpg`: Quiénes somos, debajo del texto, entera y sin recortar. Muestra caras de chicos: hay permiso de los padres y Diego la aprobó.
- `ninera-de-espaldas.jpg`: Niñeras, al costado del proceso de selección, en su proporción real (3:2) y sin estirarla.
- Las fotos de Quiénes somos y Niñeras se sirven con calidad 90; Next 16 exige declarar esa calidad en `images.qualities` de `next.config.ts`.
- `Lleno.jpg` es de solo 800px de ancho y se ve algo blanda en pantallas retina. Si llegan los originales en mayor resolución, reemplazarla.
- `public/` se publica entero: cualquiera puede abrir un archivo con el link directo. No dejar fotos que la página no use, sobre todo si muestran caras.
- Vista previa al compartir el link: `public/opengraph-image.jpg` (1200x630, la foto del Hero con el logo), declarada en los metadatos de `src/app/[lang]/layout.tsx` con su texto alternativo en el diccionario. No volver a ponerla como `src/app/opengraph-image.jpg`: el `openGraph` del layout de `[lang]` la tapa. Favicon: `src/app/icon.png` y `apple-icon.png`. La URL de producción vive en `URL_SITIO` de `src/lib/sitio.ts` (metadatos, sitemap y robots); si cambia el dominio, cambiar ahí.

`ReviewsSection.tsx` (testimonios) existe pero está oculta a propósito: no se importa en `page.tsx`. Se va a activar cuando haya reseñas reales. No activarla ni borrarla sin que Diego lo pida.

Pendiente a futuro: un reel de Instagram en la página. El reel que va todavía no está hecho (el que se evaluó, de @parentsbreak_, se descartó). Cuando exista, insertarlo con el embed oficial de Instagram y carga al tocar: portada con botón de play, y `embed.js` (con `next/script`) solo se carga cuando alguien lo toca, para no hacer lenta la página ni rastrear a quien no lo mira. Ubicación a definir con Diego.

Pendiente a futuro: preguntas frecuentes, cuando Diego tenga las respuestas reales.

## Idiomas

La página existe en español (`/`), inglés (`/en`) y portugués (`/pt`). Diseño aprobado en `docs/superpowers/specs/2026-10-25-idiomas-design.md`.

- Rutas: todo vive en `src/app/[lang]/` (`generateStaticParams` con `es`, `en`, `pt`; otro valor da 404). El español se genera en `/es` pero se sirve en `/`: `next.config.ts` reescribe `/` a `/es` y redirige `/es` a `/` (308). Se hace en la configuración y no con `proxy.ts` para que Vercel lo resuelva en su ruteo, sin ejecutar una función en cada visita. La dirección del español no cambia nunca.
- `/ir/whatsapp/<origen>` no lleva idioma: tiene su propio layout raíz (`src/app/ir/layout.tsx`) y muestra su texto en los tres idiomas a la vez.
- Textos: `src/dictionaries/es.json`, `en.json` y `pt.json`, con las mismas claves (el tipo sale de `es.json`: si a otro le falta una clave, el build falla). Se cargan solo en el servidor (`server-only`) y cada componente recibe por props los textos de su sección. Todo texto visible nuevo va a los tres JSON, no escrito en el componente. Las listas de idiomas, rutas y `og:locale` están en `src/lib/idiomas.ts`.
- Traducciones: Diego revisó las de inglés y portugués el 26/10/2026 (`docs/traducciones-borrador.md`, con el registro de cambios). Todo texto nuevo en inglés o portugués es borrador hasta que Diego lo revise. Nombres propios y zonas no se traducen (confirmado por Diego). No usar "book" / "agendar" / "reservar": dan a entender una reserva automática y todo se coordina por WhatsApp; en inglés "arrange" / "request", en portugués "solicitar". En portugués, "babá" para niñera.
- Mensaje de WhatsApp: en `/` y `/en` sale en el idioma de la página; en `/pt` sale en español con la línea final `*Idioma:* Português`, porque el equipo responde en español, y junto al botón de enviar se avisa a la familia. Los textos del mensaje están en `src/dictionaries/mensaje-es.json` y `mensaje-en.json`; `getMensaje(lang)` elige cuál usar, arma esa línea y el saludo de los botones directos (en español no mandan saludo: la página de redirección usa el de por defecto). Las fechas van en dd/mm/aaaa en los tres idiomas.
- Sin redirección automática por el idioma del navegador.
- Página 404: `src/app/global-not-found.tsx` (flag `experimental.globalNotFound` en `next.config.ts`; hace falta porque hay dos layouts raíz). Elige el idioma por el comienzo de la dirección con un script mínimo (sin JavaScript queda en español) y lleva a `/`, `/en` o `/pt`.
- SEO: cada versión tiene `lang`, título y descripción propios, `canonical`, `hreflang` cruzados (`x-default` al español) y `og:locale`. `src/app/sitemap.ts` lista las tres; `src/app/robots.ts` excluye `/ir/`.

Prioridad de desarrollo: 1) Hero + CTA, 2) botón de WhatsApp funcional, 3) simulador básico, 4) sección "Cómo funciona". Todo lo demás es secundario.

## Simulador (feature clave)

Formulario dinámico (`SimulatorSection.tsx`) que arma un mensaje y abre WhatsApp (link `wa.me` con el texto codificado).

El tipo de servicio se elige con tres tarjetas que son radios reales (teclado y lector de pantalla): no cambiarlas por divs clickeables.

Los valores internos del formulario (`"Babysitting"`, `"Petsittings"`, `"Evento"`, `"Puntual"`, `"Fijo"`, días, tipos de evento, zonas) son los mismos en los tres idiomas: los usan el mensaje y `?servicio=`. Lo que cambia es la etiqueta visible (`opciones` en el diccionario) y, en el mensaje en inglés, el texto (`valores` en `mensaje-en.json`).

Los botones de cada tarjeta de Servicios y los accesos "¿Qué necesitás?" del Hero preseleccionan el servicio en el simulador con `IrAlSimulador` (`?servicio=` + evento `popstate`).

Las fechas van en formato dd/mm/aaaa. "Hoy" se calcula con la hora local, no con `toISOString()` (que usa UTC).

Cuidar: codificar bien el texto para la URL (saltos de línea, tildes, apóstrofes). La codificación la hace `waLink()` de `src/lib/contact.ts`: no volver a codificar el texto antes de pasárselo.

## Tono de marca y diseño

Tono: "premium accesible y cálido". Transmitir confianza, tranquilidad, profesionalismo y cercanía. No infantil exagerado, no corporativo frío, no complejo.

Diseño:

- Estilo limpio tipo e-commerce moderno, fondo blanco, mucho espacio en blanco, estética clara y ordenada.
- Colores del logo: violeta/azul suave (principal), rosado suave (secundario), amarillo (acento, botones).
- Evitar: fondo negro, saturación visual, exceso de texto.
- Iconos para babysitting, petsitting y eventos (el logo tiene bloques, auto y juegos como lenguaje visual).
- Mobile first: la mayoría de las familias van a entrar desde el celular. Revisar siempre en ancho de celular.
- Si el resultado se ve como la landing genérica de cualquier startup, repensarlo. Usar contenido real (zonas de Montevideo, Canelones y Punta del Este, servicios reales), nunca lorem ipsum ni textos de relleno.

## Cómo trabajar acá

- Verificar antes de afirmar. Antes de decir que algo funciona, correrlo: build (`npm run build`), lint, y probar el flujo del simulador de punta a punta (que el link de WhatsApp se arme bien con cada tipo de servicio). Releer el código editado completo antes de dar algo por terminado.
- Ante cambios grandes de diseño, mostrar primero una propuesta o preview y esperar el ok de Diego antes de reescribir secciones enteras.
- Cambios chicos y bugs: avanzar directo.
- Investigar el código existente antes de parchear. Si algo no se puede probar desde este entorno (por ejemplo, comportamiento real en un celular), decirlo explícitamente y pedir un diagnóstico del lado de Diego, en vez de simular certeza.
- Entregar cambios acotados: tocar solo lo necesario, sin reescrituras masivas ni refactors no pedidos.
- Sin emojis en el código, en los textos de la interfaz ni en los commits, salvo que Diego pida lo contrario.
- Diego es estudiante de Ingeniería Telemática y construye esto como proyecto real y como pieza de portfolio. Explicar los cambios con claridad, sin asumir jerga, pero sin tratarlo como alguien no técnico.
- Mensajes de commit claros y en español.
- Toda animación o transición respeta `prefers-reduced-motion`: hay una regla global en `globals.css`, y FadeIn lo chequea en JS. Todo el contenido tiene que verse sin JavaScript: FadeIn deja las secciones visibles en el HTML y solo oculta, al cargar, las que están más abajo de la pantalla; la barra de números muestra los valores fijos (no hay contador). Antes y después de tocar animaciones o la carga de la página, correr Lighthouse en celular simulado (mediana de 3 corridas) y no aceptar más de 2 puntos de caída en rendimiento ni más de 100 ms de LCP.
- Para llevar la vista a una sección usar `irASeccion()` de `src/lib/scroll.ts`: mide sin la animación de aparición de FadeIn (que desplaza la sección 20 px hasta que se ve) y deja los 72 px de la Navbar.
- Accesibilidad: cada campo del simulador tiene su `label` asociada (`htmlFor`/`id`); los títulos de grupos de botones son `<div>`. Contraste: los botones de WhatsApp con texto blanco usan `--whatsapp-boton` (#17833f, 4,8:1), no el verde de marca `--whatsapp` (#25d366, 2:1), que queda para sombras y detalles. Las etiquetas de la barra de números van en blanco a 19 px en negrita: sobre el violeta dan 3,9:1, que solo alcanza como texto grande (18,7 px en negrita o más); no bajarles el tamaño ni el peso. Los links de texto chico en color de marca usan un tono oscuro de ese color para llegar a 4,5:1 sobre blanco.

## Errores a evitar (aprendidos en el sistema interno de Parents' Break)

- Perder funciones o variables al reescribir un archivo grande: después de editar, buscar que nada quede duplicado, huérfano o referenciado sin existir.
- Mezclar comillas dobles y simples al generar HTML con handlers inline: rompe el atributo en silencio, sin error visible.
- Atar la altura de un elemento a la de otro cuando el contenido de ambos no es estable.
- Listas de cantidad variable con altura fija: deben medirse por su contenido real.
- Asumir que un cambio anterior sigue ahí: releer el archivo real antes de afirmarlo.

## Seguridad

- No commitear claves, tokens ni credenciales. Usar variables de entorno (`.env.local`) y mantenerlas en `.gitignore`.
- El número de WhatsApp de contacto vive en un solo lugar: `WA_NUMBER` en `src/lib/contact.ts`. No escribir el número ni armar links `wa.me` a mano en los componentes.
- Los botones no enlazan a `wa.me` directamente: usan `waIrLink(origen)`, que apunta a `/ir/whatsapp/<origen>`. Esa página registra la visita en Analytics (una página vista por toque, separada por origen) y redirige a WhatsApp con `waLink(texto)`. Los orígenes válidos están en `ORIGENES_WA` y son los mismos en los tres idiomas (Analytics no separa los toques por idioma). El texto del mensaje del simulador viaja en el `#hash`, que no llega al servidor y se saca de la URL antes de que cargue el script de Analytics.

## Qué NO es parte de este repo

El sistema interno de gestión de Parents' Break (agenda, niñeras, familias, finanzas, con Supabase) es un proyecto aparte, con otro stack (HTML/JS vanilla en GitHub Pages). No mezclar su código ni sus convenciones con esta landing.

## Estado actual

Este archivo no describe la estructura de carpetas ni el estado de implementación: leer el código para eso. Si hay algo que no coincide con lo que dice acá, avisar a Diego antes de asumir cuál de los dos está desactualizado.
