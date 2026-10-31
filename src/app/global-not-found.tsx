import type { Metadata } from "next";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "../dictionaries";
import { IDIOMAS, RUTA_IDIOMA } from "../lib/idiomas";
import { URL_SITIO } from "../lib/sitio";
import { claseFuentes } from "./fuentes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITIO),
  // Título neutro: sirve igual en los tres idiomas
  title: "404 – Parents' Break",
  robots: { index: false, follow: false },
};

// Elige el idioma por el comienzo de la dirección (/en/..., /pt/...; el resto, español)
// antes de que se pinte la página. Sin JavaScript queda en español.
const ELEGIR_IDIOMA =
  "var l=location.pathname.split('/')[1];if(l!=='en'&&l!=='pt')l='es';" +
  "var h=document.documentElement;h.lang=l;h.setAttribute('data-idioma',l);";

// 404 de toda la app: la usa Next cuando la dirección no coincide con ninguna página
// (por ejemplo /xx o /en/algo). Muestra el texto del idioma de la dirección y un link
// al inicio de esa versión.
export default function GlobalNotFound() {
  return (
    <html lang="es" className={claseFuentes} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: ELEGIR_IDIOMA }} />
        <main className="nf">
          <div className="nf-caja">
            <Image src="/logo.png" alt="Parents' Break" width={120} height={50} style={{ objectFit: "contain" }} priority />
            <p className="nf-numero" aria-hidden="true">404</p>
            {IDIOMAS.map((lang) => {
              const t = getDictionary(lang).noEncontrada;
              return (
                <div key={lang} lang={lang} className="nf-bloque" data-bloque={lang}>
                  <h1 className="nf-titulo">{t.titulo}</h1>
                  <p className="nf-texto">{t.texto}</p>
                  <a className="nf-volver" href={RUTA_IDIOMA[lang]} hrefLang={lang}>{t.volver}</a>
                </div>
              );
            })}
          </div>
        </main>
        <Analytics />
        <style>{`
          .nf {
            min-height: 100vh;
            min-height: 100svh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 16px;
            background:
              radial-gradient(ellipse 70% 60% at 80% 30%, #fdeef1 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 10% 80%, #eeedf8 0%, transparent 55%),
              var(--off);
          }
          .nf-caja {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: var(--white);
            border: 1.5px solid var(--gray);
            border-radius: 24px;
            padding: 36px 28px;
            box-shadow: var(--shadow-lg);
            max-width: 400px;
            width: 100%;
          }
          .nf-numero {
            font-family: var(--font-baloo), cursive;
            font-weight: 800;
            font-size: 56px;
            line-height: 1;
            color: var(--pink);
            margin-top: 18px;
          }
          /* Se ve solo el bloque del idioma elegido (español si no hay script) */
          .nf-bloque { display: none; flex-direction: column; align-items: center; gap: 10px; margin-top: 12px; }
          html:not([data-idioma]) .nf-bloque[data-bloque="es"],
          html[data-idioma="es"] .nf-bloque[data-bloque="es"],
          html[data-idioma="en"] .nf-bloque[data-bloque="en"],
          html[data-idioma="pt"] .nf-bloque[data-bloque="pt"] { display: flex; }
          .nf-titulo { font-size: 24px; font-weight: 800; color: var(--text); }
          .nf-texto { font-size: 15px; color: var(--text-soft); line-height: 1.6; }
          .nf-volver {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            min-height: 48px;
            padding: 12px 26px;
            border-radius: 99px;
            background: var(--yellow);
            color: var(--text);
            font-weight: 700;
            font-size: 15px;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(255,222,134,.55);
            transition: transform .18s, box-shadow .18s;
          }
          .nf-volver:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,222,134,.7); }
        `}</style>
      </body>
    </html>
  );
}
