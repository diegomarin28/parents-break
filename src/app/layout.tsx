import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parents' Break – Cuidado infantil profesional en Uruguay",
  description:
    "Red de más de 70 niñeras seleccionadas para babysitting, traslados y eventos en Montevideo y Punta del Este. Confianza y calidad en cada servicio.",
  keywords: [
    "niñeras Uruguay",
    "babysitting Montevideo",
    "cuidado infantil Punta del Este",
    "niñeras profesionales",
    "traslados niños",
    "animación eventos infantiles",
  ],
  openGraph: {
    title: "Parents' Break – Cuidado infantil profesional",
    description:
      "Niñeras seleccionadas para babysitting, traslados y eventos en Montevideo y Punta del Este.",
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
