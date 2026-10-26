import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { claseFuentes } from "../fuentes";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parents-break.vercel.app"),
};

// Layout raíz de /ir/whatsapp/<origen>, aparte del de la página: no lleva prefijo de
// idioma porque recibe el mensaje ya armado. Muestra su texto en los tres idiomas.
export default function IrLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={claseFuentes}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Registra la página vista que cuenta el toque en WhatsApp (sin cookies) */}
        <Analytics />
      </body>
    </html>
  );
}
