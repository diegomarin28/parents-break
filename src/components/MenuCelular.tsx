"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { waIrLink } from "../lib/contact";

type Enlace = { label: string; href: string };

type Props = {
  abierto: boolean;
  onCerrar: () => void;
  links: Enlace[];
  activo: string;
  onNavegar: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
};

// Ícono y color de cada sección, en el orden de la página.
const ICONOS: Record<string, { color: string; bg: string; dibujo: React.ReactNode }> = {
  "#quienes-somos": {
    color: "var(--pink)", bg: "var(--pink-light)",
    dibujo: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  },
  "#servicios": {
    color: "var(--blue)", bg: "var(--blue-light)",
    dibujo: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  },
  "#como-funciona": {
    color: "var(--yellow-dark)", bg: "#fffae8",
    dibujo: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  },
  "#nineras": {
    color: "var(--pink)", bg: "var(--pink-light)",
    dibujo: <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/>,
  },
  "#simulador": {
    color: "var(--blue)", bg: "var(--blue-light)",
    dibujo: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/></>,
  },
};

// Menú de celular como hoja que sube desde abajo (cerca del pulgar). Se dibuja en
// <body> con un portal: la Navbar tiene backdrop-filter y eso convierte a sus hijos
// fijos en relativos a ella.
export default function MenuCelular({ abierto, onCerrar, links, activo, onNavegar }: Props) {
  const hoja = useRef<HTMLDivElement>(null);

  // Bloquea el scroll de fondo, pone el foco en la hoja y lo mantiene adentro;
  // Escape cierra.
  useEffect(() => {
    if (!abierto) return;
    const scrollAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(hoja.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onCerrar(); return; }
      if (e.key !== "Tab") return;
      const f = focusables();
      if (f.length === 0) return;
      const primero = f[0], ultimo = f[f.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = scrollAnterior;
      document.removeEventListener("keydown", onKey);
    };
  }, [abierto, onCerrar]);

  // Solo existe en el cliente y después de un toque, así que nunca hay desajuste con el HTML del servidor.
  if (!abierto || typeof document === "undefined") return null;

  return createPortal(
    <div className="menu-cel">
      <div className="menu-cel-fondo" onClick={onCerrar} aria-hidden="true" />
      <div ref={hoja} className="menu-cel-hoja" role="dialog" aria-modal="true" aria-label="Menú" id="menu-celular">
        <div className="menu-cel-asa" aria-hidden="true" />
        <div className="menu-cel-cabecera">
          <span className="menu-cel-titulo">Menú</span>
          <button type="button" className="menu-cel-cerrar" onClick={onCerrar} aria-label="Cerrar menú">×</button>
        </div>
        <nav>
          {links.map((l) => {
            const id = l.href.replace("#", "");
            const icono = ICONOS[l.href];
            return (
              <a
                key={l.href}
                href={l.href}
                className={`menu-cel-link ${activo === id ? "menu-cel-link-activo" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  onCerrar();
                  // Navega recién cuando el menú ya se cerró y el scroll de fondo volvió a
                  // estar habilitado; si no, el desplazamiento quedaba corto.
                  requestAnimationFrame(() => requestAnimationFrame(() => onNavegar(e, id)));
                }}
              >
                {icono && (
                  <span className="menu-cel-icono" style={{ background: icono.bg, color: icono.color }} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icono.dibujo}</svg>
                  </span>
                )}
                <span className="menu-cel-label">{l.label}</span>
                <span className="menu-cel-flecha" aria-hidden="true">›</span>
              </a>
            );
          })}
        </nav>
        <a href={waIrLink("menu")} target="_blank" rel="noopener noreferrer" className="menu-cel-wa">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escribinos por WhatsApp
        </a>
      </div>

      <style>{`
        .menu-cel-fondo {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(30,30,46,.38);
          animation: menuFondo .2s ease-out;
        }
        .menu-cel-hoja {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 201;
          background: var(--white);
          border-radius: 26px 26px 0 0;
          padding: 10px 20px calc(18px + env(safe-area-inset-bottom));
          box-shadow: 0 -12px 40px rgba(0,0,0,.18);
          animation: menuSubir .22s ease-out;
        }
        @keyframes menuFondo { from { opacity: 0; } to { opacity: 1; } }
        @keyframes menuSubir { from { transform: translateY(24px); opacity: 0; } to { transform: none; opacity: 1; } }
        .menu-cel-asa {
          width: 40px; height: 4px; border-radius: 99px;
          background: var(--gray); margin: 0 auto 14px;
        }
        .menu-cel-cabecera {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 6px;
        }
        .menu-cel-titulo {
          font-family: var(--font-baloo), cursive;
          font-weight: 800; font-size: 20px; color: var(--text);
        }
        .menu-cel-cerrar {
          width: 36px; height: 36px; border-radius: 12px;
          background: var(--off); border: 1px solid #e8e8e0;
          font-size: 20px; line-height: 1; color: var(--text);
        }
        .menu-cel-link {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 4px;
          border-bottom: 1px solid #f0f0ea;
          color: var(--text); text-decoration: none;
        }
        .menu-cel-link-activo .menu-cel-label { color: var(--blue); }
        .menu-cel-icono {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .menu-cel-label { flex: 1; font-weight: 700; font-size: 16px; }
        .menu-cel-flecha { color: var(--gray-dark); font-size: 18px; }
        .menu-cel-wa {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          margin-top: 16px; padding: 15px; border-radius: 99px;
          background: var(--whatsapp); color: white;
          font-weight: 800; font-size: 16px; text-decoration: none;
          box-shadow: 0 6px 24px rgba(37,211,102,.35);
        }
        /* Si por algún motivo se abre en una pantalla grande, que no ocupe todo el ancho */
        @media (min-width: 601px) {
          .menu-cel-hoja { max-width: 420px; left: auto; right: 16px; bottom: 16px; border-radius: 26px; }
        }
      `}</style>
    </div>,
    document.body
  );
}
