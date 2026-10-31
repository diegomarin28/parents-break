import { preload } from "react-dom";
import { getImageProps } from "next/image";
import { waIrLink } from "../lib/contact";
import IrAlSimulador from "./IrAlSimulador";
import type { Diccionario } from "../dictionaries/tipos";

// Accesos directos al simulador con el servicio ya elegido
const NECESIDADES = [
  {
    servicio: "Babysitting", color: "var(--pink)", bg: "var(--pink-light)",
    icono: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    relleno: false,
  },
  {
    servicio: "Petsittings", color: "var(--blue)", bg: "var(--blue-light)",
    icono: <><circle cx="4.5" cy="9.5" r="2"/><circle cx="9" cy="5.5" r="2"/><circle cx="15" cy="5.5" r="2"/><circle cx="19.5" cy="9.5" r="2"/><path d="M17.34 14.86c-.83-1.6-1.95-2.86-4.3-3.1-.34-.03-.68-.03-1.02 0-2.35.24-3.47 1.5-4.3 3.1-.83 1.6-2.55 2.3-2.7 4.02-.15 1.65 1.1 2.87 2.66 2.6.98-.17 1.9-.77 3.02-.9.5-.06 1.02-.06 1.52 0 1.12.13 2.04.73 3.02.9 1.56.27 2.81-.95 2.66-2.6-.15-1.72-1.87-2.42-2.7-4.02z"/></>,
    relleno: true,
  },
  {
    servicio: "Evento", color: "var(--yellow-dark)", bg: "#fffae8",
    icono: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    relleno: false,
  },
] as const;

// La foto del Hero está en dos lugares: en celular entre el texto y los botones, y en
// compu en la columna derecha. Antes eran dos <Image priority> y en compu se descargaban
// las dos (la de celular, oculta, en 1920 px). Ahora cada lugar es un <picture> que, en
// el ancho donde ese lugar está oculto, apunta a un GIF vacío de 1 px embebido: cada
// dispositivo descarga una sola foto. La precarga lleva el mismo media.
const PIXEL_VACIO = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const CELULAR = "(max-width: 900px)";
const COMPU = "(min-width: 901px)";

function FotoHero({ alt, className, sizes, media }: { alt: string; className: string; sizes: string; media: string }) {
  const { props } = getImageProps({
    src: "/hero.jpg", alt, width: 1536, height: 1024, className, sizes,
    loading: "eager", fetchPriority: "high",
  });
  // Precarga en el <head> (como hacía <Image priority>), solo en el ancho donde se ve
  preload(props.src, { as: "image", imageSrcSet: props.srcSet, imageSizes: sizes, fetchPriority: "high", media });
  return (
    <picture className="hero-picture">
      <source media={media === CELULAR ? COMPU : CELULAR} srcSet={PIXEL_VACIO} />
      <img {...props} alt={alt} />
    </picture>
  );
}

