"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/magnetic-button";

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

function ServiceCard({
  service,
  index,
  scrollYProgress,
}: {
  service: (typeof services)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / services.length;
  const end = (index + 1.2) / services.length;

  const y       = useTransform(scrollYProgress, [start, end], [100, -150]);
  const scale   = useTransform(scrollYProgress, [start, end], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="sticky top-1/2 -translate-y-1/2 bg-black rounded-[30px] p-12 md:p-16 flex items-center justify-between gap-12"
    >
      <div>
        <p className="uppercase text-sm text-white/50 font-medium mb-3 tracking-widest">
          Nuestros servicios
        </p>
        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-white/70 text-lg leading-relaxed">
          {service.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 px-6 py-3 border-2 border-white rounded-full text-white text-base font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-all"
        >
          Descubrí más <span className="text-lg leading-none">↗</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] flex flex-col items-center justify-start bg-white"
    >

      {/* ── HEADER: fondo rojo, dos títulos ───────────────────────── */}
      <div className="w-full bg-[#c0001a] px-6 md:px-8 py-10 md:py-24 mt-5 overflow-hidden">
        <div className="max-w-4xl pb-15 mx-auto flex flex-col md:grid md:grid-cols-2 gap-6">

          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-4xl lg:text-7xl text-white leading-none self-start"
          >
            ¿QUÉ<br />HACEMOS?
          </motion.h2>

          <motion.h2
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-none text-right self-end"
          >
            ¿CÓMO LO<br />HACEMOS?
          </motion.h2>

        </div>
      </div>

      {/* ── SCROLL AREA: fondo blanco + cards negras ─────────────── */}
      <div className="w-full relative max-w-4xl mt-[10vh]">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            service={service}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* CTA final */}
      <div className="sticky pb-20 bg-white w-full flex justify-center pt-10">
        <MagneticButton>
          <motion.a
            href="#contacto"
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 rounded-full bg-[#c0001a] text-white font-medium text-lg tracking-wide hover:bg-[#a0001a] transition-all"
          >
            HABLEMOS DE TU PROYECTO
          </motion.a>
        </MagneticButton>
      </div>

    </section>
  );
}
