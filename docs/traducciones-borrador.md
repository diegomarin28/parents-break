# Traducciones: borrador para revisar

Estado: **revisión de Diego aplicada (26/10/2026)**, sin filas pendientes. Ningún texto nuevo en inglés o portugués se publica sin revisión.

Esta tabla se armó a partir de `src/dictionaries/*.json`, que es de donde la página lee los textos. Las correcciones se pueden marcar acá; después se pasan a los JSON.

Criterios:

- Nombres propios y zonas no se traducen (Montevideo, Canelones, Punta del Este, Pocitos, Delfina, Federica, Parents' Break).
- No se usa "book" / "agendar" / "reservar": dan a entender una reserva automática, y todo se coordina por WhatsApp. Inglés: "arrange" / "request". Portugués: "solicitar".
- Inglés: "babysitter" para niñera (también "sitter" donde el español dice "sitter"). En el formulario, "Department (e.g. Maldonado)"; en el mensaje de WhatsApp, "Department".
- Portugués de Brasil (`pt_BR`): "babá" para niñera en todos los textos ("Babysitting" queda como nombre del servicio), "pet" para mascota, "região" para zona.
- Los números (+80 niñeras, +3 años, 24/7) son los mismos que en español: no se agregó ningún dato.
- Las fechas del mensaje de WhatsApp siguen en dd/mm/aaaa en los tres idiomas, porque las lee el equipo en Uruguay.

Cambios de la revisión del 26/10/2026:

- Inglés: "Book a service" → "Arrange a service"; "Book your service" → "Arrange your service"; "Book babysitting" → "Request babysitting"; "Booking a service is easy" → "Arranging a service is easy"; etiqueta "Department" → "Department (e.g. Maldonado)".
- Portugués: "Agendar serviço" → "Solicitar serviço"; "Agende seu serviço" → "Solicite seu serviço"; "Agendar um serviço é muito fácil" → "Solicitar um serviço é muito fácil"; "babysitter(s)" y "sitters" → "babá(s)" en Quiénes somos y en el CTA final.
- Paso "Validación de referencias", en los tres idiomas: sin "antecedentes" / "background". Queda "Verificamos referencias de trabajos anteriores." / "We check references from previous jobs." / "Verificamos referências de trabalhos anteriores." (cambia también el texto en español).
- Inglés: "Company / general care" → "Companionship / general care" (formulario y mensaje de WhatsApp).
- Zonas: confirmado que quedan iguales en los tres idiomas.
- Nueva: textos de la página 404, a revisar.
- Agregados por el mismo criterio, a confirmar: "Reservar babysitting" → "Solicitar babysitting" (portugués), y "sitters" / "as babysitters mais preparadas" → "babás" (portugués, Quiénes somos).

## Google y vista previa al compartir

| Clave | Español | English | Português |
|---|---|---|---|
| `titulo` | Parents' Break – Cuidado infantil profesional en Uruguay | Parents' Break – Professional childcare in Uruguay | Parents' Break – Cuidado infantil profissional no Uruguai |
| `descripcion` | Red de más de 80 niñeras seleccionadas para babysitting, petsitting y eventos en Montevideo, Canelones y Punta del Este. Confianza y calidad en cada servicio. | A network of more than 80 carefully selected babysitters for babysitting, pet sitting and events in Montevideo, Canelones and Punta del Este. Trust and quality in every service. | Rede de mais de 80 babás selecionadas para babysitting, pet sitting e eventos em Montevideo, Canelones e Punta del Este. Confiança e qualidade em cada serviço. |
| `palabrasClave[1]` | niñeras Uruguay | babysitter Uruguay | babá Uruguai |
| `palabrasClave[2]` | babysitting Montevideo | babysitting Montevideo | babá Punta del Este |
| `palabrasClave[3]` | cuidado infantil Punta del Este | babysitter Punta del Este | babysitting Montevideo |
| `palabrasClave[4]` | niñeras profesionales | nanny Uruguay | cuidado infantil Punta del Este |
| `palabrasClave[5]` | petsitting Montevideo | pet sitting Montevideo | pet sitting Montevideo |
| `palabrasClave[6]` | animación eventos infantiles | kids entertainment events Uruguay | recreação infantil eventos Uruguai |
| `ogTitulo` | Parents' Break – Cuidado infantil profesional | Parents' Break – Professional childcare | Parents' Break – Cuidado infantil profissional |
| `ogDescripcion` | Niñeras seleccionadas para babysitting, petsitting y eventos en Montevideo, Canelones y Punta del Este. | Carefully selected babysitters for babysitting, pet sitting and events in Montevideo, Canelones and Punta del Este. | Babás selecionadas para babysitting, pet sitting e eventos em Montevideo, Canelones e Punta del Este. |
| `ogImagenAlt` | Niñera de Parents' Break jugando con una niña en una mesa de juegos, con el logo de Parents' Break | A Parents' Break babysitter playing with a girl at a play table, with the Parents' Break logo | Babá da Parents' Break brincando com uma menina em uma mesa de brinquedos, com o logo da Parents' Break |

## Barra de navegación y menú de celular

| Clave | Español | English | Português |
|---|---|---|---|
| `links.quienesSomos` | Quiénes somos | About us | Quem somos |
| `links.servicios` | Servicios | Services | Serviços |
| `links.comoFunciona` | Cómo funciona | How it works | Como funciona |
| `links.nineras` | Niñeras | Our sitters | Babás |
| `links.simulador` | Solicitar servicio | Request a service | Solicitar serviço |
| `boton` | Coordinar servicio | Arrange a service | Solicitar serviço |
| `abrirMenu` | Abrir menú | Open menu | Abrir menu |
| `cerrarMenu` | Cerrar menú | Close menu | Fechar menu |
| `idioma` | Idioma | Language | Idioma |
| `menu` | Menú | Menu | Menu |
| `menuWhatsApp` | Escribinos por WhatsApp | Message us on WhatsApp | Fale conosco no WhatsApp |

## Hero (primera pantalla)

| Clave | Español | English | Português |
|---|---|---|---|
| `tituloAntes` | Tus hijos en las | Your children in the | Seus filhos nas |
| `tituloResaltado` | mejores | best | melhores |
| `tituloDespues` | manos | hands | mãos |
| `subtitulo` | Conectamos familias con niñeras especializadas para brindar un cuidado seguro, cálido y personalizado. | We connect families with specialized babysitters to provide safe, warm and personalized care. | Conectamos famílias a babás especializadas para oferecer um cuidado seguro, acolhedor e personalizado. |
| `fotoAlt` | Niñera cuidando niños felices | Babysitter caring for happy children | Babá cuidando de crianças felizes |
| `pregunta` | ¿Qué necesitás? | What do you need? | Do que você precisa? |
| `necesidades.Babysitting` | Babysitting | Babysitting | Babysitting |
| `necesidades.Petsittings` | Petsitting | Pet sitting | Pet sitting |
| `necesidades.Evento` | Eventos | Events | Eventos |
| `botonPrincipal` | Coordinar servicio | Arrange a service | Solicitar serviço |
| `botonSecundario` | Completar formulario → | Fill in the form → | Preencher formulário → |
| `nota` | Sin compromiso. Te respondemos por WhatsApp | No commitment. We'll reply on WhatsApp | Sem compromisso. Respondemos pelo WhatsApp |
| `prueba[1].numero` | +80 niñeras activas | +80 active babysitters | +80 babás ativas |
| `prueba[1].lineas[1]` | Seleccionadas y validadas | Selected and vetted | Selecionadas e avaliadas |
| `prueba[1].lineas[2]` | por nuestro equipo | by our team | pela nossa equipe |
| `prueba[1].lineas[3]` | de psicólogas | of psychologists | de psicólogas |
| `prueba[2].numero` | +3 años de experiencia | +3 years of experience | +3 anos de experiência |
| `prueba[2].lineas[1]` | Acompañando a familias | Supporting families | Acompanhando famílias |
| `prueba[2].lineas[2]` | en Uruguay | in Uruguay | no Uruguai |

## Barra de números

| Clave | Español | English | Português |
|---|---|---|---|
| `nineras` | Niñeras activas | Active babysitters | Babás ativas |
| `anios` | Años de experiencia | Years of experience | Anos de experiência |

## Quiénes somos

| Clave | Español | English | Português |
|---|---|---|---|
| `etiqueta` | Quiénes somos | About us | Quem somos |
| `titulo` | Un servicio construido desde la confianza | A service built on trust | Um serviço construído com confiança |
| `intro` | Somos Delfina y Federica, babysitters con más de seis años de experiencia. Desde hace más de tres años ayudamos a familias de Montevideo, Canelones y Punta del Este a encontrar babysitters capacitadas, responsables y de confianza. | We are Delfina and Federica, babysitters with more than six years of experience. For more than three years we have been helping families in Montevideo, Canelones and Punta del Este find trained, responsible and trustworthy babysitters. | Somos Delfina e Federica, babás com mais de seis anos de experiência. Há mais de três anos ajudamos famílias de Montevideo, Canelones e Punta del Este a encontrar babás capacitadas, responsáveis e de confiança. |
| `leerMas` | Leer más ↓ | Read more ↓ | Ler mais ↓ |
| `leerMenos` | Leer menos ↑ | Read less ↑ | Ler menos ↑ |
| `resto` | Después de acompañar a numerosas familias, entendimos lo importante que es poder contar con alguien realmente confiable para el cuidado de los niños. Así nació Parents’ Break, para que las familias puedan disfrutar de su tiempo con la tranquilidad de saber que sus hijos están en las mejores manos. Hoy contamos con una red de más de 80 sitters seleccionadas cuidadosamente por nuestro equipo. Nuestro compromiso es ofrecer mucho más que una niñera: es ofrecer confianza, seguridad y tranquilidad para cada familia. | After working with many families, we realized how important it is to have someone truly reliable to look after the children. That is how Parents’ Break was born: so families can enjoy their time knowing their children are in the best hands. Today we have a network of more than 80 sitters, carefully selected by our team. Our commitment is to offer much more than a babysitter: we offer trust, safety and peace of mind to every family. | Depois de acompanhar muitas famílias, entendemos como é importante poder contar com alguém realmente confiável para cuidar das crianças. Assim nasceu a Parents’ Break, para que as famílias possam aproveitar o seu tempo com a tranquilidade de saber que os filhos estão nas melhores mãos. Hoje contamos com uma rede de mais de 80 babás selecionadas com cuidado pela nossa equipe. Nosso compromisso é oferecer muito mais do que uma babá: é oferecer confiança, segurança e tranquilidade para cada família. |
| `fotoAlt` | Niñera de Parents’ Break jugando con niños | Parents’ Break babysitter playing with children | Babá da Parents’ Break brincando com crianças |
| `subtitulo` | No somos una app. Somos personas. | We're not an app. We're people. | Não somos um aplicativo. Somos pessoas. |
| `cuerpo` | Detrás de cada servicio hay un equipo real acompañando el proceso. Escuchamos las necesidades de cada familia, buscamos la niñera más adecuada y coordinamos cada detalle de forma personalizada para que la experiencia sea simple, cercana y confiable. Nuestro proceso de selección es acompañado por psicólogas y profesionales especializadas en infancia, priorizando no solo la experiencia, sino también la responsabilidad, la calidez y la calidad humana de cada perfil. Todas las niñeras de Parents’ Break cuentan con experiencia previa en cuidado infantil y atraviesan entrevistas, validación de referencias y evaluaciones antes de incorporarse al equipo. | Behind every service there is a real team guiding the process. We listen to each family's needs, look for the most suitable babysitter and coordinate every detail personally, so the experience is simple, close and reliable. Our selection process is supported by psychologists and professionals specialized in childhood, prioritizing not only experience but also responsibility, warmth and the human quality of each profile. All Parents’ Break babysitters have previous childcare experience and go through interviews, reference checks and assessments before joining the team. | Por trás de cada serviço há uma equipe real acompanhando o processo. Ouvimos as necessidades de cada família, buscamos a babá mais adequada e coordenamos cada detalhe de forma personalizada, para que a experiência seja simples, próxima e confiável. Nosso processo de seleção é acompanhado por psicólogas e profissionais especializadas em infância, priorizando não só a experiência, mas também a responsabilidade, o carinho e a qualidade humana de cada perfil. Todas as babás da Parents’ Break têm experiência prévia em cuidado infantil e passam por entrevistas, verificação de referências e avaliações antes de entrar para a equipe. |
| `valores[1].titulo` | Selección rigurosa | Rigorous selection | Seleção rigorosa |
| `valores[1].texto` | Cada niñera atraviesa un riguroso proceso de selección acompañado por psicólogas y profesionales especializadas en infancia, para así seleccionar a las babysitters más preparadas para acompañar a cada familia. Evaluamos experiencia previa, realizamos entrevistas personales y validamos referencias. | Every babysitter goes through a rigorous selection process supported by psychologists and professionals specialized in childhood, so we choose the best-prepared babysitters for each family. We assess previous experience, hold personal interviews and check references. | Cada babá passa por um rigoroso processo de seleção acompanhado por psicólogas e profissionais especializadas em infância, para selecionar as babás mais preparadas para acompanhar cada família. Avaliamos a experiência prévia, fazemos entrevistas pessoais e verificamos referências. |
| `valores[2].titulo` | Atención personalizada | Personalized care | Atendimento personalizado |
| `valores[2].texto` | Acompañamos cada servicio de principio a fin. Queremos que las familias se sientan seguras, cómodas y realmente acompañadas. | We stay with you through every service, from start to finish. We want families to feel safe, comfortable and truly supported. | Acompanhamos cada serviço do início ao fim. Queremos que as famílias se sintam seguras, à vontade e realmente acompanhadas. |
| `valores[3].titulo` | Confianza ante todo | Trust above all | Confiança acima de tudo |
| `valores[3].texto` | Trabajamos solo con niñeras que nosotras mismas recomendaríamos a nuestras familias. Ese es nuestro estándar. | We only work with babysitters we would recommend to our own families. That is our standard. | Trabalhamos apenas com babás que nós mesmas recomendaríamos às nossas famílias. Esse é o nosso padrão. |

## Servicios

| Clave | Español | English | Português |
|---|---|---|---|
| `etiqueta` | Lo que ofrecemos | What we offer | O que oferecemos |
| `titulo` | Nuestros servicios | Our services | Nossos serviços |
| `subtitulo` | Acompañamos a familias en distintos momentos del día a día con niñeras seleccionadas, responsables y preparadas para cada situación. | We support families at different moments of everyday life with selected, responsible babysitters prepared for every situation. | Acompanhamos famílias em diferentes momentos do dia a dia com babás selecionadas, responsáveis e preparadas para cada situação. |
| `masSolicitado` | Más solicitado | Most requested | Mais procurado |
| `verTodo` | Ver todo lo que incluye | See everything included | Ver tudo o que inclui |
| `verMenos` | Ver menos | See less | Ver menos |
| `tarjetas[1].servicio` | Babysitting | Babysitting | Babysitting |
| `tarjetas[1].titulo` | Babysittings, fijos o esporádicos | Babysitting, recurring or occasional | Babysitting, fixo ou esporádico |
| `tarjetas[1].subtitulo` | Cuidado en casa | Care at home | Cuidado em casa |
| `tarjetas[1].descripcion` | Niñeras que generan un vínculo real con los chicos a través del juego, la atención y el acompañamiento activo. | Babysitters who build a real bond with the kids through play, attention and active involvement. | Babás que criam um vínculo real com as crianças por meio da brincadeira, da atenção e do acompanhamento ativo. |
| `tarjetas[1].descripcionResto` | Nos adaptamos a la rutina de cada familia para que los niños se sientan cómodos, entretenidos y cuidados en todo momento. | We adapt to each family's routine so the children feel comfortable, entertained and cared for at all times. | Nos adaptamos à rotina de cada família para que as crianças se sintam à vontade, entretidas e cuidadas o tempo todo. |
| `tarjetas[1].items[1]` | Cuidado en hogares y hoteles | Care at homes and hotels | Cuidado em casas e hotéis |
| `tarjetas[1].items[2]` | Servicios puntuales o esporádicos | One-off or occasional services | Serviços pontuais ou esporádicos |
| `tarjetas[1].items[3]` | Juegos y actividades adaptadas por edad | Age-appropriate games and activities | Brincadeiras e atividades adaptadas à idade |
| `tarjetas[1].items[4]` | Acompañamiento activo y responsable | Active and responsible care | Acompanhamento ativo e responsável |
| `tarjetas[1].items[5]` | Comunicación constante con los padres | Constant communication with parents | Comunicação constante com os pais |
| `tarjetas[1].items[6]` | Juguetes de industria nacional para fomentar el desarrollo lúdico | Toys made in Uruguay to encourage play-based development | Brinquedos de fabricação uruguaia para estimular o desenvolvimento lúdico |
| `tarjetas[1].boton` | Reservar babysitting | Request babysitting | Solicitar babysitting |
| `tarjetas[2].servicio` | Petsittings | Petsittings | Petsittings |
| `tarjetas[2].titulo` | Petsittings | Pet sitting | Pet sitting |
| `tarjetas[2].subtitulo` | Cuidado de mascotas | Pet care | Cuidado de pets |
| `tarjetas[2].descripcion` | Cuidamos a tu mascota y nos ocupamos de que se sienta acompañada y segura cuando vos no podés estar. | We look after your pet and make sure it feels safe and accompanied when you can't be there. | Cuidamos do seu pet e garantimos que ele se sinta acompanhado e seguro quando você não puder estar. |
| `tarjetas[2].descripcionResto` | *(vacío)* | *(vacío)* | *(vacío)* |
| `tarjetas[2].items[1]` | Visitas a domicilio para darle de comer y pasearla | Home visits to feed and walk your pet | Visitas em domicílio para alimentar e passear |
| `tarjetas[2].items[2]` | Cuidado de tu mascota y casa durante viajes (pernocte) | Care for your pet and home while you travel (overnight stays) | Cuidado do seu pet e da casa durante viagens (pernoite) |
| `tarjetas[2].items[3]` | Hospedaje de tu mascota en la casa de nuestras cuidadoras | Boarding for your pet at one of our sitters' homes | Hospedagem do seu pet na casa das nossas cuidadoras |
| `tarjetas[2].items[4]` | Atención personalizada y comunicación constante | Personalized care and constant communication | Atendimento personalizado e comunicação constante |
| `tarjetas[2].boton` | Consultar petsittings | Ask about pet sitting | Consultar pet sitting |
| `tarjetas[3].servicio` | Evento | Evento | Evento |
| `tarjetas[3].titulo` | Eventos | Events | Eventos |
| `tarjetas[3].subtitulo` | Animación infantil | Kids' entertainment | Recreação infantil |
| `tarjetas[3].descripcion` | Creamos espacios divertidos y dinámicos para que los niños disfruten mientras los adultos pueden relajarse. | We create fun, lively spaces so the kids have a great time while the adults can relax. | Criamos espaços divertidos e dinâmicos para que as crianças aproveitem enquanto os adultos podem relaxar. |
| `tarjetas[3].descripcionResto` | Organizamos propuestas adaptadas según la edad, cantidad de chicos y tipo de evento. | We plan activities adapted to the children's ages, the number of kids and the type of event. | Organizamos propostas adaptadas à idade, à quantidade de crianças e ao tipo de evento. |
| `tarjetas[3].items[1]` | Casamientos | Weddings | Casamentos |
| `tarjetas[3].items[2]` | Cumpleaños y eventos familiares | Birthdays and family events | Aniversários e eventos familiares |
| `tarjetas[3].items[3]` | Eventos empresariales y corporativos | Business and corporate events | Eventos empresariais e corporativos |
| `tarjetas[3].items[4]` | Actividades temáticas y recreativas | Themed and recreational activities | Atividades temáticas e recreativas |
| `tarjetas[3].items[5]` | Juegos grupales adaptados por edad | Group games adapted by age | Brincadeiras em grupo adaptadas à idade |
| `tarjetas[3].items[6]` | Coordinación profesional del espacio infantil | Professional coordination of the kids' area | Coordenação profissional do espaço infantil |
| `tarjetas[3].boton` | Consultar animación | Ask about entertainment | Consultar recreação |

## Cómo funciona

| Clave | Español | English | Português |
|---|---|---|---|
| `etiqueta` | Cómo funciona | How it works | Como funciona |
| `titulo` | Coordinar un servicio es muy fácil | Arranging a service is easy | Solicitar um serviço é muito fácil |
| `subtitulo` | Todo se organiza por WhatsApp, de forma rápida, simple y personalizada. | Everything is arranged on WhatsApp, quickly, simply and personally. | Tudo é combinado pelo WhatsApp, de forma rápida, simples e personalizada. |
| `pasos[1].titulo` | Empieza tu solicitud | Start your request | Comece sua solicitação |
| `pasos[1].texto` | Te consultamos fecha, horario, zona, cantidad de niños y tipo de servicio | We ask about the date, time, area, number of children and type of service | Perguntamos a data, o horário, a região, a quantidade de crianças e o tipo de serviço |
| `pasos[2].titulo` | Buscamos la niñera que más se ajusta a tus necesidades | We find the babysitter who best fits your needs | Buscamos a babá que melhor se encaixa no que você precisa |
| `pasos[2].texto` | Seleccionamos las niñeras más adecuadas según tu solicitud y te enviamos los distintos perfiles para elegir | We select the most suitable babysitters for your request and send you their profiles to choose from | Selecionamos as babás mais adequadas para a sua solicitação e enviamos os perfis para você escolher |
| `pasos[3].titulo` | Conoce a la niñera por videollamada | Meet the babysitter on a video call | Conheça a babá por videochamada |
| `pasos[3].texto` | Despejá dudas y asegurate de que es la persona adecuada para tu familia | Ask your questions and make sure she is the right person for your family | Tire suas dúvidas e confirme que ela é a pessoa certa para a sua família |
| `pasos[4].titulo` | Confirmamos el servicio | We confirm the service | Confirmamos o serviço |
| `pasos[4].texto` | Coordinamos los detalles finales y te compartimos toda la información necesaria | We coordinate the final details and share all the information you need | Combinamos os últimos detalhes e enviamos todas as informações necessárias |
| `pasos[5].titulo` | Disfrutás tu momento | Enjoy your time | Aproveite o seu momento |
| `pasos[5].texto` | Mientras tus hijos están acompañados y cuidados, vos podés disfrutar con tranquilidad | While your children are cared for and in good company, you can relax and enjoy | Enquanto seus filhos estão acompanhados e cuidados, você pode aproveitar com tranquilidade |

## Niñeras

| Clave | Español | English | Português |
|---|---|---|---|
| `etiqueta` | Nuestro equipo | Our team | Nossa equipe |
| `titulo` | Niñeras que elegimos con cuidado | Babysitters we choose with care | Babás que escolhemos com cuidado |
| `subtitulo` | Cada persona que forma parte de Parents' Break atraviesa un proceso de selección pensado para garantizar seguridad, confianza y calidad humana. | Everyone who joins Parents' Break goes through a selection process designed to guarantee safety, trust and human quality. | Cada pessoa que faz parte da Parents' Break passa por um processo de seleção pensado para garantir segurança, confiança e qualidade humana. |
| `fotoAlt` | Niñera de espaldas | Babysitter seen from behind | Babá de costas |
| `procesoTitulo` | Proceso de selección | Selection process | Processo de seleção |
| `proceso[1].titulo` | Formulario y experiencia | Application and experience | Formulário e experiência |
| `proceso[1].texto` | Analizamos experiencia previa, formación, disponibilidad y perfil personal. | We review previous experience, training, availability and personal profile. | Analisamos experiência prévia, formação, disponibilidade e perfil pessoal. |
| `proceso[2].titulo` | Entrevista personal | Personal interview | Entrevista pessoal |
| `proceso[2].texto` | Conocemos a cada candidata para evaluar vocación, responsabilidad y compatibilidad con nuestros estándares. | We meet each candidate to assess her vocation, responsibility and fit with our standards. | Conhecemos cada candidata para avaliar vocação, responsabilidade e compatibilidade com os nossos padrões. |
| `proceso[3].titulo` | Evaluación profesional | Professional assessment | Avaliação profissional |
| `proceso[3].texto` | Psicólogas y profesionales especializadas en infancia acompañan el proceso de selección para garantizar perfiles confiables y adecuados para el cuidado infantil. | Psychologists and professionals specialized in childhood support the selection process to ensure reliable profiles suited to childcare. | Psicólogas e profissionais especializadas em infância acompanham o processo de seleção para garantir perfis confiáveis e adequados para o cuidado infantil. |
| `proceso[4].titulo` | Validación de referencias | Reference checks | Verificação de referências |
| `proceso[4].texto` | Verificamos referencias de trabajos anteriores. | We check references from previous jobs. | Verificamos referências de trabalhos anteriores. |
| `elegirTitulo` | Podés elegir según | You can choose by | Você pode escolher por |
| `cualidades[1].titulo` | Formación | Education | Formação |
| `cualidades[1].texto` | Estudiantes y perfiles vinculados a Medicina, Educación Inicial, Psicología y áreas afines. | Students and profiles related to Medicine, Early Childhood Education, Psychology and similar fields. | Estudantes e perfis ligados a Medicina, Educação Infantil, Psicologia e áreas afins. |
| `cualidades[2].titulo` | Experiencia | Experience | Experiência |
| `cualidades[2].texto` | Experiencia en hogares, hoteles, eventos y cuidado infantil. | Experience in homes, hotels, events and childcare. | Experiência em casas, hotéis, eventos e cuidado infantil. |
| `cualidades[3].titulo` | Idiomas | Languages | Idiomas |
| `cualidades[3].texto` | Disponibilidad de niñeras bilingües o trilingües. | Bilingual or trilingual babysitters available. | Babás bilíngues ou trilíngues disponíveis. |
| `cualidades[4].titulo` | Disponibilidad | Availability | Disponibilidade |
| `cualidades[4].texto` | Servicios las 24 horas los 7 días de la semana | Services 24 hours a day, 7 days a week | Serviços 24 horas por dia, 7 dias por semana |
| `cualidades[5].titulo` | Edades | Ages | Idades |
| `cualidades[5].texto` | Experiencia con bebés, niños y/o adolescentes. | Experience with babies, children and/or teenagers. | Experiência com bebês, crianças e/ou adolescentes. |
| `cualidades[6].titulo` | Zonas | Areas | Regiões |
| `cualidades[6].texto` | Cobertura en Montevideo, Canelones y Punta del Este. | Coverage in Montevideo, Canelones and Punta del Este. | Atendimento em Montevideo, Canelones e Punta del Este. |

## Simulador (formulario)

| Clave | Español | English | Português |
|---|---|---|---|
| `etiqueta` | Rápido y fácil | Quick and easy | Rápido e fácil |
| `titulo` | Coordina tu servicio | Arrange your service | Solicite seu serviço |
| `subtitulo` | Completá el formulario y te preparamos automáticamente un mensaje listo para enviar por WhatsApp. | Fill in the form and we'll automatically prepare a message ready to send on WhatsApp. | Preencha o formulário e preparamos automaticamente uma mensagem pronta para enviar pelo WhatsApp. |
| `erroresTitulo` | Completá los siguientes campos antes de enviar: | Please complete the following fields before sending: | Preencha os campos a seguir antes de enviar: |
| `nombre` | Tu nombre * | Your name * | Seu nome * |
| `nombreEjemplo` | Ej: María González | E.g. Mary Smith | Ex.: Maria Silva |
| `tipoServicio` | Tipo de servicio * | Type of service * | Tipo de serviço * |
| `servicios.Babysitting.titulo` | Babysitting | Babysitting | Babysitting |
| `servicios.Babysitting.sub` | Cuidado en casa | Care at home | Cuidado em casa |
| `servicios.Petsittings.titulo` | Petsitting | Pet sitting | Pet sitting |
| `servicios.Petsittings.sub` | Cuidado de mascotas | Pet care | Cuidado de pets |
| `servicios.Evento.titulo` | Eventos | Events | Eventos |
| `servicios.Evento.sub` | Animación infantil | Kids' entertainment | Recreação infantil |
| `puntualOFijo` | ¿Es un servicio puntual o fijo? | Is it a one-off or a recurring service? | É um serviço pontual ou fixo? |
| `cuantosDias` | ¿Cuántos días? | How many days? | Quantos dias? |
| `dia` | Día {n} | Day {n} | Dia {n} |
| `copiarDia1` | Copiar horario del Día 1 | Copy Day 1 times | Copiar horário do Dia 1 |
| `fecha` | Fecha | Date | Data |
| `horaInicio` | Hora inicio | Start time | Hora de início |
| `horaFin` | Hora fin | End time | Hora de término |
| `alertaHoras` | El horario supera las 13 horas. Verificá que sea correcto. | The schedule is longer than 13 hours. Please check that it is correct. | O horário passa de 13 horas. Confira se está correto. |
| `diasSemana` | Días de la semana | Days of the week | Dias da semana |
| `desdeCuando` | Desde cuándo | Starting on | A partir de quando |
| `hastaCuando` | Hasta cuándo | Until | Até quando |
| `hastaUnaFecha` | Hasta una fecha | Until a date | Até uma data |
| `hastaQueFecha` | Hasta qué fecha | Until what date | Até que data |
| `tipoPetsitting` | Tipo de servicio | Type of service | Tipo de serviço |
| `cantMascotas` | Cantidad de mascotas | Number of pets | Quantidade de pets |
| `seleccionar` | Seleccioná | Select | Selecione |
| `queNecesita` | ¿Qué necesita? | What does your pet need? | Do que ele precisa? |
| `desde` | Desde | From | De |
| `hasta` | Hasta | To | Até |
| `tipoEvento` | Tipo de evento | Type of event | Tipo de evento |
| `eventoHoraInicio` | Hora de inicio | Start time | Hora de início |
| `eventoHoraFin` | Hora de fin | End time | Hora de término |
| `cantNinosEvento` | Cantidad aprox. de niños | Approx. number of children | Quantidade aprox. de crianças |
| `cantNinosEventoEjemplo` | Ej: 10-15 niños | E.g. 10-15 children | Ex.: 10-15 crianças |
| `departamento` | Departamento * | Department (e.g. Maldonado) * | Departamento * |
| `zona` | Zona * | Area * | Região * |
| `seleccionarZona` | Seleccioná tu zona | Select your area | Selecione sua região |
| `zonaOtro` | ¿En qué zona? * | Which area? * | Em qual região? * |
| `zonaOtroEjemplo` | Ej: Colón, Cerro, La Unión... | E.g. Colón, Cerro, La Unión... | Ex.: Colón, Cerro, La Unión... |
| `cantNinos` | Cantidad de niños | Number of children | Quantidade de crianças |
| `edades` | Edades * | Ages * | Idades * |
| `edadesEjemplo` | Ej: 2 y 5 años | E.g. 2 and 5 years | Ex.: 2 e 5 anos |
| `comentarios` | Comentarios adicionales | Additional comments | Comentários adicionais |
| `comentariosEjemplo` | Alguna preferencia o necesidad especial... | Any preference or special need... | Alguma preferência ou necessidade especial... |
| `enviar` | Enviar por WhatsApp | Send on WhatsApp | Enviar pelo WhatsApp |
| `notaIdioma` | *(vacío)* | *(vacío)* | Sua mensagem será enviada em espanhol e a nossa resposta também será em espanhol. |
| `privacidad` | No guardamos tus datos. El mensaje se genera directamente en WhatsApp. | We don't store your data. The message is created directly in WhatsApp. | Não guardamos seus dados. A mensagem é criada diretamente no WhatsApp. |
| `opciones.Puntual` | Puntual | One-off | Pontual |
| `opciones.Fijo` | Fijo | Recurring | Fixo |
| `opciones.Lun` | Lun | Mon | Seg |
| `opciones.Mar` | Mar | Tue | Ter |
| `opciones.Mié` | Mié | Wed | Qua |
| `opciones.Jue` | Jue | Thu | Qui |
| `opciones.Vie` | Vie | Fri | Sex |
| `opciones.Sáb` | Sáb | Sat | Sáb |
| `opciones.Dom` | Dom | Sun | Dom |
| `opciones.Indefinido` | Indefinido | Open-ended | Sem data de término |
| `opciones.Visita a domicilio` | Visita a domicilio | Home visit | Visita em domicílio |
| `opciones.Pernocte` | Pernocte (la cuidadora se queda en tu casa) | Overnight stay (the sitter stays at your home) | Pernoite (a cuidadora fica na sua casa) |
| `opciones.Hospedaje` | Hospedaje en casa de la cuidadora | Boarding at the sitter's home | Hospedagem na casa da cuidadora |
| `opciones.Darle de comer` | Darle de comer | Feeding | Alimentar |
| `opciones.Pasearlo` | Pasearlo | Walking | Passear |
| `opciones.Compañía / cuidado general` | Compañía / cuidado general | Companionship / general care | Companhia / cuidado geral |
| `opciones.Cumpleaños` | Cumpleaños | Birthday | Aniversário |
| `opciones.Evento empresarial` | Evento empresarial | Corporate event | Evento empresarial |
| `opciones.Evento familiar` | Evento familiar | Family event | Evento familiar |
| `opciones.Casamiento` | Casamiento | Wedding | Casamento |
| `opciones.Otro` | Otro | Other | Outro |
| `opciones.10 o más` | 10 o más | 10 or more | 10 ou mais |
| `errores.nombre` | Ingresá tu nombre | Enter your name | Digite seu nome |
| `errores.servicio` | Seleccioná un servicio | Select a service | Selecione um serviço |
| `errores.departamento` | Seleccioná un departamento | Select a department | Selecione um departamento |
| `errores.zona` | Seleccioná una zona | Select an area | Selecione uma região |
| `errores.zonaOtro` | Ingresá tu zona | Enter your area | Digite sua região |
| `errores.edades` | Ingresá las edades | Enter the ages | Digite as idades |
| `errores.tipoBabysitting` | Seleccioná puntual o fijo | Select one-off or recurring | Selecione pontual ou fixo |
| `errores.cantDias` | Seleccioná la cantidad de días | Select the number of days | Selecione a quantidade de dias |
| `errores.fecha` | Ingresá la fecha | Enter the date | Digite a data |
| `errores.horaInicio` | Ingresá hora de inicio | Enter a start time | Digite a hora de início |
| `errores.horaFin` | Ingresá hora de fin | Enter an end time | Digite a hora de término |
| `errores.diasSemana` | Seleccioná al menos un día | Select at least one day | Selecione pelo menos um dia |
| `errores.fijoDesde` | Ingresá desde cuándo | Enter a start date | Digite a data de início |
| `errores.hastaFecha` | Ingresá hasta qué fecha | Enter an end date | Digite a data de término |
| `errores.finAntesDeInicio` | La fecha de fin no puede ser anterior a la de inicio | The end date can't be before the start date | A data de término não pode ser anterior à de início |
| `errores.cantNinos` | Seleccioná cantidad de niños | Select the number of children | Selecione a quantidade de crianças |
| `errores.tipoEvento` | Seleccioná el tipo de evento | Select the type of event | Selecione o tipo de evento |
| `errores.fechaEvento` | Ingresá la fecha del evento | Enter the event date | Digite a data do evento |
| `errores.cantNinosEvento` | Ingresá la cantidad aproximada | Enter the approximate number | Digite a quantidade aproximada |
| `errores.tipoPetsitting` | Seleccioná el tipo de servicio | Select the type of service | Selecione o tipo de serviço |
| `errores.cantMascotas` | Seleccioná la cantidad de mascotas | Select the number of pets | Selecione a quantidade de pets |
| `errores.petFechaDesde` | Ingresá la fecha de inicio | Enter the start date | Digite a data de início |
| `errores.petFechaHasta` | Ingresá la fecha de fin | Enter the end date | Digite a data de término |
| `errores.fechaInvalida` | Fecha inválida | Invalid date | Data inválida |
| `errores.fechaPasada` | No puede ser anterior a hoy | Can't be earlier than today | Não pode ser anterior a hoje |
| `errores.fechaLejana` | No puede ser mayor a un año | Can't be more than a year from now | Não pode passar de um ano |
| `errores.horaInvalida` | Hora inválida | Invalid hour | Hora inválida |
| `errores.horaInvalidaMax` | Hora inválida (máx 23) | Invalid hour (max 23) | Hora inválida (máx. 23) |
| `errores.minutosInvalidos` | Minutos inválidos | Invalid minutes | Minutos inválidos |
| `errores.minutosInvalidosMax` | Minutos inválidos (máx 59) | Invalid minutes (max 59) | Minutos inválidos (máx. 59) |

## CTA final

| Clave | Español | English | Português |
|---|---|---|---|
| `titulo` | Estamos para ayudarte | We're here to help | Estamos aqui para ajudar |
| `texto` | Escribinos por WhatsApp y contanos qué necesitás. Juntas encontraremos la babysitter que mejor se adapte a tu familia. | Message us on WhatsApp and tell us what you need. Together we'll find the babysitter who best fits your family. | Fale conosco pelo WhatsApp e conte do que você precisa. Juntas vamos encontrar a babá que melhor se adapta à sua família. |
| `botonWhatsApp` | Escríbenos por WhatsApp ahora | Message us on WhatsApp now | Fale conosco no WhatsApp agora |
| `botonFormulario` | Completar formulario → | Fill in the form → | Preencher formulário → |
| `nota` | Sin compromiso. Te respondemos por WhatsApp | No commitment. We'll reply on WhatsApp | Sem compromisso. Respondemos pelo WhatsApp |
| `beneficios[1]` | Respuesta rápida | Quick reply | Resposta rápida |
| `beneficios[2]` | Atención personalizada | Personalized care | Atendimento personalizado |
| `beneficios[3]` | Sin costos ocultos | No hidden costs | Sem custos ocultos |

## Footer

| Clave | Español | English | Português |
|---|---|---|---|
| `descripcion` | Red profesional de niñeras seleccionadas para babysittings, petsittings y eventos en Uruguay. | A professional network of selected babysitters for babysitting, pet sitting and events in Uruguay. | Rede profissional de babás selecionadas para babysitting, pet sitting e eventos no Uruguai. |
| `serviciosTitulo` | Servicios | Services | Serviços |
| `servicios[1]` | Babysittings | Babysitting | Babysitting |
| `servicios[2]` | Petsittings | Pet sitting | Pet sitting |
| `servicios[3]` | Eventos | Events | Eventos |
| `servicios[4]` | Servicios para empresas | Services for companies | Serviços para empresas |
| `zonasTitulo` | Zonas | Areas | Regiões |
| `contactoTitulo` | Contacto | Contact | Contato |
| `contacto` | Atención 24/7 por WhatsApp | 24/7 support on WhatsApp | Atendimento 24/7 pelo WhatsApp |
| `derechos` | Todos los derechos reservados. | All rights reserved. | Todos os direitos reservados. |
| `hecho` | Diseñado y desarrollado en Uruguay | Designed and developed in Uruguay | Criado e desenvolvido no Uruguai |
| `aviso` | Usamos estadísticas anónimas de visitas, sin cookies. | We use anonymous visit statistics, without cookies. | Usamos estatísticas anônimas de visitas, sem cookies. |

## Botón flotante de WhatsApp

| Clave | Español | English | Português |
|---|---|---|---|
| `flotante` | Escribinos por WhatsApp | Message us on WhatsApp | Fale conosco no WhatsApp |

## Página "Abriendo WhatsApp" (muestra los tres idiomas a la vez)

| Clave | Español | English | Português |
|---|---|---|---|
| `titulo` | Abriendo WhatsApp… | Opening WhatsApp… | Abrindo o WhatsApp… |
| `siNoAbre` | Si no se abre solo, | If it doesn't open, | Se não abrir sozinho, |
| `tocaAca` | tocá acá | tap here | toque aqui |
| `volver` | Volver a la página | Back to the site | Voltar ao site |

## Página 404 (dirección que no existe; elige el idioma por la dirección)

| Clave | Español | English | Português |
|---|---|---|---|
| `titulo` | No encontramos esta página | We couldn't find this page | Não encontramos esta página |
| `texto` | Puede que el link esté mal escrito o que la página ya no exista. | The link may be mistyped, or the page may no longer exist. | O link pode estar digitado errado ou a página pode não existir mais. |
| `volver` | Volver al inicio | Back to home | Voltar ao início |

## Mensaje de WhatsApp

El mensaje que arma el simulador sale en español desde `/` y `/pt`, y en inglés desde `/en`. Desde `/pt` se agrega al final la línea `*Idioma:* Português`, y el saludo de los botones directos también la lleva.

| Clave | Español (desde / y /pt) | English (desde /en) |
|---|---|---|
| `saludo` | Hola! Quiero coordinar un servicio de Parents' Break | Hi! I'd like to arrange a Parents' Break service |
| `etiquetas.nombre` | Nombre | Name |
| `etiquetas.servicio` | Servicio | Service |
| `etiquetas.modalidad` | Modalidad | Type |
| `etiquetas.dia` | Día {n} | Day {n} |
| `etiquetas.fecha` | Fecha | Date |
| `etiquetas.horario` | Horario | Time |
| `etiquetas.dias` | Días | Days |
| `etiquetas.desde` | Desde | From |
| `etiquetas.hasta` | Hasta | Until |
| `etiquetas.tipoEvento` | Tipo de evento | Type of event |
| `etiquetas.cantNinosEvento` | Cantidad aproximada de niños | Approximate number of children |
| `etiquetas.tipoServicio` | Tipo de servicio | Type of service |
| `etiquetas.cantMascotas` | Cantidad de mascotas | Number of pets |
| `etiquetas.necesita` | Necesita | Needs |
| `etiquetas.cantNinos` | Cantidad de niños | Number of children |
| `etiquetas.edades` | Edades | Ages |
| `etiquetas.departamento` | Departamento | Department |
| `etiquetas.zona` | Zona | Area |
| `etiquetas.comentarios` | Comentarios | Comments |
| `etiquetas.idioma` | Idioma | Language |

Valores del formulario que cambian en el mensaje en inglés (en español van tal cual, salvo el tipo de petsitting):

| Valor interno | Español | English |
|---|---|---|
| `Babysitting` | Babysitting | Babysitting |
| `Petsittings` | Petsittings | Pet sitting |
| `Evento` | Evento | Event |
| `Puntual` | Puntual | One-off |
| `Fijo` | Fijo | Recurring |
| `Lun` | Lun | Mon |
| `Mar` | Mar | Tue |
| `Mié` | Mié | Wed |
| `Jue` | Jue | Thu |
| `Vie` | Vie | Fri |
| `Sáb` | Sáb | Sat |
| `Dom` | Dom | Sun |
| `Indefinido` | Indefinido | Open-ended |
| `Visita a domicilio` | Visita a domicilio | Home visit |
| `Pernocte` | Pernocte (la cuidadora se queda en tu casa) | Overnight stay (the sitter stays at your home) |
| `Hospedaje` | Hospedaje en casa de la cuidadora | Boarding at the sitter's home |
| `Darle de comer` | Darle de comer | Feeding |
| `Pasearlo` | Pasearlo | Walking |
| `Compañía / cuidado general` | Compañía / cuidado general | Companionship / general care |
| `Cumpleaños` | Cumpleaños | Birthday |
| `Evento empresarial` | Evento empresarial | Corporate event |
| `Evento familiar` | Evento familiar | Family event |
| `Casamiento` | Casamiento | Wedding |
| `Otro` | Otro | Other |
| `10 o más` | 10 o más | 10 or more |
