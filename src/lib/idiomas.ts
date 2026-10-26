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
