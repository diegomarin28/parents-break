import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 es el valor por defecto de Next; 90 se usa en las fotos de
    // Quiénes somos y Niñeras para que se vean más nítidas.
    qualities: [75, 90],
  },
};

export default nextConfig;
