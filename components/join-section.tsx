"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function JoinSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  // Animaciones scroll-driven
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])
  const cardY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0])

  const btnOpacity = useTransform(scrollYProgress, [0.40, 0.55], [0, 1])
  const btnY = useTransform(scrollYProgress, [0.40, 0.55], [30, 0])

  return (
    <section ref={wrapperRef} className="relative mt-5">
      {/* Wrapper para scroll height */}
      <div style={{ height: "220vh" }} className="relative">
        {/* Sticky container */}
        <div className="sticky top-0 z-10 overflow-hidden py-24 md:py-32 px-6 md:px-16">
          {/* Background */}
          <div
            className="absolute inset-0 z-0"
            style={{ background: "#000000" }}
          />
          {/* Rojo — esquina inferior derecha */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse at 100% 100%, #c0001a 0%, #c0001a 15%, transparent 50%)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center">
            {/* Título */}
            <h2 className="text-5xl md:text-7xl text-white leading-none mb-6">
              <ClipReveal>TRABAJÁ</ClipReveal>
              <ClipReveal delay={0.12}>CON NOSOTROS</ClipReveal>
            </h2>

            {/* Card */}
            <motion.div
              style={{ opacity: cardOpacity, y: cardY }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 md:ml-[10%]"
            >
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                Somos un equipo en crecimiento y siempre estamos en busca de talento.
                Si sos creador/a de contenido, marketer, productor/a audiovisual
                o tenés ganas de sumarte a un equipo que hace las cosas distintas,
                completá el formulario y contanos por qué querés ser parte.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Creadores de contenido",
                  "Community Managers",
                  "Diseñadores Gráficos",
                  "Productores Audiovisuales",
                  "Estrategas Digitales",
                  "Copywriters",
                  "Fotógrafos",
                  "Editores de Video",
                ].map((role) => (
                  <span
                    key={role}
                    className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs md:text-sm font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-white/50 text-sm mb-8">
                No importa si tu perfil no encaja exactamente. Si creés que podés aportar,
                mandanos tu info igual.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              style={{ opacity: btnOpacity, y: btnY }}
              className="mt-10"
            >
              <MagneticButton>
                <a
                  href="https://forms.gle/zdJNkX8vi8ozj7Yr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#c0001a] hover:bg-[#a0001a] text-white px-12 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
                >
                  QUIERO SUMARME
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
