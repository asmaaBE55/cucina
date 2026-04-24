import { useState } from "react";
import axios from "axios";
import { Check, Loader2 } from "lucide-react";
import { SITE } from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TIMES = [
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00",
];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
}

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    people: 2,
    date: "",
    time: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // {name}
  const [error, setError] = useState("");

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Inserisci il nome.");
    if (!form.date) return setError("Seleziona una data.");
    if (!form.time) return setError("Seleziona un orario.");
    if (!form.phone && !form.email) return setError("Inserisci telefono o email.");
    if (form.people < 1 || form.people > 50) return setError("Numero di persone non valido.");

    try {
      setLoading(true);
      const { data } = await axios.post(`${API}/reservations`, {
        ...form,
        people: Number(form.people),
      });
      setSuccess({ name: data.name });
      setForm({ name: "", people: 2, date: "", time: "", phone: "", email: "", notes: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Impossibile inviare la prenotazione. Riprova.";
      setError(typeof msg === "string" ? msg : "Errore di rete.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="reservation"
      data-testid="section-reservation"
      className="relative bg-[#FDFBF7] py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left copy */}
        <div className="lg:col-span-5">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="inline-block w-10 h-px bg-[#8A2E2E]" />
            <span className="label-kicker text-[#8A2E2E] text-[11px]">Prenotazione</span>
          </div>
          <h2
            data-testid="reservation-title"
            className="reveal reveal-delay-1 font-serif-display text-[#2C2A29] text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight"
          >
            Un tavolo <em className="italic font-light">tutto</em><br />per te.
          </h2>
          <p className="reveal reveal-delay-2 mt-8 text-[#5C5856] text-base md:text-lg leading-relaxed max-w-md">
            Riserva il tuo posto in pochi secondi. Ti confermeremo la prenotazione entro poche ore —
            oppure chiamaci direttamente per disponibilità immediate.
          </p>

          <div className="reveal reveal-delay-3 mt-10 pt-8 border-t border-[#E8E1D5] space-y-4">
            <div>
              <div className="label-kicker text-[10px] text-[#5C5856]">Telefono</div>
              <a
                href={SITE.phoneHref}
                data-testid="reservation-phone-link"
                className="font-serif-display text-2xl text-[#2C2A29] hover:text-[#8A2E2E] transition-colors"
              >
                {SITE.phone}
              </a>
            </div>
            <div>
              <div className="label-kicker text-[10px] text-[#5C5856]">Indirizzo</div>
              <div className="font-serif-display text-xl text-[#2C2A29]">{SITE.address}</div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-7">
          <div className="reveal bg-[#F2EDE4] p-8 md:p-12 relative overflow-hidden">
            {success ? (
              <div
                data-testid="reservation-success"
                className="py-20 text-center flex flex-col items-center justify-center gap-6 pop-in"
              >
                <div className="w-20 h-20 rounded-full bg-[#4A5D23] text-[#FDFBF7] flex items-center justify-center">
                  <Check size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif-display text-4xl md:text-5xl text-[#2C2A29]">
                  Grazie, {success.name}!
                </h3>
                <p className="text-[#5C5856] max-w-md">
                  La tua richiesta di prenotazione è stata ricevuta. Ti contatteremo a breve
                  per confermare. A presto al Ristorante La Cucina.
                </p>
                <button
                  data-testid="reservation-new-button"
                  onClick={() => setSuccess(null)}
                  className="btn-ghost !text-[#8A2E2E] !border-[#8A2E2E]/50 hover:!border-[#8A2E2E] mt-4"
                >
                  Nuova prenotazione
                </button>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="reservation-form" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="md:col-span-2">
                  <label className="label-kicker text-[10px] text-[#5C5856]">Nome completo</label>
                  <input
                    data-testid="reservation-input-name"
                    type="text"
                    className="input-underline"
                    placeholder="Mario Rossi"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label className="label-kicker text-[10px] text-[#5C5856]">Persone</label>
                  <input
                    data-testid="reservation-input-people"
                    type="number"
                    min={1}
                    max={50}
                    className="input-underline"
                    value={form.people}
                    onChange={(e) => update("people", e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>

                <div>
                  <label className="label-kicker text-[10px] text-[#5C5856]">Data</label>
                  <input
                    data-testid="reservation-input-date"
                    type="date"
                    min={todayISO()}
                    className="input-underline"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="label-kicker text-[10px] text-[#5C5856] mb-3 block">Orario</label>
                  <div
                    data-testid="reservation-time-grid"
                    className="grid grid-cols-4 sm:grid-cols-7 gap-2"
                  >
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        data-testid={`reservation-time-${t}`}
                        onClick={() => update("time", t)}
                        className={`py-2 text-sm border transition-all duration-300 ${
                          form.time === t
                            ? "bg-[#8A2E2E] border-[#8A2E2E] text-[#FDFBF7]"
                            : "bg-transparent border-[#C9C1B3] text-[#2C2A29] hover:border-[#8A2E2E] hover:text-[#8A2E2E]"
                        }`}
                        disabled={loading}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label-kicker text-[10px] text-[#5C5856]">Telefono</label>
                  <input
                    data-testid="reservation-input-phone"
                    type="tel"
                    className="input-underline"
                    placeholder="+41 ..."
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="label-kicker text-[10px] text-[#5C5856]">Email</label>
                  <input
                    data-testid="reservation-input-email"
                    type="email"
                    className="input-underline"
                    placeholder="mario@esempio.ch"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="label-kicker text-[10px] text-[#5C5856]">Note (opzionale)</label>
                  <input
                    data-testid="reservation-input-notes"
                    type="text"
                    className="input-underline"
                    placeholder="Richieste speciali, allergie..."
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div
                    data-testid="reservation-error"
                    className="md:col-span-2 bg-[#8A2E2E]/10 border-l-2 border-[#8A2E2E] px-4 py-3 text-[#8A2E2E] text-sm"
                  >
                    {error}
                  </div>
                )}

                <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-4">
                  <p className="text-xs text-[#5C5856]">
                    Fornisci almeno un recapito tra telefono ed email.
                  </p>
                  <button
                    type="submit"
                    data-testid="reservation-submit"
                    disabled={loading}
                    className="btn-primary"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Invio in corso
                      </>
                    ) : (
                      "Conferma prenotazione"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
