"use client";
import IrAlSimulador from "./IrAlSimulador";

// Cuántos ítems de cada servicio se ven sin abrir "Ver todo lo que incluye"
const VISIBLES = 3;

type Servicio = { color: string; bg: string };
function itemDeServicio(item: string, s: Servicio) {
  return (
    <li key={item} className="service-item" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--text-soft)" }}>
      <span style={{
        width: 18, height: 18, borderRadius: "50%",
        background: s.bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      {item}
    </li>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Babysittings, fijos o esporádicos",
      servicio: "Babysitting",
      subtitle: "Cuidado en casa",
      desc: "Niñeras que generan un vínculo real con los chicos a través del juego, la atención y el acompañamiento activo.",
      descResto: "Nos adaptamos a la rutina de cada familia para que los niños se sientan cómodos, entretenidos y cuidados en todo momento.",
      items: [
        "Cuidado en hogares y hoteles",
        "Servicios puntuales o esporádicos",
        "Juegos y actividades adaptadas por edad",
        "Acompañamiento activo y responsable",
        "Comunicación constante con los padres",
        "Juguetes de industria nacional para fomentar el desarrollo lúdico",
      ],
      color: "var(--pink)",
      bg: "var(--pink-light)",
      colorLink: "#b5464c", // tonos oscuros de cada color: 4,5:1 o más sobre blanco
      border: "var(--pink-mid)",
      cta: "Reservar babysitting",
      ctaBg: "var(--pink)",
      ctaColor: "white",
      featured: true,
      featuredBadgeBg: "var(--pink)",
      featuredBadgeColor: "white",
    },
    {
      title: "Petsittings",
      servicio: "Petsittings",
      subtitle: "Cuidado de mascotas",
      desc: "Cuidamos a tu mascota y nos ocupamos de que se sienta acompañada y segura cuando vos no podés estar.",
      items: [
        "Visitas a domicilio para darle de comer y pasearla",
        "Cuidado de tu mascota y casa durante viajes (pernocte)",
        "Hospedaje de tu mascota en la casa de nuestras cuidadoras",
        "Atención personalizada y comunicación constante",
      ],
      color: "var(--blue)",
      bg: "var(--blue-light)",
      colorLink: "#5a60a0",
      border: "var(--blue-mid)",
      cta: "Consultar petsittings",
    },
    {
      title: "Eventos",
      servicio: "Evento",
      subtitle: "Animación infantil",
      desc: "Creamos espacios divertidos y dinámicos para que los niños disfruten mientras los adultos pueden relajarse.",
      descResto: "Organizamos propuestas adaptadas según la edad, cantidad de chicos y tipo de evento.",
      items: [
        "Casamientos",
        "Cumpleaños y eventos familiares",
        "Eventos empresariales y corporativos",
        "Actividades temáticas y recreativas",
        "Juegos grupales adaptados por edad",
        "Coordinación profesional del espacio infantil",
      ],
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      colorLink: "#8a6d0f",
      border: "#ffe8a0",
      cta: "Consultar animación",
    },
  ];

  return (
    <section id="servicios" className="services-section" style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "var(--pink-light)", color: "var(--pink)",
            fontWeight: 700, fontSize: 12, letterSpacing: ".1em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 99,
            marginBottom: 16,
          }}>
            Lo que ofrecemos
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: 14 }}>
            Nuestros servicios
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-soft)", maxWidth: 520, margin: "0 auto" }}>
            Acompañamos a familias en distintos momentos del día a día con niñeras seleccionadas,
