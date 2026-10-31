"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { waIrLink } from "../lib/contact";
import { irASeccion } from "../lib/scroll";
import MenuCelular from "./MenuCelular";
import SelectorIdioma from "./SelectorIdioma";
import type { Idioma } from "../lib/idiomas";
import type { Diccionario } from "../dictionaries/tipos";

export default function Navbar({ t, lang, saludo }: { t: Diccionario["navbar"]; lang: Idioma; saludo?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // Al cerrar el menú, el foco vuelve al botón que lo abrió (teclado y lector de pantalla).
  const cerrarMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

useEffect(() => {
  const ids = ["quienes-somos", "servicios", "como-funciona", "nineras", "simulador"];

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setActive("");
      return;
    }

    const pageBottom = document.documentElement.scrollHeight - window.innerHeight - 10;
    if (window.scrollY >= pageBottom) {
      setActive(ids[ids.length - 1]);
      return;
    }

    // Buscar qué sección ocupa más espacio en la pantalla visible
    let maxVisible = 0;
    let current = "";

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 64); // 64 = altura navbar
      const visibleBottom = Math.min(rect.bottom, window.innerHeight);
      const visible = Math.max(0, visibleBottom - visibleTop);
      if (visible > maxVisible) {
        maxVisible = visible;
        current = id;
      }
    }

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    irASeccion(el);
  };

  const links = [
    { label: t.links.quienesSomos, href: "#quienes-somos" },
    { label: t.links.servicios,    href: "#servicios" },
    { label: t.links.comoFunciona, href: "#como-funciona" },
    { label: t.links.nineras,      href: "#nineras" },
    { label: t.links.simulador,    href: "#simulador" },
  ];

  const WA_URL = waIrLink("navbar", saludo);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-inner">

          {/* Logo */}
            <a href="#" className="nav-logo">
<Image
  src="/logo.png"
  alt="Parents' Break"
  width={120}
  height={50}
  style={{ objectFit: "contain" }}
/>
      
            </a>

          {/* Links */}
          <div className="nav-links">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, id)}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <div className="nav-actions">
            <SelectorIdioma actual={lang} etiqueta={t.idioma} variante="barra" />
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              aria-label={t.boton}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="nav-cta-label">{t.boton}</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? t.cerrarMenu : t.abrirMenu}
              aria-expanded={open}
              aria-controls="menu-celular"
            >
              <span />
            </button>
          </div>
        </div>
      </div>

      <MenuCelular abierto={open} onCerrar={cerrarMenu} links={links} activo={active} onNavegar={handleNav} t={t} lang={lang} saludo={saludo} />

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.92);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: box-shadow .3s, border-color .3s;
        }
        .navbar-scrolled {
          border-bottom-color: #e4e4de;
          box-shadow: 0 2px 20px rgba(117,124,187,.08);
        }
        .nav-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nav-inner {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-links::-webkit-scrollbar { display: none; }
        /* Centrado con márgenes automáticos: si los links no entran, se recorta solo
           el final (y se puede deslizar), nunca el primero. */
        .nav-links > :first-child { margin-left: auto; }
        .nav-links > :last-child { margin-right: auto; }
        .nav-link {
          flex-shrink: 0;
          padding: 6px 13px;
          border-radius: 99px;
          font-size: var(--fs-chico);
          font-weight: 600;
          color: var(--text-soft);
          background: transparent;
          transition: color .2s, background .2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #5a60a0;
          background: var(--blue-light);
        }
        .nav-link-active {
          color: #5a60a0 !important; /* --blue daba 3,4:1 sobre --blue-light */
          background: var(--blue-light) !important;
          font-weight: 700 !important;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-cta {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--yellow);
          color: var(--text);
          padding: 10px 20px;
          border-radius: 99px;
          font-size: var(--fs-chico);
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(255,222,134,.5);
          transition: transform .15s, box-shadow .15s;
          text-decoration: none;
          min-height: 44px;
          white-space: nowrap;
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,222,134,.6);
        }
        .nav-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 14px;
          background: transparent;
          cursor: pointer;
          transition: background .15s;
          padding: 0;
        }
        .nav-toggle:hover {
          background: rgba(0,0,0,.06);
        }
        .nav-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 99px;
          background: var(--text);
          position: relative;
          transition: background .15s;
        }
        .nav-toggle span::before,
        .nav-toggle span::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 2px;
          border-radius: 99px;
          background: var(--text);
          left: 0;
          transition: transform .15s, top .15s;
        }
        .nav-toggle span::before { top: -6px; }
        .nav-toggle span::after { top: 6px; }
        .nav-toggle-open span { background: transparent; }
        .nav-toggle-open span::before { transform: rotate(45deg); top: 0; }
        .nav-toggle-open span::after { transform: rotate(-45deg); top: 0; }
        /* El menú de celular es una hoja inferior: ver MenuCelular.tsx */

        /* Compu chica: links más juntos para que entre el selector de idioma */
        @media (max-width: 1024px) {
          .nav-link { padding: 6px 7px; }
        }
        /* El botón amarillo queda solo con el ícono: si no, los links no entran */
        @media (max-width: 960px) {
          .nav-cta-label { display: none; }
          .nav-cta { padding: 10px 14px; }
        }

        /* ── TABLET: menos aire entre links (la letra queda en --fs-chico) ── */
        @media (max-width: 800px) {
          .nav-link { padding: 6px 5px; }
        }
        @media (max-width: 768px) {
          .nav-container { padding: 0 16px; }
          .nav-logo img { width: 100px; height: auto; }
        }
        @media (max-width: 760px) {
          .nav-link { padding: 6px 4px; }
        }
        @media (max-width: 720px) {
          .nav-logo img { width: 84px; }
          .nav-inner { gap: 4px; }
          .nav-actions { gap: 4px; }
          .nav-link { padding: 6px 3px; }
        }
        @media (max-width: 660px) {
          .nav-links { gap: 0; }
          .nav-link { padding: 6px 2px; }
          .nav-cta { padding: 10px 12px; }
          .nav-actions .idioma-barra { margin-right: 0; }
          .nav-actions .idioma-barra .idioma-link { padding: 10px 2px; }
        }
        @media (max-width: 680px) {
          .nav-link { padding: 6px 1px; }
        }
        @media (max-width: 640px) {
          .nav-logo img { width: 70px; }
          .nav-cta { padding: 10px 8px; }
        }

        /* ── MOBILE: solo logo + menú. El botón de WhatsApp es el flotante, que acá vive en la Navbar ── */
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .nav-toggle { display: inline-flex; }
          .nav-cta { display: none; }
        }

      `}</style>
    </nav>
  );
}