export default function HeroSection({ t, saludo }: { t: Diccionario["hero"]; saludo?: string }) {
  const WA_URL = waIrLink("hero", saludo);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">

          {/* ── Texto ── */}
          <div className="hero-content">

            {/* Bloque superior: badge + título + subtítulo + ciudades */}
            <div className="hero-top">

              <h1 className="hero-title">
                {t.tituloAntes}{" "}
                <span className="hero-highlight">
                  {t.tituloResaltado}
                  <svg viewBox="0 0 200 12" className="hero-underline" preserveAspectRatio="none">
                    <path d="M2 8 Q50 2 100 8 Q150 14 198 6" stroke="#ffde86" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>{" "}
                {t.tituloDespues}
              </h1>

              <p className="hero-subtitle">
                {t.subtitulo}
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
              <FotoHero alt={t.fotoAlt} className="hero-photo-img-mobile" sizes="100vw" media={CELULAR} />
            </div>

            {/* Bloque inferior: accesos directos y botones */}
            <div className="hero-bottom">
              <div className="hero-pregunta">
                <p className="hero-pregunta-titulo">{t.pregunta}</p>
                <div className="hero-chips">
                  {NECESIDADES.map((n) => (
                    <IrAlSimulador key={n.servicio} servicio={n.servicio} className="hero-chip">
                      <span className="hero-chip-icono" style={{ background: n.bg, color: n.color }} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill={n.relleno ? "currentColor" : "none"} stroke={n.relleno ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{n.icono}</svg>
                      </span>
                      {t.necesidades[n.servicio]}
                    </IrAlSimulador>
                  ))}
                </div>
              </div>
              <div className="hero-ctas">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.botonPrincipal}
                </a>
                <a href="#simulador" className="hero-btn-secondary">
                  {t.botonSecundario}
                </a>
              </div>
              <p className="hero-nota">{t.nota}</p>

            </div>
          </div>

          {/* ── Visual desktop ── */}
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <div className="hero-photo-glow" />
              <FotoHero alt={t.fotoAlt} className="hero-photo-img" sizes="600px" media={COMPU} />
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
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          font-weight: 800;
          margin-bottom: 18px;
          color: var(--text);
          line-height: 1.15;
        }
        .hero-highlight {
          /* Rosa de marca un poco más oscuro: --pink daba 2,1:1 en el peor punto del fondo y el
             texto grande pide 3:1. Este da 3,1:1 o más en todos los anchos (4,1:1 sobre blanco). */
          color: #c45c64;
          position: relative;
          display: inline-block;
        }
        .hero-underline {
          position: absolute;
          bottom: -4px; left: 0;
          width: 100%; height: 8px;
        }
        .hero-subtitle {
          font-size: var(--fs-destacado);
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
          font-size: var(--fs-chico);
          font-weight: 600;
          color: #5a60a0; /* más oscuro que --blue para 5:1 de contraste sobre --blue-light */
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
          font-size: var(--fs-texto);
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
          color: #5a60a0; /* --blue daba 3,9:1 sobre blanco */
          border: 2px solid var(--blue-mid);
          padding: 15px 28px;
          border-radius: 99px;
          font-weight: 700;
          font-size: var(--fs-texto);
          transition: background .18s, border-color .18s;
          text-decoration: none;
          min-height: 52px;
        }
        .hero-btn-secondary:hover {
          background: var(--blue-light);
          border-color: var(--blue);
        }
        /* En compu las preguntas van arriba de los botones; en celular, debajo, para
           que el botón de WhatsApp siga entrando en la primera pantalla. */
        .hero-bottom { display: flex; flex-direction: column; }
        .hero-pregunta { order: 0; margin-bottom: 22px; }
        .hero-ctas, .hero-nota { order: 1; }
        .hero-pregunta-titulo {
          font-weight: 700;
          font-size: var(--fs-chico);
          color: var(--text);
          margin-bottom: 10px;
        }
        .hero-chips { display: flex; gap: 10px; flex-wrap: wrap; }
        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px 8px 9px;
          min-height: 44px;
          border-radius: 99px;
          background: var(--white);
          border: 1.5px solid var(--gray);
          font-weight: 700;
          font-size: var(--fs-texto);
          color: var(--text);
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(117,124,187,.08);
          transition: border-color .15s, transform .15s, box-shadow .15s;
        }
        .hero-chip:hover {
          border-color: var(--blue-mid);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(117,124,187,.14);
        }
        .hero-chip-icono {
          width: 28px; height: 28px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-nota {
          margin-top: 12px;
          font-size: var(--fs-chico);
          color: var(--text-soft);
        }
        /* El <picture> no genera caja: el diseño sigue siendo el del <img> */
        .hero-picture { display: contents; }

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
          height: auto;
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
          height: auto;
          aspect-ratio: 2 / 1;
          object-fit: cover;
          object-position: center 40%;
          border-radius: 18px;
          display: block;
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
            margin: 0 0 20px;
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
          .hero-pregunta { order: 2; margin: 24px 0 0; }
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
          }
          .hero-subtitle { font-size: var(--fs-texto); }
          .hero-cities {
            margin-bottom: 20px;
          }
        }

        /* ── CELULARES CHICOS (iPhone SE y similares) ──
           Compacta la foto y los espacios para que el botón principal
           entre completo en la primera pantalla. */
        @media (max-width: 380px) {
          .hero-subtitle {
            margin-bottom: 20px;
          }
          .hero-cities {
            margin-bottom: 16px;
          }
          .hero-visual-mobile {
            margin-bottom: 16px;
          }
          .hero-photo-img-mobile {
            aspect-ratio: 5 / 2;
          }
        }
      `}</style>
    </section>
  );
}
