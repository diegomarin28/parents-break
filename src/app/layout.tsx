import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "../dictionaries";
import "./globals.css";

// Fuentes guardadas en el repo (src/app/fonts, licencia OFL): se sirven desde el mismo
// dominio, sin CSS que bloquee el render y con una fuente de respaldo ajustada para que
// el texto no salte al cargar. Antes usábamos next/font/google, que las descarga de
// Google en cada build: cuando Google no respondía a tiempo, el build fallaba.
// Son variables (todos los pesos en un archivo) y solo el subconjunto latino, que cubre
// el español con tildes y ñ. Sin itálica: solo la usa ReviewsSection, que está oculta.
const baloo = localFont({
  src: "./fonts/baloo-2-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-baloo",
});
const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-source",
});

const t = getDictionary("es").metadatos;

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${baloo.variable} ${sourceSans.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Estadísticas anónimas de visitas de Vercel: sin cookies. Solo envía datos en producción. */}
        <Analytics />
      </body>
    </html>
  );
}
