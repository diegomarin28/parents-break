import type { Diccionario } from "../dictionaries/tipos";

export default function HowItWorks({ t }: { t: Diccionario["comoFunciona"] }) {
  // Número, color e ícono de cada paso; los textos salen de t.pasos, en el mismo orden.
  // "oscuro" es el fondo del número: con blanco encima llega a 4,5:1 (los colores de marca no).
  const steps = [
    {
      num: "1",
      color: "var(--pink)",
      bg: "var(--pink-light)",
      oscuro: "#b5464c",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      num: "2",
      color: "var(--blue)",
      bg: "var(--blue-light)",
      oscuro: "#5a60a0",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      ),
    },

        {
      num: "3",
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      oscuro: "#8a6d0f",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="6" width="14" height="12" rx="2" />
          <path d="M21 8l-4 4 4 4" />
        </svg>
      ),
    },

    {
      num: "4",
      color: "var(--blue)",
      bg: "var(--blue-light)",
      oscuro: "#5a60a0",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
    {
      num: "5",
      color: "var(--pink)",
      bg: "var(--pink-light)",
      oscuro: "#b5464c",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="hiw-section">
      <div className="hiw-container">

        {/* Header */}
        <div className="hiw-header">
          <span className="hiw-badge">{t.etiqueta}</span>
          <h2 className="hiw-title">{t.titulo}</h2>
          <p className="hiw-subtitle">
            {t.subtitulo}
          </p>
        </div>

        {/* Steps */}
        {/* Lista ordenada: el lector de pantalla dice "1 de 5"; el número dibujado queda oculto para no repetirlo */}
        <ol className="steps-grid">
          {steps.map((s, i) => (
            <li key={i} className="step-card">
              <div className="step-num" style={{ background: s.oscuro }} aria-hidden="true">
                {s.num}
              </div>
              <div className="step-icon" style={{ background: s.bg, color: s.color }} aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="step-title">{t.pasos[i].titulo}</h3>
              <p className="step-desc">{t.pasos[i].texto}</p>
            </li>
          ))}
        </ol>

      </div>

      <style>{`
        .hiw-section {
          padding: 96px 0;
          background: var(--off);
        }
        .hiw-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hiw-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .hiw-badge {
          display: inline-block;
          background: var(--blue-light);
          color: #5a60a0;
          font-weight: 700;
          font-size: var(--fs-chico);
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 99px;
          margin-bottom: 16px;
        }
        .hiw-title {
          font-size: var(--fs-seccion);
          font-weight: 800;
          margin-bottom: 14px;
        }
        .hiw-subtitle {
          font-size: var(--fs-destacado);
          color: var(--text-soft);
          max-width: 500px;
          margin: 0 auto;
        }

        /* Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 22px;
          position: relative;
          list-style: none;
        }
        /* Línea que une los pasos (en un <ol> solo puede haber <li>, por eso va como ::before) */
        .steps-grid::before {
          content: "";
          position: absolute;
          top: 26px; /* mitad del step-num de 52px */
          left: calc(8%);
          right: calc(8%);
          height: 2px;
          background: linear-gradient(90deg, var(--pink-mid), var(--blue-mid), var(--pink-mid));
          z-index: 0;
          pointer-events: none;
        }

        /* Card */
        .step-card {
          background: var(--white);
          border-radius: 20px;
          padding: 22px 20px;
          text-align: center;
          border: 1.5px solid var(--gray);
          position: relative;
          z-index: 1;
        }
        .step-num {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          font-family: var(--font-baloo), cursive;
          font-size: var(--fs-destacado);
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }
        .step-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .step-title {
          font-family: var(--font-source), sans-serif;
          line-height: 1.3;
          font-size: var(--fs-destacado);
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text);
        }
        .step-desc {
          font-size: var(--fs-texto);
          color: var(--text-soft);
          line-height: 1.6;
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .hiw-section { padding: 72px 0; }
          .hiw-header { margin-bottom: 48px; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .steps-grid::before { display: none; }
        }

        /* ── MOBILE ── */
        @media (max-width: 480px) {
          .hiw-section { padding: 64px 0; }
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .step-card {
            padding: 24px 20px;
            text-align: left;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto;
            column-gap: 16px;
            row-gap: 8px;
            align-items: start;
          }
          .step-num {
            width: 40px;
            height: 40px;
            margin: 0;
            grid-row: 1;
            grid-column: 1;
          }
          .step-icon { display: none; }
          .step-title {
            grid-row: 1;
            grid-column: 2;
            text-align: left;
            margin-bottom: 0;
            align-self: center;
          }
          .step-desc {
            grid-row: 2;
            grid-column: 2;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}