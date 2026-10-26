import localFont from "next/font/local";

// Fuentes guardadas en el repo (src/app/fonts, licencia OFL): se sirven desde el mismo
// dominio, sin CSS que bloquee el render y con una fuente de respaldo ajustada para que
// el texto no salte al cargar. Antes usábamos next/font/google, que las descarga de
// Google en cada build: cuando Google no respondía a tiempo, el build fallaba.
// Son variables (todos los pesos en un archivo) y solo el subconjunto latino, que cubre
// el español con tildes y ñ. Sin itálica: solo la usa ReviewsSection, que está oculta.
// Las usan los dos layouts raíz: el de la página ([lang]) y el de la redirección (ir).
const baloo = localFont({
  src: "./fonts/baloo-2-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-baloo",
});
const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-source",
});

export const claseFuentes = `${baloo.variable} ${sourceSans.variable}`;
