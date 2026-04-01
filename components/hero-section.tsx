"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/magnetic-button";

const titleText = "Hacelo distinto";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 300]);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-100vh">
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
      {/* IMAGEN DE FONDO CON PARALLAX */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/banner.jpg.jpeg"
          alt="Fondo visual de la agencia APA — marketing digital boutique en Buenos Aires"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* OVERLAY OSCURO - legibilidad del texto */}
      <div className="absolute inset-0 bg-black/55" />

      {/* TINTE CHERRY RED - identidad de marca */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#b40f1d]/30 via-transparent to-transparent" />

      {/* CONTENIDO ENCIMA DEL VIDEO */}
      <div className="relative z-10 text-center">
        
      </div>
      <div className="text-center z-20 px-4 w-full">
       
        <h1 className="inline-block text-[10vw] md:text-[9vw] lg:text-[10vw] font-bold text-white leading-none">
          {titleText}<span className="text-[40px] md:text-[60px] lg:text-[6vw]">.</span>
        </h1>

        {/* SUBTÍTULO - aparece después del texto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-base md:text-xl text-white/80 mt-8 max-w-xs md:max-w-lg mx-auto"
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
