// Único lugar donde vive el número de WhatsApp de Parents' Break.
// Si cambia, se cambia acá y todos los botones quedan actualizados.
export const WA_NUMBER = "59897442696";

export const WA_MENSAJE_INICIAL = "Hola! Quiero coordinar un servicio de Parents' Break";

export function waLink(texto?: string) {
  const base = `https://wa.me/${WA_NUMBER}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
