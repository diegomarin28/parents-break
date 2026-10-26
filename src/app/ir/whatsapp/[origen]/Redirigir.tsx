"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { waLink } from "../../../../lib/contact";
import type { Diccionario } from "../../../../dictionaries/tipos";

declare global {
  interface Window { __mensajeWA?: string }
}

const SCRIPT_ANALYTICS = "/_vercel/insights/script.js";

type Props = {
  // Textos en cada idioma, con la dirección de esa versión de la página
  textos: { lang: string; ruta: string; t: Diccionario["redireccion"] }[];
  // Mensaje que se usa si el botón no mandó uno (los de la versión en español)
  saludo: string;
};

export default function Redirigir({ textos, saludo }: Props) {
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = waLink(window.__mensajeWA || saludo);
    caja.current?.querySelectorAll<HTMLAnchorElement>("a.ir-wa-enlace").forEach((a) => { a.href = url; });
    // Espera a que el script de Analytics haya terminado de cargar (aparece en
    // Resource Timing) y le deja 200 ms para mandar la página vista. Si tarda
    // más de 1,5 s en total, redirige igual.
    const inicio = performance.now();
    const cargado = () => performance.getEntriesByType("resource").some((e) => e.name.includes(SCRIPT_ANALYTICS));
    let timer = 0;
    const esperar = () => {
      if (cargado() || performance.now() - inicio > 1500) {
        timer = window.setTimeout(() => window.location.replace(url), cargado() ? 200 : 0);
        return;
      }
      timer = window.setTimeout(esperar, 50);
    };
    esperar();
    return () => window.clearTimeout(timer);
  }, [saludo]);

  return (
    <div className="ir-wa-caja" ref={caja}>
      <Image src="/logo.png" alt="Parents' Break" width={120} height={50} style={{ objectFit: "contain" }} priority />
      <div className="ir-wa-titulos">
        {textos.map(({ lang, t }, i) => (
          <p key={lang} lang={lang} className={i === 0 ? "ir-wa-titulo" : "ir-wa-titulo-otro"}>{t.titulo}</p>
        ))}
      </div>
      <div className="ir-wa-texto">
        {textos.map(({ lang, t }) => (
          <p key={lang} lang={lang}>{t.siNoAbre} <a className="ir-wa-enlace" href="#">{t.tocaAca}</a>.</p>
        ))}
      </div>
      <p className="ir-wa-volver">
        {textos.map(({ lang, ruta, t }, i) => (
          <span key={lang}>{i > 0 && " · "}<a href={ruta} lang={lang} hrefLang={lang}>{t.volver}</a></span>
        ))}
      </p>
      <style>{`
        .ir-wa {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(ellipse 70% 60% at 80% 30%, #fdeef1 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 10% 80%, #eeedf8 0%, transparent 55%),
            var(--off);
        }
        .ir-wa-caja {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          background: var(--white);
          border: 1.5px solid var(--gray);
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: var(--shadow-lg);
          max-width: 360px;
          width: 100%;
        }
        .ir-wa-titulo {
          font-family: var(--font-baloo), cursive;
          font-weight: 800;
          font-size: 24px;
          color: var(--text);
        }
        .ir-wa-titulos { margin-top: 12px; }
        .ir-wa-titulo-otro {
          font-family: var(--font-baloo), cursive;
          font-weight: 700;
          font-size: 17px;
          color: var(--text-soft);
        }
        .ir-wa-texto { font-size: 14px; color: var(--text-soft); display: flex; flex-direction: column; gap: 2px; }
        .ir-wa-texto a { color: var(--blue); font-weight: 700; text-decoration: underline; }
        .ir-wa-volver { margin-top: 14px; font-size: 13px; color: var(--text-soft); }
        .ir-wa-volver a { color: inherit; }
      `}</style>
    </div>
  );
}
