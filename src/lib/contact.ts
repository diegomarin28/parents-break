// Único lugar donde vive el número de WhatsApp de Parents' Break.
// Si cambia, se cambia acá y todos los botones quedan actualizados.
export const WA_NUMBER = "59897442696";

export function waLink(texto?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

// Cada botón de WhatsApp pasa por /ir/whatsapp/<origen>: esa página registra la
// visita en Analytics (una página vista por toque, separada por origen) y redirige
// a WhatsApp. El texto del mensaje viaja en el #hash, que no llega al servidor.
export const ORIGENES_WA = ["navbar", "hero", "flotante", "menu", "cta", "footer", "simulador"] as const;
export type OrigenWA = (typeof ORIGENES_WA)[number];

export function waIrLink(origen: OrigenWA, texto?: string) {
  const base = `/ir/whatsapp/${origen}`;
  return texto ? `${base}#${encodeURIComponent(texto)}` : base;
}
