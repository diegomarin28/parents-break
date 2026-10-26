// Idiomas de la página. El español es el principal y vive en "/" (sin prefijo);
// next.config.ts reescribe "/" a "/es" y redirige "/es" a "/".
export const IDIOMAS = ["es", "en", "pt"] as const;
export type Idioma = (typeof IDIOMAS)[number];

export function esIdioma(valor: string): valor is Idioma {
  return (IDIOMAS as readonly string[]).includes(valor);
}

// Dirección pública de cada versión
export const RUTA_IDIOMA: Record<Idioma, string> = {
  es: "/",
  en: "/en",
  pt: "/pt",
};

// Nombre de cada idioma en ese mismo idioma
export const NOMBRE_IDIOMA: Record<Idioma, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
};

// Idioma y región para og:locale (vista previa al compartir)
export const LOCALE_OG: Record<Idioma, string> = {
  es: "es_UY",
  en: "en_US",
  pt: "pt_BR",
};

// Versiones alternativas para Google (hreflang). x-default: la que se muestra
// cuando el idioma del buscador no es ninguno de estos.
export const ALTERNATIVAS: Record<string, string> = {
  ...RUTA_IDIOMA,
  "x-default": RUTA_IDIOMA.es,
};
