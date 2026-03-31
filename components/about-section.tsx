"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"

// ─── Assets ────────────────────────────────────────────────────────────────────

const collageImages = [
  // Row 1: panorámica ancha (cols 1-3) + retrato derecho (col 4)
  {
    src: "/imagenes/mdq2.png",
    alt: "Público en la activación TST Mar del Plata",
    style: { gridColumn: "1 / 4", gridRow: "1 / 2" },
  },
  {
    src: "/imagenes/martin.png",
    alt: "Martin Garabal en grabación para la televisión",
    style: { gridColumn: "4 / 5", gridRow: "1 / 2" },
  },
  // Col 1: dos imágenes apiladas (rows 2 y 3)
  {
    src: "/imagenes/flor.png",
    alt: "Flor Vigna en la activación TST en balneario",
    style: { gridColumn: "1 / 2", gridRow: "2 / 3" },
  },
  {
    src: "/imagenes/carilo.png",
    alt: "Producción en Cariló para la televisión",
    style: { gridColumn: "1 / 2", gridRow: "3 / 4" },
  },
  // Col 2: ruggeri alto, span rows 2-3
  {
    src: "/imagenes/ruggeri.png",
    alt: "Oscar Ruggeri en la activación TST en Mar del Plata",
    style: { gridColumn: "2 / 3", gridRow: "2 / 4" },
  },
  // Row 2 cols 3-4: md13 + gunda
  {
    src: "/imagenes/md13.png",
    alt: "Demo de cocina con backdrop TST",
    style: { gridColumn: "3 / 4", gridRow: "2 / 3" },
  },
  {
    src: "/imagenes/gunda.png",
    alt: "La Gunda en grabación para la televisión",
    style: { gridColumn: "4 / 5", gridRow: "2 / 3" },
  },
  // Row 3 cols 3-4: produ + mdq
  {
    src: "/imagenes/produ.png",
    alt: "Producción audiovisual para TST",
    style: { gridColumn: "3 / 4", gridRow: "3 / 4" },
  },
  {
    src: "/imagenes/mdq.png",
    alt: "Activación TST en Mar del Plata",
    style: { gridColumn: "4 / 5", gridRow: "3 / 4" },
  },
]

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

// ─── Sub-componentes ────────────────────────────────────────────────────────────

function CollageImage({
  image,
  index,
  scrollYProgress,
}: {
  image: (typeof collageImages)[0]
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const start   = index * 0.034
  const end     = start + 0.045
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const scale   = useTransform(scrollYProgress, [start, end], [1.06, 1])

  return (
    <motion.div
      className="relative overflow-hidden will-change-transform"
      style={{ ...image.style, opacity, scale }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  )
}

function ServiceTag({
  service,
  index,
  scrollYProgress,
}: {
  service: string
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const start   = 0.44 + index * 0.016
  const end     = start + 0.013
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y       = useTransform(scrollYProgress, [start, end], [14, 0])

  return (
    <motion.span
      style={{ opacity, y }}
      className="will-change-transform inline-block border border-white/35 text-white text-xs md:text-sm px-4 py-2 rounded-full"
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
  const start   = 0.60 + index * 0.020
  const end     = start + 0.017
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const y       = useTransform(scrollYProgress, [start, end], [28, 0])

  return (
    <motion.div style={{ opacity, y }} className="will-change-transform">
      <p className="text-white text-5xl md:text-6xl font-black leading-none">{metric.value}</p>
      <p className="text-white/50 text-sm md:text-base mt-2">{metric.label}</p>
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

  // Overlay oscuro que aparece cuando el collage está completo
  const overlayOpacity = useTransform(scrollYProgress, [0.21, 0.28], [0, 0.80])

  // Fase 1 — Presentación TST
  const phase1Opacity = useTransform(scrollYProgress, [0.26, 0.31, 0.38, 0.43], [0, 1, 1, 0])

  // Fase 2 — Lo que hicimos
  const phase2Opacity = useTransform(scrollYProgress, [0.42, 0.47, 0.54, 0.59], [0, 1, 1, 0])

  // Fase 3 — Métricas
  const phase3Opacity = useTransform(scrollYProgress, [0.58, 0.63, 0.70, 0.75], [0, 1, 1, 0])

  // Fase 4 — Testimonio (aparece cerca del final, 88vh de breathing room)
  const phase4Opacity = useTransform(scrollYProgress, [0.78, 0.84], [0, 1])
  const phase4Y       = useTransform(scrollYProgress, [0.78, 0.84], [24, 0])

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

      {/* ── Caso TST sticky ─────────────────────────────────────────────────── */}
      <div ref={wrapperRef} style={{ height: "400vh" }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-black">

          {/* ── Collage grid (desktop) ─────────────────────────────────────── */}
          <div
            className="absolute inset-0 gap-1"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr 1.2fr 1.3fr",
              gridTemplateRows: "33% 34% 33%",
            }}
          >
            {collageImages.map((image, i) => (
              <CollageImage
                key={image.src}
                image={image}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* ── Overlay oscuro ─────────────────────────────────────────────── */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />

          {/* Badge cliente — siempre visible */}
          <div className="absolute top-8 right-6 md:right-10 z-20">
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
              Caso de estudio · TST
            </span>
          </div>

          {/* ── Fase 1: Nombre y contexto ──────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase1Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-3xl">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-5 font-mono">
                Electrodomésticos · Argentina
              </p>
              <h3 className="text-7xl md:text-9xl lg:text-[11rem] font-black text-white leading-none mb-6">
                TST
              </h3>
              <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-lg">
                N°1 en campanas extractoras. Una marca consolidada que necesitaba construir su presencia digital desde cero.
              </p>
            </div>
          </motion.div>

          {/* ── Fase 2: Servicios ──────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase2Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-3xl">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-8 font-mono">
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

          {/* ── Fase 3: Métricas ───────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase3Opacity }}
            className="absolute inset-0 flex items-center px-6 md:px-16 will-change-transform"
          >
            <div className="max-w-4xl w-full">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-10 font-mono">
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

          {/* ── Fase 4: Testimonio ─────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: phase4Opacity, y: phase4Y }}
            className="absolute inset-0 flex items-center justify-center px-6 will-change-transform"
          >
            <div className="max-w-xl text-center">
              <p className="text-white/25 text-5xl font-serif leading-none mb-4">"</p>
              <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-8">
                APA es lo más. La mejor agencia con la que trabajamos hasta ahora, super comprometidos y responsables.
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-px bg-white/25 mb-3" />
                <p className="text-white font-semibold text-sm">Ignacio Turnaturi</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">Jefe de Prensa · TST</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
