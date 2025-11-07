"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const TESTIMONIALS = [
  { id: 1, text: "APA nos llevó al siguiente nivel.", author: "Marcos — Cliente" },
  { id: 2, text: "Creatividad y estrategia impecables.", author: "Sofía — Cliente" },
  { id: 3, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 4, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
  { id: 5, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 6, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
]

// 👇 Texto animado letra por letra (ahora con whileInView)
function AnimatedText({
  text,
  delay = 0,
  as = "h2",
  className = "",
}: {
  text: string
  delay?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
}) {
  const Tag = as as any
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }} // 👈 solo cuando se ve 70% del elemento
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
      className="inline-block"
    >
      <Tag className={className}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.04, ease: "easeOut" }}
            className={char === " " ? "inline-block w-2" : "inline-block"}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}

export function ApproachSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const [calculatedHeight, setCalculatedHeight] = useState<number | null>(null)

  // Calcular altura necesaria para el scroll horizontal
  useEffect(() => {
    function calculate() {
      const wrapper = wrapperRef.current
      const track = trackRef.current
      const sticky = stickyRef.current
      if (!wrapper || !track || !sticky) return

      const vw = window.innerWidth
      const vh = window.innerHeight
      const contentWidth = track.scrollWidth
      const horizontalToScroll = Math.max(contentWidth - vw, 0) + 100
      const neededHeight = Math.ceil(vh + horizontalToScroll)

      setCalculatedHeight(neededHeight)
      wrapper.style.setProperty("--horizontal-to-scroll", `${horizontalToScroll}px`)
    }

    calculate()
    window.addEventListener("resize", calculate)
    return () => window.removeEventListener("resize", calculate)
  }, [trackRef.current])

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  const horizontalToScroll = trackRef.current
    ? Math.max(trackRef.current.scrollWidth - window.innerWidth, 0) + 100
    : 0
  const x = useTransform(scrollYProgress, [0, 1], [`0px`, `${-horizontalToScroll}px`])

  return (
    <section className="relative bg-white text-gray-900 ">
      {/* Intro hero */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <AnimatedText
          text="Preferimos no contarte quiénes somos"
          className="text-4xl md:text-5xl font-bold text-gray-900"
          delay={0.3}
        />
        <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-2xl mt-8 text-gray-500 text-lg leading-relaxed"
  >
     Y que lo hagan quienes ya confiaron en nosotros...
  </motion.p>
      </div>

    {/* Horizontal scroll */}
<div
  ref={wrapperRef}
  className="relative"
  style={calculatedHeight ? { height: `${calculatedHeight}px` } : undefined}
>
  {/* Fondo con slideshow de imágenes */}
<div className="absolute inset-0 z-[0] overflow-hidden h-full">
  {[
    "/modern-marketing-agency-workspace-with-creative-te.jpg",
    "/creative-marketing-strategy-session-with-team-coll.jpg",
    "/creative-team-collaboration.png",
    "/modern-marketing-agency-workspace-with-creative-te.jpg",
    "/young-marketing-professionals-in-modern-workspace-.jpg",
  ].map((img, i) => (
    <motion.div
      key={i}
      className="absolute inset-0 bg-contain bg-center"
      style={{
        backgroundImage: `url(${img})`,
        opacity: 0.20, // 👈 más sutil
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 2, 0] }}
      transition={{
        delay: i * 3, // cada imagen entra secuencialmente
        duration: 3,
        repeat: Infinity, // 👈 rotación infinita
        repeatDelay: 2,
        ease: "easeInOut",
      }}
    />
  ))}
</div>
  {/* Contenido sticky */}
  <div
    ref={stickyRef}
    className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10"
  >
    <div className="w-full max-w-6xl px-6">
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex gap-4 items-center will-change-transform pr-24"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.article
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="min-w-[250px] md:min-w-[320px] lg:min-w-[400px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex-shrink-0 border border-gray-100 hover:scale-[1.03] hover:-translate-y-2 transition-transform duration-300"
          >
            <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
              “{t.text}”
            </blockquote>
            <div className="mt-6 text-sm font-semibold text-primary tracking-wide">
              {t.author}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </div>
</div>
      {/* CTA final */}
      <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-3xl text-center">
          <AnimatedText
            text="¿Querés que tu marca también hable por vos?"
            as="h3"
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            delay={0.1}
          />
          <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-gray-600 mb-8"
    >
      Coordiná una videollamada y descubrí cómo podemos ayudarte a destacarte.
    </motion.p>
          <motion.a
           initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
            href="https://3260.agency/agenda-ok#calendly"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
          >
            CONOCENOS
          </motion.a>
        </div>
      </div>
    </section>
  )
}
