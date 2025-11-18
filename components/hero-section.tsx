"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const titleText = "HACELO DISTINTO";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBounce, setShowBounce] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 300]); // efecto parallax sutil
  useEffect(() => {
    setIsVisible(true);

    // Activar el crecimiento después de que termine la animación letra por letra
    const bounceTimer = setTimeout(() => {
      setShowBounce(true);
    }, titleText.length * 70 + 500);

    return () => clearTimeout(bounceTimer);
  }, []);

  return (
    
    <section className="relative h-screen flex items-center justify-center overflow-hidden ">
      {/* Floating Orbs - Mantenemos solo las orbes flotantes */}

        <motion.div
          className="absolute mr-70  lg:mr-0 top-0  lg:left-0 w-46 h-26 bg-primary rounded-full blur-xl opacity-30 z-10"
          animate={{
           
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      {/* VIDEO DE FONDO */}
      <motion.video
        style={{ y }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
      >
        <source src="/fondo-hero.mp4" type="video/mp4" />
      </motion.video>

      {/* CAPA SEMITRANSPARENTE PARA CONTRASTE */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="relative z-10 text-center">
        
      </div>
      <div className="text-center z-20">
        <motion.span
          className="absolute text-[100px] md:text-[110px] lg:text-[12vw] left-1/2 -translate-x-1/2 bottom-[45%] font-bold text-primary inline-block"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            opacity: [1, 1, 1, 1, 1],
            y: [0, -120, 0, -800], // dos rebotes y luego se va hacia arriba
          }}
          transition={{
            duration: 1,
            ease: [0.1, 0.2, 0.3, 2],
            times: [0, 0.25, 0.45, 0.6, 1],
          }}
        >
          .
        </motion.span>
        <motion.div
          className="inline-block origin-center"
          initial={{ scale: 1 }}
          animate={
            isVisible
              ? {
                  scale: [0.8, 1.5, 1], // Aumentados valores para más impacto visual
                }
              : {}
          }
          transition={{
            duration: 1.2, // Reducido de 1.6 para que sea más rápido
            delay: titleText.length * 0.06 + 0.2, // Reducido delay para acelerar la secuencia
            ease: [0.25, 1.35, 0.6, 1], // Ajustado easing para más elasticidad
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {/* CONTENEDOR PRINCIPAL - Similar a Monks */}
          <motion.div
            className="inline-block"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.02,
                  delayChildren: 0.7,
                },
              },
            }}
          >
            {/* TEXTO PRINCIPAL - Aparece letra por letra muy pequeño */}
            <motion.span className="inline-block  text-[12vw] md:text-[9vw] lg:text-[12vw] font-bold text-white leading-none">
              {titleText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.2, // Reducido de 0.1 para empezar más pequeño
                      y: 100, // Aumentado de 40 para efecto más dramático
                      rotateX: -10,
                      filter: "blur(12px)", // Aumentado blur
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        type: "spring",
                        stiffness: 300, // Aumentado de 350 para más elasticidad
                        damping: 20, // Reducido de 30 para más rebote

                        duration: 0.6, // Reducido de 0.8
                      },
                    },
                  }}
                  className="inline-block"
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
                  y: [-400, 0],
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: titleText.length * 0.1 + 0.7,
                    duration: 1.4,
                    ease: [0.34, 1.56, 0.64, 1],
                  },
                },
              }}
              className="text-[80px] md:text-[100px] lg:text-[8vw] font-bold text-primary inline-block"
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
            delay: titleText.length * 0.07 + 2.2, // ⬅️ ajustado para aparecer luego del punto rojo + texto
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-lg md:text-xl text-foreground/60 mt-8"
        >
          Paliza hace crecer tu marca con estrategias{" "}
          <span className="font-bold text-white">
            creativas, inspiradoras y desafiantes.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
