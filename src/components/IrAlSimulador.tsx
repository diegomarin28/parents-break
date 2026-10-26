"use client";
import { irASeccion } from "../lib/scroll";

type Props = {
  // Valor que entiende el simulador: "Babysitting", "Petsittings" o "Evento"
  servicio: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// Link que lleva al simulador con el servicio ya elegido. El simulador escucha
// "popstate" y lee ?servicio= de la URL.
export default function IrAlSimulador({ servicio, className, style, children }: Props) {
  return (
    <a
      href="#simulador"
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        window.history.pushState(null, "", `?servicio=${servicio}#simulador`);
        window.dispatchEvent(new Event("popstate"));
        irASeccion("simulador");
      }}
    >
      {children}
    </a>
  );
}
