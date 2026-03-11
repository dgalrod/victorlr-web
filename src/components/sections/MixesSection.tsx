"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MIXES = [
  // TODO: cambiar — datos reales de los mixes
  {
    id: 1,
    title: "Urban Vibes",
    genre: "Reggaeton Old School",
    duration: "1:15:00",
    cover: "/images/gallery/gallery-2.jpeg",
    src: "/audio/01 URBAN VIBES REGGAETON OLD SHOOL.wav",
  },
  {
    id: 2,
    title: "Dark Room Sessions",
    genre: "Techno",
    duration: "1:30:00",
    cover: "/images/mixes/mix-1.jpeg",
    src: "",
  },
  {
    id: 3,
    title: "Bélmez After Hours",
    genre: "Deep House",
    duration: "2:00:00",
    cover: "/images/gallery/gallery-1.jpeg",
    src: "",
  },
];

function SoundCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1 18V11h1v7H1zm2-1V9h1v8H3zm2 1V8h1v10H5zm2-1V6h1v11H7zm2 1V4.5h1V18H9zm2-1V2h1v15h-1zm2 0c0 .55-.45 1-1 1h-1V2.5C11 1.12 12.12 0 13.5 0S16 1.12 16 2.5h-1c0-.83-.67-1.5-1.5-1.5S12 1.67 12 2.5V17h8c1.1 0 2-.9 2-2s-.9-2-2-2h-1.5c-.28 0-.5-.22-.5-.5C18 10.57 16.43 9 14.5 9c-.84 0-1.61.3-2.21.8l-.6-.8C12.43 8.37 13.43 8 14.5 8c2.07 0 3.78 1.56 3.97 3.57C18.77 11.21 19.12 11 19.5 11H20c1.66 0 3 1.34 3 3s-1.34 3-3 3h-8c-.55 0-1-.45-1-1v.01z" />
    </svg>
  );
}

function MixcloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.5 12.5C1.5 9.46 3.96 7 7 7c1.52 0 2.9.62 3.89 1.61C11.58 7.62 12.96 7 14.5 7c1.93 0 3.62 1.05 4.54 2.61A4.49 4.49 0 0 1 23.5 14c0 2.49-2.01 4.5-4.5 4.5H7c-3.04 0-5.5-2.46-5.5-5.5v-.5zM7 9c-1.93 0-3.5 1.57-3.5 3.5S5.07 16 7 16h12c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11h-.5c-.28 0-.5-.22-.5-.5C18 8.57 16.43 7 14.5 7c-1.4 0-2.63.83-3.17 2.03l-.33.72-.33-.72C10.13 7.83 8.9 7 7.5 7H7z" />
    </svg>
  );
}

export default function MixesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="mixes" className="bg-bg-secondary py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-5xl">
            MIS MIXES
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent-neon" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MIXES.map((mix, i) => (
            <motion.div
              key={mix.id}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }
              }
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group overflow-hidden rounded-lg bg-bg-primary"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={mix.cover}
                  alt={mix.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent-neon">
                    {mix.genre}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                    {mix.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted">{mix.duration}</p>
                </div>
              </div>

              <div className="p-4">
                <AudioPlayer
                  src={mix.src}
                  showJumpControls={false}
                  showDownloadProgress={false}
                  layout="horizontal-reverse"
                  customAdditionalControls={[]}
                  customVolumeControls={[]}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-sm text-text-muted">Escúchame también en</p>
          <div className="flex items-center gap-6">
            {/* TODO: cambiar — links reales */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent-neon"
              aria-label="SoundCloud"
            >
              <SoundCloudIcon />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent-neon"
              aria-label="Mixcloud"
            >
              <MixcloudIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
