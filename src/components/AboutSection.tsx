"use client";

export default function AboutSection() {
  const values = [
    {
      title: "Selección rigurosa",
      desc: "Cada niñera pasa por entrevista personal, validación de referencias y evaluación de perfil antes de ser parte del equipo.",
      color: "var(--pink)",
      bg: "var(--pink-light)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      )
    },
    {
      title: "Trato cercano",
      desc: "No somos una app. Somos personas coordinando con personas. Cada servicio tiene seguimiento real y atención personalizada.",
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
      title: "Confianza ante todo",
      desc: "Trabajamos solo con niñeras que nosotros mismos recomendaríamos para nuestros propios hijos. Ese es nuestro estándar.",
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
          <span className="about-badge">Quiénes somos</span>
          <h2 className="about-title">
            Un servicio construido sobre confianza
          </h2>
          <p className="about-lead">
            Parents&apos; Break nació de una necesidad real: que los padres puedan tomarse un respiro
            sabiendo que sus hijos están en las mejores manos. Operamos en Montevideo y Punta del Este
            conectando familias con niñeras cuidadosamente seleccionadas.
          </p>
        </div>

        {/* Texto central */}
        <div className="about-body-wrap">
          <h3 className="about-subtitle">
            No somos una plataforma. Somos un equipo.
          </h3>
          <p className="about-body">
            A diferencia de las apps automáticas, en Parents&apos; Break cada solicitud pasa por
            personas reales. Revisamos tu pedido, buscamos la niñera ideal en nuestra base y
            coordinamos todo el proceso de principio a fin.
          </p>
          <p className="about-body">
            Llevamos más de 3 años operando en Uruguay, con más de 70 niñeras activas y cientos
            de familias que vuelven a elegirnos cada vez que necesitan un break.
          </p>

        
        </div>

        {/* Valores */}
        <div className="values-grid">
          {values.map((v, i) => (
            <div
              key={i}
              className="value-card"
              style={{ background: v.bg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="value-icon-wrap" style={{ background: "rgba(255,255,255,.6)" }}>
                {v.icon}
              </div>
              <h4 className="value-title">{v.title}</h4>
              <p className="value-desc">{v.desc}</p>
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
          color: var(--blue);
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

        /* Texto central */
        .about-body-wrap {
          max-width: 720px;
          margin: 0 auto 64px;
          background: var(--white);
          border-radius: 24px;
          padding: 48px 52px;
          box-shadow: 0 2px 24px rgba(117,124,187,.08);
          border: 1px solid var(--gray);
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
        .about-stats {
          display: flex;
          gap: 0;
          margin-top: 36px;
          border-top: 1px solid var(--gray);
          padding-top: 32px;
        }
        .about-stat {
          flex: 1;
          text-align: center;
          border-right: 1px solid var(--gray);
          padding: 0 16px;
        }
        .about-stat:last-child {
          border-right: none;
        }
        .about-stat-num {
          font-family: 'Baloo 2', cursive;
          font-size: 36px;
          font-weight: 800;
          color: var(--blue);
          line-height: 1;
        }
        .about-stat-label {
          font-size: 13px;
          color: var(--text-soft);
          margin-top: 6px;
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
          transition: transform .2s, box-shadow .2s;
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
          .about-stats {
            flex-direction: column;
            gap: 24px;
            border-top: 1px solid var(--gray);
            padding-top: 24px;
          }
          .about-stat {
            border-right: none;
            border-bottom: 1px solid var(--gray);
            padding: 0 0 24px;
            text-align: left;
          }
          .about-stat:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .about-stat-num {
            font-size: 30px;
          }
          .value-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}