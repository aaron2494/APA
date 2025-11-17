
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
      className="relative min-h-[200vh]  text-gray-900 flex flex-col items-center justify-start"
    >
          {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #ff0080 1px, transparent 1px),
            linear-gradient(to bottom, #ff0080 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"
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
 <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
  className="text-3xl mt-20 md:text-4xl font-bold text-gray-900 text-center overflow-hidden px-4"
>
  {/* Primera línea */}
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

          const y = useTransform(scrollYProgress, [start, end], [100, -100]);
          const scale = useTransform(scrollYProgress, [start, end], [1, 0.5]);
          const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

          return (
            <motion.div
              key={i}
              style={{ y, scale, opacity }}
              className="sticky top-1/2 -translate-y-1/2 bg-white rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-12 md:p-16 flex items-center justify-between gap-12"
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