responsables y preparadas para cada situación.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
            alignItems: "stretch",
        }}>
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                background: "var(--white)",
                borderRadius: 24,
                border: `1.5px solid ${s.featured ? s.border : "var(--gray)"}`,
                padding: "36px 28px",
                position: "relative",
                transition: "transform .2s, box-shadow .2s",
                boxShadow: s.featured ? "var(--shadow-lg)" : "none",
                transform: "none",
                  display: "flex",
  flexDirection: "column",
  height: "100%",
              }}
              onMouseEnter={(e) => {
                
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        
              }}
              onMouseLeave={(e) => {
          
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                background: s.color, borderRadius: "24px 24px 0 0",
              }} />

              {s.featured && (
                <div style={{
                  position: "absolute", top: -12, right: 20,
                  background: s.featuredBadgeBg || "var(--blue)",
                  color: s.featuredBadgeColor || "white",
                  fontSize: 11, fontWeight: 700, letterSpacing: ".06em",
                  textTransform: "uppercase", padding: "4px 12px", borderRadius: 99,
                  transform: "none",
                }}>
                  Más solicitado
                </div>
              )}

              {/* Icono */}
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                {s.title === "Babysittings, fijos o esporádicos" && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
                {s.title === "Petsittings" && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill={s.color} stroke="none">
                    <circle cx="4.5" cy="9.5" r="2"/>
                    <circle cx="9" cy="5.5" r="2"/>
                    <circle cx="15" cy="5.5" r="2"/>
                    <circle cx="19.5" cy="9.5" r="2"/>
                    <path d="M17.34 14.86c-.83-1.6-1.95-2.86-4.3-3.1-.34-.03-.68-.03-1.02 0-2.35.24-3.47 1.5-4.3 3.1-.83 1.6-2.55 2.3-2.7 4.02-.15 1.65 1.1 2.87 2.66 2.6.98-.17 1.9-.77 3.02-.9.5-.06 1.02-.06 1.52 0 1.12.13 2.04.73 3.02.9 1.56.27 2.81-.95 2.66-2.6-.15-1.72-1.87-2.42-2.7-4.02z"/>
                  </svg>
                )}
                {s.title === "Eventos" && (
 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
                )}
              </div>

              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: ".08em",
                textTransform: "uppercase", color: s.color, marginBottom: 6,
              }}>
                {s.subtitle}
              </div>
              <h3 className="service-title" style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: "var(--text)" }}>
                {s.title}
              </h3>
              <p className="service-desc" style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 18 }}>
                {s.desc}
              </p>

              <ul className="service-lista">
                {s.items.slice(0, VISIBLES).map((item) => itemDeServicio(item, s))}
              </ul>

              {(s.items.length > VISIBLES || s.descResto) && (
                <details className="service-mas">
                  <summary style={{ color: s.colorLink }}>
                    <span className="service-mas-abrir">Ver todo lo que incluye</span>
                    <span className="service-mas-cerrar">Ver menos</span>
                  </summary>
                  {s.items.length > VISIBLES && (
                    <ul className="service-lista">
                      {s.items.slice(VISIBLES).map((item) => itemDeServicio(item, s))}
                    </ul>
                  )}
                  {s.descResto && (
                    <p className="service-desc" style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.7 }}>
                      {s.descResto}
                    </p>
                  )}
                </details>
              )}

              <IrAlSimulador
                servicio={s.servicio}
                className="service-cta"
                style={{
                    marginTop: "auto",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, width: "100%",
                  background: s.ctaBg || (s.featured ? s.color : s.bg),
                  color: s.ctaColor || (s.featured ? "white" : s.color),
                  padding: "13px", borderRadius: 99,
                  fontWeight: 700, fontSize: 14,
                  border: `1.5px solid ${s.ctaBg ? s.ctaBg : s.featured ? s.color : s.border}`,
                  textDecoration: "none",
                }}
              >
                {s.cta} →
              </IrAlSimulador>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section { padding: 96px 0; }
        .service-lista { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .service-mas { margin: 12px 0 24px; }
        .service-mas > .service-lista { margin-top: 8px; }
        .service-mas > .service-desc { margin-top: 12px; }
        .service-mas summary {
          display: inline-block;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          list-style: none;
        }
        .service-mas summary::-webkit-details-marker { display: none; }
        .service-mas-cerrar { display: none; }
        .service-mas[open] .service-mas-abrir { display: none; }
        .service-mas[open] .service-mas-cerrar { display: inline; }
        .service-cta:hover { opacity: .85; }
        .service-cta { transition: opacity .15s; }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .services-section { padding: 72px 0; }
        }
        @media (max-width: 600px) {
          .services-section { padding: 64px 0; }
          .services-grid { gap: 16px; }
          .service-card { padding: 28px 20px !important; }
          .service-title { font-size: 22px !important; }
          .service-desc { font-size: 13.5px !important; }
          .service-item { font-size: 13px !important; }
        }
      `}</style>
    </section>
  );
}
