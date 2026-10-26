import type { MetadataRoute } from "next";
import { ALTERNATIVAS, IDIOMAS, RUTA_IDIOMA } from "../lib/idiomas";
import { URL_SITIO } from "../lib/sitio";

// Las tres versiones de la página, cada una con sus alternativas de idioma
export default function sitemap(): MetadataRoute.Sitemap {
  const absoluta = (ruta: string) => new URL(ruta, URL_SITIO).toString();
  const languages = Object.fromEntries(Object.entries(ALTERNATIVAS).map(([l, ruta]) => [l, absoluta(ruta)]));
  return IDIOMAS.map((l) => ({
    url: absoluta(RUTA_IDIOMA[l]),
    alternates: { languages },
  }));
}
