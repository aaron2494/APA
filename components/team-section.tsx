"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const teamData = [
  {
    area: "Comunicación & PR",
    members: [
      { name: "Laura Martínez", role: "Directora de Comunicación" },
      { name: "Diego Torres", role: "PR & Media Strategist" },
    ],
  },
  {
    area: "Estrategia Digital",
    members: [
      { name: "Martín Rodriguez", role: "Director de Estrategia" },
      { name: "Camila Sánchez", role: "Digital Strategist" },
    ],
  },
  {
    area: "Creatividad & Contenido",
    members: [
      { name: "María Gómez", role: "Directora Creativa" },
      { name: "Sofía Herrera", role: "Diseñadora Gráfica" },
      { name: "Carlos Vera", role: "Content Strategist" },
      { name: "Ana López", role: "Copywriter Senior" },
    ],
  },
  {
    area: "Digital & Tecnología",
    members: [
      { name: "Pablo Ruiz", role: "Web Developer" },
      { name: "Nicolás Soto", role: "Performance Analyst" },
    ],
  },
]

export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#ffffff", "#000000", "#000000"]
  )

  return (
    <section ref={containerRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundColor }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-80 w-54 h-64 bg-primary rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 10, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 w-56 h-96 bg-primary rounded-full blur-3xl opacity-20"
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

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.4, 0.25, 1]
                }
              }
            }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              Nuestro Equipo,
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight">
              Tu Equipo
            </h3>
          </motion.div>
        </motion.div>

        {/* Main Content: Imagen + 4 Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Imagen Grande del Equipo - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/apa-team-photo.jpg"
              alt="APA Marketing Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Texto overlay en la imagen */}
            <div className="absolute bottom-8 left-8 right-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-white/80 text-lg font-light"
              >
                Profesionales apasionados que transforman ideas en experiencias memorables
              </motion.p>
            </div>
          </motion.div>

          {/* 4 Cards - Derecha */}
          <div className="space-y-4">
            {teamData.map((section, sectionIndex) => (
              <TeamAreaCard
                key={section.area}
                area={section.area}
                members={section.members}
                index={sectionIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TeamAreaCardProps {
  area: string
  members: { name: string; role: string }[]
  index: number
}

function TeamAreaCard({ area, members, index }: TeamAreaCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 overflow-hidden"
    >
      {/* Área Title */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
          }
        }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-1.5 h-8 bg-primary rounded-full" />
        <h3 className="text-xl font-bold text-white">{area}</h3>
      </motion.div>

      {/* Members - Appearing con scroll/stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {members.map((member, memberIndex) => (
          <motion.div
            key={`${area}-${member.name}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: memberIndex * 0.1 + 0.2,
              ease: "easeOut"
            }}
            className="relative group"
          >
            <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-colors cursor-pointer">
              <p className="text-white font-semibold text-sm">{member.name}</p>
              <p className="text-white/60 text-xs mt-0.5">{member.role}</p>
            </div>
            {/* Hover line */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                width: { duration: 0.3, delay: memberIndex * 0.1 + 0.4 }
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
