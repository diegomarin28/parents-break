import IrAlSimulador from "./IrAlSimulador";
import type { Diccionario } from "../dictionaries/tipos";

// Cuántos ítems de cada servicio se ven sin abrir "Ver todo lo que incluye"
const VISIBLES = 3;

type Servicio = { color: string; bg: string };
function itemDeServicio(item: string, s: Servicio) {
  return (
    <li key={item} className="service-item" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--fs-texto)", color: "var(--text-soft)" }}>
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

export default function ServicesSection({ t }: { t: Diccionario["servicios"] }) {
  // Colores de cada tarjeta, en el orden de t.tarjetas (Babysitting, Petsittings, Evento)
  const estilos = [
    {
      color: "var(--pink)",
      bg: "var(--pink-light)",
      colorLink: "#b5464c", // tonos oscuros de cada color: 4,5:1 o más sobre blanco
      border: "var(--pink-mid)",
      // Fondo oscuro para que el texto blanco llegue a 4,5:1 (con --pink daba 2,7:1)
      ctaBg: "#b5464c",
      ctaColor: "white",
      featured: true,
      featuredBadgeBg: "#b5464c",
      featuredBadgeColor: "white",
    },
    {
      color: "var(--blue)",
      bg: "var(--blue-light)",
      colorLink: "#5a60a0",
      border: "var(--blue-mid)",
    },
    {
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      colorLink: "#8a6d0f",
      border: "#ffe8a0",
    },
  ];
  const services = t.tarjetas.map((tarjeta, i) => ({ ...tarjeta, ...estilos[i] }));

  return (
    <section id="servicios" className="services-section" style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "var(--pink-light)", color: "#b5464c",
            fontWeight: 700, fontSize: "var(--fs-chico)", letterSpacing: ".1em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 99,
            marginBottom: 16,
          }}>
            {t.etiqueta}
          </span>
          <h2 style={{ fontSize: "var(--fs-seccion)", fontWeight: 800, marginBottom: 14 }}>
            {t.titulo}
          </h2>
          <p style={{ fontSize: "var(--fs-destacado)", color: "var(--text-soft)", maxWidth: 560, margin: "0 auto" }}>
            {t.subtitulo}
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
            alignItems: "stretch",
        }}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card${s.featured ? " service-card-destacada" : ""}`}
              style={{
                background: "var(--white)",
                borderRadius: 24,
                border: `1.5px solid ${s.featured ? s.border : "var(--gray)"}`,
                padding: "36px 28px",
                position: "relative",
                  display: "flex",
  flexDirection: "column",
  height: "100%",
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
                  fontSize: "var(--fs-chico)", fontWeight: 700, letterSpacing: ".06em",
                  textTransform: "uppercase", padding: "4px 12px", borderRadius: 99,
                  transform: "none",
                }}>
                  {t.masSolicitado}
                </div>
              )}

              {/* Icono */}
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                {s.servicio === "Babysitting" && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
                {s.servicio === "Petsittings" && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill={s.color} stroke="none">
                    <circle cx="4.5" cy="9.5" r="2"/>
                    <circle cx="9" cy="5.5" r="2"/>
                    <circle cx="15" cy="5.5" r="2"/>
                    <circle cx="19.5" cy="9.5" r="2"/>
                    <path d="M17.34 14.86c-.83-1.6-1.95-2.86-4.3-3.1-.34-.03-.68-.03-1.02 0-2.35.24-3.47 1.5-4.3 3.1-.83 1.6-2.55 2.3-2.7 4.02-.15 1.65 1.1 2.87 2.66 2.6.98-.17 1.9-.77 3.02-.9.5-.06 1.02-.06 1.52 0 1.12.13 2.04.73 3.02.9 1.56.27 2.81-.95 2.66-2.6-.15-1.72-1.87-2.42-2.7-4.02z"/>
                  </svg>
                )}
                {s.servicio === "Evento" && (
 <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
                )}
              </div>

              <div style={{
                fontSize: "var(--fs-chico)", fontWeight: 700, letterSpacing: ".08em",
                textTransform: "uppercase", color: s.colorLink, marginBottom: 6,
              }}>
                {s.subtitulo}
              </div>
              <h3 className="service-title" style={{ fontSize: "var(--fs-titulo)", fontWeight: 800, marginBottom: 12, color: "var(--text)" }}>
                {s.titulo}
              </h3>
              <p className="service-desc" style={{ fontSize: "var(--fs-texto)", color: "var(--text-soft)", lineHeight: 1.6, marginBottom: 18 }}>
                {s.descripcion}
              </p>

              <ul className="service-lista">
                {s.items.slice(0, VISIBLES).map((item) => itemDeServicio(item, s))}
              </ul>

              {(s.items.length > VISIBLES || s.descripcionResto) && (
                <details className="service-mas">
                  <summary style={{ color: s.colorLink }}>
                    <span className="service-mas-abrir">{t.verTodo}</span>
                    <span className="service-mas-cerrar">{t.verMenos}</span>
                  </summary>
                  {s.items.length > VISIBLES && (
                    <ul className="service-lista">
                      {s.items.slice(VISIBLES).map((item) => itemDeServicio(item, s))}
                    </ul>
                  )}
                  {s.descripcionResto && (
                    <p className="service-desc" style={{ fontSize: "var(--fs-texto)", color: "var(--text-soft)", lineHeight: 1.6 }}>
                      {s.descripcionResto}
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
                  color: s.ctaColor || (s.featured ? "white" : s.colorLink),
                  padding: "13px", borderRadius: 99,
                  fontWeight: 700, fontSize: "var(--fs-texto)",
                  border: `1.5px solid ${s.ctaBg ? s.ctaBg : s.featured ? s.color : s.border}`,
                  textDecoration: "none",
                }}
              >
                {s.boton} →
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
          font-size: var(--fs-texto);
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
        .service-card-destacada { box-shadow: var(--shadow-lg); }
        .service-cta { transition: opacity .15s; }
        /* Tablet: tres columnas angostas. Menos relleno y título más chico para que el
           contenido no las desborde (antes generaba scroll horizontal entre 601 y 630 px). */
        @media (max-width: 900px) {
          .service-card { padding: 32px 18px !important; }
          .service-title { font-size: var(--fs-destacado) !important; }
        }
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
          .service-title { font-size: var(--fs-titulo) !important; }
        }
      `}</style>
    </section>
  );
}
