"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Camera, Megaphone, Sparkles, Target, type LucideIcon } from "lucide-react"
import { ClipReveal } from "@/components/clip-reveal"
import { MagneticButton } from "@/components/magnetic-button"



const videoPanels = [
  {
    slot: "",
    title: "",
    src: "/videos/NIEVE.mp4",
    poster: "/imagenes/mdq2.webp",
    alt: "Video de nieve para la activación de marca",
  },
  {
    slot: "",
    title: "",
    src: "/videos/BALC.mp4",
    poster: "/imagenes/produ.png",
    alt: "Video balcón para la activación de marca",
  },
  {
    slot: "",
    title: "",
    src: "/videos/VERANO.mp4",
    poster: "/imagenes/flor.webp",
    alt: "Video de verano para la activación de marca",
  },
] as const

const featuredMoment = {
  tag: "Momento central",
  title: "EL ESPACIO COMO PUNTO DE ENCUENTRO.",
  desc: "El impacto de la experiencia es un acierto. Las marcas que conectan y se sienten, prevalecen. En APA diseñamos activaciones, eventos y popu-ps memorables generando conversaciones reales y contactos valiosos. Hacemos que un espacio se transforme en territorio.",
} as const

type FeatureMedia = {
  kind: "image" | "video"
  src: string
  poster?: string
  alt: string
  label: string
}

const featuredMomentMedia: FeatureMedia = {
  kind: "video",
  src: "/videos/lev.mp4",
  alt: "Momento destacado de la activación de marca",
  label: "",
}


function MomentContent({
  item,
}: {
  item: typeof featuredMoment
}) {
  return (
    <div>
      <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#c0001a]">
        {item.tag}
      </span>

      <h3
        className="mt-3 whitespace-pre-line font-black uppercase leading-[0.9] text-white"
        style={{ fontSize: "clamp(2rem, 4.2vw, 5rem)" }}
      >
        {item.title}
      </h3>

      <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/50 md:text-[15px]">
        {item.desc}
      </p>

    </div>
  )
}

function MediaFrame({
  media,
}: {
  media: FeatureMedia
}) {
  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
      {media.kind === "video" ? (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-center grayscale contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/10" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(192, 0, 26, 0.25), transparent 34%), radial-gradient(circle at 82% 78%, rgba(255, 255, 255, 0.06), transparent 30%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/50">
          <span>{media.label}</span>
          <span>APA</span>
        </div>

      
      </div>
    </div>
  )
}

function TriptychPanel({
  panel,
  index,
}: {
  panel: (typeof videoPanels)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="group relative min-h-[24rem] overflow-hidden border-b border-white/10 bg-[#0a0a0a] md:h-full md:min-h-0 md:border-b-0 md:border-r md:last:border-r-0"
    >
      <video
        src={panel.src}
        poster={panel.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={panel.alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(192, 0, 26, 0.18), transparent 26%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/45">
          <span>{panel.slot}</span>
          <span>APA</span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <h3 className="text-center text-3xl font-black uppercase leading-none text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] md:text-[clamp(2rem,3vw,4rem)]">
            {panel.title}
          </h3>
        </div>
      </div>
    </motion.article>
  )
}

function CtaBar() {
  return (
    <div className="border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md md:px-16 md:py-6">
      <div className=" flex max-w-7xl flex-col items-center gap-5 md:flex-row md:items-center">
      

        <MagneticButton>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#c0001a] hover:bg-[#c0001a]"
          >
            <span>Hablemos de tu próxima activación</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </MagneticButton>
      </div>
    </div>
  )
}

export function ActivationSection() {
  return (
    <section className="relative pt-5 bg-black text-white">
      

  
      <div className="px-6 pb-12 md:hidden">
        <div className="space-y-4">
          {videoPanels.map((panel, index) => (
            <TriptychPanel key={panel.src} panel={panel} index={index} />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="h-[calc(100svh-5rem)]">
          <div className="grid h-full grid-cols-3 overflow-hidden border-y border-white/10">
            {videoPanels.map((panel, index) => (
              <TriptychPanel key={panel.src} panel={panel} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-16 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <MomentContent item={featuredMoment} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <MediaFrame media={featuredMomentMedia} />
          </motion.div>
        </div>
      </div>

      <CtaBar />
    </section>
  )
}
