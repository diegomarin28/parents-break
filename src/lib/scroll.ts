// Lleva la vista a una sección dejando lugar para la Navbar fija (64px + 8px de aire).
// Mide con offsetTop, que ignora las transformaciones CSS: las secciones envueltas en
// FadeIn están desplazadas 20px hacia abajo hasta que aparecen, y medir con
// getBoundingClientRect en ese momento hacía aterrizar 20px más abajo.
export const ALTO_NAVBAR = 72;

export function irASeccion(destino: string | HTMLElement) {
  const el = typeof destino === "string" ? document.getElementById(destino) : destino;
  if (!el) return;
  let top = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) top += n.offsetTop;
  window.scrollTo({ top: top - ALTO_NAVBAR, behavior: "smooth" });
}
