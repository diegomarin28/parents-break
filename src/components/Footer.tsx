import Image from "next/image";
import { waIrLink } from "../lib/contact";
import type { Diccionario } from "../dictionaries/tipos";

export default function Footer({ t, saludo }: { t: Diccionario["footer"]; saludo?: string }) {
  const WA_URL = waIrLink("footer", saludo);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logoSolo.png" alt="" width={50} height={44} style={{ objectFit: "contain" }} />
              <span className="footer-logo-text">Parents&apos; Break</span>
            </div>
            <p className="footer-desc">
              {t.descripcion}
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="footer-wa-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Servicios */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.serviciosTitulo}</h3>
            <ul className="footer-list">
              {t.servicios.map((item) => (
                <li key={item}>
                  <a href="#servicios" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.zonasTitulo}</h3>
            <ul className="footer-list">
              {["Montevideo", "Canelones", "Punta del Este"].map((item) => (
                <li key={item}>
                  <span className="footer-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.contactoTitulo}</h3>
            <ul className="footer-list">
              <li className="footer-text">{t.contacto}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          {/* Componente de servidor: el año se fija al publicar (cada deploy lo actualiza) */}
          <span>© {new Date().getFullYear()} Parents&apos; Break. {t.derechos}</span>
          <span>{t.hecho}</span>
        </div>
        <p className="footer-aviso">{t.aviso}</p>
      </div>

      <style>{`
        .footer {
          background: #353759;
          color: rgba(255,255,255,.8);
          padding: 56px 0 32px;
        }
        .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .footer-logo-text {
          font-family: var(--font-baloo), cursive;
          font-weight: 800;
          font-size: var(--fs-destacado);
          color: white;
        }
        .footer-desc {
          font-size: var(--fs-texto);
          line-height: 1.7;
          max-width: 260px;
          margin-bottom: 20px;
          color: rgba(255,255,255,.7);
        }
        .footer-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--whatsapp-boton);
          color: white;
          padding: 11px 20px;
          border-radius: 99px;
          font-size: var(--fs-texto);
          font-weight: 700;
          text-decoration: none;
          min-height: 44px;
          transition: background .2s;
        }
        .footer-wa-btn:hover { background: var(--whatsapp-boton-hover); }
        .footer-col-title {
          font-family: var(--font-source), sans-serif;
          line-height: 1.3;
          color: white;
          font-size: var(--fs-chico);
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 18px;
          font-weight: 700;
        }
        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: var(--fs-texto);
          color: rgba(255,255,255,.7);
          text-decoration: none;
          transition: color .15s;
        }
        .footer-link:hover { color: white; }
        .footer-text {
          font-size: var(--fs-texto);
          color: rgba(255,255,255,.7);
        }
        .footer-bottom {
          padding-top: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-size: var(--fs-chico);
          color: rgba(255,255,255,.55); /* contraste 4,7:1 sobre el violeta del footer */
        }

        .footer-aviso {
          margin-top: 10px;
          font-size: var(--fs-chico);
          color: rgba(255,255,255,.55);
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-desc {
            max-width: 100%;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 480px) {
          .footer {
            padding: 48px 0 28px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            margin-bottom: 32px;
            padding-bottom: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </footer>
  );
}
