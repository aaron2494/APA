"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"

// ─── Datos del caso ────────────────────────────────────────────────────────────

const services = [
  "Estrategia de Contenido",
  "Campañas TV & Radio",
  "Activaciones de Marca",
  "Social Media",
  "Tienda Mercado Libre",
  "E-commerce",
]

const metrics = [
  { value: "4",   label: "canales de aire nacionales" },
  { value: "2",   label: "activaciones de marca" },
  { value: "5M+", label: "inversión mensual administrada" },
]

// ─── Sub-componentes (evitan hooks en loops) ───────────────────────────────────

function ServiceTag({
  service,
  index,
  scrollYProgress,
}: {
  service: string
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const start   = 0.36 + index * 0.03
  const end     = start + 0.025
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y       = useTransform(scrollYProgress, [start, end], [16, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className="will-change-transform inline-block border border-white/30 text-white text-xs md:text-sm px-4 py-2 rounded-full"
    >
      {service}
    </motion.span>
  )
}

function MetricItem({
  metric,
  index,
  scrollYProgress,
}: {
  metric: { value: string; label: string }
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const start   = 0.61 + index * 0.05
  const end     = start + 0.04
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y       = useTransform(scrollYProgress, [start, end], [30, 0])

  return (
    <motion.div style={{ opacity, y }} className="will-change-transform">
      <p className="text-white text-5xl md:text-7xl font-black leading-none">{metric.value}</p>
      <p className="text-white/55 text-sm md:text-base mt-2">{metric.label}</p>
    </motion.div>
  )
}

// ─── Componente principal ──────────────────────────────────────────────────────

export function AboutSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  // Imagen: escala de grises → color al llegar a métricas
  const grayscaleAmount = useTransform(scrollYProgress, [0.52, 0.68], [100, 0])
  const imageFilter     = useMotionTemplate`grayscale(${grayscaleAmount}%)`
  const overlayOpacity  = useTransform(scrollYProgress, [0, 0.5, 0.85], [0.82, 0.68, 0.55])

  // Fase 1 — Presentación de la marca (0 – 0.32)
  const phase1Opacity = useTransform(scrollYProgress, [0.0, 0.08, 0.24, 0.32], [0, 1, 1, 0])

  // Fase 2 — Lo que hicimos (0.30 – 0.58)
  const phase2Opacity = useTransform(scrollYProgress, [0.30, 0.38, 0.50, 0.58], [0, 1, 1, 0])

  // Fase 3 — Métricas (0.55 – 0.80)
  const phase3Opacity = useTransform(scrollYProgress, [0.55, 0.63, 0.72, 0.80], [0, 1, 1, 0])

  // Fase 4 — Testimonio (0.78 – 1.0)
  const phase4Opacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1])
  const phase4Y       = useTransform(scrollYProgress, [0.78, 0.88], [30, 0])

  return (
    <section id="nosotros" className="relative">

      {/* ── Título de entrada — no sticky ──────────────────────────────────── */}
      <div className="bg-black px-6 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl text-white leading-none mb-8 md:mb-12">
            <ClipReveal>IMPACTO</ClipReveal>
            <ClipReveal delay={0.1}>REAL</ClipReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed md:ml-[25%]"
          >
            No hablamos de lo que podemos hacer. Mostramos lo que ya hicimos.
          </motion.p>
        </div>
      </div>

      {/* ── Caso de estudio sticky ─────────────────────────────────────────── */}
      <div ref={wrapperRef} style={{ height: "450vh" }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Imagen de fondo con transición a color */}
          <div className="absolute inset-0">
            <motion.div className="absolute inset-0" style={{ filter: imageFilter }}>
              <Image
                src="/tst-cover.jpg"
                alt="Campaña TST — APA Agencia Paliza"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
            <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          </div>

          {/* Badge cliente */}
          <div className="absolute top-8 right-6 md:right-10 z-20">
            <span className="text-white/35 text-xs font-mono uppercase tracking-widest">
              Caso de estudio · TST
            </span>
          </div>

          {/* ── Fase 1: Presentación ─────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase1Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-3xl">
              <p className="text-white/45 text-xs md:text-sm uppercase tracking-widest mb-5 font-mono">
                Electrodomésticos · Argentina
              </p>
              <h3 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-none mb-6">
                TST
              </h3>
              <p className="text-white text-lg md:text-2xl font-light leading-relaxed max-w-lg">
                N°1 en campanas extractoras. Una marca consolidada que necesitaba construir su presencia digital desde cero.
              </p>
            </div>
          </motion.div>

          {/* ── Fase 2: Lo que hicimos ───────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase2Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-3xl">
              <p className="text-white/45 text-xs md:text-sm uppercase tracking-widest mb-8 font-mono">
                Lo que hicimos
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, i) => (
                  <ServiceTag
                    key={service}
                    service={service}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Fase 3: Métricas ─────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase3Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-4xl w-full">
              <p className="text-white/45 text-xs md:text-sm uppercase tracking-widest mb-10 font-mono">
                En números
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                {metrics.map((metric, i) => (
                  <MetricItem
                    key={metric.label}
                    metric={metric}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Fase 4: Testimonio ───────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase4Opacity, y: phase4Y }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-2xl text-center">
              <p className="text-white/30 text-4xl font-serif mb-6 leading-none">"</p>
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
                APA es lo más. La mejor agencia con la que trabajamos hasta ahora, super comprometidos y responsables.
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-px bg-white/30 mb-3" />
                <p className="text-white font-semibold text-sm">Ignacio Turnaturi</p>
                <p className="text-white/45 text-xs uppercase tracking-widest">Jefe de Prensa · TST</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
