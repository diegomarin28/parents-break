"use client";
export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Nos escribís",
      desc: "Contactanos por WhatsApp o usá el simulador. Nos contás qué necesitás: fecha, horario, cantidad de niños y zona.",
      color: "var(--pink)",
      bg: "var(--pink-light)",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      num: "2",
      title: "Hacemos el matching",
      desc: "Buscamos en nuestra base la niñera ideal según tu solicitud. Te enviamos perfiles seleccionados para que elijas.",
      color: "var(--blue)",
      bg: "var(--blue-light)",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      ),
    },
    {
      num: "3",
      title: "Confirmás el servicio",
      desc: "Elegís la niñera que más te convence. Coordinamos todo el detalle y te comunicamos el precio final.",
      color: "var(--yellow-dark)",
      bg: "#fffae8",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
    {
      num: "4",
      title: "Disfrutás tu break",
      desc: "La niñera llega, cuida a tus hijos con profesionalismo y vos podés descansar o disfrutar con tranquilidad.",
      color: "var(--pink)",
      bg: "var(--pink-light)",
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
          <span className="hiw-badge">Sin complicaciones</span>
          <h2 className="hiw-title">Cómo funciona</h2>
          <p className="hiw-subtitle">
            En pocos minutos coordinás todo por WhatsApp. Sin apps, sin logins, sin vueltas.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid">
          <div className="connector-line" />
          {steps.map((s, i) => (
            <div
              key={i}
              className="step-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--gray)";
              }}
            >
              <div className="step-num" style={{ background: s.color }}>
                {s.num}
              </div>
              <div className="step-icon" style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

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
          color: var(--blue);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 99px;
          margin-bottom: 16px;
        }
        .hiw-title {
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 14px;
        }
        .hiw-subtitle {
          font-size: clamp(15px, 2vw, 17px);
          color: var(--text-soft);
          max-width: 500px;
          margin: 0 auto;
        }

        /* Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .connector-line {
          position: absolute;
            top: 26px; /* mitad del step-num de 52px */
  left: calc(12.5%);
  right: calc(12.5%);
          height: 2px;
          background: linear-gradient(90deg, var(--pink-mid), var(--blue-mid), var(--pink-mid));
          z-index: 0;
          pointer-events: none;
        }

        /* Card */
        .step-card {
          background: var(--white);
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 1.5px solid var(--gray);
          position: relative;
          z-index: 1;
          transition: transform .2s, box-shadow .2s, border-color .2s;
          cursor: default;
        }
        .step-num {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          color: white;
          font-family: 'Baloo 2', cursive;
          font-size: 22px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .step-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .step-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text);
        }
        .step-desc {
          font-size: 13.5px;
          color: var(--text-soft);
          line-height: 1.65;
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .hiw-section { padding: 72px 0; }
          .hiw-header { margin-bottom: 48px; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .connector-line { display: none; }
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
            font-size: 18px;
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