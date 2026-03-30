"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const TESTIMONIALS = [
  { id: 1, text: "APA nos llevó al siguiente nivel.", author: "Marcos — Cliente" },
  { id: 2, text: "Creatividad y estrategia impecables.", author: "Sofía — Cliente" },
  { id: 3, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 4, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
  { id: 5, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 6, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
]


// 👇 NUEVO COMPONENTE PARA TEXTO DIVIDIDO CON ANIMACIÓN
function SplitAnimatedText() {
  return (
    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="text-5xl md:text-6xl font-bold  text-center overflow-hidden px-4"
>
  {/* Primera línea */}
  <motion.div
    variants={{
      hidden: { x: -30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.2
    }}
    className="overflow-hidden text-white  "
  >
    Preferimos no contarte{" "}
  </motion.div>
  
  {/* Segunda línea */}
  <motion.div
    variants={{
      hidden: { x: 30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.4
    }}
    className="overflow-hidden text-primary thick-text-sub-red"
  >
    quiénes somos
  </motion.div>
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
    <section className="relative  text-gray-900 "
    >
      {/* Intro hero */}
      <div className="h-screen bg-black  flex flex-col items-center justify-center text-center px-6">
       <motion.div
    className="absolute top-0 w-36 h-46 bg-primary rounded-full blur-3xl opacity-20 "
    animate={{
      x: [0, -20, 0],
      y: [0, 20, 0],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
        {/* REEMPLAZADO: Ahora usa el componente SplitAnimatedText */}
        <SplitAnimatedText />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
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
        {/* Fondo con foto fija */}
        <div className="absolute inset-0 z-[0] overflow-hidden h-full">
          <Image
            src="/foto.jpg.jpeg"
            alt="APA Agency Team"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
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
      className="flex gap-6 items-center will-change-transform pr-24" 
    >
      {TESTIMONIALS.map((t, i) => (
        <motion.article
          key={t.id}
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.1,
            duration: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="relative min-w-[260px] md:min-w-[320px] lg:min-w-[420px] min-h-[280px] md:min-h-[320px] lg:min-h-[320px]
                     bg-gradient-to-br from-white/95 to-white/85 
                     backdrop-blur-2xl rounded-3xl shadow-2xl
                     border border-white/40 border-b-white/20 border-r-white/20
                     flex flex-col justify-between flex-shrink-0 overflow-hidden
                     group hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        >
          {/* Detalle superior APA mejorado */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#b40f1d] via-[#e53e3e] to-[#b40f1d] shadow-lg" />
          
          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/5 to-transparent opacity-50" />
          
          {/* Elemento decorativo de esquina */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#b40f1d]/10 to-transparent rounded-full blur-sm" />

          <div className="relative z-10 p-8 flex-1 flex flex-col">
            {/* Icono de comillas decorativo */}
            <div className="mb-4 text-4xl text-[#b40f1d]/20 font-serif">"</div>
            
            <blockquote className="text-lg md:text-xl lg:text-[1.25rem] text-gray-800 leading-relaxed flex-1 font-medium">
              {t.text}
            </blockquote>

            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b40f1d] to-[#e53e3e] flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {t.author.charAt(0)}
                  </div>
                  {/* Anillo decorativo alrededor del avatar */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#b40f1d]/20 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800 tracking-wide">
                    {t.author}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">
                    Cliente Satisfecho
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Efectos de hover mejorados */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[#b40f1d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          {/* Borde sutil en hover */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#b40f1d]/10 transition-all duration-300" />
        </motion.article>
      ))}
    </motion.div>
  </div>
</div>
      </div>

    {/* CTA final */}
<div className="h-screen flex items-center justify-center px-6 bg-white">
  <div className="max-w-3xl text-center">
    {/* REEMPLAZADO: Texto dividido con animación */}
    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="text-5xl md:text-5xl font-bold text-gray-900 text-center overflow-hidden px-4"
>
  {/* Primera línea */}
  <motion.div
    variants={{
      hidden: { x: -30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.2
    }}
    className="overflow-hidden thick-text-sub-black"
  >
    Queres que tu marca{" "}
  </motion.div>
  
  {/* Segunda línea */}
  <motion.div
    variants={{
      hidden: { x: 30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.4
    }}
    className="overflow-hidden text- thick-text-sub-red"
  >
    También hable por vos?
  </motion.div>
</motion.div>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-gray-600 mb-8 py-5"
    >
      Coordiná una videollamada y descubrí cómo podemos ayudarte a destacarte.
    </motion.p>
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
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