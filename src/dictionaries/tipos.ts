import type es from "./es.json";
import type mensajeEs from "./mensaje-es.json";

// La forma de cada diccionario sale del español: si en.json o pt.json se olvidan
// una clave o le cambian el tipo, el build falla.
export type Diccionario = typeof es;

// Textos del mensaje de WhatsApp. "valores" traduce los valores internos del
// simulador ("Petsittings", "Puntual", "Lun"...); lo que no está, va tal cual.
export type TextosMensaje = {
  saludo: string;
  etiquetas: typeof mensajeEs.etiquetas;
  valores: Record<string, string>;
};
