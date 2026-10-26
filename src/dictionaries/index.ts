import "server-only";
import es from "./es.json";
import type { Diccionario } from "./tipos";

// Los diccionarios solo existen en el servidor: cada componente recibe por props
// los textos de su sección, así el JavaScript que baja el celular no los incluye.
const diccionarios: Record<"es", Diccionario> = { es };

export function getDictionary(lang: "es"): Diccionario {
  return diccionarios[lang];
}

export type { Diccionario };
