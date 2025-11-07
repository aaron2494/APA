
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
      className="relative min-h-[300vh] bg-[#fafafa] text-gray-900 flex flex-col items-center justify-start"
    >
      {/* Título */}
      <div className="sticky  z-30 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary">Qué </span>hacemos <br /> y <span className="text-primary">cómo </span>lo hacemos
        </h2>
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-4xl mt-[25vh]">
        {services.map((service, i) => {
          const start = i / services.length;
          const end = (i + 1.2) / services.length;

          const y = useTransform(scrollYProgress, [start, end], [100, -100]);
          const scale = useTransform(scrollYProgress, [start, end], [1, 0.96]);
          const opacity = useTransform(scrollYProgress, [start, end], [1, 0.9]);

          return (
            <motion.div
              key={i}
              style={{ y, scale, opacity }}
              className="sticky top-1/2 -translate-y-1/2 bg-white rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-12 md:p-16 flex items-center justify-between gap-12"
            >
              <div>
                <p className="uppercase text-sm text-gray-400 font-medium mb-3">
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
        style={{
          opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0.85, 1], [50, 0]),
        }}
        className="sticky bottom-[10vh] "
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
