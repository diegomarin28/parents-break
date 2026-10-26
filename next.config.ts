import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Página 404 propia (src/app/global-not-found.tsx): hace falta porque la app tiene
    // dos layouts raíz ([lang] e ir) y no hay uno común para armarla.
    globalNotFound: true,
  },
  images: {
    // AVIF primero (pesa ~30% menos que WebP a igual calidad); WebP como respaldo.
    formats: ["image/avif", "image/webp"],
    // 75 es el valor por defecto de Next; 90 se usa en las fotos de
    // Quiénes somos y Niñeras para que se vean más nítidas.
    qualities: [75, 90],
  },
  // El español vive en "/" aunque la página se genere en /es (src/app/[lang]).
  // Se resuelve acá y no en un proxy (middleware) para que Vercel lo haga en su
  // ruteo, sin ejecutar una función en cada visita a "/".
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
  async redirects() {
    // Una sola dirección para el español: /es lleva a /
    return [
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:ruta*", destination: "/:ruta*", permanent: true },
    ];
  },
};

export default nextConfig;
