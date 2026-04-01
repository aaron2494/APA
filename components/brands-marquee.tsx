"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const brands = [
   { src: "/MOOGA.png",     alt: "Mooga" },
     { src: "/NATIVO.png",    alt: "Nativo" },
      { src: "/EMANERO.png",   alt: "Emanero" },
  { src: "/TST.png",       alt: "TST" },
  { src: "/LURE.png",      alt: "Lure" },
    { src: "/TT.png",        alt: "TT" },
    { src: "/CHACABUCO.png", alt: "Chacabuco" },

    { src: "/PECAN.png",     alt: "Pecan" },

]

export function BrandsMarquee() {
  return (
    <section className="bg-black mt-2 border-t border-b border-white/10 overflow-hidden relative" style={{ height: "5rem" }}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="relative h-10 w-32 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <Image
              src={brand.src}
              alt={brand.alt}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
