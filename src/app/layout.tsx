import type { Metadata } from "next";
import { Baloo_2, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Fuentes servidas por Next (se descargan en el build y se sirven desde el mismo dominio):
// sin pedidos a Google Fonts, sin CSS que bloquee el render y con una fuente de
// respaldo ajustada para que el texto no salte al cargar. Las dos son variables, así
// que no hace falta listar pesos. Sin itálica: solo la usa ReviewsSection, que está oculta.
const baloo = Baloo_2({ subsets: ["latin"], display: "swap", variable: "--font-baloo" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap", variable: "--font-source" });

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
    <html lang="es" className={`${baloo.variable} ${sourceSans.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Estadísticas anónimas de visitas de Vercel: sin cookies. Solo envía datos en producción. */}
        <Analytics />
      </body>
    </html>
  );
}
