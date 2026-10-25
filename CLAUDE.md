# Parents' Break - Landing web

## Qué es esto

Landing page de Parents' Break, un servicio premium de cuidado infantil en Uruguay (Montevideo y Punta del Este). El negocio conecta familias con niñeras previamente seleccionadas y validadas.

Las dueñas son Paulina (Pau) y Delfina (Delfi). Diego es el developer que construye y mantiene la web y responde a ellas. Si hay una decisión de negocio o de contenido que no está acá, se consulta con Diego antes de inventarla.

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
- Hosting: Vercel (plan gratis)
- Editor: VS Code
- No cambiar de stack ni agregar dependencias pesadas sin que Diego lo pida.

## Estructura de la página (MVP, una sola página)

1. Hero: título claro, subtítulo explicativo, botón principal (WhatsApp), botón secundario (simulador)
2. Simulador (formulario dinámico)
3. Cómo funciona (pasos simples)
4. Servicios: babysitting, traslados, eventos
5. Nuestras sitters: proceso de selección, formación, validación
6. Testimonios (futuro)
7. CTA final (WhatsApp)

Prioridad de desarrollo: 1) Hero + CTA, 2) botón de WhatsApp funcional, 3) simulador básico, 4) sección "Cómo funciona". Todo lo demás es secundario.

## Simulador (feature clave)

Formulario dinámico que arma un mensaje y abre WhatsApp (link `wa.me` con el texto codificado).

Campos base: nombre, tipo de servicio (babysitting / traslado / evento), fecha, horario(s), cantidad de niños, edades, zona, comentarios.

Condicionales:

- Evento: tipo de evento (empresarial, cumpleaños, etc.) y cantidad aproximada de niños.
- Traslado: tipo (ida, vuelta, ambas) y horarios según la selección.

Mensaje generado:

```
Hola! Quiero coordinar un servicio de Parents' Break
Nombre:
Servicio:
Fecha:
Horario:
Cantidad de niños:
Edades:
Zona:
Detalles:
```

Cuidar: codificar bien el texto para la URL (saltos de línea, tildes, apóstrofes), y que el mensaje solo incluya los campos que correspondan al tipo de servicio elegido.

## Tono de marca y diseño

Tono: "premium accesible y cálido". Transmitir confianza, tranquilidad, profesionalismo y cercanía. No infantil exagerado, no corporativo frío, no complejo.

Diseño:

- Estilo limpio tipo e-commerce moderno, fondo blanco, mucho espacio en blanco, estética clara y ordenada.
- Colores del logo: violeta/azul suave (principal), rosado suave (secundario), amarillo (acento, botones).
- Evitar: fondo negro, saturación visual, exceso de texto.
- Iconos para babysitting, traslados y eventos (el logo tiene bloques, auto y juegos como lenguaje visual).
- Mobile first: la mayoría de las familias van a entrar desde el celular. Revisar siempre en ancho de celular.
- Si el resultado se ve como la landing genérica de cualquier startup, repensarlo. Usar contenido real (zonas de Montevideo y Punta del Este, servicios reales), nunca lorem ipsum ni textos de relleno.

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
- El número de WhatsApp de contacto debe vivir en un solo lugar (una constante o variable de entorno), no repetido en cada botón.

## Qué NO es parte de este repo

El sistema interno de gestión de Parents' Break (agenda, niñeras, familias, finanzas, con Supabase) es un proyecto aparte, con otro stack (HTML/JS vanilla en GitHub Pages). No mezclar su código ni sus convenciones con esta landing.

## Estado actual

Este archivo no describe la estructura de carpetas ni el estado de implementación: leer el código para eso. Si hay algo que no coincide con lo que dice acá, avisar a Diego antes de asumir cuál de los dos está desactualizado.
