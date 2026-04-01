"use client"

import { motion } from "framer-motion"

const clients = [
  "Agencia Paliza",
  "Marketing Digital",
  "PR & Comunicación",
  "Social Media",
  "Producción Audiovisual",
  "Activaciones de Marca",
  "Performance & Data",
]

export function ClientsMarquee() {
  return (
    <section className="bg-black border-t border-b border-white/10 overflow-hidden relative mb-2"   style={{ height: "2.5rem" }}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {[...clients, ...clients].map((client, i) => (
          <span
            key={i}
            className="text-white/30 text-xs font-mono uppercase tracking-[0.25em] flex items-center gap-12"
          >
            {client}
            <span className="text-primary inline-block">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
