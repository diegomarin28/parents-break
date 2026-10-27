import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "../../dictionaries";
import { ALTERNATIVAS, IDIOMAS, LOCALE_OG, RUTA_IDIOMA, esIdioma } from "../../lib/idiomas";
import { URL_SITIO } from "../../lib/sitio";
import { claseFuentes } from "../fuentes";
import "../globals.css";

// Una versión estática por idioma, generada en el build; cualquier otro valor da 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const t = getDictionary(lang).metadatos;
  return {
    // Base para las URL absolutas (og:image, canonical, hreflang)
    metadataBase: new URL(URL_SITIO),
    title: t.titulo,
    description: t.descripcion,
    keywords: t.palabrasClave,
    // canonical: la dirección propia de esta versión. languages: las tres versiones,
    // de donde Next arma las etiquetas <link rel="alternate" hreflang="...">.
    alternates: { canonical: RUTA_IDIOMA[lang], languages: ALTERNATIVAS },
    openGraph: {
      url: RUTA_IDIOMA[lang],
      siteName: "Parents' Break",
      title: t.ogTitulo,
      description: t.ogDescripcion,
      locale: LOCALE_OG[lang],
      alternateLocale: IDIOMAS.filter((l) => l !== lang).map((l) => LOCALE_OG[l]),
      type: "website",
      // La imagen se declara acá (y vive en public/): si quedara como archivo
      // opengraph-image.jpg en src/app, este openGraph la taparía.
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: t.ogImagenAlt }],
    },
    twitter: { card: "summary_large_image" },
    // Verificación de la propiedad en Google Search Console (no es secreta: Google la lee del HTML)
    verification: { google: "oOQSRNJlFqlnwkvCJOhyfLPvxwzSCRvygJvLhKn5KFM" },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  return (
    <html lang={lang} className={claseFuentes}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Estadísticas anónimas de visitas de Vercel: sin cookies. Solo envía datos en producción. */}
        <Analytics />
      </body>
    </html>
  );
}
