"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

const titleText = "HACELO DISTINTO"


export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 300])
  const renderAnimatedText = (text: string) =>
  text.split("").map((char, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, scale: 0.3, y: 150, filter: "blur(20px)" },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 3,
          },
        },
      }}
      className="inline-block"
      style={{
        willChange: "transform, opacity",
        textShadow: glitchActive
          ? "2px 2px 0 rgba(220, 38, 38, 0.8), -2px -2px 0 rgba(255, 255, 255, 0.4)"
          : "3px 3px 0 rgba(0,0,0,0.3)",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  useEffect(() => {
    setIsVisible(true)
    
    // Glitch effect random - más sutil
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 150)
    }, 8000)

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* VIDEO DE FONDO */}
      <motion.video
        style={{ y }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform opacity-30"
      >
        <source src="/fondo-hero.mp4" type="video/mp4" />
      </motion.video>

      {/* GRID BACKGROUND - Rojo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(220, 38, 38, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(220, 38, 38, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* FLOATING ORBS - Solo rojo */}
      <motion.div
        className="absolute top-1/4 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* CAPA OVERLAY GRADIENTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 text-center px-4">
        
        {/* TÍTULO PRINCIPAL - ESTILO MONKS */}
        <div className="relative mt-10">
          <motion.div
            className="inline-block"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.3,
                },
              },
            }}
          >

            {/* MOBILE: siempre 2 líneas */}
<div className="block md:hidden leading-none">
  <motion.span className="block text-[15vw] font-black text-white">
    {renderAnimatedText("HACELO")}
  </motion.span>

  <motion.span className="block text-[15vw] font-black text-white">
    {renderAnimatedText("DISTINTO.")}
  </motion.span>
</div>
            {/* Texto Principal - Animación Monks */}
            <motion.span className="hidden md:inline-block text-[9vw] font-black text-white leading-none tracking-tight relative">
  {titleText.split("").map((char, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, scale: 0.3, y: 80, filter: "blur(20px)" },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 3,
          },
        },
      }}
      className="inline-block"
      style={{
        willChange: "transform, opacity",
        textShadow: glitchActive
          ? "2px 2px 0 rgba(220, 38, 38, 0.8), -2px -2px 0 rgba(255, 255, 255, 0.4)"
          : "3px 3px 0 rgba(0,0,0,0.3)",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.span>

            {/* PUNTO FINAL - Rebote Monks con color rojo */}
            <motion.span
              variants={{
                hidden: { scale: 0, opacity: 0, y: 100 },
                visible: {
                 
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    mass: 1,
                    delay: 0.1,
                  },
                },
              }}
              className="inline-block text-[15vw] md:text-[12vw] lg:text-[9vw] font-black text-red-600"
              style={{
                willChange: 'transform',
                filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.6))',
              }}
            >
              .
            </motion.span>
          </motion.div>

          {/* Glitch Layers - Rojo y Blanco */}
          {glitchActive && (
            <>
              <motion.div
                className="absolute inset-0 text-[15vw] md:text-[12vw] lg:text-[9vw] font-black tracking-tight pointer-events-none"
                style={{
                  color: '#dc2626',
                  left: '3px',
                  top: '2px',
                  clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  left: ['3px', '-2px', '2px'],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 0.7, repeat: 1 }}
              >
                {titleText}.
              </motion.div>
              <motion.div
                className="absolute inset-0 text-[15vw] md:text-[12vw] lg:text-[9vw] font-black tracking-tight pointer-events-none"
                style={{
                  color: '#ffffff',
                  left: '-3px',
                  top: '-2px',
                  clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
                  mixBlendMode: 'screen'
                }}
                animate={{
                  left: ['-3px', '2px', '-2px'],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 0.1, repeat: 1 }}
              >
                {titleText}.
              </motion.div>
            </>
          )}
        </div>

        {/* LÍNEA DECORATIVA ROJA */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{
            delay: titleText.length * 0.05 + 1,
            duration: 1,
            ease: "easeOut"
          }}
          className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8 mx-auto"
          style={{ width: '80%', maxWidth: '600px' }}
        />

        {/* SUBTÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: titleText.length * 0.05 + 1.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >
          <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
            Paliza hace crecer tu marca con estrategias{" "}
            <span className="font-bold text-primary">
              creativas, inspiradoras y desafiantes
            </span>
            .
          </p>
        </motion.div>

        {/* BADGES FLOTANTES - Rojo y Blanco */}
       <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          href="https://3260.agency/agenda-ok#calendly"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
        >
          DA EL PRIMER PASO
        </motion.a>
      </div>

      {/* SCAN LINES - Más sutil */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 2px)',
        }}
        animate={{
          y: ['0%', '100%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* NOISE TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: '200px'
        }}
      />
    </section>
  )
}