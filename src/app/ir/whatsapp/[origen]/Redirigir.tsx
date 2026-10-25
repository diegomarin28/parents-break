"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA_MENSAJE_INICIAL, waLink } from "../../../../lib/contact";

declare global {
  interface Window { __mensajeWA?: string }
}

const SCRIPT_ANALYTICS = "/_vercel/insights/script.js";

export default function Redirigir() {
  const enlace = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const url = waLink(window.__mensajeWA || WA_MENSAJE_INICIAL);
    if (enlace.current) enlace.current.href = url;
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
  }, []);

  return (
    <div className="ir-wa-caja">
      <Image src="/logo.png" alt="Parents' Break" width={120} height={50} style={{ objectFit: "contain" }} priority />
      <p className="ir-wa-titulo">Abriendo WhatsApp…</p>
      <p className="ir-wa-texto">
        Si no se abre solo, <a ref={enlace} href="#">tocá acá</a>.
      </p>
      <Link className="ir-wa-volver" href="/">Volver a la página</Link>
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
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 24px;
          color: var(--text);
          margin-top: 12px;
        }
        .ir-wa-texto { font-size: 15px; color: var(--text-soft); }
        .ir-wa-texto a { color: var(--blue); font-weight: 700; text-decoration: underline; }
        .ir-wa-volver { margin-top: 14px; font-size: 13px; color: var(--text-muted); }
      `}</style>
    </div>
  );
}
