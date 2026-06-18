"use client";

export default function HeroSection() {
  const WA_URL = "https://wa.me/59896127376";

  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob-1" />

      <div className="hero-container">
        <div className="hero-grid">

          {/* ── Texto ── */}
          <div className="hero-content">

            {/* Bloque superior: badge + título + subtítulo + ciudades */}
            <div className="hero-top">

              <h1 className="hero-title">
                Tus hijos en las{" "}
                <span className="hero-highlight">
                  mejores
                  <svg viewBox="0 0 200 12" className="hero-underline" preserveAspectRatio="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 6" stroke="#ffde86" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>{" "}
                manos
              </h1>

              <p className="hero-subtitle">
                Conectamos familias con niñeras especializadas para brindar un cuidado seguro, cálido y
personalizado.
              </p>

              <div className="hero-cities">
                {["Montevideo", "Canelones", "Punta del Este"].map((city) => (
                  <span key={city} className="hero-city-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Foto — solo visible en mobile, insertada en el medio */}
            <div className="hero-visual-mobile">
              <img
                src="/hero.jpg"
                alt="Niñera cuidando niños felices"
                className="hero-photo-img-mobile"
              />
            </div>

            {/* Bloque inferior: botones + social proof */}
            <div className="hero-bottom">
              <div className="hero-ctas">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Coordinar servicio
                </a>
                <a href="#como-funciona" className="hero-btn-secondary">
                  Cómo funciona →
                </a>
              </div>

              <div className="hero-proof">
                <div className="hero-avatars">
                  {[
                    { bg: "var(--pink-light)", stroke: "var(--pink)" },
                    { bg: "var(--blue-light)", stroke: "var(--blue)" },
                    { bg: "#fffae8",           stroke: "var(--yellow-dark)" },
                  ].map((av, i) => (
                    <div key={i} className={`hero-avatar hero-avatar-${i}`} style={{ background: av.bg }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={av.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="hero-proof-stat">
                  <div className="hero-proof-num">+80 niñeras activas</div>
                  <div className="hero-proof-label">
                    Seleccionadas y validadas<br />
                    por nuestro equipo<br />
                    de psicólogas
                  </div>
                </div>
                <div className="hero-proof-divider" />
                <div className="hero-proof-stat">
                  <div className="hero-proof-num">+3 años de experiencia</div>
                  <div className="hero-proof-label">Acompañando a familias<br />
                   en Uruguay</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Visual desktop ── */}
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <div className="hero-photo-glow" />
              <img
                src="/hero.jpg"
                alt="Niñera cuidando niños felices"
                className="hero-photo-img"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 88px;
          padding-bottom: 72px;
          background:
            radial-gradient(ellipse 70% 60% at 80% 30%, #fdeef1 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 10% 80%, #eeedf8 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 100%, #fffae8 0%, transparent 50%);
          overflow: hidden;
          position: relative;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
        }
        .hero-blob-1 {
          top: 80px; right: 8%;
          width: 320px; height: 320px;
          background: radial-gradient(circle, #fdeef1 0%, transparent 70%);
        }
        .hero-blob-2 {
          bottom: 40px; left: 5%;
          width: 240px; height: 240px;
          background: radial-gradient(circle, #eeedf8 0%, transparent 70%);
        }
        .hero-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-avail-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--white);
          border: 1.5px solid var(--pink-mid);
          border-radius: 99px;
          padding: 6px 14px 6px 8px;
          margin-bottom: 24px;
        }
        .hero-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--whatsapp);
          display: inline-block;
          animation: pulseDot 2s infinite;
          flex-shrink: 0;
        }
        .hero-avail-badge span:last-child {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-soft);
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          font-weight: 800;
          margin-bottom: 18px;
          color: var(--text);
          line-height: 1.15;
        }
        .hero-highlight {
          color: var(--pink);
          position: relative;
          display: inline-block;
        }
        .hero-underline {
          position: absolute;
          bottom: -4px; left: 0;
          width: 100%; height: 8px;
        }
        .hero-subtitle {
          font-size: clamp(15px, 2vw, 18px);
          line-height: 1.7;
          color: var(--text-soft);
          max-width: 480px;
          margin-bottom: 28px;
        }
        .hero-cities {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .hero-city-badge {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          color: var(--blue);
          background: var(--blue-light);
          padding: 4px 12px;
          border-radius: 99px;
        }
        .hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--yellow);
          color: var(--text);
          padding: 15px 28px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 4px 20px rgba(255,222,134,.55);
          transition: transform .18s, box-shadow .18s;
          text-decoration: none;
          min-height: 52px;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(255,222,134,.7);
        }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--blue);
          border: 2px solid var(--blue-mid);
          padding: 15px 28px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 16px;
          transition: background .18s, border-color .18s;
          text-decoration: none;
          min-height: 52px;
        }
        .hero-btn-secondary:hover {
          background: var(--blue-light);
          border-color: var(--blue);
        }
        .hero-proof {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-top: 36px;
          padding: 14px 20px;
          background: var(--white);
          border: 1.5px solid var(--gray);
          border-radius: 16px;
          box-shadow: var(--shadow);
          flex-wrap: wrap;
        }
        .hero-proof-stat {
          flex: 1 1 220px;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-height: 56px;
          min-width: 0;
        }
        .hero-avatars { display: flex; }
        .hero-avatar {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hero-avatar-0 { margin-left: 0; }
        .hero-avatar-1 { margin-left: -10px; }
        .hero-avatar-2 { margin-left: -10px; }
        .hero-proof-num {
          font-weight: 700;
          font-size: 14px;
          color: var(--text);
          white-space: nowrap;
        }
        .hero-proof-label {
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-soft);
          min-width: 0;
        }
        .hero-proof-divider {
          width: 1px; height: auto;
          background: var(--gray);
          align-self: stretch;
          flex-shrink: 0;
        }

        /* ── Visual desktop ── */
        .hero-visual { position: relative; }
        .hero-photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero-photo-glow {
          position: absolute;
          inset: -10%;
          background: radial-gradient(ellipse at center, #fdeef1 0%, #eeedf8 40%, #fffae8 70%, transparent 100%);
          border-radius: 50%;
          filter: blur(32px);
          transform: scale(1.1);
          z-index: 0;
        }
        .hero-photo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 600px;
          border-radius: 24px;
          animation: heroFloat 4s ease-in-out infinite;
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        /* Foto mobile — oculta en desktop */
        .hero-visual-mobile { display: none; }
        .hero-photo-img-mobile {
          width: 100%;
          border-radius: 18px;
          display: block;
        }

        @media (min-width: 901px) {
          .hero-proof {
            flex-wrap: nowrap;
          }
          .hero-proof-stat {
            flex: 1 1 40%;
          }
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .hero-visual { display: none; }
          .hero-visual-mobile {
            display: block;
            margin: 0 0 28px;
          }
          .hero-cities {
            margin-bottom: 0;
          }
          .hero-top {
            margin-bottom: 0;
          }
          .hero-bottom {
            margin-top: 0;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .hero-section {
            padding-top: 80px;
            padding-bottom: 56px;
          }
          .hero-title {
            font-size: clamp(30px, 8vw, 38px);
          }
          .hero-ctas {
            flex-direction: column;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            font-size: 15px;
          }
          .hero-proof {
            width: 100%;
            margin-top: 28px;
            gap: 10px;
          }
          .hero-proof-divider { display: none; }
          .hero-blob-1, .hero-blob-2 { display: none; }
          .hero-cities {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}