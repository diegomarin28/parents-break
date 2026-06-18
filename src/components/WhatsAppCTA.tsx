"use client";
export default function WhatsAppCTA() {
  const WA_URL = "https://wa.me/59896127376";

  return (
    <section className="cta-section" style={{
      padding: "96px 24px",
      background: `
        radial-gradient(ellipse 80% 80% at 50% 50%, #fdeef1 0%, transparent 70%),
        var(--off)
      `,
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        <h2 style={{
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 800,
          marginBottom: 16,
          color: "var(--text)",
        }}>
          Estamos para ayudarte
        </h2>

        <p style={{
          fontSize: 18,
          color: "var(--text-soft)",
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto 36px",
        }}>
          Escribinos por WhatsApp y contanos qué necesitás. Juntas encontraremos la babysitter que mejor se adapte a tu familia.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "var(--whatsapp)", color: "white",
              padding: "18px 36px", borderRadius: 99,
              fontWeight: 800, fontSize: 18,
              boxShadow: "0 6px 28px rgba(37,211,102,.4)",
              transition: "transform .18s, box-shadow .18s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 36px rgba(37,211,102,.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,.4)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbenos por WhatsApp ahora
          </a>

          <a
            href="#simulador"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "transparent", color: "var(--blue)",
              border: "2px solid var(--blue-mid)",
              padding: "18px 32px", borderRadius: 99,
              fontWeight: 700, fontSize: 17,
              transition: "background .15s, border-color .15s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--blue-light)";
              e.currentTarget.style.borderColor = "var(--blue)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--blue-mid)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Usar el simulador
          </a>
        </div>

        <div style={{
          marginTop: 40, display: "flex", justifyContent: "center",
          gap: 32, flexWrap: "wrap",
        }}>
          {[
            {
              text: "Respuesta rápida",
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
            },
            {
              text: "Atención personalizada",
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
            },
            {
              text: "Sin costos ocultos",
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="4" y1="4" x2="20" y2="20"/></svg>,
            },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-soft)" }}>
              <span style={{ display: "flex", alignItems: "center" }}>{item.icon}</span>
              <span style={{ fontWeight: 600 }}>{item.text}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 72px 20px; }
        }
        @media (max-width: 600px) {
          .cta-section { padding: 64px 16px; }
        }
      `}</style>
    </section>
  );
}