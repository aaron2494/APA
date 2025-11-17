
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Comunicación, PR Brand & Publicidad",
    description:
      "PR · Influencer Marketing · Activaciones de Marca · Publicidad en medios tradicionales · Producción de eventos",
  },
  {
    title: "Gestión de Redes",
    description: "Social Media · Community Management · Paid Media",
  },
  {
    title: "Creatividad & Contenido",
    description:
      "Diseño Gráfico · Creación de contenido · Producciones audiovisuales · Spots publicitarios",
  },
  {
    title: "Digital & Tecnología",
    description: "Diseño y Desarrollo Web · Performance & Data",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
<<<<<<< HEAD
      className="relative  min-h-[230vh] text-white flex flex-col items-center justify-start "
    >
      {/* 🔥 Fondo animado APA */}
      <div className="absolute inset-0 bg-black -z-20" />
 
      {/* 🔥 Grilla roja */}
      <div
        className="absolute inset-0 opacity-[0.18] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,0,0,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* 🔥 ORBES */}
      <motion.div
        className="absolute top-40  w-[350px] h-[350px] bg-red-600 rounded-full blur-[90px] opacity-40 -z-10"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40  w-[350px] h-[350px] bg-red-900 rounded-full blur-[100px] opacity-40 -z-10"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
=======
      className="relative min-h-[200vh] bg-[#fafafa] text-gray-900 flex flex-col items-center justify-start"
    >
 <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
  className="text-3xl mt-20 md:text-4xl font-bold text-gray-900 text-center overflow-hidden px-4"
>
  {/* Primera línea */}
>>>>>>> parent of 456f85d (rework complete)
  <motion.div
    variants={{
      hidden: { x: -30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.2
    }}
    className="overflow-hidden thick-text-sub-black"
  >
    <span className="text-primary thick-text-sub-red">Que</span> hacemos
  </motion.div>
  
  {/* Segunda línea */}
  <motion.div
    variants={{
      hidden: { x: 30, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    }}
    transition={{ 
      duration: 0.6, 
      ease: "easeOut",
      delay: 0.4
    }}
    className="overflow- thick-text-sub-black"
  >
    y <span className="text-primary thick-text-sub-red">como</span> lo hacemos
  </motion.div>
</motion.div>
      {/* Cards */}
      <div className="relative w-full max-w-4xl mt-[25vh]">
        {services.map((service, i) => {
          const start = i / services.length;
          const end = (i + 1.2) / services.length;

<<<<<<< HEAD
  {/* Cards */}
<div className="relative w-full max-w-4xl mt-[25vh]">
  {services.map((service, i) => {
    const start = i / services.length;
    const end = (i + 1) / services.length;

    const y = useTransform(scrollYProgress, [start, end], [100, -100]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.7]);
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

    // HOVER EFFECTS
   
    return (
      <motion.div
        key={i}
        style={{ y, scale, opacity }}
        className="sticky top-1/2 -translate-y-1/2 overflow-hidden "
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.8}}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            transition: {
              delay: i * 0.15,
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            },
          }}
          viewport={{ once: true }}
          className="relative bg-black border border-gray-800 rounded-3xl p-10 md:p-14 overflow-hidden cursor-pointer"
        >
          {/* Background gradient animado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500 to-fuchsia-600 opacity-20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />

          {/* Scanline */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 pointer-events-none"
            animate={{
              y: ["-120%", "180%"],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Esquina glow */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-red-500 opacity-20"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", filter: "blur(20px)" }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* CONTENT */}
          <div className="relative z-10 text-white">
            <p className="uppercase text-sm text-red-400 font-bold mb-3 tracking-wider">
              Nuestros servicios
            </p>

            <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white rounded-full text-white flex items-center gap-2 hover:bg-white hover:text-black transition-all"
=======
          const y = useTransform(scrollYProgress, [start, end], [100, -100]);
          const scale = useTransform(scrollYProgress, [start, end], [1, 0.5]);
          const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

          return (
            <motion.div
              key={i}
              style={{ y, scale, opacity }}
              className="sticky top-1/2 -translate-y-1/2 bg-white rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-12 md:p-16 flex items-center justify-between gap-12"
>>>>>>> parent of 456f85d (rework complete)
            >
              <div>
                <p className="uppercase text-sm text-primary font-medium mb-3">
                  Nuestros servicios
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-10 px-6 py-3 border-2 border-black rounded-full text-black text-base font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-all"
                >
                  Descubrí más{" "}
                  <span className="text-lg leading-none">↗</span>
                </motion.button>
              </div>

              {/* Placeholder “imagen / mockup” a la derecha */}
              <div className="hidden md:flex flex-1 justify-center">
                <div className="w-[280px] h-[180px] bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                  mockup
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA final */}
      <motion.div
      
        className="sticky mb-20 "
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full bg-primary text-white font-medium text-lg tracking-wide hover:bg-gray-900 transition-all"
        >
          HABLEMOS DE TU PROYECTO
        </motion.button>
      </motion.div>
    </section>
  );
}
