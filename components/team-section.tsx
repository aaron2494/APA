"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"

const teamLeft = [
  { name: "Dana Santelli & Agostina Mariani",              role: "Fundadoras · Directoras Creativas" },
  { name: "Giuliana Zambaglione",                          role: "Project Manager · Coordinación & Estrategia" },
  { name: "Oriana Restaneo",                               role: "Ejecutiva de cuentas · Coordinación & Estrategia" },
  { name: "Uriel Pollak / Victoria Scarrone / Valentina Penela", role: "Social Media Management · Community Building." },
]

const teamRight = [
  { name: "Juliana Dell'Acqua",   role: "Editora & Motion Designer" },
  { name: "Aaron Francolino",     role: "Full Stack Developer · Soluciones Digitales" },
  { name: "Ignacio Scordia",      role: "Fotógrafo & Filmmaker · Producción Audiovisual" },
  { name: "Alejandro Toledo",     role: "Analista de Medios Digitales · Performance & Data" },
]

export function TeamSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  // Izquierda y derecha — intercaladas desde el inicio
  const left1Opacity  = useTransform(scrollYProgress, [0.00, 0.10], [0, 1])
  const left1Y        = useTransform(scrollYProgress, [0.00, 0.10], [30, 0])

  const right1Opacity = useTransform(scrollYProgress, [0.10, 0.20], [0, 1])
  const right1Y       = useTransform(scrollYProgress, [0.10, 0.20], [30, 0])

  const left2Opacity  = useTransform(scrollYProgress, [0.22, 0.32], [0, 1])
  const left2Y        = useTransform(scrollYProgress, [0.22, 0.32], [30, 0])

  const right2Opacity = useTransform(scrollYProgress, [0.32, 0.42], [0, 1])
  const right2Y       = useTransform(scrollYProgress, [0.32, 0.42], [30, 0])

  const left3Opacity  = useTransform(scrollYProgress, [0.44, 0.54], [0, 1])
  const left3Y        = useTransform(scrollYProgress, [0.44, 0.54], [30, 0])

  const right3Opacity = useTransform(scrollYProgress, [0.54, 0.64], [0, 1])
  const right3Y       = useTransform(scrollYProgress, [0.54, 0.64], [30, 0])

  const left4Opacity  = useTransform(scrollYProgress, [0.66, 0.76], [0, 1])
  const left4Y        = useTransform(scrollYProgress, [0.66, 0.76], [30, 0])

  const right4Opacity = useTransform(scrollYProgress, [0.76, 0.86], [0, 1])
  const right4Y       = useTransform(scrollYProgress, [0.76, 0.86], [30, 0])

  const leftMotions  = [
    { opacity: left1Opacity,  y: left1Y  },
    { opacity: left2Opacity,  y: left2Y  },
    { opacity: left3Opacity,  y: left3Y  },
    { opacity: left4Opacity,  y: left4Y  },
  ]

  const rightMotions = [
    { opacity: right1Opacity, y: right1Y },
    { opacity: right2Opacity, y: right2Y },
    { opacity: right3Opacity, y: right3Y },
    { opacity: right4Opacity, y: right4Y },
  ]

  return (
    <section ref={wrapperRef} className="relative mt-5 mb-5" style={{ height: "200vh" }}>

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#c0001a]" />
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 0% 0%, #000000 0%, #000000 25%, transparent 50%)" }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 100% 0%, #ffffff 0%, #ffffff 5%, transparent 44%)" }}
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col justify-center py-10 md:py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto w-full">

            {/* Título */}
            <h2 className="text-2xl md:text-5xl mb-10 md:mb-14 text-white leading-tight tracking-tight">
              <ClipReveal>NUESTRO EQUIPO,</ClipReveal>
              <ClipReveal delay={0.12} className="font-bold">TU EQUIPO.</ClipReveal>
            </h2>

            {/* Dos columnas */}
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-0 items-start md:ml-[20%]">

              {/* Izquierda — texto blanco */}
              <div className="space-y-4 mt-5 md:space-y-4 ">
                {teamLeft.map((member, i) => (
                  <motion.div
                    key={member.name}
                    style={leftMotions[i]}
                    className="will-change-transform"
                  >
                    <p className="text-white text-sm md:text-base font-semibold leading-snug">
                      {member.name}
                    </p>
                    <p className="text-white/80 text-xs md:text-base mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Derecha — texto negro, desplazado */}
              <div className="space-y-4 md:space-y-5 mt-[130px] md:mt-[100px]">
                {teamRight.map((member, i) => (
                  <motion.div
                    key={member.name}
                    style={rightMotions[i]}
                    className="will-change-transform"
                  >
                    <p className="text-black text-sm md:text-base font-semibold leading-snug">
                      {member.name}
                    </p>
                    <p className="text-black/80 text-xs md:text-base mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
