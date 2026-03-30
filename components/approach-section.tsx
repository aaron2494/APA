"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const TESTIMONIALS = [
  {
    id: 1,
    text: "APA es lo más, la mejor agencia con la que trabajamos hasta ahora, super comprometidos y responsables.",
    author: "Ignacio Turnaturi",
    role: "Jefe de prensa TST",
  },
  {
    id: 2,
    text: "APA es lo más, la mejor agencia con la que trabajamos hasta ahora, super comprometidos y responsables.",
    author: "Ignacio Turnaturi",
    role: "Jefe de prensa TST",
  },
  {
    id: 3,
    text: "APA es lo más, la mejor agencia con la que trabajamos hasta ahora, super comprometidos y responsables.",
    author: "Ignacio Turnaturi",
    role: "Jefe de prensa TST",
  },
]

export function ApproachSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  // Card 1 — entra primero
  const card1Opacity = useTransform(scrollYProgress, [0.0, 0.18], [0, 1])
  const card1Y      = useTransform(scrollYProgress, [0.0, 0.18], [50, 0])

  // Card 2 — entra en el medio del scroll
  const card2Opacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1])
  const card2Y       = useTransform(scrollYProgress, [0.28, 0.45], [50, 0])

  // Card 3 — entra cerca del final
  const card3Opacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1])
  const card3Y       = useTransform(scrollYProgress, [0.55, 0.72], [50, 0])

  // Botón — aparece después de la última card
  const btnOpacity = useTransform(scrollYProgress, [0.78, 0.90], [0, 1])
  const btnY       = useTransform(scrollYProgress, [0.78, 0.90], [20, 0])

  const cardMotion = [
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
    { opacity: card3Opacity, y: card3Y },
  ]

  return (
    <section id="nosotros">

      {/* ── PARTE SUPERIOR: fondo negro ─────────────────────────── */}
      <div className="bg-black px-6 md:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-8 md:mb-12"
          >
            ¿QUIÉNES<br />SOMOS?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed md:ml-[45%]"
          >
            Podríamos presentarnos y contarte nuestra historia en un breve
            párrafo, pero nos pareció una buena idea que nuestros clientes les
            cuenten que significa APA para ellos.
          </motion.p>

        </div>
      </div>

      {/* ── STICKY SCROLL: foto fija + cards que aparecen ────────── */}
      {/* El wrapper es alto para dar espacio de scroll */}
      <div ref={wrapperRef} style={{ height: "320vh" }} className="relative">

        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Foto de fondo — B&W, quieta */}
          <div className="absolute inset-0">
            <Image
              src="/foto.jpg.jpeg"
              alt="Equipo APA"
              fill
              className="object-cover object-top grayscale"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Contenido encima de la foto */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-16 gap-6 md:gap-10">

            {/* Grid de 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-6xl">
              {TESTIMONIALS.map((t, i) => (
                <motion.article
                  key={t.id}
                  style={cardMotion[i]}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-8 flex flex-col gap-4 md:gap-6"
                >
                  <p className="text-gray-900 text-xs md:text-base leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <div>
                    <p className="text-gray-900 font-semibold text-xs md:text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Botón CONOCENOS */}
            <motion.a
              href="#contacto"
              style={{ opacity: btnOpacity, y: btnY }}
              className="bg-primary text-white px-14 py-3 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              CONOCENOS
            </motion.a>

          </div>
        </div>
      </div>

    </section>
  )
}
