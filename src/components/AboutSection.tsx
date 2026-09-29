"use client";

import Image from "next/image";

export default function AboutSection() {
  const values = [
    {
      title: "Selección rigurosa",
      desc: "Cada niñera atraviesa un riguroso proceso de selección acompañado por psicólogas y profesionales especializadas en infancia, para así seleccionar a las babysitters más preparadas para acompañar a cada familia. Evaluamos experiencia previa, realizamos entrevistas personales y validamos referencias.",
      color: "var(--pink)",
      bg: "var(--pink-light)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      )
    },
    {
      title: "Atención personalizada",
      desc: "Acompañamos cada servicio de principio a fin. Queremos que las familias se sientan seguras, cómodas y realmente acompañadas.",
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
      desc: "Trabajamos solo con niñeras que nosotras mismas recomendaríamos a nuestras familias. Ese es nuestro estándar.",
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
            Un servicio construido desde la confianza
          </h2>
          <p className="about-lead">
Somos Paulina y Delfina, babysitters con más de seis años de experiencia en el cuidado infantil. Después de acompañar a numerosas familias, entendimos lo importante que es poder contar con alguien realmente confiable para el cuidado de los niños. Así nació Parents’ Break. 
Desde hace más de tres años ayudamos a familias a encontrar babysitters capacitadas, responsables y de confianza, para que puedan disfrutar de su tiempo con la tranquilidad de saber que sus hijos están en las mejores manos. Hoy contamos con una red de más de 80 sitters seleccionadas cuidadosamente por nuestro equipo, brindando servicios en Montevideo, Canelones y Punta del Este.
Nuestro compromiso es ofrecer mucho más que una niñera: es ofrecer confianza, seguridad y tranquilidad para cada familia.
          </p>
        </div>

        {/* Texto central */}
        <div className="about-body-wrap">
          <div className="about-body-row">
            <div className="about-image-wrap">
              <Image
                src="/FotoAboutSection.jpeg"
                alt="Equipo de Parents’ Break"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 340px"
              />
            </div>
            <div className="about-body-content">
              <h3 className="about-subtitle">
                No somos una app. Somos personas.
              </h3>
              <p className="about-body">
            Detrás de cada servicio hay un equipo real acompañando el proceso. Escuchamos las
necesidades de cada familia, buscamos la niñera más adecuada y coordinamos cada detalle de
forma personalizada para que la experiencia sea simple, cercana y confiable.
Nuestro proceso de selección es acompañado por psicólogas y profesionales especializadas en
infancia, priorizando no solo la experiencia, sino también la responsabilidad, la calidez y la
calidad humana de cada perfil. Todas las niñeras de Parents’ Break cuentan con experiencia
previa en cuidado infantil y atraviesan entrevistas, validación de referencias y evaluaciones
antes de incorporarse al equipo.

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
          max-width: 1040px;
          margin: 0 auto 64px;
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 2px 24px rgba(117,124,187,.08);
          border: 1px solid var(--gray);
        }
        .about-body-row {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: center;
        }
        .about-image-wrap {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          min-height: 360px;
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
          .about-body-row {
            grid-template-columns: 1fr;
          }
          .about-image-wrap {
            min-height: 280px;
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
