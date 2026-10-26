"use client";
import { useEffect, useState } from "react";
import { waIrLink } from "../lib/contact";

// Botón de WhatsApp siempre visible.
// - Compu: píldora con texto abajo a la derecha. Mientras el simulador o el Footer
//   están en pantalla se achica a círculo, para no pisar el botón "Enviar" ni el
//   copyright.
// - Celular: círculo abajo a la derecha. Mientras el Hero, el simulador o el Footer
//   están en pantalla (todos tienen botones propios a todo el ancho) vive en la
//   Navbar, al lado del menú, así nunca tapa nada.
export default function WhatsAppFloat() {
  // La página abre en el Hero, así que arranca "en el Hero" también en el HTML del servidor.
  const [enHero, setEnHero] = useState(true);
  const [enTapa, setEnTapa] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    const tapas = [document.getElementById("simulador"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null
    );
    const visibles = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibles.add(entry.target);
          else visibles.delete(entry.target);
        });
        setEnHero(hero !== null && visibles.has(hero));
        setEnTapa(tapas.some((el) => visibles.has(el)));
      },
      { threshold: 0.15 }
    );
    if (hero) observer.observe(hero);
    tapas.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={waIrLink("flotante")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`wa-float ${enHero ? "wa-float-hero" : ""} ${enTapa ? "wa-float-tapa" : ""}`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="wa-float-texto">Escribinos por WhatsApp</span>

      <style>{`
        .wa-float {
          position: fixed;
          z-index: 110; /* por encima de la Navbar (100) */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--whatsapp);
          color: white;
          font-weight: 700;
          font-size: 15px;
          white-space: nowrap;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(37,211,102,.45);
          transition: width .2s, padding .2s, transform .2s, box-shadow .2s;
        }
        .wa-float svg { flex-shrink: 0; }
        /* Pulso único a los 4 segundos, como llamado de atención. Con movimiento
           reducido queda anulado por la regla global de globals.css. */
        .wa-float::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          animation: waPulso 1.1s ease-out 4s 1;
        }
        @keyframes waPulso {
          from { box-shadow: 0 0 0 0 rgba(37,211,102,.55); }
          to   { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
        }

        /* ── Compu ── */
        @media (min-width: 601px) {
          .wa-float {
            right: 28px;
            bottom: 28px;
            height: 56px;
            padding: 0 22px 0 16px;
            border-radius: 99px;
          }
          .wa-float:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(37,211,102,.5);
          }
          .wa-float-tapa {
            width: 56px;
            padding: 0;
          }
          .wa-float-tapa .wa-float-texto { display: none; }
        }

        /* ── Celular ── */
        @media (max-width: 600px) {
          .wa-float {
            right: 16px;
            bottom: calc(16px + env(safe-area-inset-bottom));
            width: 54px;
            height: 54px;
            border-radius: 50%;
            animation: waEntrarAbajo .18s ease-out;
          }
          .wa-float-texto { display: none; }
          .wa-float-hero,
          .wa-float-tapa {
            top: 11px;
            right: 74px; /* a la izquierda del botón del menú */
            bottom: auto;
            width: 42px;
            height: 42px;
            box-shadow: 0 3px 12px rgba(37,211,102,.4);
            animation: waEntrarArriba .18s ease-out;
          }
          .wa-float-hero svg,
          .wa-float-tapa svg { width: 22px; height: 22px; }
          /* Dos nombres para que la entrada se repita al cambiar de lugar */
          @keyframes waEntrarAbajo { from { opacity: 0; transform: scale(.8); } to { opacity: 1; transform: none; } }
          @keyframes waEntrarArriba { from { opacity: 0; transform: scale(.8); } to { opacity: 1; transform: none; } }
        }
      `}</style>
    </a>
  );
}
