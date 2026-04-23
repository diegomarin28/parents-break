"use client";
export default function ServicesSection() {
  const services = [
    {
      title: "Babysitting",
      subtitle: "Cuidado en casa",
      desc: "Niñeras que no solo supervisan: organizan actividades recreativas, juegos adaptados a cada edad y acompañamiento activo en tu hogar.",
      items: [
        "Hogares y departamentos",
        "Hoteles y alquileres temporarios",
        "Servicios puntuales o fijos",
        "Actividades y juegos por edad",
        "Comunicación constante con los padres",
      ],
      color: "var(--pink)",
      bg: "var(--pink-light)",
      border: "var(--pink-mid)",
      cta: "Reservar babysitting",
      ctaBg: "var(--pink)",
      ctaColor: "white",
      featured: true,
      featuredBadgeBg: "var(--pink)",
      featuredBadgeColor: "white",
    },
    {
      title: "Traslados",
      subtitle: "Transporte seguro",
      desc: "Servicio responsable para llevar y traer a tus hijos a sus actividades. Conductoras validadas con licencia, auto y seguro al día.",
      items: [
        "Cumpleaños y matinés",
        "Actividades extracurriculares",
        "Eventos sociales y deportivos",
        "Solo ida, solo vuelta, o ambas",
        "Puntualidad garantizada",
      ],
      color: "var(--blue)",
      bg: "var(--blue-light)",
      border: "var(--blue-mid)",
      cta: "Solicitar traslado",
    },
    {
      title: "Eventos",
      subtitle: "Animación infantil",
      desc: "Creamos espacios dinámicos para que los niños disfruten mientras los adultos celebran. Cumpleaños, eventos familiares y empresariales.",
      items: [
        "Cumpleaños temáticos",
        "Eventos empresariales y corporativos",
        "Día de Spa, TikTok Party, Fútbol",
        "Dinámicas grupales por edad",
        "Coordinación profesional del espacio",
      ],
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      border: "#ffe8a0",
      cta: "Consultar animación",
    },
  ];

  return (
    <section id="servicios" style={{ padding: "96px 0", background: "var(--white)" }}>
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
            Babysitting, traslados y eventos — todo con niñeras seleccionadas y validadas por nuestro equipo.
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
                {s.title === "Babysitting" && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
                {s.title === "Traslados" && (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="4" y="10" width="16" height="6" rx="2"/>
  <path d="M6 10l2-4h8l2 4"/>
  <circle cx="8" cy="17" r="1.5"/>
  <circle cx="16" cy="17" r="1.5"/>
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
              <p className="service-desc" style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 22 }}>
                {s.desc}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {s.items.map((item, j) => (
                  <li key={j} className="service-item" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--text-soft)" }}>
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
                ))}
              </ul>

              <a
                href="#simulador"
                onClick={(e) => {
                  e.preventDefault();
                  const map: Record<string, string> = {
                    "Babysitting": "Babysitting",
                    "Traslados": "Traslado",
                    "Eventos": "Evento",
                  };
                  const servicio = map[s.title] || s.title;
                  window.history.pushState(null, "", `?servicio=${servicio}#simulador`);
                  window.dispatchEvent(new Event("popstate"));
                  const el = document.getElementById("simulador");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                    marginTop: "auto",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, width: "100%",
                  background: s.ctaBg || (s.featured ? s.color : s.bg),
                  color: s.ctaColor || (s.featured ? "white" : s.color),
                  padding: "13px", borderRadius: 99,
                  fontWeight: 700, fontSize: 14,
                  border: `1.5px solid ${s.ctaBg ? s.ctaBg : s.featured ? s.color : s.border}`,
                  transition: "opacity .15s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = ".85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          section { padding: 72px 0; }
        }
        @media (max-width: 600px) {
          section { padding: 64px 0; }
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