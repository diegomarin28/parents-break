"use client";
import { useEffect, useRef, useState } from "react";

type Stat = { prefix: string; num: number; suffix: string; label: string; icon: React.ReactNode };

const stats: Stat[] = [
  {
    prefix: "+", num: 80, suffix: "", label: "Niñeras activas",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    prefix: "+", num: 3, suffix: "", label: "Años de experiencia",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started, isLast }: { stat: Stat; started: boolean; isLast: boolean }) {
  const count = useCountUp(stat.num, 1800, started);

  return (
    <div style={{
      textAlign: "center",
      padding: "0 40px",
      borderRight: !isLast ? "1px solid rgba(255,255,255,.15)" : "none",
    }}>
      <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
        {stat.icon}
      </div>
      <div style={{
        fontFamily: "'Baloo 2', cursive",
        fontSize: 48, fontWeight: 800,
        color: "var(--yellow)",
        lineHeight: 1,
        textShadow: "0 1px 4px rgba(0,0,0,.15)",
      }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div style={{ fontSize: 16, color: "rgba(255,255,255,.75)", marginTop: 8 }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-section" style={{ background: "var(--blue)", padding: "48px 0" }}>
      <div className="stats-container" style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} started={started} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-section { padding: 36px 0; }
        }
        @media (max-width: 600px) {
          .stats-section { padding: 28px 0; }
          .stats-container { padding: 0 16px; max-width: 100% !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </section>
  );
}