"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ContactForm {
  name: string;
  email: string;
  eventType: string;
  message: string;
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.81.12v-3.49a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.4a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.84 1.55V7.15a4.85 4.85 0 0 1-1.08-.46z" />
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1 18V11h1v7H1zm2-1V9h1v8H3zm2 1V8h1v10H5zm2-1V6h1v11H7zm2 1V4.5h1V18H9zm2-1V2h1v15h-1z" />
    </svg>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-bg-secondary bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted/50 transition-colors duration-200 focus:border-accent-neon focus:outline-none focus:ring-1 focus:ring-accent-neon";

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(57, 255, 20, 0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
              ¿TRABAJAMOS
              <br />
              <span className="text-accent-neon">JUNTOS?</span>
            </h2>

            <p className="mt-6 max-w-md text-lg text-text-muted leading-relaxed">
              {/* TODO: cambiar — subtítulo contacto */}
              Disponible para eventos, bodas, fiestas privadas y residencias.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:info@victorlr.com"
                className="flex items-center gap-3 text-text-muted hover:text-accent-neon transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* TODO: cambiar — email real */}
                info@victorlr.com
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {/* TODO: cambiar — links reales de redes */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bg-primary p-3 text-text-muted transition-all hover:border-accent-neon hover:text-accent-neon"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bg-primary p-3 text-text-muted transition-all hover:border-accent-neon hover:text-accent-neon"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-bg-primary p-3 text-text-muted transition-all hover:border-accent-neon hover:text-accent-neon"
                aria-label="SoundCloud"
              >
                <SoundCloudIcon />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <input
                {...register("name", { required: "El nombre es obligatorio" })}
                placeholder="Nombre"
                className={inputClasses}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-accent-magenta">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email no válido",
                  },
                })}
                placeholder="Email"
                type="email"
                className={inputClasses}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-accent-magenta">{errors.email.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("eventType", { required: "Selecciona un tipo de evento" })}
                className={`${inputClasses} appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  Tipo de evento
                </option>
                {/* TODO: cambiar — tipos de evento */}
                <option value="boda">Boda</option>
                <option value="fiesta-privada">Fiesta privada</option>
                <option value="festival">Festival</option>
                <option value="club">Club / Discoteca</option>
                <option value="corporativo">Evento corporativo</option>
                <option value="otro">Otro</option>
              </select>
              {errors.eventType && (
                <p className="mt-1 text-xs text-accent-magenta">{errors.eventType.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", { required: "El mensaje es obligatorio" })}
                placeholder="Cuéntame sobre tu evento..."
                rows={5}
                className={`${inputClasses} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-accent-magenta">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-accent-neon px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-bg-primary transition-all duration-300 hover:bg-accent-neon/90 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar mensaje"
              )}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-accent-green">
                ¡Mensaje enviado correctamente! Te responderé lo antes posible.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-accent-magenta">
                Error al enviar. Inténtalo de nuevo o escríbeme directamente.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
