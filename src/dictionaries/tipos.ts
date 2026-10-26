import type es from "./es.json";

// La forma de cada diccionario sale del español: si en.json o pt.json se olvidan
// una clave o le cambian el tipo, el build falla.
export type Diccionario = typeof es;
