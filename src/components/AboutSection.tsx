import Image from "next/image";
import type { Diccionario } from "../dictionaries/tipos";

export default function AboutSection({ t }: { t: Diccionario["quienesSomos"] }) {
  // Íconos y colores de cada valor; los textos salen del diccionario, en el mismo orden.
  const values = [
    {
      color: "var(--pink)",
      bg: "var(--pink-light)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      )
    },
    {
      color: "var(--blue)",
      bg: "var(--blue-light)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--yellow-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="quienes-somos" className="about-section">
      <div className="about-container">

        {/* Header */}
        <div className="about-header">
          <span className="about-badge">{t.etiqueta}</span>
          <h2 className="about-title">
            {t.titulo}
          </h2>
          <p className="about-lead">
            {t.intro}
          </p>
          {/* El resto del texto, desplegable. <details> nativo: sin JavaScript y accesible. */}
          <details className="about-mas">
            <summary>
              <span className="about-mas-abrir">{t.leerMas}</span>
              <span className="about-mas-cerrar">{t.leerMenos}</span>
            </summary>
            <p className="about-lead">
              {t.resto}
            </p>
          </details>
        </div>

        {/* Texto central */}
        <div className="about-body-wrap">
          <div className="about-body-row">
            <div className="about-image-wrap">
              <Image
                src="/Lleno.jpg"
                alt={t.fotoAlt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 780px"
                quality={90}
              />
            </div>
            <div className="about-body-content">
              <h3 className="about-subtitle">
                {t.subtitulo}
              </h3>
              <p className="about-body">
                {t.cuerpo}
              </p>
            </div>
          </div>

        </div>

        {/* Valores */}
        <div className="values-grid">
          {values.map((v, i) => (
            <div
              key={i}
              className="value-card"
              style={{ background: v.bg }}
            >
              <div className="value-icon-wrap" style={{ background: "rgba(255,255,255,.6)" }}>
                {v.icon}
              </div>
              <h4 className="value-title">{t.valores[i].titulo}</h4>
              <p className="value-desc">{t.valores[i].texto}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          padding: 96px 0;
          background: var(--off);
        }
        .about-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .about-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .about-badge {
          display: inline-block;
          background: var(--blue-light);
          color: #5a60a0;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 99px;
          margin-bottom: 16px;
        }
        .about-title {
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--text);
        }
        .about-lead {
          font-size: clamp(15px, 2vw, 17px);
          color: var(--text-soft);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .about-mas { margin-top: 10px; }
        .about-mas > .about-lead { margin-top: 12px; }
        .about-mas summary {
          display: inline-block;
          cursor: pointer;
          list-style: none;
          font-weight: 700;
          font-size: 15px;
          color: #5a60a0;
          padding: 6px 4px;
        }
        .about-mas summary::-webkit-details-marker { display: none; }
        .about-mas-cerrar { display: none; }
        .about-mas[open] .about-mas-abrir { display: none; }
        .about-mas[open] .about-mas-cerrar { display: inline; }

        /* Texto central */
        .about-body-wrap {
          max-width: 860px;
          margin: 0 auto 64px;
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 2px 24px rgba(117,124,187,.08);
          border: 1px solid var(--gray);
        }
        .about-body-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }
        .about-image-wrap {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          /* Foto debajo del texto y entera, en su proporción real (800x438) */
          order: 2;
          aspect-ratio: 800 / 438;
          box-shadow: 0 20px 60px rgba(0,0,0,.08);
        }
        .about-body-content {
          min-width: 0;
        }
        .about-subtitle {
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 800;
          margin-bottom: 20px;
          color: var(--text);
        }
        .about-body {
          font-size: 16px;
          color: var(--text-soft);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        /* Valores */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .value-card {
          border-radius: 20px;
          padding: 32px 28px;
        }
        .value-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .value-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text);
        }
        .value-desc {
          font-size: 14px;
          color: var(--text-soft);
          line-height: 1.7;
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .about-body-row {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .about-section {
            padding: 64px 0;
          }
          .about-header {
            margin-bottom: 36px;
          }
          .about-body-wrap {
            padding: 32px 24px;
            margin-bottom: 40px;
          }
          .value-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
