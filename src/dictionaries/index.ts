import "server-only";
import es from "./es.json";
import en from "./en.json";
import pt from "./pt.json";
import mensajeEs from "./mensaje-es.json";
import mensajeEn from "./mensaje-en.json";
import { NOMBRE_IDIOMA, type Idioma } from "../lib/idiomas";
import type { Diccionario, TextosMensaje } from "./tipos";

// Los diccionarios solo existen en el servidor: cada componente recibe por props
// los textos de su sección, así el JavaScript que baja el celular no los incluye.
const diccionarios: Record<Idioma, Diccionario> = { es, en, pt };

export function getDictionary(lang: Idioma): Diccionario {
  return diccionarios[lang];
}

// El mensaje de WhatsApp sale en el idioma en que responde el equipo: en portugués
// la página se lee en portugués pero el mensaje va en español.
const mensajes = { es: mensajeEs, en: mensajeEn } satisfies Record<string, TextosMensaje>;
const IDIOMA_MENSAJE: Record<Idioma, keyof typeof mensajes> = { es: "es", en: "en", pt: "es" };

export function getMensaje(lang: Idioma) {
  const textos: TextosMensaje = mensajes[IDIOMA_MENSAJE[lang]];
  // Si el mensaje sale en otro idioma que la página, una línea al final avisa
  // en qué idioma estaba la familia (ej. "*Idioma:* Português").
  const lineaIdioma = IDIOMA_MENSAJE[lang] === lang ? "" : `*${textos.etiquetas.idioma}:* ${NOMBRE_IDIOMA[lang]}`;
  // Saludo de los botones directos. En español no se manda: la página de
  // redirección usa el mismo saludo por defecto.
  const saludo = lang === "es" ? undefined : [textos.saludo, lineaIdioma].filter(Boolean).join("\n\n");
  return { textos, lineaIdioma, saludo };
}

export type { Diccionario, TextosMensaje };
