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

- Next.js + React + Tailwind CSS
- Tailwind se usa muy poco. Está instalado en su versión 4 (vía `postcss.config.mjs` y `@tailwindcss/postcss`), pero casi todo el estilo vive en las variables CSS de `src/app/globals.css` y en bloques `<style>` o estilos inline de cada componente. Al tocar un componente, seguir el estilo que ya usa.
- Hosting: Vercel (plan gratis)
- Vercel Web Analytics activado: sin cookies, visitante identificado con un hash que se descarta a las 24 horas. Plan Hobby: 50.000 eventos por mes, un mes de historial, sin eventos personalizados. Por eso los toques en WhatsApp se cuentan como páginas vistas de `/ir/whatsapp/<origen>`.
- Node.js 24, fijado con `engines` en `package.json`. Vercel dejó de aceptar Node 20 (con esa versión el deploy falla antes de instalar): no bajarlo.
- Editor: VS Code
- No cambiar de stack ni agregar dependencias pesadas sin que Diego lo pida.

## Estructura de la página (una sola página)

Orden actual en `src/app/page.tsx`:

1. Navbar (links a cada sección + botón "Coordinar servicio" a WhatsApp; en celular solo logo y menú, porque está el botón flotante)
2. Hero: título, subtítulo, zonas, botón principal (WhatsApp con mensaje inicial) y botón secundario "Completar formulario →" (lleva al simulador; el CTA final usa el mismo texto)
3. Barra de números (+80 niñeras, +3 años)
4. Quiénes somos
5. Servicios: Babysitting, Petsitting y Eventos
6. Cómo funciona (pasos simples)
7. Niñeras: proceso de selección y "Podés elegir según"
8. Simulador (formulario dinámico)
9. CTA final (WhatsApp)
10. Footer

Además hay un botón flotante de WhatsApp que solo aparece en celular (`WhatsAppFloat.tsx`), oculto mientras se ve el Hero, el simulador o el Footer.

El simulador queda en esa posición por decisión del negocio.

Fotos (en `public/`):

- `hero.jpg`: Hero. En celular se muestra más baja (2:1, y 5:2 en pantallas de hasta 380px) para que los botones entren en la primera pantalla.
- `Lleno.jpg`: Quiénes somos, debajo del texto, entera y sin recortar. Muestra caras de chicos: hay permiso de los padres y Diego la aprobó.
- `ninera-de-espaldas.jpg`: Niñeras, al costado del proceso de selección, en su proporción real (3:2) y sin estirarla.
- Las fotos de Quiénes somos y Niñeras se sirven con calidad 90; Next 16 exige declarar esa calidad en `images.qualities` de `next.config.ts`.
- `Lleno.jpg` es de solo 800px de ancho y se ve algo blanda en pantallas retina. Si llegan los originales en mayor resolución, reemplazarla.
- `public/` se publica entero: cualquiera puede abrir un archivo con el link directo. No dejar fotos que la página no use, sobre todo si muestran caras.

`ReviewsSection.tsx` (testimonios) existe pero está oculta a propósito: no se importa en `page.tsx`. Se va a activar cuando haya reseñas reales. No activarla ni borrarla sin que Diego lo pida.

Prioridad de desarrollo: 1) Hero + CTA, 2) botón de WhatsApp funcional, 3) simulador básico, 4) sección "Cómo funciona". Todo lo demás es secundario.

## Simulador (feature clave)

Formulario dinámico (`SimulatorSection.tsx`) que arma un mensaje y abre WhatsApp (link `wa.me` con el texto codificado).

Campos base: nombre, tipo de servicio (Babysitting / Petsittings / Evento, elegido con tres tarjetas que son radios reales: se manejan con teclado y lector de pantalla), departamento (Montevideo, Canelones o Maldonado), zona (con "Otro" de texto libre), edades (salvo Petsitting) y comentarios.

Condicionales:

- Babysitting: modalidad Puntual o Fijo, y cantidad de niños.
  - Puntual: de 1 a 4 días, cada uno con fecha, hora de inicio y hora de fin.
  - Fijo: días de la semana, horario, desde cuándo y hasta cuándo (indefinido o hasta una fecha).
- Petsitting: tipo (visita a domicilio, pernocte u hospedaje en casa de la cuidadora), cantidad de mascotas y qué necesita. La visita pide días y horarios; pernocte y hospedaje piden fechas desde/hasta.
- Evento: tipo de evento, fecha, horario y cantidad aproximada de niños.

Los botones de cada tarjeta de Servicios preseleccionan el servicio en el simulador (`?servicio=` + evento `popstate`).

Mensaje generado (ejemplo de un evento; solo se incluyen los campos del servicio elegido):

```
Hola! Quiero coordinar un servicio de Parents' Break

*Nombre:*
*Servicio:*
*Tipo de evento:*
*Fecha:*
*Horario:*
*Cantidad aproximada de niños:*
*Edades:*
*Departamento:*
*Zona:*
*Comentarios:*
```

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

## Errores a evitar (aprendidos en el sistema interno de Parents' Break)

- Perder funciones o variables al reescribir un archivo grande: después de editar, buscar que nada quede duplicado, huérfano o referenciado sin existir.
- Mezclar comillas dobles y simples al generar HTML con handlers inline: rompe el atributo en silencio, sin error visible.
- Atar la altura de un elemento a la de otro cuando el contenido de ambos no es estable.
- Listas de cantidad variable con altura fija: deben medirse por su contenido real.
- Asumir que un cambio anterior sigue ahí: releer el archivo real antes de afirmarlo.

## Seguridad

- No commitear claves, tokens ni credenciales. Usar variables de entorno (`.env.local`) y mantenerlas en `.gitignore`.
- El número de WhatsApp de contacto vive en un solo lugar: `WA_NUMBER` en `src/lib/contact.ts`. No escribir el número ni armar links `wa.me` a mano en los componentes.
- Los botones no enlazan a `wa.me` directamente: usan `waIrLink(origen)`, que apunta a `/ir/whatsapp/<origen>`. Esa página registra la visita en Analytics (una página vista por toque, separada por origen) y redirige a WhatsApp con `waLink(texto)`. Los orígenes válidos están en `ORIGENES_WA`. El texto del mensaje del simulador viaja en el `#hash`, que no llega al servidor y se saca de la URL antes de que cargue el script de Analytics.

## Qué NO es parte de este repo

El sistema interno de gestión de Parents' Break (agenda, niñeras, familias, finanzas, con Supabase) es un proyecto aparte, con otro stack (HTML/JS vanilla en GitHub Pages). No mezclar su código ni sus convenciones con esta landing.

## Estado actual

Este archivo no describe la estructura de carpetas ni el estado de implementación: leer el código para eso. Si hay algo que no coincide con lo que dice acá, avisar a Diego antes de asumir cuál de los dos está desactualizado.
