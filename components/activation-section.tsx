"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ArrowUpRight, Camera, Megaphone, Sparkles, Target, type LucideIcon } from "lucide-react"
import { ClipReveal } from "@/components/clip-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const moments = [
  {
    tag: "Punto de Venta",
    title: "El espacio\ncomo arma.",
    desc: "Convertimos cualquier punto de contacto físico en una experiencia que frena, impacta y queda. Pop-ups, degustaciones, displays y espacios que la gente fotografía sola.",
    imageSrc: "/imagenes/mdq.webp",
    imageAlt: "Activación de marca en un espacio al aire libre con público y stand",
    imageAspect: "aspect-[4/5]",
    stat: "+10K",
    statLabel: "impactos directos",
    side: "left",
  },
  {
    tag: "Eventos & Lanzamientos",
    title: "El momento\nque todos\nrecuerdan.",
    desc: "Lanzamientos de producto, fiestas de marca, shows y presentaciones. Producción integral desde la idea hasta el último detalle.",
    imageSrc: "/imagenes/produ.png",
    imageAlt: "Producción de una activación de marca con luces y set fotográfico",
    imageAspect: "aspect-[3/4]",
    stat: "+1M",
    statLabel: "personas alcanzadas",
    side: "right",
  },
  {
    tag: "Activaciones Digitales",
    title: "La pantalla\ncomo escena.",
    desc: "Filtros AR, challenges virales, gamificación y experiencias interactivas. Campañas que la gente comparte porque quiere ser parte.",
    imageSrc: "/imagenes/flor.webp",
    imageAlt: "Contenido de marca con estética editorial para redes sociales",
    imageAspect: "aspect-[3/4]",
    stat: "+70M",
    statLabel: "visualizaciones",
    side: "left",
  },
] as const

const pillars: Array<{
  title: string
  copy: string
  icon: LucideIcon
}> = [
  {
    title: "Presencia",
    copy: "La marca entra al territorio y corta el ruido.",
    icon: Megaphone,
  },
  {
    title: "Interacción",
    copy: "La gente toca, prueba y participa.",
    icon: Target,
  },
  {
    title: "Recuerdo",
    copy: "La escena se transforma en relato.",
    icon: Camera,
  },
  {
    title: "Deseo",
    copy: "La experiencia deja ganas de volver.",
    icon: Sparkles,
  },
]

const desktopMomentTimings = [
  { start: 0.04, end: 0.4 },
  { start: 0.42, end: 0.76 },
  { start: 0.7, end: 0.96 },
] as const

function ActivationVisual({
  src,
  alt,
  aspect,
  label,
}: {
  src: string
  alt: string
  aspect: string
  label: string
}) {
  return (
    <div
      className={`${aspect} group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_100px_rgba(0,0,0,0.35)]`}
    >
      <div className="absolute inset-0 md:inset-2 overflow-hidden rounded-[24px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-top grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/10" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(192, 0, 26, 0.25), transparent 34%), radial-gradient(circle at 82% 78%, rgba(255, 255, 255, 0.06), transparent 30%)",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/50">
          <span>{label}</span>
          <span>APA</span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <p className="max-w-[14rem] text-[10px] uppercase tracking-[0.35em] text-white/55 leading-relaxed">
            Imágenes reales de archivo.
          </p>
          <span className="text-white/25 text-[10px] uppercase tracking-[0.35em]">
            Preview
          </span>
        </div>
      </div>
    </div>
  )
}



function MomentContent({ item }: { item: (typeof moments)[number] }) {
  return (
    <div>
      <span className="text-[#c0001a] text-[10px] tracking-[0.35em] uppercase font-medium">
        {item.tag}
      </span>

      <h3
        className="mt-3 text-white font-black uppercase leading-[0.9] whitespace-pre-line"
        style={{ fontSize: "clamp(2rem, 4.2vw, 5rem)" }}
      >
        {item.title}
      </h3>

      <p className="mt-5 max-w-xl text-white/50 text-sm md:text-[15px] leading-relaxed">
        {item.desc}
      </p>

      <div className="mt-8 flex items-baseline gap-3 border-t border-white/10 pt-4">
        <span className="text-[#c0001a] font-black text-3xl md:text-4xl">{item.stat}</span>
        <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.35em]">
          {item.statLabel}
        </span>
      </div>
    </div>
  )
}

function PillarCard({
  item,
}: {
  item: (typeof pillars)[number]
}) {
  const Icon = item.icon

  return (
    <motion.article
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#c0001a]/15 text-[#c0001a]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/45">{item.copy}</p>
    </motion.article>
  )
}

