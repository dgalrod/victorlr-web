"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-1.jpeg", alt: "VictorLR en directo 1" },
  { src: "/images/gallery/gallery-2.jpeg", alt: "VictorLR en directo 2" },
  { src: "/images/gallery/gallery-3.jpeg", alt: "VictorLR en directo 3" },
  { src: "/images/gallery/gallery-4.jpeg", alt: "VictorLR en directo 4" },
  { src: "/images/gallery/gallery-5.jpeg", alt: "VictorLR en directo 5" },
  { src: "/images/gallery/gallery-6.jpeg", alt: "VictorLR en directo 6" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="galeria" className="bg-bg-primary py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-5xl">
            EN DIRECTO
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-accent-neon" />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-4/3 overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-accent-neon/0 transition-colors duration-300 group-hover:bg-accent-neon/20" />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={GALLERY_IMAGES.map((img) => ({ src: img.src }))}
        styles={{
          container: { backgroundColor: "rgba(13, 15, 13, 0.95)" },
        }}
      />
    </section>
  );
}
