"use client"

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

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
      { name: "Laura Martínez", role: "Directora de Comunicación" },
      { name: "Diego Torres", role: "PR & Media Strategist" },
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
 const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
// Tra
const backgroundColor = useTransform(
  scrollYProgress,
  [0, 0.5, 1], // Ajusta estos valores según cuando quieras que cambie
  [ "#ffffff","#000000", "#000000",] // Negro al inicio, blanco al final
);
  return (
    <section ref={containerRef} className="relative  py-24 px-4 md:px-8 overflow-hidden">
     {/* Floating Orbs - Mantenemos solo las orbes flotantes */}
  <motion.div
     className="absolute inset-0 z-0"
 style={{
    backgroundColor: backgroundColor
  }}
  />
   {/* Floating Orbs - Mantenemos solo las orbes flotantes */}
  <motion.div
    className="absolute top-80 w-54 h-64 bg-primary rounded-full blur-3xl opacity-30 "
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
    className="absolute bottom-20 w-56 h-96 bg-primary rounded-full blur-3xl opacity-20 "
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

      <div className="relative max-w-5xl mx-auto">
        {/* Header con animación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 text-center"
 
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tight">
              Nuestro Equipo,
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-red-600 tracking-tight">
              Tu Equipo
            </h3>
          </motion.div>
          
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { delay: 0.3, duration: 0.6 }
              }
            }}
            className="text-gray-600 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light"
          >
            Profesionales apasionados que transforman ideas en experiencias memorables
          </motion.p>
        </motion.div>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamData.map((section, i) => (
            <TeamCard
              key={section.area}
              area={section.area}
              members={section.members}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )


interface TeamCardProps {
  area: string
  members: { name: string; role: string }[]
  index: number
}

function TeamCard({ area, members, index }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.25, 0.4, 0.25, 1]
          }
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Card Container */}
      <motion.div
        className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200 overflow-hidden"
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Hover Gradient Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 border-2 border-red-600 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Área Title */}
          <motion.div
            className="mb-8 pb-6 border-b border-gray-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {area}
            </h3>
            <motion.div
              className="h-1 bg-red-600 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: isHovered ? "100%" : "40px"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Members Grid */}
          <div className="space-y-4">
            {members.map((member, idx) => (
              <MemberCard
                key={idx}
                member={member}
                index={idx}
                isParentHovered={isHovered}
              />
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-0"
          animate={{
            opacity: isHovered ? 0.5 : 0
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}

interface MemberCardProps {
  member: { name: string; role: string }
  index: number
  isParentHovered: boolean
}

function MemberCard({ member, index, isParentHovered }: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut"
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      className="relative group/member"
    >
      <motion.div
        className="relative bg-gray-50 rounded-xl p-5 cursor-pointer overflow-hidden"
        whileHover={{ 
          backgroundColor: "#ffffff",
          transition: { duration: 0.2 }
        }}
      >
        {/* Hover Highlight */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0"
          animate={{
            opacity: isHovered ? 0.05 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.p
            className="text-gray-900 font-semibold text-lg mb-1"
            animate={{
              x: isHovered ? 4 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {member.name}
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm font-light"
            animate={{
              x: isHovered ? 4 : 0
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {member.role}
          </motion.p>
        </div>

        {/* Decorative Corner */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-red-600 opacity-0"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)"
          }}
          animate={{
            opacity: isHovered ? 0.1 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom Line Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-red-600"
          initial={{ width: 0 }}
          animate={{
            width: isHovered ? "100%" : "0%"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
}