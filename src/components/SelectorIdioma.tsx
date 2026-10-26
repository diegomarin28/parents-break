import { IDIOMAS, NOMBRE_IDIOMA, RUTA_IDIOMA, type Idioma } from "../lib/idiomas";

type Props = {
  actual: Idioma;
  // Nombre del grupo para lectores de pantalla ("Idioma", "Language")
  etiqueta: string;
  // "barra": letras chicas en la Navbar de compu. "menu": botones en la hoja del celular.
  variante: "barra" | "menu";
};

// Links normales a "/", "/en" y "/pt": funcionan sin JavaScript y Google los sigue.
// Cada link lleva el nombre del idioma en ese idioma, para que el lector de pantalla
// diga "English" y no "E N".
export default function SelectorIdioma({ actual, etiqueta, variante }: Props) {
  return (
    <div className={`idioma idioma-${variante}`} role="group" aria-label={etiqueta}>
      {IDIOMAS.map((l, i) => (
        <span key={l} className="idioma-item">
          {variante === "barra" && i > 0 && <span className="idioma-punto" aria-hidden="true">·</span>}
          <a
            href={RUTA_IDIOMA[l]}
            hrefLang={l}
            lang={l}
            aria-label={NOMBRE_IDIOMA[l]}
            aria-current={l === actual ? "page" : undefined}
            className={`idioma-link ${l === actual ? "idioma-actual" : ""}`}
          >
            {l.toUpperCase()}
          </a>
        </span>
      ))}
      <style>{`
        .idioma { display: flex; align-items: center; }
        .idioma-item { display: inline-flex; align-items: center; }
        .idioma-link {
          text-decoration: none;
          font-weight: 700;
          color: var(--text-soft);
          transition: color .15s, background .15s;
        }
        .idioma-link:hover { color: #5a60a0; }
        .idioma-actual { color: #5a60a0; }

        /* Navbar de compu: ES · EN · PT */
        .idioma-barra { flex-shrink: 0; margin-right: 4px; }
        .idioma-barra .idioma-link {
          font-size: 13px;
          letter-spacing: .04em;
          padding: 10px 5px;
        }
        .idioma-barra .idioma-actual { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 2px; }
        .idioma-punto { color: var(--gray-dark); font-size: 13px; }

        /* Menú de celular: tres botones */
        .idioma-menu { gap: 8px; margin-top: 16px; }
        .idioma-menu .idioma-item { flex: 1; }
        .idioma-menu .idioma-link {
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          min-height: 44px;
          border-radius: 12px;
          border: 1.5px solid var(--gray);
          font-size: 15px;
        }
        .idioma-menu .idioma-actual {
          background: var(--blue-light);
          border-color: var(--blue-mid);
        }

        @media (max-width: 768px) {
          .idioma-barra .idioma-link { padding: 10px 3px; font-size: 12px; }
          .idioma-punto { display: none; }
        }
        @media (max-width: 600px) {
          .idioma-barra { display: none; }
        }
      `}</style>
    </div>
  );
}
