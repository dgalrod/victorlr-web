"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative h-dvh min-h-[600px] flex items-center overflow-hidden">
      <Image
        src="/images/hero/hero-mobile.png"
        alt="VictorLR en directo"
        fill
        priority
        className="object-cover object-top md:hidden"
        sizes="100vw"
      />
      <Image
        src="/images/hero/hero.png"
        alt="VictorLR en directo"
        fill
        priority
        className="hidden md:block object-cover object-right"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-bg-primary/40 md:bg-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-bg-primary/80 via-bg-primary/30 to-bg-primary md:via-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-bg-primary/80 via-bg-primary/40 to-transparent md:from-bg-primary/60 md:via-transparent" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent-neon"
        >
          DJ & Productor · Bélmez
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading font-bold leading-[0.95] text-text-primary"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          VÍCTOR <span className="text-accent-neon">LRX</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-md text-lg text-text-muted md:text-xl"
        >
          {/* TODO: cambiar — bajada principal */}
          Música que mueve. Noches que no se olvidan.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="border-2 border-accent-neon px-8 py-3 text-sm font-bold uppercase tracking-wider text-accent-neon transition-all duration-300 hover:bg-accent-neon hover:text-bg-primary font-heading"
          >
            Contáctame
          </button>
          <button
            onClick={() => scrollTo("mixes")}
            className="px-8 py-3 text-sm font-medium text-text-muted hover:text-accent-neon transition-colors duration-200"
          >
            Escucha mis mixes →
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-text-muted"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
