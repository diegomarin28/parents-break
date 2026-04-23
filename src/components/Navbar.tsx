"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

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
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  const links = [
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Servicios",     href: "#servicios" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Niñeras",       href: "#nineras" },
    { label: "Solicitar servicio", href: "#simulador" },
  ];

  const WA_URL = "https://wa.me/59896127376";

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
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,222,134,.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(255,222,134,.5)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="nav-cta-label">Coordinar servicio</span>
            </a>
            <button
              type="button"
              className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <span />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="nav-mobile-menu">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  handleNav(e, id);
                }}
                className={`nav-mobile-link ${active === id ? "nav-mobile-link-active" : ""}`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      )}

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
        .nav-logo-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: var(--pink);
          display: flex; align-items: center; justify-content: center;
          color: white;
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 16px;
          flex-shrink: 0;
        }
        .nav-logo-text {
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 17px;
          color: var(--blue);
          letter-spacing: -.01em;
          white-space: nowrap;
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
        .nav-link {
          flex-shrink: 0;
          padding: 6px 13px;
          border-radius: 99px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-soft);
          background: transparent;
          transition: color .2s, background .2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--blue);
          background: var(--blue-light);
        }
        .nav-link-active {
          color: var(--blue) !important;
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
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(255,222,134,.5);
          transition: transform .15s, box-shadow .15s;
          text-decoration: none;
          min-height: 44px;
          white-space: nowrap;
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
        .nav-mobile-menu {
          position: absolute;
          top: 100%;
          left: 12px;
          right: 12px;
          background: rgba(255,255,255,.98);
          border-radius: 18px;
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: 0 20px 45px rgba(0,0,0,.14);
          z-index: 99;
          padding: 12px 0 16px;
          overflow: hidden;
          backdrop-filter: blur(6px);
        }
        .nav-mobile-link {
          display: block;
          padding: 14px 20px;
          color: var(--text);
          text-decoration: none;
          margin: 0 12px 8px;
          border-radius: 14px;
          background: var(--off);
          border: 1px solid rgba(0,0,0,.06);
          transition: background .2s, color .2s, transform .2s, border-color .2s;
        }
        .nav-mobile-link:hover {
          background: white;
          transform: translateX(4px);
          border-color: rgba(0,0,0,.1);
        }
        .nav-mobile-link-active {
          color: var(--blue);
          background: rgba(227,244,255,.9);
          font-weight: 700;
          border-color: rgba(46,125,255,.18);
        }
        .nav-mobile-link:last-child {
          margin-bottom: 0;
        }

        /* ── TABLET: links más chicos ── */
        @media (max-width: 768px) {
          .nav-link { font-size: 13px; padding: 6px 10px; }
          .nav-cta-label { display: none; }
          .nav-cta { padding: 10px 14px; }
        }

        /* ── MOBILE: links ocultos, solo logo + botón ── */
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .nav-toggle { display: inline-flex; }
          .nav-cta-label { display: inline; }
          .nav-cta { padding: 8px 14px; font-size: 13px; }
          .nav-logo-text { font-size: 15px; }
        }

      `}</style>
    </nav>
  );
}