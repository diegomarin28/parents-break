import type { MetadataRoute } from "next";
import { URL_SITIO } from "../lib/sitio";

// Todo se puede indexar salvo /ir/: son las páginas que cuentan los toques en
// WhatsApp y redirigen (además llevan noindex).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/ir/" },
    sitemap: new URL("/sitemap.xml", URL_SITIO).toString(),
  };
}
