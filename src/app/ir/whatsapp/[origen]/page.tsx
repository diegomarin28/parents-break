import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ORIGENES_WA } from "../../../../lib/contact";
import Redirigir from "./Redirigir";

// Páginas estáticas, una por origen; cualquier otro origen da 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return ORIGENES_WA.map((origen) => ({ origen }));
}

export const metadata: Metadata = {
  title: "Abriendo WhatsApp – Parents' Break",
  robots: { index: false, follow: false },
};

export default async function Page({ params }: { params: Promise<{ origen: string }> }) {
  const { origen } = await params;
  if (!(ORIGENES_WA as readonly string[]).includes(origen)) notFound();
  return (
    <main className="ir-wa">
      {/* Guarda el texto del mensaje (viene en el #hash) y lo saca de la URL antes de que
          cargue el script de Analytics, que lee location.href. Así el contenido del
          mensaje nunca sale del navegador. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{window.__mensajeWA=decodeURIComponent(location.hash.slice(1))}catch(e){window.__mensajeWA=''}" +
            "if(location.hash){history.replaceState(null,'',location.pathname)}",
        }}
      />
      <Redirigir />
    </main>
  );
}
