"use client";

import Image from "next/image";

export default function SittersSection() {
  const process = [
    {title: "Formulario de registro", desc: "Cada candidata completa un formulario detallado con su experiencia, formación y disponibilidad." },
    {title: "Entrevista personal", desc: "Realizamos una entrevista para evaluar perfil, vocación y compatibilidad con nuestros estándares." },
    {title: "Validación y aprobación", desc: "Solo las niñeras que cumplen todos los criterios se incorporan a nuestra base activa." },
    {title: "Validación para traslados", desc: "Para traslados: verificamos licencia, seguro vehicular y experiencia específica en conducción con menores." },
  ];

  const qualities = [
    {label: "Formación", detail: "Educación, psicología y áreas afines" },
    {label: "Experiencia", detail: "En hogares, hoteles y eventos" },
    {label: "Idiomas", detail: "Español e inglés disponibles" },
    {label: "Disponibilidad", detail: "Días, noches y fines de semana" },
    {label: "Edades", detail: "Bebés, niños y adolescentes" },
    {label: "Zonas", detail: "Montevideo y Punta del Este" },
  ];

  return (
    <section id="nineras" className="sitters-section" style={{ padding: "96px 0", background: "var(--off)" }}>
      <div className="sitters-container" style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "var(--yellow)", color: "var(--text)",
            fontWeight: 700, fontSize: 12, letterSpacing: ".1em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 99,
            marginBottom: 16,
          }}>
            Nuestro equipo
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: 14 }}>
            Niñeras que elegimos con cuidado
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-soft)", maxWidth: 520, margin: "0 auto" }}>
            No aceptamos a cualquiera. Cada niñera pasa por un proceso riguroso antes de ser parte de Parents&apos; Break.
          </p>
        </div>

        <div className="sitters-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "stretch",
          marginBottom: 64,
        }}>

{/* Fotos */}
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, height: "100%" }}>
  {[
    { src: "/FedeDeFrente.jpg", alt: "Niñera de espaldas",     span: false },
    { src: "/auto.jpg",          alt: "Niñera en auto",         span: false  },
    { src: "/Llenito.jpg",       alt: "Niñera con niños",       span: false },
    { src: "/PauDeEspaldas.jpg", alt: "Niñera de espaldas",     span: false },
  ].map((photo, i) => (
    <div key={i} style={{
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "var(--shadow)",
      ...(photo.span ? { gridColumn: "1 / 2", gridRow: "1 / 3" } : {}),
    }}>
      <img
        src={photo.src}
        alt={photo.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  ))}
</div>

          {/* Proceso */}
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 28, color: "var(--text)" }}>
              Proceso de selección
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {process.map((p, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  background: "var(--white)",
                  borderRadius: 16, padding: "18px",
                  border: "1.5px solid var(--gray)",
                  transition: "box-shadow .2s",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: i % 2 === 0 ? "var(--pink-light)" : "var(--blue-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {i === 0 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16v16H4z"/>
                        <path d="M8 2v4M16 2v4"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="4"/>
                        <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                    {i === 3 && (
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="4" y="10" width="16" height="6" rx="2"/>
  <path d="M6 10l2-4h8l2 4"/>
  <circle cx="8" cy="17" r="1.5"/>
  <circle cx="16" cy="17" r="1.5"/>
</svg>
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualities */}
        <div style={{
          background: "var(--white)",
          borderRadius: 24,
          border: "1.5px solid var(--gray)",
          padding: "36px",
        }}>
          <h4 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 28 }}>
            Podés filtrar por
          </h4>
          <div className="qualities-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}>
            {qualities.map((q, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: i % 2 === 0 ? "var(--pink-light)" : "var(--blue-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 10px",
                }}>
      {i === 0 && (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6l8-4 8 4-8 4-8-4z"/>
    <path d="M4 10l8 4 8-4"/>
    <path d="M4 14l8 4 8-4"/>
  </svg>
)}
                  {i === 1 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  )}
{i === 2 && (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15 15 0 0 1 0 20"/>
    <path d="M12 2a15 15 0 0 0 0 20"/>
  </svg>
)}
{i === 3 && (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
)}
                  {i === 4 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="7" r="4"/>
                      <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                    </svg>
                  )}
                  {i === 5 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  )}
                </div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{q.label}</div>
                <div style={{ fontSize: 11, color: "var(--text-soft)", marginTop: 3 }}>{q.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sitters-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .qualities-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .sitters-section { padding: 72px 0; }
          .sitters-grid { gap: 40px; }
        }
        @media (max-width: 600px) {
          .sitters-section { padding: 64px 0; }
          .sitters-container { padding: 0 16px; }
          .sitters-grid { gap: 32px; }
          .qualities-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
        }
      `}</style>
    </section>
  );
}