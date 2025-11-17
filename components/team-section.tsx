"use client"

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const teamData = [
  {
    area: "Comunicación & PR",
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-600",
    members: [
      { name: "Laura Martínez", role: "Directora de Comunicación" },
      { name: "Diego Torres", role: "PR & Media Strategist" },
    ],
  },
  {
    area: "Estrategia Digital",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500",
    members: [
      { name: "Laura Martínez", role: "Directora de Comunicación" },
      { name: "Diego Torres", role: "PR & Media Strategist" },
    ],
  },
  {
    area: "Creatividad & Contenido",
    color: "from-red-600 to-red-900",
      bgColor: "bg-red-700",
    members: [
      { name: "María Gómez", role: "Directora Creativa" },
      { name: "Sofía Herrera", role: "Diseñadora Gráfica" },
    ],
  },
  {
    area: "Digital & Tecnología",
    color: "from-rose-500 to-red-700",
    bgColor: "bg-rose-600",
    members: [
      { name: "Pablo Ruiz", role: "Web Developer" },
      { name: "Nicolás Soto", role: "Performance Analyst" },
    ],
  },
]


export function TeamSection() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null)
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Glitch effect aleatorio
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 150)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-black py-24 px-4 md:px-8 overflow-hidden min-h-screen">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
     backgroundImage: `
  linear-gradient(to right, rgba(255,0,0,0.5) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,0,0,0.5) 1px, transparent 1px)
`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
       <div className="relative max-w-7xl mx-auto">
        {/* Header Disruptivo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 text-center relative"
        >
          {/* Glitch Title */}
          <div className="relative">
            <motion.h2
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.5 }
                }
              }}
              className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tighter relative ${glitchActive ? 'glitch' : ''}`}
              style={{
           textShadow: glitchActive ? '0.05em 0 0 #ff0033, -0.05em 0 0 #ffffff' : 'none'

              }}
            >
              NUESTRO EQUIPO 
            </motion.h2>
            
            {/* Glitch layers */}
            {glitchActive && (
              <>
                <motion.h2
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                  style={{
                  color: '#ff0033',
                    left: '4px',
                    textShadow: '-2px 0 #ff0080',
                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
                  }}
                  animate={{
                    left: ['4px', '-2px', '3px']
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  NUESTRO EQUIPO
                </motion.h2>
                <motion.h2
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                  style={{
                    color: '#ffffff',
                    left: '-4px',
                    textShadow: '2px 0 #00ffff',
                    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
                  }}
                  animate={{
                    left: ['-4px', '2px', '-3px']
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  NUESTRO EQUIPO
                </motion.h2>
              </>
            )}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, rotateX: 90 },
              visible: { 
                opacity: 1,
                rotateX: 0,
                transition: { delay: 0.3, duration: 0.8 }
              }
            }}
            className="relative inline-block"
          >
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-red-500 via-rose-500 to-red-800 bg-clip-text text-transparent tracking-tighter">
             TU EQUIPO
            </h3>
            
            {/* Animated underline */}
            <motion.div
              className="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-800 mt-2"
              initial={{ width: 0, x: 0 }}
              whileInView={{ 
                width: "100%",
                x: [0, 10, -10, 0]
              }}
              transition={{
                width: { duration: 1, ease: "easeOut" },
                x: { duration: 0.5, delay: 1, ease: "easeInOut" }
              }}
            />
          </motion.div>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 }
              }
            }}
            className="text-gray-400 text-xl md:text-2xl mt-8 max-w-3xl mx-auto font-light"
          >
            Click en cada área para explorar el talento que impulsa la disrupción
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout - Disruptivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((section, i) => (
            <DisruptiveCard
              key={section.area}
              area={section.area}
              members={section.members}
              index={i}
              color={section.color}
              bgColor={section.bgColor}
              isSelected={selectedArea === i}
              onClick={() => setSelectedArea(selectedArea === i ? null : i)}
            />
          ))}
        </div>

        {/* Expanded View Modal */}
        <AnimatePresence>
          {selectedArea !== null && (
            <ExpandedAreaView
              section={teamData[selectedArea]}
              onClose={() => setSelectedArea(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

interface DisruptiveCardProps {
  area: string
  members: { name: string; role: string }[]
  index: number
  color: string
  bgColor: string
  isSelected: boolean
  onClick: () => void
}

function DisruptiveCard({ area, members, index, color, bgColor, isSelected, onClick }: DisruptiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        rotateZ: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      onClick={onClick}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      className={`relative cursor-pointer ${index === 2 ? 'lg:col-span-2' : ''}`}
    >
      <motion.div
        className="relative h-80 rounded-3xl overflow-hidden border border-gray-800"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        animate={{
          boxShadow: isHovered 
  ? `0 0 40px rgba(255, 0, 40, 0.4)`
  : '0 0 0px rgba(0,0,0,0)'
        }}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`}
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundSize: '200px'
          }}
        />

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
          animate={{
            y: isHovered ? ['-100%', '200%'] : '-100%',
            opacity: isHovered ? [0, 0.1, 0] : 0
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between z-10">
          {/* Header */}
          <div>
            <motion.div
              className={`inline-block px-4 py-2 ${bgColor} rounded-full mb-4`}
              animate={{
                rotate: isHovered ? [0, -5, 5, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white text-sm font-bold">0{index + 1}</span>
            </motion.div>
            
            <motion.h3
              className="text-white text-3xl md:text-4xl font-black mb-2 leading-tight"
              animate={{
                x: isHovered ? [0, -5, 5, 0] : 0,
                textShadow: isHovered 
                  ? '2px 2px 0px rgba(255,0,128,0.5)' 
                  : '0px 0px 0px rgba(0,0,0,0)'
              }}
              transition={{ duration: 0.3 }}
            >
              {area}
            </motion.h3>
          </div>

          {/* Members Preview */}
          <div className="space-y-2">
            <motion.p
              className="text-gray-400 text-sm font-semibold mb-3"
              animate={{
                opacity: isHovered ? 1 : 0.6
              }}
            >
              {members.length} MIEMBROS
            </motion.p>
            
            {/* Member Avatars */}
            <div className="flex -space-x-3">
              {members.slice(0, 4).map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`w-10 h-10 ${bgColor} rounded-full border-2 border-black flex items-center justify-center`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    scale: isHovered ? 1.1 : 1
                  }}
                  transition={{ 
                    delay: idx * 0.05,
                    scale: { duration: 0.2 }
                  }}
                >
                  <span className="text-white text-xs font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hover Indicator */}
          <motion.div
            className="absolute bottom-6 right-6"
            animate={{
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : -180
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 ${bgColor} opacity-20`}
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            filter: 'blur(20px)'
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.4 : 0.2
          }}
        />
      </motion.div>
    </motion.div>
  )
}

interface ExpandedAreaViewProps {
  section: typeof teamData[0]
  onClose: () => void
}

function ExpandedAreaView({ section, onClose }: ExpandedAreaViewProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative max-w-4xl w-full max-h-[80vh] overflow-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800"
        initial={{ scale: 0.8, rotateX: 45, opacity: 0 }}
        animate={{ scale: 1, rotateX: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateX: -45, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-4`}>
            {section.area}
          </h3>
          <p className="text-gray-400 text-lg">
            Conoce al equipo que hace la magia
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className={`w-16 h-16 ${section.bgColor} rounded-full mb-4 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">{member.name}</h4>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}