"use client";

import Image from "next/image";

export default function SittersSection() {
  const process = [
    {title: "Formulario y experiencia", desc: "Analizamos experiencia previa, formación, disponibilidad y perfil personal." },
    {title: "Entrevista personal", desc: "Conocemos a cada candidata para evaluar vocación, responsabilidad y compatibilidad con nuestros estándares." },
    {title: "Evaluación profesional", desc: "Psicólogas y profesionales especializadas en infancia acompañan el proceso de selección para garantizar perfiles confiables y adecuados para el cuidado infantil." },
    {title: "Validación de referencias", desc: "Verificamos referencias y antecedentes" },
  ];

  const qualities = [
    {label: "Formación", detail: "Estudiantes y perfiles vinculados a Medicina, Educación Inicial, Psicología y áreas afines." },
    {label: "Experiencia", detail: "Experiencia en hogares, hoteles, eventos y cuidado infantil." },
    {label: "Idiomas", detail: "Disponibilidad de niñeras bilingües o trilingües." },
    {label: "Disponibilidad", detail: "Servicios las 24 horas los 7 días de la semana" },
    {label: "Edades", detail: "Experiencia con bebés, niños y/o adolescentes." },
    {label: "Zonas", detail: "Cobertura en Montevideo, Canelones y Punta del Este." },
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
          Cada persona que forma parte de Parents&apos; Break atraviesa un proceso de selección pensado para garantizar seguridad, confianza y calidad humana.
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
<div className="sitters-photos" style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 10 }}>
  {[
    { src: "/PauDeEspaldas.jpg", alt: "Niñera de espaldas",     span: false },
    { src: "/Lleno.jpg", alt: "Niñera de espaldas",     span: false },
  ].map((photo, i) => (
    <div key={i} style={{
      position: "relative",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "var(--shadow)",
      ...(photo.span ? { gridColumn: "1 / 2", gridRow: "1 / 3" } : {}),
    }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        sizes="(max-width: 900px) 50vw, 25vw"
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
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M8 12h8" />
                        <path d="M8 16h8" />
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
            Podés elegir según
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
        .sitters-photos { height: 520px; }
        @media (max-width: 900px) {
          .sitters-grid { grid-template-columns: 1fr !important; }
          .sitters-photos { height: 380px; }
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
          .sitters-photos { height: 300px; }
          .qualities-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
