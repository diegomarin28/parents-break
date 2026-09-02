"use client";

import { useState, useEffect, useRef } from "react";

type Dia = { fecha: string; horaInicio: string; minInicio: string; horaFin: string; minFin: string };

type TimeSelectorProps = {
  label: string;
  hora: string;
  min: string;
  onHora: (v: string) => void;
  onMin: (v: string) => void;
  labelStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
  onComplete?: () => void;
  isLast?: boolean;
  hasError?: boolean;
};

const TimeSelector = ({ label, hora, min, onHora, onMin, labelStyle, inputStyle, onComplete, isLast, hasError }: TimeSelectorProps) => {
  const [localVal, setLocalVal] = useState(() => (hora ? `${hora}${min ? `:${min}` : ""}` : ""));
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalVal(hora ? `${hora}${min ? `:${min}` : ""}` : "");
  }, [hora, min]);

  const handleChange = (raw: string) => {
    const cleaned = raw.replace(/[^0-9:]/g, "");
    setError("");
    if (!cleaned) { setLocalVal(""); onHora(""); onMin(""); return; }
    if (cleaned.includes(":")) {
      const [hourRaw, minuteRaw] = cleaned.split(":");
      const hourPart = hourRaw.slice(0, 2);
      const minutePart = minuteRaw.slice(0, 2);
      const hourNum = parseInt(hourPart, 10);
      if (hourNum > 23) { setError("Hora inválida"); return; }
      const hourValue = String(hourNum).padStart(2, "0");
      const minNum = minutePart ? parseInt(minutePart, 10) : -1;
      if (minutePart.length === 2 && minNum > 59) { setError("Minutos inválidos"); return; }
      const nextVal = hourValue + (minutePart || cleaned.endsWith(":") ? ":" : "") + minutePart;
      setLocalVal(nextVal); onHora(hourValue); onMin(minutePart || "");
      if (hourValue && minutePart.length === 2) { isLast ? inputRef.current?.blur() : onComplete?.(); }
      return;
    }
    if (cleaned.length === 1) {
      const n = parseInt(cleaned, 10);
      if (n >= 3 && n <= 9) { setLocalVal(`0${n}:`); onHora(`0${n}`); onMin(""); return; }
      setLocalVal(cleaned); onHora(cleaned); onMin(""); return;
    }
    const hourStr = cleaned.slice(0, 2);
    const hourNum = parseInt(hourStr, 10);
    if (hourNum > 23) { setError("Hora inválida (máx 23)"); return; }
    const minuteStr = cleaned.slice(2, 4);
    const minNum = minuteStr ? parseInt(minuteStr, 10) : -1;
    if (minuteStr.length === 2 && minNum > 59) { setError("Minutos inválidos (máx 59)"); return; }
    setLocalVal(`${hourStr}${minuteStr ? `:${minuteStr}` : ""}`); onHora(hourStr); onMin(minuteStr || "");
    if (minuteStr.length === 2) { isLast ? inputRef.current?.blur() : onComplete?.(); }
  };

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        ref={inputRef}
        style={{ ...inputStyle, letterSpacing: "0.08em", fontVariantNumeric: "tabular-nums", borderColor: hasError ? "#dc2626" : undefined }}
        placeholder="08:30" value={localVal} maxLength={5}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? "#dc2626" : "var(--gray)"; }}
      />
      {error && <div style={{ fontSize: 11, color: "#dc2626", marginTop: 4 }}>{error}</div>}
    </div>
  );
};

type FinSelectorProps = {
  label: string;
  horaVal: string;
  minVal: string;
  onHora: (v: string) => void;
  onMin: (v: string) => void;
  labelStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
  refKey: string;
  finRefs: React.MutableRefObject<Record<string, HTMLInputElement | null>>;
  hasError?: boolean;
};

