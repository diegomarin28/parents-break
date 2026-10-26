import Image from "next/image";
import type { Diccionario } from "../dictionaries/tipos";

export default function SittersSection({ t }: { t: Diccionario["nineras"] }) {
  return (
    <section id="nineras" className="sitters-section" style={{ background: "var(--off)" }}>
      <div className="sitters-container" style={{ maxWidth: 1140, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "var(--yellow)", color: "var(--text)",
            fontWeight: 700, fontSize: 12, letterSpacing: ".1em",
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 99,
            marginBottom: 16,
          }}>
            {t.etiqueta}
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: 14 }}>
            {t.titulo}
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-soft)", maxWidth: 520, margin: "0 auto" }}>
            {t.subtitulo}
          </p>
        </div>

        <div className="sitters-grid" style={{
          display: "grid",
          marginBottom: 64,
        }}>

{/* Foto */}
<div className="sitters-photos" style={{
  position: "relative",
  borderRadius: 18,
  overflow: "hidden",
  boxShadow: "var(--shadow)",
}}>
  <Image
    src="/ninera-de-espaldas.jpg"
    alt={t.fotoAlt}
    fill
    style={{ objectFit: "cover" }}
    sizes="(max-width: 900px) 100vw, 460px"
    quality={90}
  />
</div>

          {/* Proceso */}
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 28, color: "var(--text)" }}>
              {t.procesoTitulo}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {t.proceso.map((p, i) => (
                <div key={i} className="sitters-paso" style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  background: "var(--white)",
                  borderRadius: 16, padding: "18px",
                  border: "1.5px solid var(--gray)",
                  transition: "box-shadow .2s",
                }}
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
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.titulo}</div>
                    <div style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.6 }}>{p.texto}</div>
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
            {t.elegirTitulo}
          </h4>
          <div className="qualities-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}>
            {t.cualidades.map((q, i) => (
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
                <div style={{ fontWeight: 700, fontSize: 13 }}>{q.titulo}</div>
                <div style={{ fontSize: 11, color: "var(--text-soft)", marginTop: 3 }}>{q.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sitters-paso:hover { box-shadow: var(--shadow); }
        .sitters-section { padding: 96px 0; }
        .sitters-container { padding: 0 24px; }
        /* Foto más chica que la lista y en su proporción real (3:2), sin estirarla */
        .sitters-grid { grid-template-columns: 5fr 7fr; gap: 48px; align-items: center; }
        .sitters-photos { aspect-ratio: 3 / 2; }
        @media (max-width: 900px) {
          .sitters-grid { grid-template-columns: 1fr !important; }
          .sitters-photos { min-height: 0; aspect-ratio: 3 / 2; max-height: 460px; }
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