function MomentSlide({
  item,
  scrollYProgress,
  start,
  end,
  index,
}: {
  item: (typeof moments)[number]
  scrollYProgress: MotionValue<number>
  start: number
  end: number
  index: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.05, end],
    [0, 1, 1, 0]
  )
  const y = useTransform(scrollYProgress, [start, start + 0.1], [28, 0])
  const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.97, 1])

  const isRight = item.side === "right"

  return (
    <motion.article
      style={{ opacity, y, scale, zIndex: moments.length - index }}
      className="absolute inset-0 flex items-center  px-6 md:px-16 "
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`flex flex-col gap-8 lg:items-center lg:gap-10 ${
            isRight ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="w-full lg:w-[52%]">
            <MomentContent item={item} />
          </div>

          <div className="w-full h-95 lg:w-[35%]">
            <ActivationVisual
              src={item.imageSrc}
              alt={item.imageAlt}
              aspect={item.imageAspect}
              label={item.tag}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function MobileMomentCard({
  item,
  index,
}: {
  item: (typeof moments)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 will-change-transform"
    >
      <ActivationVisual
        src={item.imageSrc}
        alt={item.imageAlt}
        aspect={item.imageAspect}
        label={item.tag}
      />
      <div className="mt-5">
        <MomentContent item={item} />
      </div>
    </motion.article>
  )
}

function CtaBar({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1])
  const y = useTransform(scrollYProgress, [0.72, 0.88], [20, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md md:px-16 md:py-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-white/25 text-xs uppercase tracking-widest mb-1">
            La pregunta no es si activar tu marca.
          </p>
          <p className="text-white font-black uppercase text-lg md:text-2xl leading-none">
            Es cuándo lo hacemos.
          </p>
        </div>

        <MagneticButton>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#c0001a] hover:bg-[#c0001a]"
          >
            <span>Activá tu marca</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </MagneticButton>
      </div>
    </motion.div>
  )
}

export function ActivationSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  const bigNumberX = useTransform(scrollYProgress, [0, 1], ["-5%", "60%"])
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={wrapperRef} className="relative mt-2 bg-black text-white">
      <div className="px-6 md:px-16 pt-16 pb-8 md:pb-10">
        <p className="text-[#c0001a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Activación de Marca
        </p>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="text-white leading-[0.9] font-black uppercase"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            <ClipReveal>Tu marca</ClipReveal>
            <ClipReveal delay={0.08}>
              <span style={{ color: "#c0001a" }}>se vive.</span>
            </ClipReveal>
            <ClipReveal delay={0.16}>No se ve.</ClipReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[520px] text-sm md:text-base leading-relaxed text-white/45"
          >
            Una activación no es un evento. Es el momento en que alguien pasa de conocer tu marca
            a sentir algo por ella.
          </motion.p>
        </div>
      </div>

      <div className="px-6 md:px-16 pb-10 md:pb-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <PillarCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="md:hidden px-6 pb-16">
        <div className="space-y-6">
          {moments.map((item, index) => (
            <MobileMomentCard key={item.tag} item={item} index={index} />
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start gap-6">
            <div>
              <p className="text-white/25 text-xs uppercase tracking-widest mb-1">
                La pregunta no es si activar tu marca.
              </p>
              <p className="text-white font-black uppercase text-lg leading-none">
                Es cuándo lo hacemos.
              </p>
            </div>

            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#c0001a] hover:bg-[#c0001a]"
              >
                <span>Activá tu marca</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div style={{ height: `${moments.length * 110 + 40}vh` }} className="relative">
          <div className="sticky top-0 z-10 h-screen overflow-hidden">
            <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />

            <div className="absolute left-0 top-0 bottom-0 z-0 w-[3px]" style={{ background: "#c0001a" }} />

            <div className="absolute inset-0 z-0 flex items-center overflow-hidden pointer-events-none select-none">
              <motion.span
                className="font-black leading-none whitespace-nowrap"
                style={{
                  fontSize: "clamp(800px, 12vw, 80px)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.05)",
                  x: bigNumberX,
                }}
              >
               POTENCIA TU MARCA
              </motion.span>
            </div>

            <div className="absolute inset-0 z-10">
              {moments.map((item, index) => {
                const start = 0.05 + index * 0.28
                const end = start + 0.24

                return (
                  <MomentSlide
                    key={item.tag}
                    item={item}
                    scrollYProgress={scrollYProgress}
                    start={desktopMomentTimings[index]?.start ?? start}
                    end={desktopMomentTimings[index]?.end ?? end}
                    index={index}
                  />
                )
              })}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20">
              <CtaBar scrollYProgress={scrollYProgress} />
            </div>

            <div className="absolute inset-y-0 right-8 hidden lg:flex flex-col items-center gap-4 pointer-events-none z-20">
              <div className="relative h-40 w-px overflow-hidden rounded-full bg-white/10">
                <motion.div
                  style={{ scaleY: progressScale }}
                  className="absolute inset-0 origin-top bg-[#c0001a]"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.45em] text-white/35">
                03 / 03
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
