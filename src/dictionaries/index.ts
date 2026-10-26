import "server-only";
import es from "./es.json";
import type { Idioma } from "../lib/idiomas";
import type { Diccionario } from "./tipos";

// Los diccionarios solo existen en el servidor: cada componente recibe por props
// los textos de su sección, así el JavaScript que baja el celular no los incluye.
const diccionarios: Record<Idioma, Diccionario> = { es };

export function getDictionary(lang: Idioma): Diccionario {
  return diccionarios[lang];
}

export type { Diccionario };
