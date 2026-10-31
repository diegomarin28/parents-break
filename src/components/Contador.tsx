"use client";
import { useEffect, useRef, useState } from "react";

// Oculto a la vista pero leído por el lector de pantalla
const soloLector: React.CSSProperties = {
  position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
  overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0,
};

// Número de la barra de números. El HTML del servidor trae el valor final (+80), así que
// sin JavaScript se ve bien. Con JavaScript, si la barra está más abajo de la pantalla al
// cargar, el número vuelve a 0 (sin que se vea) y cuenta hasta el valor cuando la barra
// entra. Si ya está a la vista, o con movimiento reducido, queda fijo. El lector de
// pantalla lee siempre el valor final.
export default function Contador({ valor, prefijo = "" }: { valor: number; prefijo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(valor);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    let frame = requestAnimationFrame(() => setN(0));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const inicio = performance.now();
        const paso = (t: number) => {
          const p = Math.min((t - inicio) / 1800, 1);
          setN(Math.floor((1 - Math.pow(1 - p, 3)) * valor));
          if (p < 1) frame = requestAnimationFrame(paso);
        };
        frame = requestAnimationFrame(paso);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [valor]);

  return (
    <>
      <span ref={ref} aria-hidden="true" style={{ fontVariantNumeric: "tabular-nums" }}>{prefijo}{n}</span>
      <span style={soloLector}>{prefijo}{valor}</span>
    </>
  );
}
