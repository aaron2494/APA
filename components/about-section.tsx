"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const brandLogos = [
  { name: "Nike", image: "/nike-logo.jpg" },
  { name: "Adidas", image: "/adidas-logo.jpg" },
  { name: "Spotify", image: "/spotify-logo.jpg" },
  { name: "Apple", image: "/apple-logo.jpg" },
  { name: "Google", image: "/google-logo.jpg" },
  { name: "Amazon", image: "/amazon-logo.jpg" },
  { name: "Microsoft", image: "/microsoft-logo.jpg" },
  { name: "Samsung", image: "/samsung-logo.jpg" },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
// Transformamos el progreso del scroll para controlar el color
const backgroundColor = useTransform(
  scrollYProgress,
  [0, 0.5, 1], // Ajusta estos valores según cuando quieras que cambie
  ["#000000", "#000000", "#ffffff"] // Negro al inicio, blanco al final
);

  const teamScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1.5, 1, 0.8]);
  const teamOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [1, 1, 1, 1]
  );
  const teamBorderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 24]);

  const brandOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const brandScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);



  return (
 <section id="proyectos" className="relative">
  {/* Background Container que cambia de color */}
  <motion.div 
    className="absolute inset-0 z-0"
 style={{
    backgroundColor: backgroundColor
  }}
  />


  {/* Contenido principal con z-index más alto */}
  <div className="relative z-10">
    {/* Title section */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-5xl md:text-8xl pt-20 font-bold text-white text-center overflow-hidden px-4"
    >
      {/* Impacto */}
      <motion.span
        variants={{
          hidden: { x: -30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="inline-block overflow-hidden"
      >
        Impacto
      </motion.span>

      {/* Espacio */}
      <span className="inline-block">&nbsp;</span>

      {/* Real */}
      <motion.span
        variants={{
          hidden: { x: 30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="inline-block overflow-hidden text-primary"
      >
        Real
      </motion.span>
    </motion.div>

    <div className="flex mb-10 items-center justify-center px-2 py-5">
      <div className="max-w-2xl mx-auto text-center space-y-2">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          Historia de transformación digital, creatividad y resultados
          medibles.
        </motion.p>
      </div>
    </div>

    <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
      <motion.div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="relative w-full max-w-2xl mx-auto px-4">
          {/* Grid container */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-6">
            {/* Top row - brand logos */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`top-${index}`}
                style={{ opacity: brandOpacity, scale: brandScale }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
              >
                <Image
                  src={
                    brandLogos[index]?.image ||
                    "/placeholder.svg?height=200&width=200"
                  }
                  alt={brandLogos[index]?.name || `Brand ${index + 1}`}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </motion.div>
            ))}

            {/* Middle row - brand, team (center), brand */}
            <motion.div
              style={{ opacity: brandOpacity, scale: brandScale }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
            >
              <Image
                src={
                  brandLogos[3]?.image ||
                  "/placeholder.svg?height=200&width=200"
                }
                alt={brandLogos[3]?.name || "Brand 4"}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </motion.div>

            {/* Center - Team image */}
            <motion.div
              style={{
                scale: teamScale,
                opacity: teamOpacity,
                borderRadius: teamBorderRadius,
              }}
              className="relative aspect-square overflow-hidden shadow-2xl ring-4 ring-primary ring-offset-4"
            >
              <Image
                src="/apa-team-photo.jpg"
                alt="APA Marketing Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              ></motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: brandOpacity, scale: brandScale }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
            >
              <Image
                src={
                  brandLogos[4]?.image ||
                  "/placeholder.svg?height=200&width=200"
                }
                alt={brandLogos[4]?.name || "Brand 5"}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </motion.div>

            {/* Bottom row - brand logos */}
            {[5, 6, 7].map((index) => (
              <motion.div
                key={`bottom-${index}`}
                style={{ opacity: brandOpacity, scale: brandScale }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-2 md:p-5"
              >
                <Image
                  src={
                    brandLogos[index]?.image ||
                    "/placeholder.svg?height=200&width=200"
                  }
                  alt={brandLogos[index]?.name || `Brand ${index + 1}`}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
}
