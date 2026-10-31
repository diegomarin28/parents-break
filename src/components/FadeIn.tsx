"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

// Aparición suave de una sección al llegar a ella. El HTML del servidor la deja visible,
// así que sin JavaScript (o antes de que cargue) se ve todo. Al cargar, solo se ocultan las
// secciones que todavía están más abajo de la pantalla, y aparecen cuando entran.
export default function FadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Con movimiento reducido, la sección queda como está.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Si ya está en pantalla (o más arriba), no se oculta lo que la persona está viendo.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("fade-oculto");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.remove("fade-oculto");
        observer.disconnect();
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
}