const FinSelector = ({ label, horaVal, minVal, onHora, onMin, labelStyle, inputStyle, refKey, finRefs, hasError }: FinSelectorProps) => {
  const [localVal, setLocalVal] = useState(() => horaVal ? `${horaVal}${minVal ? `:${minVal}` : ""}` : "");
  const [error, setError] = useState("");

  useEffect(() => {
    setLocalVal(horaVal ? `${horaVal}${minVal ? `:${minVal}` : ""}` : "");
  }, [horaVal, minVal]);

  const handleChange = (raw: string) => {
    const cleaned = raw.replace(/[^0-9:]/g, "");
    setError("");
    if (!cleaned) { setLocalVal(""); onHora(""); onMin(""); return; }
    if (cleaned.includes(":")) {
      const [h, m] = cleaned.split(":");
      const hNum = parseInt(h.slice(0, 2), 10);
      if (hNum > 23) { setError("Hora inválida"); return; }
      const hVal = String(hNum).padStart(2, "0");
      const mPart = m.slice(0, 2);
      if (mPart.length === 2 && parseInt(mPart, 10) > 59) { setError("Minutos inválidos"); return; }
      setLocalVal(hVal + (mPart || cleaned.endsWith(":") ? ":" : "") + mPart);
      onHora(hVal); onMin(mPart || "");
      if (hVal && mPart.length === 2) { finRefs.current[refKey]?.blur(); }
      return;
    }
    if (cleaned.length === 1) {
      const n = parseInt(cleaned, 10);
      if (n >= 3 && n <= 9) { setLocalVal(`0${n}:`); onHora(`0${n}`); onMin(""); return; }
      setLocalVal(cleaned); onHora(cleaned); onMin(""); return;
    }
    const hStr = cleaned.slice(0, 2);
    const hNum = parseInt(hStr, 10);
    if (hNum > 23) { setError("Hora inválida (máx 23)"); return; }
    const mStr = cleaned.slice(2, 4);
    if (mStr.length === 2 && parseInt(mStr, 10) > 59) { setError("Minutos inválidos"); return; }
    setLocalVal(`${hStr}${mStr ? `:${mStr}` : ""}`); onHora(hStr); onMin(mStr || "");
    if (mStr.length === 2) { finRefs.current[refKey]?.blur(); }
  };

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        ref={(el) => { finRefs.current[refKey] = el; }}
        style={{ ...inputStyle, letterSpacing: "0.08em", fontVariantNumeric: "tabular-nums", borderColor: hasError ? "#dc2626" : undefined }}
        placeholder="08:30" value={localVal} maxLength={5}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? "#dc2626" : "var(--gray)"; }}
      />
      {error && <div style={{ fontSize: 11, color: "#dc2626", marginTop: 4 }}>{error}</div>}
    </div>
  );
};

