"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const titleText = "Hacelo Distinto"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showBounce, setShowBounce] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
   // Activar el crecimiento después de que termine la animación letra por letra
const bounceTimer = setTimeout(() => {
  setShowBounce(true)
}, titleText.length * 70 + 800)

return () => clearTimeout(bounceTimer)
}, [])

return (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
    <div className="text-center z-20">
       {/* PUNTO ROJO INICIAL QUE SALTA DOS VECES */}
  <motion.div
  className="absolute left-1/2 -translate-x-1/2 bottom-[45%] w-2 h-2 rounded-full bg-red-700 "
  initial={{ y: 0, opacity: 0 }}
  animate={{
    opacity: [0, 1, 1, 1, 0],
    y: [0, -120, 0, -60, -800], // dos rebotes y luego se va hacia arriba
  }}
  transition={{
    duration: 2.4,
    ease: [0.55, 0, 0.55, 0.2],
    times: [0, 0.25, 0.45, 0.6, 1],
  }}
/>
  {/* CONTENEDOR PRINCIPAL QUE CRECE SUAVEMENTE */}
  <motion.div
    className="inline-block origin-center"
    initial={{ scale: 0.2 }}
    animate={
      showBounce
        ? { scale: [0.7, 1.9, 1] }
        : { scale: 0.7 }
    }
    transition={{
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1],
      times: [0, 0.6, 1],
    }}
  >
    {/* ANIMACIÓN LETRA POR LETRA DEL TÍTULO */}
    <motion.div
      className="inline-block"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 1.8, // ⬅️ aparece después del punto rojo
          },
        },
      }}
    >
      <motion.span
        className="inline-block text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold text-primary leading-none"
        initial={{ scale: 0.3 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{
          duration: 0.9,
          delay: titleText.length * 0.07 + 2.3, // ajustado por el nuevo delay
          ease: "easeOut",
        }}
      >
        {titleText.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.6,
                y: 25,
                filter: "blur(6px)",
              },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  duration: 0.7,
                },
              },
            }}
            className="inline-block origin-center"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>

      {/* PUNTO FINAL */}
      <motion.span
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
             y: [ -400, 0 ],
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 15,  
              delay: titleText.length * 0.3 + 0.2,
              duration: 1.4,
               ease: [0.34, 1.56, 0.64, 1],
            },
          },
        }}
        className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-bold text-primary inline-block"
      >
        .
      </motion.span>
    </motion.div>
    
  </motion.div>

  {/* SUBTÍTULO - aparece después del texto */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{
      delay: titleText.length * 0.07 + 3.2, // ⬅️ ajustado para aparecer luego del punto rojo + texto
      duration: 0.6,
      ease: "easeOut",
    }}
    className="text-lg md:text-xl text-foreground/60 mt-8"
  >
    Paliza hace crecer tu marca con estrategias creativas, inspiradoras y desafiantes.
  </motion.p>
</div>

      {/* INDICADOR DE SCROLL */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{
          delay: titleText.length * 0.07 + 2.5,
          duration: 0.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-foreground/30 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}