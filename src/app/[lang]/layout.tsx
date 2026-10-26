import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "../../dictionaries";
import { IDIOMAS, esIdioma } from "../../lib/idiomas";
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
    // Base para las URL absolutas de la vista previa (og:image). Si el sitio pasa a un dominio propio, cambiar acá.
    metadataBase: new URL("https://parents-break.vercel.app"),
    title: t.titulo,
    description: t.descripcion,
    keywords: t.palabrasClave,
    openGraph: {
      url: "/",
      siteName: "Parents' Break",
      title: t.ogTitulo,
      description: t.ogDescripcion,
      locale: "es_UY",
      type: "website",
      // La imagen se declara acá (y vive en public/): si quedara como archivo
      // opengraph-image.jpg en src/app, este openGraph la taparía.
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: t.ogImagenAlt }],
    },
    twitter: { card: "summary_large_image" },
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
