"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Con movimiento reducido, la sección se muestra directamente.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("visible"); return; }
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
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