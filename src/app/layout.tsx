import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
