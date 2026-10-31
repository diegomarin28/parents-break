import Contador from "./Contador";
import type { Diccionario } from "../dictionaries/tipos";

type Stat = { prefix: string; num: number; suffix: string; clave: keyof Diccionario["numeros"]; icon: React.ReactNode };

const stats: Stat[] = [
  {
    prefix: "+", num: 80, suffix: "", clave: "nineras",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    prefix: "+", num: 3, suffix: "", clave: "anios",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

function StatItem({ stat, label, isLast }: { stat: Stat; label: string; isLast: boolean }) {
  return (
    <div className="stats-item" style={{
      textAlign: "center",
      borderRight: !isLast ? "1px solid rgba(255,255,255,.15)" : "none",
    }}>
      <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }} aria-hidden="true">
        {stat.icon}
      </div>
      <div style={{
        fontFamily: "var(--font-baloo), cursive",
        fontSize: "var(--fs-seccion)", fontWeight: 800,
        // Un paso más claro que --yellow: sobre el violeta da 3,02:1 (--yellow daba 2,99:1)
        color: "#ffdf88",
        lineHeight: 1,
        textShadow: "0 1px 4px rgba(0,0,0,.15)",
      }}>
        <Contador valor={stat.num} prefijo={stat.prefix} />{stat.suffix}
      </div>
      {/* Blanco sobre el violeta da 3,9:1: alcanza solo como texto grande (19 px en negrita) */}
      <div style={{ fontSize: "var(--fs-destacado)", fontWeight: 700, color: "#fff", marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
}

// Componente de servidor: los números van con su valor final en el HTML. El conteo
// animado lo hace Contador, solo con JavaScript y cuando la barra entra en pantalla.
export default function StatsBar({ t }: { t: Diccionario["numeros"] }) {
  return (
    <section className="stats-section" style={{ background: "var(--blue)" }}>
      <div className="stats-container" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} label={t[s.clave]} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
      <style>{`
        .stats-section { padding: 48px 0; }
        .stats-container { padding: 0 24px; }
        .stats-item { padding: 0 40px; }
        @media (max-width: 768px) {
          .stats-section { padding: 36px 0; }
        }
        @media (max-width: 600px) {
          .stats-section { padding: 28px 0; }
          .stats-container { padding: 0 16px; max-width: 100% !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0 !important; }
          /* Menos relleno para que "experiencia" (19 px en negrita) entre a 320 px sin scroll horizontal */
          .stats-item { padding: 0 10px; }
        }
      `}</style>
    </section>
  );
}