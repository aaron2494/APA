"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"

const team = [
  {
    name: "Lucía",
    role: "Directora Creativa",
    image: "/creative-marketing-strategy-session-with-team-coll.jpg",
    description:
      "Lidera el área creativa con una visión estratégica y estética que impulsa cada proyecto.",
  },
  {
    name: "Tomás",
    role: "Diseñador UX/UI",
    image: "/creative-team-brainstorming-session.jpg",
    description:
      "Diseña experiencias digitales centradas en el usuario con un enfoque moderno y funcional.",
  },
  {
    name: "María",
    role: "Especialista en Marketing Digital",
    image: "/diverse-creative-team-collaborating-on-marketing-s.jpg",
    description:
      "Desarrolla estrategias digitales que conectan marcas con personas y generan resultados reales.",
  },
  {
    name: "Julián",
    role: "Desarrollador Frontend",
    image: "/creative-marketing-strategy-session-with-team-coll.jpg",
    description:
      "Convierte ideas en interfaces dinámicas y responsivas, combinando diseño y tecnología.",
  },
  {
    name: "Lucía",
    role: "Directora Creativa",
    image: "/creative-marketing-strategy-session-with-team-coll.jpg",
    description:
      "Lidera el área creativa con una visión estratégica y estética que impulsa cada proyecto.",
  },
  {
    name: "Tomás",
    role: "Diseñador UX/UI",
    image: "/creative-team-brainstorming-session.jpg",
    description:
      "Diseña experiencias digitales centradas en el usuario con un enfoque moderno y funcional.",
  },
]

function TeamPair({
  members,
  index,
  totalSections,
  scrollYProgress,
}: {
  members: (typeof team)[]
  index: number
  totalSections: number
  scrollYProgress: any
}) {
  const start = index / totalSections
  const end = (index + 1) / totalSections

  const opacity = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [start - 0.05, start, end - 0.05, end], [0.8, 1, 1, 0.8])

  // Movimientos para desktop - arrancan MUY separadas
  const xEnterLeft = useTransform(scrollYProgress, 
    [start - 0.1, start, end - 0.1, end], 
    [-800, 0, 0, -800]  // Empieza muy a la izquierda y vuelve
  )
  const xEnterRight = useTransform(scrollYProgress, 
    [start - 0.1, start, end - 0.1, end], 
    [800, 0, 0, 800]   // Empieza muy a la derecha y vuelve
  )

  // Rotación adicional para más dinamismo
  const rotateLeft = useTransform(scrollYProgress, 
    [start - 0.1, start, end - 0.1, end], 
    [-15, 0, 0, -15]
  )
  const rotateRight = useTransform(scrollYProgress, 
    [start - 0.1, start, end - 0.1, end], 
    [15, 0, 0, 15]
  )

  // Movimientos para mobile - entran y salen por los costados
  const xMobileEnter = useTransform(scrollYProgress, 
    [start - 0.1, start, end - 0.1, end], 
    [400, 0, 0, -400]
  )
  
  const opacityMobile = useTransform(scrollYProgress,
    [start - 0.1, start, end - 0.1, end],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      {/* Versión desktop: dos cards que arrancan separadas */}
      <div className="hidden md:flex w-full items-center justify-between max-w-6xl mx-auto relative gap-8">
        <motion.div
          style={{ 
            scale, 
            x: xEnterLeft,
            rotate: rotateLeft
          }}
          className="w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 text-gray-800 transform-gpu"
        >
          <img
            src={members[0].image || "/placeholder.svg"}
            alt={members[0].name}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-6 shadow-lg"
          />
          <h3 className="text-xl font-bold text-center mb-2">{members[0].name}</h3>
          <p className="text-gray-600 text-base text-center mb-4 font-medium">{members[0].role}</p>
          <p className="text-sm leading-relaxed text-center text-gray-700">{members[0].description}</p>
        </motion.div>

        {members[1] && (
          <motion.div
            style={{ 
              scale, 
              x: xEnterRight,
              rotate: rotateRight
            }}
            className="w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 text-gray-800 transform-gpu"
          >
            <img
              src={members[1].image || "/placeholder.svg"}
              alt={members[1].name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 shadow-lg"
            />
            <h3 className="text-xl font-bold text-center mb-2">{members[1].name}</h3>
            <p className="text-gray-600 text-base text-center mb-4 font-medium">{members[1].role}</p>
            <p className="text-sm leading-relaxed text-center text-gray-700">{members[1].description}</p>
          </motion.div>
        )}
      </div>

      {/* Versión mobile: cards animadas que se deslizan */}
      <div className="flex md:hidden flex-col items-center justify-center w-full">
        {/* Primera card del par */}
        <motion.div
          style={{ 
            x: xMobileEnter,
            opacity: opacityMobile,
            scale 
          }}
          className="w-90 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-800 mb-4"
        >
          <img
            src={members[0].image || "/placeholder.svg"}
            alt={members[0].name}
            className="w-30 h-30 object-cover rounded-full mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-center">{members[0].name}</h3>
          <p className="text-gray-500 text-sm text-center mb-2">{members[0].role}</p>
          <p className="text-sm leading-relaxed text-center">{members[0].description}</p>
        </motion.div>
        
        {/* Segunda card del par (si existe) */}
        {members[1] && (
          <motion.div
            style={{ 
              x: xMobileEnter,
              opacity: opacityMobile,
              scale
            }}
            className="w-90 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 text-gray-800"
          >
            <img
              src={members[1].image || "/placeholder.svg"}
              alt={members[1].name}
              className="w-30 h-30 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{members[1].name}</h3>
            <p className="text-gray-500 text-sm text-center mb-2">{members[1].role}</p>
            <p className="text-sm leading-relaxed text-center">{members[1].description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Agrupar miembros de 2 en 2
  const pairs = []
  for (let i = 0; i < team.length; i += 2) {
    pairs.push(team.slice(i, i + 2))
  }

  return (
    <section id="about" className="relative bg-white text-gray-900">
      {/* Pantalla inicial con título */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
        >
          ¿Quiénes somos y qué hacemos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Un equipo comprometido con la innovación, la creatividad y los resultados que transforman marcas.
        </motion.p>
      </div>

      {/* Contenedor de scroll */}
      <div ref={containerRef} className="relative" style={{ height: `${pairs.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {pairs.map((members, index) => (
            <TeamPair
              key={index}
              members={members}
              index={index}
              totalSections={pairs.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
        {/* Frase de cierre impactante */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 bg-gradient-to-b from-white to-red-50/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800"
          >
            Creamos el futuro,{" "}
            <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              un proyecto a la vez
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Donde las ideas se encuentran con la ejecución perfecta, y la creatividad con la estrategia.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Conoce nuestro trabajo
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Contáctanos
            </button>
          </motion.div>
        </motion.div>
        
        {/* Elementos decorativos sutiles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-10 w-20 h-20 bg-red-200/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute top-20 right-10 w-16 h-16 bg-rose-300/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200/30 rounded-full blur-lg"
        />
      </div>
    </section>
  )
}
