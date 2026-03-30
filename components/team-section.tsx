"use client"

import { motion } from "framer-motion"

const teamLeft = [
  {
    name: "Dana Santelli & Agostina Mariani",
    role: "Fundadoras · Directoras Creativas",
  },
  {
    name: "Giuliana Zambaglione",
    role: "Project Manager · Coordinación & Estrategia",
  },
  {
    name: "Oriana Restaneo",
    role: "Ejecutiva de cuentas · Coordinación & Estrategia",
  },
  {
    name: "Uriel Pollak / Victoria Scarrone / Valentina Penela",
    role: "Social Media Management · Community Building.",
  },
]

const teamRight = [
  { name: "Juliana Dell'Acqua", role: "Editora & Motion Designer" },
  { name: "Aaron Francolino", role: "Full Stack Developer · Soluciones Digitales" },
  { name: "Ignacio Scordia", role: "Fotógrafo & Filmmaker · Producción Audiovisual" },
  { name: "Alejandro Toledo", role: "Analista de Medios Digitales · Performance & Data" },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
}

export function TeamSection() {
  return (
    <section className="relative overflow-hidden mb-5 py-20 md:py-28 px-6 md:px-16">
      {/* Background: negro arriba-izq, blanco arriba-der, rojo el resto */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#c0001a",
        }}
      />
      {/* Negro — esquina superior izquierda */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, #000000 0%, #000000 25%, transparent 50%)",
        }}
      />
      {/* Blanco — esquina superior derecha */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, #ffffff 0%, #ffffff 5%, transparent 44%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Título — chico, arriba a la izquierda */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-2xl md:text-6xl font-black text-white leading-tight tracking-tight mb-14"
        >
          NUESTRO EQUIPO,
          <br />
          TU EQUIPO.
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 gap-y-0 items-start md:max-w-lg md:ml-[20%]">
          {/* Left — texto blanco */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 md:space-y-7"
          >
            {teamLeft.map((member) => (
              <motion.div key={member.name} variants={item}>
                <p className="text-white text-sm md:text-base font-semibold leading-snug">
                  {member.name}
                </p>
                <p className="text-white/80 text-xs md:text-base mt-0.5 leading-snug">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — texto negro, empieza al nivel del segundo ítem izquierdo */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 md:space-y-7 mt-[72px] md:mt-[120px]"
          >
            {teamRight.map((member) => (
              <motion.div key={member.name} variants={item}>
                <p className="text-black text-sm md:text-base font-semibold leading-snug">
                  {member.name}
                </p>
                <p className="text-black/80 text-xs md:text-base mt-0.5 leading-snug">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
