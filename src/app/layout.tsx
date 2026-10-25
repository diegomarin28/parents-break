import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  // Base para las URL absolutas de la vista previa (og:image). Si el sitio pasa a un dominio propio, cambiar acá.
  metadataBase: new URL("https://parents-break.vercel.app"),
  title: "Parents' Break – Cuidado infantil profesional en Uruguay",
  description:
    "Red de más de 80 niñeras seleccionadas para babysitting, petsitting y eventos en Montevideo, Canelones y Punta del Este. Confianza y calidad en cada servicio.",
  keywords: [
    "niñeras Uruguay",
    "babysitting Montevideo",
    "cuidado infantil Punta del Este",
    "niñeras profesionales",
    "petsitting Montevideo",
    "animación eventos infantiles",
  ],
  openGraph: {
    url: "/",
    siteName: "Parents' Break",
    title: "Parents' Break – Cuidado infantil profesional",
    description:
      "Niñeras seleccionadas para babysitting, petsitting y eventos en Montevideo, Canelones y Punta del Este.",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Las fuentes se cargan acá y no con @import en globals.css: el build
            descartaba el @import de Source Sans 3 y el texto salía en la fuente
            del sistema. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* La regla apunta a pages/_document; este es el layout raíz y aplica a todas las páginas. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Estadísticas anónimas de visitas de Vercel: sin cookies. Solo envía datos en producción. */}
        <Analytics />
      </body>
    </html>
  );
}
