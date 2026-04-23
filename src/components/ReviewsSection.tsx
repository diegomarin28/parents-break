"use client";
export default function ReviewsSection() {
  const reviews = [
    {
      text: "Más que una niñera, fue una experiencia hermosa para mis hijos. Volvieron contentísimos y yo pude descansar de verdad.",
      author: "Valentina M.",
      location: "Montevideo",
      service: "Babysitting",
    },
    {
      text: "Los chicos estaban felices. Súper profesionales, puntuales y con mucha energía. Los recomiendo sin dudarlo.",
      author: "Martín & Sofía",
      location: "Punta del Este",
      service: "Evento",
    },
    {
      text: "Nos salvó en momentos clave. Siempre hay una niñera disponible y todo se coordina rapidísimo por WhatsApp.",
      author: "Carolina R.",
      location: "Ciudad de la Costa",
      service: "Babysitting",
    },
    {
      text: "El traslado al cumpleaños fue impecable. Puntual, comunicada con nosotros todo el tiempo y los nenes encantados.",
      author: "Diego F.",
      location: "Carrasco",
      service: "Traslado",
    },
  ];

  const serviceColor: Record<string, string> = {
    "Babysitting": "var(--pink)",
    "Evento": "var(--blue)",
    "Traslado": "var(--yellow-dark)",
  };
  const serviceBg: Record<string, string> = {
    "Babysitting": "var(--pink-light)",
    "Evento": "var(--blue-light)",
    "Traslado": "#fffae8",
  };

  const initials = ["VM", "MS", "CR", "DF"];

  return (
    <section id="resenas" className="reviews-section">
      <div className="reviews-container">

        {/* Header */}
        <div className="reviews-header">
          <span className="reviews-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Familias que confían
          </span>
          <h2 className="reviews-title">Lo que dicen las familias</h2>
          <p className="reviews-subtitle">La experiencia de las familias habla por nosotros.</p>
        </div>

        {/* Cards */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Comillas */}
              <div className="review-quote">&#8220;</div>

              {/* Estrellas */}
              <div className="review-stars">
                {[0,1,2,3,4].map((j) => (
                  <svg key={j} width="15" height="15" viewBox="0 0 24 24" fill="var(--yellow-dark)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px', opacity: 0.8}}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>

              <p className="review-text">
                {r.text.includes("WhatsApp") ? (
                  <>
                    {r.text.replace("WhatsApp", "")}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline', marginLeft: '2px', opacity: 0.7}}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    WhatsApp
                  </>
                ) : (
                  r.text
                )}
              </p>

              <div className="review-footer">
                <div className="review-author">
                  <div
                    className="review-avatar"
                    style={{ background: i % 2 === 0 ? "var(--pink-light)" : "var(--blue-light)" }}
                  >
                    <span style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: i % 2 === 0 ? "var(--pink)" : "var(--blue)",
                    }}>
                      {initials[i]}
                    </span>
                  </div>
                  <div>
                    <div className="review-name">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px', opacity: 0.6}}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      {r.author}
                    </div>
                    <div className="review-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px', opacity: 0.6}}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {r.location}
                    </div>
                  </div>
                </div>
                <span
                  className="review-service-badge"
                  style={{
                    color: serviceColor[r.service],
                    background: serviceBg[r.service],
                  }}
                >
                  {r.service === "Traslado" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                      <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  )}
                  {r.service === "Evento" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l9.9-9.9a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  )}
                  {r.service === "Babysitting" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section {
          padding: 96px 0;
          background: var(--off);
        }
        .reviews-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .reviews-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .reviews-badge {
          display: inline-block;
          background: var(--pink-light);
          color: var(--pink);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 99px;
          margin-bottom: 16px;
        }
        .reviews-title {
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 14px;
        }
        .reviews-subtitle {
          font-size: clamp(15px, 2vw, 17px);
          color: var(--text-soft);
          max-width: 480px;
          margin: 0 auto;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .review-card {
          background: var(--white);
          border-radius: 20px;
          padding: 28px;
          border: 1.5px solid var(--gray);
          transition: transform .2s, box-shadow .2s;
        }
        .review-quote {
          font-family: 'Baloo 2', cursive;
          font-size: 64px;
          font-weight: 800;
          color: var(--gray);
          line-height: .8;
          margin-bottom: 8px;
        }
        .review-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 14px;
        }
        .review-text {
          font-size: 15px;
          color: var(--text);
          line-height: 1.75;
          margin-bottom: 24px;
          font-style: italic;
        }
        .review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .review-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .review-name {
          font-weight: 700;
          font-size: 14px;
          color: var(--text);
        }
        .review-location {
          font-size: 12px;
          color: var(--text-soft);
          margin-top: 2px;
        }
        .review-service-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 99px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .reviews-section { padding: 72px 0; }
          .reviews-header { margin-bottom: 48px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 600px) {
          .reviews-section { padding: 64px 0; }
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .review-card { padding: 22px 18px; }
          .review-quote { font-size: 48px; }
          .review-text { font-size: 14.5px; }
          .review-footer { flex-wrap: nowrap; }
        }
      `}</style>
    </section>
  );
}