export default function SimulatorSection() {
  const WA_NUMBER = "59896127376";
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const maxDateStr = maxDate.toISOString().split("T")[0];
  const DIAS_SEMANA = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const zonasPorDepartamento: Record<string, string[]> = {
    Montevideo: [
      "Ciudad Vieja / Centro",
      "Pocitos / Punta Carretas",
      "Parque Rodó / Parque Batlle",
      "Buceo / Malvín / Punta Gorda",
      "Carrasco / Carrasco Norte",
      "San Nicolás / Los Olivos",
      "Prado / Aires Puros",
      "Otro",
    ],
    Canelones: [
      "Ciudad de la Costa / Solymar",
      "Lomas de la Tahona",
      "Altos de la Tahona",
      "Viñedos de la Tahona",
      "Carmel",
      "Canelones ciudad",
      "Otro",
    ],
    Maldonado: [
      "Punta del Este",
      "Maldonado ciudad",
      "San Carlos",
      "La Barra / Manantiales",
      "José Ignacio",
      "Punta Ballena / Portezuelo",
      "Otro",
    ],
  };

  const [form, setForm] = useState({
    nombre: "",
    servicio: "",
    tipoBabysitting: "",
    cantDias: "",
    dias: [] as Dia[],
    diasSemana: [] as string[],
    horarioFijoInicioH: "", horarioFijoInicioM: "",
    horarioFijoFinH: "", horarioFijoFinM: "",
    hastaCuando: "Indefinido", hastaFecha: "",
    horaInicioH: "", horaInicioM: "",
    horaFinH: "", horaFinM: "",
    cantNinos: "", edades: "",
    departamento: "", zona: "", zonaOtro: "",
    tipoEvento: "", cantNinosEvento: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const finRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    const leerServicio = () => {
      const params = new URLSearchParams(window.location.search);
      const servicio = params.get("servicio");
      if (servicio && ["Babysitting", "Evento"].includes(servicio)) {
        setForm((prev) => ({ ...prev, servicio }));
      }
    };
    leerServicio();
    window.addEventListener("popstate", leerServicio);
    return () => window.removeEventListener("popstate", leerServicio);
  }, []);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const updateDia = (index: number, field: keyof Dia, value: string) => {
    setForm((prev) => {
      const newDias = [...prev.dias];
      newDias[index] = { ...newDias[index], [field]: value };
      return { ...prev, dias: newDias };
    });
    setErrors((prev) => { const n = { ...prev }; delete n[`dia-${index}-${field}`]; return n; });
  };

  const copiarDia1 = (index: number) => {
    setForm((prev) => {
      if (!prev.dias[0]) return prev;
      const newDias = [...prev.dias];
      newDias[index] = {
        ...newDias[index],
        horaInicio: prev.dias[0].horaInicio,
        minInicio: prev.dias[0].minInicio,
        horaFin: prev.dias[0].horaFin,
        minFin: prev.dias[0].minFin,
      };
      return { ...prev, dias: newDias };
    });
  };

  const handleCantDias = (cant: string) => {
    const n = parseInt(cant);
    const newDias: Dia[] = Array.from({ length: n }, (_, i) =>
      form.dias[i] || { fecha: today, horaInicio: "", minInicio: "", horaFin: "", minFin: "" }
    );
    setForm((prev) => ({ ...prev, cantDias: cant, dias: newDias }));
  };

  const toggleDiaSemana = (dia: string) => {
    setForm((prev) => {
      const updated = prev.diasSemana.includes(dia)
        ? prev.diasSemana.filter((d) => d !== dia)
        : [...prev.diasSemana, dia];
      return { ...prev, diasSemana: updated };
    });
    setErrors((prev) => { const n = { ...prev }; delete n["diasSemana"]; return n; });
  };

  const cantNinosOptions = () => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10 o más"];

  const duracionMinutos = (h1: string, m1: string, h2: string, m2: string): number => {
    if (!h1 || !h2) return 0;
    const mins1 = parseInt(h1) * 60 + parseInt(m1 || "0");
    let mins2 = parseInt(h2) * 60 + parseInt(m2 || "0");
    if (mins2 <= mins1) mins2 += 24 * 60;
    return mins2 - mins1;
  };

  const horasDeAlerta = (h1: string, m1: string, h2: string, m2: string) =>
    duracionMinutos(h1, m1, h2, m2) > 13 * 60;

  const validarFecha = (fechaStr: string): string | null => {
    if (!fechaStr) return null;
    const [year, month, day] = fechaStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getMonth() !== month - 1) return "Fecha inválida";
    if (fechaStr < today) return "No puede ser anterior a hoy";
    if (fechaStr > maxDateStr) return "No puede ser mayor a un año";
    return null;
  };

  // Devuelve la zona final a usar en el mensaje (texto libre si es "Otro")
  const zonaFinal = () => {
    if (form.zona === "Otro") return form.zonaOtro.trim() || "Otro";
    return form.zona;
  };

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e["nombre"] = "Ingresá tu nombre";
    if (!form.servicio) e["servicio"] = "Seleccioná un servicio";
    if (!form.departamento) e["departamento"] = "Seleccioná un departamento";
    if (!form.zona) e["zona"] = "Seleccioná una zona";
    if (form.zona === "Otro" && !form.zonaOtro.trim()) e["zonaOtro"] = "Ingresá tu zona";
    if (!form.edades.trim()) e["edades"] = "Ingresá las edades";

    if (form.servicio === "Babysitting") {
      if (!form.tipoBabysitting) e["tipoBabysitting"] = "Seleccioná puntual o fijo";
      if (form.tipoBabysitting === "Puntual") {
        if (!form.cantDias) e["cantDias"] = "Seleccioná la cantidad de días";
        form.dias.forEach((d, i) => {
          if (!d.fecha) e[`dia-${i}-fecha`] = "Ingresá la fecha";
          if (!d.horaInicio) e[`dia-${i}-horaInicio`] = "Ingresá hora de inicio";
          if (!d.horaFin) e[`dia-${i}-horaFin`] = "Ingresá hora de fin";
        });
      }
      if (form.tipoBabysitting === "Fijo") {
        if (form.diasSemana.length === 0) e["diasSemana"] = "Seleccioná al menos un día";
        if (!form.horarioFijoInicioH) e["horarioFijoInicio"] = "Ingresá hora de inicio";
        if (!form.horarioFijoFinH) e["horarioFijoFin"] = "Ingresá hora de fin";
      }
      if (!form.cantNinos) e["cantNinos"] = "Seleccioná cantidad de niños";
    }

    if (form.servicio === "Evento") {
      if (!form.tipoEvento) e["tipoEvento"] = "Seleccioná el tipo de evento";
      if (!form.cantNinosEvento.trim()) e["cantNinosEvento"] = "Ingresá la cantidad aproximada";
      if (!form.horaInicioH) e["horaInicio"] = "Ingresá hora de inicio";
      if (!form.horaFinH) e["horaFin"] = "Ingresá hora de fin";
    }

    return e;
  };

  const generateMessage = () => {
    let msg = `Hola! Quiero coordinar un servicio de Parents' Break\n\n`;
    msg += `*Nombre:* ${form.nombre}\n*Servicio:* ${form.servicio}\n`;
    if (form.servicio === "Babysitting") {
      msg += `*Modalidad:* ${form.tipoBabysitting}\n`;
      if (form.tipoBabysitting === "Puntual") {
        form.dias.forEach((d, i) => {
          msg += `\n*Día ${i + 1}:*\n  Fecha: ${d.fecha}\n  Horario: ${d.horaInicio}:${d.minInicio || "00"} - ${d.horaFin}:${d.minFin || "00"}\n`;
        });
      } else if (form.tipoBabysitting === "Fijo") {
        msg += `*Días:* ${form.diasSemana.join(", ")}\n`;
        msg += `*Horario:* ${form.horarioFijoInicioH}:${form.horarioFijoInicioM || "00"} - ${form.horarioFijoFinH}:${form.horarioFijoFinM || "00"}\n`;
        msg += `*Desde:* ${form.dias[0]?.fecha || ""}\n`;
        msg += `*Hasta:* ${form.hastaCuando === "Indefinido" ? "Indefinido" : form.hastaFecha}\n`;
      }
    } else if (form.servicio === "Evento") {
      msg += `*Tipo de evento:* ${form.tipoEvento}\n`;
      msg += `*Horario:* ${form.horaInicioH}:${form.horaInicioM || "00"} - ${form.horaFinH}:${form.horaFinM || "00"}\n`;
      msg += `*Cantidad aproximada de niños:* ${form.cantNinosEvento}\n`;
    }
    if (form.servicio !== "Evento") msg += `\n*Cantidad de niños:* ${form.cantNinos}\n`;
    msg += `*Edades:* ${form.edades}\n*Departamento:* ${form.departamento}\n*Zona:* ${zonaFinal()}\n`;
    if (form.comentarios) msg += `*Comentarios:* ${form.comentarios}\n`;
    return encodeURIComponent(msg);
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      const firstKey = Object.keys(e)[0];
      const el = document.getElementById(`field-${firstKey}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    window.open(`https://wa.me/${WA_NUMBER}?text=${generateMessage()}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 15,
    border: "1.5px solid var(--gray)", background: "var(--white)", color: "var(--text)",
    fontFamily: "'Source Sans 3', sans-serif", outline: "none", transition: "border-color .15s",
  };

  const inputErr = (key: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: errors[key] ? "#dc2626" : undefined,
  });

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 13, fontWeight: 700,
    color: "var(--text)", marginBottom: 6, letterSpacing: ".02em",
  };

  const btnToggle = (active: boolean): React.CSSProperties => ({
    flex: 1, padding: "11px", borderRadius: 10, border: "1.5px solid",
    borderColor: active ? "var(--blue)" : "var(--gray)",
    background: active ? "var(--blue-light)" : "var(--white)",
    color: active ? "var(--blue)" : "var(--text-soft)",
    fontWeight: 700, fontSize: 14, cursor: "pointer",
    fontFamily: "'Source Sans 3', sans-serif", transition: "all .15s",
  });

  const errMsg = (key: string) => errors[key] ? (
    <div style={{ fontSize: 11, color: "#dc2626", marginTop: 4 }}>{errors[key]}</div>
  ) : null;

  const alertStyle: React.CSSProperties = {
    fontSize: 12, color: "#dc2626", background: "#fef2f2",
    border: "1px solid #fecaca", borderRadius: 8, padding: "8px 12px", marginTop: 8,
  };

  const warnStyle: React.CSSProperties = {
    fontSize: 12, color: "#92400e", background: "#fffbeb",
    border: "1px solid #fde68a", borderRadius: 8, padding: "8px 12px", marginTop: 8,
  };

  const focusRef = (key: string) => {
    setTimeout(() => { finRefs.current[key]?.focus(); }, 30);
  };

  return (
    <section id="simulador" className="sim-section" style={{ padding: "96px 0", background: "var(--white)" }}>
      <div className="sim-container" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-block", background: "rgba(37,211,102,.12)", color: "var(--whatsapp)",
            fontWeight: 700, fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: 99, marginBottom: 16,
          }}>Rápido y fácil</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, marginBottom: 12 }}>Coordina tu servicio</h2>
          <p style={{ fontSize: 16, color: "var(--text-soft)" }}>
            Completá el formulario y te preparamos automáticamente un mensaje listo para enviar por WhatsApp.
          </p>
        </div>

        <div className="sim-form" style={{
          background: "var(--white)", borderRadius: 24,
          border: "1.5px solid var(--gray)", padding: "40px", boxShadow: "var(--shadow-lg)",
        }}>
          {/* Error banner */}
          {Object.keys(errors).length > 0 && (
            <div style={{
              background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: 12,
              padding: "14px 18px", marginBottom: 24,
              display: "flex", alignItems: "flex-start", gap: 10,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", marginBottom: 6 }}>
                  Completá los siguientes campos antes de enviar:
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 3 }}>
                  {Object.values(errors).map((msg, i) => (
                    <li key={i} style={{ fontSize: 12, color: "#dc2626" }}>· {msg}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="sim-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            <div id="field-nombre">
              <label style={labelStyle}>Tu nombre *</label>
              <input
                style={inputErr("nombre")} placeholder="Ej: María González" value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors["nombre"] ? "#dc2626" : "var(--gray)"; }}
              />
              {errMsg("nombre")}
            </div>

            <div id="field-servicio">
              <label style={labelStyle}>Tipo de servicio *</label>
              <select style={{ ...inputErr("servicio"), cursor: "pointer" }} value={form.servicio}
                onChange={(e) => update("servicio", e.target.value)}>
                <option value="">Seleccioná un servicio</option>
                <option>Babysitting</option>
                <option>Evento</option>
              </select>
              {errMsg("servicio")}
            </div>

            {/* ── BABYSITTING ── */}
            {form.servicio === "Babysitting" && (
              <>
                <div className="full-col" id="field-tipoBabysitting">
                  <label style={labelStyle}>¿Es un servicio puntual o fijo?</label>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Puntual", "Fijo"].map((opt) => (
                      <button key={opt} onClick={() => update("tipoBabysitting", opt)} style={btnToggle(form.tipoBabysitting === opt)}>{opt}</button>
                    ))}
                  </div>
                  {errMsg("tipoBabysitting")}
                </div>

                {form.tipoBabysitting === "Puntual" && (
                  <>
                    <div className="full-col" id="field-cantDias">
                      <label style={labelStyle}>¿Cuántos días?</label>
                      <div style={{ display: "flex", gap: 10 }}>
                        {["1", "2", "3", "4"].map((n) => (
                          <button key={n} onClick={() => handleCantDias(n)} style={btnToggle(form.cantDias === n)}>{n}</button>
                        ))}
                      </div>
                      {errMsg("cantDias")}
                    </div>

                    {form.dias.map((dia, i) => (
                      <div key={i} className="full-col" style={{
                        background: "var(--off)", borderRadius: 14, padding: "20px", border: "1.5px solid var(--gray)",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                          <span style={{ fontWeight: 700, fontSize: 15, color: "var(--blue)" }}>Día {i + 1}</span>
                          {i > 0 && (
                            <button onClick={() => copiarDia1(i)} style={{
                              fontSize: 12, fontWeight: 700, color: "var(--blue)",
                              background: "var(--blue-light)", border: "1.5px solid var(--blue-mid)",
                              borderRadius: 99, padding: "5px 14px", cursor: "pointer",
                              fontFamily: "'Source Sans 3', sans-serif",
                            }}>Copiar horario del Día 1</button>
                          )}
                        </div>
                        <div className="dia-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                          <div id={`field-dia-${i}-fecha`}>
                            <label style={labelStyle}>Fecha</label>
                            <input type="date" style={inputErr(`dia-${i}-fecha`)} value={dia.fecha} min={today} max={maxDateStr}
                              onChange={(e) => updateDia(i, "fecha", e.target.value)} />
                            {validarFecha(dia.fecha) && <div style={alertStyle}>{validarFecha(dia.fecha)}</div>}
                            {errMsg(`dia-${i}-fecha`)}
                          </div>
                          <div id={`field-dia-${i}-horaInicio`}>
                            <TimeSelector
                              label="Hora inicio" hora={dia.horaInicio} min={dia.minInicio}
                              onHora={(v) => updateDia(i, "horaInicio", v)}
                              onMin={(v) => updateDia(i, "minInicio", v)}
                              labelStyle={labelStyle} inputStyle={inputStyle}
                              isLast={false} onComplete={() => focusRef(`dia-fin-${i}`)}
                              hasError={!!errors[`dia-${i}-horaInicio`]}
                            />
                            {errMsg(`dia-${i}-horaInicio`)}
                          </div>
                          <div id={`field-dia-${i}-horaFin`}>
                            <FinSelector
                              label="Hora fin" horaVal={dia.horaFin} minVal={dia.minFin}
                              onHora={(v) => updateDia(i, "horaFin", v)}
                              onMin={(v) => updateDia(i, "minFin", v)}
                              labelStyle={labelStyle} inputStyle={inputStyle}
                              refKey={`dia-fin-${i}`} finRefs={finRefs}
                              hasError={!!errors[`dia-${i}-horaFin`]}
                            />
                            {errMsg(`dia-${i}-horaFin`)}
                          </div>
                        </div>
                        {horasDeAlerta(dia.horaInicio, dia.minInicio, dia.horaFin, dia.minFin) && (
                          <div style={warnStyle}>El horario supera las 13 horas. Verificá que sea correcto.</div>
                        )}
                      </div>
                    ))}
                  </>
                )}

                {form.tipoBabysitting === "Fijo" && (
                  <>
                    <div className="full-col" id="field-diasSemana">
                      <label style={labelStyle}>Días de la semana</label>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {DIAS_SEMANA.map((dia) => (
                          <button key={dia} onClick={() => toggleDiaSemana(dia)}
                            style={{ ...btnToggle(form.diasSemana.includes(dia)), flex: "none", padding: "8px 14px" }}>
                            {dia}
                          </button>
                        ))}
                      </div>
                      {errMsg("diasSemana")}
                    </div>
                    <div id="field-horarioFijoInicio">
                      <TimeSelector
                        label="Hora inicio" hora={form.horarioFijoInicioH} min={form.horarioFijoInicioM}
                        onHora={(v) => update("horarioFijoInicioH", v)}
                        onMin={(v) => update("horarioFijoInicioM", v)}
                        labelStyle={labelStyle} inputStyle={inputStyle}
                        isLast={false} onComplete={() => focusRef("fijo-fin")}
                        hasError={!!errors["horarioFijoInicio"]}
                      />
                      {errMsg("horarioFijoInicio")}
                    </div>
                    <div id="field-horarioFijoFin">
                      <FinSelector
                        label="Hora fin" horaVal={form.horarioFijoFinH} minVal={form.horarioFijoFinM}
                        onHora={(v) => update("horarioFijoFinH", v)}
                        onMin={(v) => update("horarioFijoFinM", v)}
                        labelStyle={labelStyle} inputStyle={inputStyle}
                        refKey="fijo-fin" finRefs={finRefs}
                        hasError={!!errors["horarioFijoFin"]}
                      />
                      {errMsg("horarioFijoFin")}
                    </div>
                    {horasDeAlerta(form.horarioFijoInicioH, form.horarioFijoInicioM, form.horarioFijoFinH, form.horarioFijoFinM) && (
                      <div className="full-col" style={warnStyle}>El horario supera las 13 horas. Verificá que sea correcto.</div>
                    )}
                    <div>
                      <label style={labelStyle}>Desde cuándo</label>
                      <input type="date" style={inputStyle}
                        value={form.dias[0]?.fecha || today} min={today} max={maxDateStr}
                        onChange={(e) => {
                          setForm((prev) => {
                            const newDias = [...prev.dias];
                            newDias[0] = { ...(newDias[0] || { horaInicio: "", minInicio: "", horaFin: "", minFin: "" }), fecha: e.target.value };
                            return { ...prev, dias: newDias };
                          });
                        }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Hasta cuándo</label>
                      <div style={{ display: "flex", gap: 10, marginBottom: form.hastaCuando === "Fecha" ? 10 : 0 }}>
                        {["Indefinido", "Fecha"].map((opt) => (
                          <button key={opt} onClick={() => update("hastaCuando", opt)} style={btnToggle(form.hastaCuando === opt)}>
                            {opt === "Fecha" ? "Hasta una fecha" : "Indefinido"}
                          </button>
                        ))}
                      </div>
                      {form.hastaCuando === "Fecha" && (
                        <input type="date" style={{ ...inputStyle, marginTop: 10 }} value={form.hastaFecha}
                          min={today} max={maxDateStr} onChange={(e) => update("hastaFecha", e.target.value)} />
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {/* ── EVENTO ── */}
            {form.servicio === "Evento" && (
              <>
                <div id="field-tipoEvento">
                  <label style={labelStyle}>Tipo de evento</label>
                  <select style={{ ...inputErr("tipoEvento"), cursor: "pointer" }} value={form.tipoEvento}
                    onChange={(e) => update("tipoEvento", e.target.value)}>
                    <option value="">Seleccioná</option>
                    <option>Cumpleaños</option>
                    <option>Evento empresarial</option>
                    <option>Evento familiar</option>
                    <option>Casamiento</option>
                    <option>Otro</option>
                  </select>
                  {errMsg("tipoEvento")}
                </div>
                <div id="field-cantNinosEvento">
                  <label style={labelStyle}>Cantidad aprox. de niños</label>
                  <input style={inputErr("cantNinosEvento")} placeholder="Ej: 10-15 niños" value={form.cantNinosEvento}
                    onChange={(e) => update("cantNinosEvento", e.target.value)}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = errors["cantNinosEvento"] ? "#dc2626" : "var(--gray)"; }} />
                  {errMsg("cantNinosEvento")}
                </div>
                <div id="field-horaInicio">
                  <TimeSelector
                    label="Hora de inicio" hora={form.horaInicioH} min={form.horaInicioM}
                    onHora={(v) => update("horaInicioH", v)} onMin={(v) => update("horaInicioM", v)}
                    labelStyle={labelStyle} inputStyle={inputStyle}
                    isLast={false} onComplete={() => focusRef("evento-fin")}
                    hasError={!!errors["horaInicio"]}
                  />
                  {errMsg("horaInicio")}
                </div>
                <div id="field-horaFin">
                  <FinSelector
                    label="Hora de fin" horaVal={form.horaFinH} minVal={form.horaFinM}
                    onHora={(v) => update("horaFinH", v)} onMin={(v) => update("horaFinM", v)}
                    labelStyle={labelStyle} inputStyle={inputStyle}
                    refKey="evento-fin" finRefs={finRefs}
                    hasError={!!errors["horaFin"]}
                  />
                  {errMsg("horaFin")}
                </div>
                {horasDeAlerta(form.horaInicioH, form.horaInicioM, form.horaFinH, form.horaFinM) && (
                  <div className="full-col" style={warnStyle}>El horario supera las 13 horas. Verificá que sea correcto.</div>
                )}
              </>
            )}

            {/* ── DEPARTAMENTO ── */}
            <div id="field-departamento">
              <label style={labelStyle}>Departamento *</label>
              <select style={{ ...inputErr("departamento"), cursor: "pointer" }} value={form.departamento}
                onChange={(e) => { update("departamento", e.target.value); update("zona", ""); update("zonaOtro", ""); }}>
                <option value="">Seleccioná</option>
                <option>Montevideo</option>
                <option>Canelones</option>
                <option>Maldonado</option>
              </select>
              {errMsg("departamento")}
            </div>

            {/* ── ZONA ── */}
            {form.departamento && (
              <div id="field-zona">
                <label style={labelStyle}>Zona *</label>
                <select
                  style={{ ...inputErr("zona"), cursor: "pointer" }}
                  value={form.zona}
                  onChange={(e) => { update("zona", e.target.value); update("zonaOtro", ""); }}
                >
                  <option value="">Seleccioná tu zona</option>
                  {zonasPorDepartamento[form.departamento]?.map((z) => (
                    <option key={z}>{z}</option>
                  ))}
                </select>
                {errMsg("zona")}
              </div>
            )}

            {/* ── ZONA OTRO (texto libre) ── */}
            {form.zona === "Otro" && (
              <div className="full-col" id="field-zonaOtro">
                <label style={labelStyle}>¿En qué zona? *</label>
                <input
                  style={inputErr("zonaOtro")}
                  placeholder="Ej: Colón, Cerro, La Unión..."
                  value={form.zonaOtro}
                  onChange={(e) => update("zonaOtro", e.target.value)}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors["zonaOtro"] ? "#dc2626" : "var(--gray)"; }}
                />
                {errMsg("zonaOtro")}
              </div>
            )}

            {/* ── CANTIDAD DE NIÑOS ── */}
            {form.servicio !== "Evento" && (
              <div id="field-cantNinos">
                <label style={labelStyle}>Cantidad de niños</label>
                <select style={{ ...inputErr("cantNinos"), cursor: "pointer" }} value={form.cantNinos}
                  onChange={(e) => update("cantNinos", e.target.value)}>
                  <option value="">Seleccioná</option>
                  {cantNinosOptions().map((n) => <option key={n}>{n}</option>)}
                </select>
                {errMsg("cantNinos")}
              </div>
            )}

            <div id="field-edades">
              <label style={labelStyle}>Edades *</label>
              <input style={inputErr("edades")} placeholder="Ej: 2 y 5 años" value={form.edades}
                onChange={(e) => update("edades", e.target.value)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors["edades"] ? "#dc2626" : "var(--gray)"; }} />
              {errMsg("edades")}
            </div>

            <div className="full-col">
              <label style={labelStyle}>Comentarios adicionales</label>
              <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
                placeholder="Alguna preferencia, alergia, necesidad especial..."
                value={form.comentarios} onChange={(e) => update("comentarios", e.target.value)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--blue)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--gray)"; }} />
            </div>
          </div>

          <button onClick={handleSend} style={{
            marginTop: 28, width: "100%",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            background: "var(--whatsapp)", color: "white", padding: "17px", borderRadius: 99,
            fontWeight: 800, fontSize: 17, fontFamily: "'Source Sans 3', sans-serif",
            boxShadow: "0 4px 24px rgba(37,211,102,.35)", transition: "transform .18s, box-shadow .18s", border: "none",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,.35)"; }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar por WhatsApp
          </button>

          <p style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)", marginTop: 14 }}>
            No guardamos tus datos. El mensaje se genera directamente en WhatsApp.
          </p>
        </div>
      </div>

      <style>{`
        .sim-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .full-col { grid-column: 1 / -1; }
        .dia-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        @media (max-width: 768px) { .sim-section { padding: 72px 0; } }
        @media (max-width: 600px) {
          .sim-section { padding: 64px 0; }
          .sim-container { padding: 0 16px; }
          .sim-form { padding: 24px; }
          .sim-grid { grid-template-columns: 1fr !important; gap: 16px; }
          .dia-grid { grid-template-columns: 1fr !important; gap: 10px; }
        }
      `}</style>
    </section>
  );
}
