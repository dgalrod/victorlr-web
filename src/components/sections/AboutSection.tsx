"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const STATS = [
  // TODO: cambiar — stats reales
  { value: "50+", label: "Eventos" },
  { value: "5+", label: "Años" },
  { value: "∞", label: "Energía" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const slideLeft = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const slideRight = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="sobre-mi" className="bg-bg-primary py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-3/4 overflow-hidden border-l-[3px] border-accent-neon">
              <Image
                src="/images/about/about-1.jpeg"
                alt="VictorLR"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent-neon">
              Sobre mí
            </p>
            <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              {/* TODO: cambiar — título about */}
              Pasión por la música, energía en cada set
            </h2>

            <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
              {/* TODO: cambiar — textos del cliente */}
              <p>
                Desde los escenarios de Bélmez hasta cualquier rincón donde la
                música conecte, VictorLR lleva años construyendo su sonido. Una
                mezcla de house, techno y ritmos electrónicos que hacen vibrar
                cada pista.
              </p>
              <p>
                Lo que empezó como una pasión adolescente se ha convertido en una
                carrera dedicada a crear experiencias sonoras únicas. Cada sesión
                es un viaje, cada evento una historia nueva.
              </p>
              <p>
                Disponible para festivales, clubs, bodas y eventos privados.
                Siempre con la misma filosofía: hacer que la gente sienta la
                música.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-heading text-3xl font-bold text-accent-neon md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
