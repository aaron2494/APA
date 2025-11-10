"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const teamData = [
  {
    area: "Comunicación & PR",
    members: [
      { name: "Laura Martínez", role: "Directora de Comunicación" },
      { name: "Diego Torres", role: "PR & Media Strategist" },
    ],
  },
  {
    area: "Creatividad & Contenido",
    members: [
      { name: "María Gómez", role: "Directora Creativa" },
      { name: "Sofía Herrera", role: "Diseñadora Gráfica" },
    ],
  },
  {
    area: "Digital & Tecnología",
    members: [
      { name: "Pablo Ruiz", role: "Web Developer" },
      { name: "Nicolás Soto", role: "Performance Analyst" },
    ],
  },

];

export function TeamSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="relative min-h-[250vh] bg-white text-gray-900 flex flex-col items-center py-32 overflow-hidden"
    >
       <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(180,15,29,0.05), transparent 70%), radial-gradient(circle at 70% 60%, rgba(180,15,29,0.05), transparent 70%)",
          y: bgY,
          backgroundSize: "200% 200%",
          animation: "energyFlow 12s ease-in-out infinite alternate",
        }}
      />
      <div className="absolute inset-0 z-[0] overflow-hidden h-full">
          {[
            "/modern-marketing-agency-workspace-with-creative-te.jpg",
         
          ].map((img, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                opacity:0.2
              }}
            />
          ))}
        </div>
   
  <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
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
    <span>Nuestro Equipo,</span>
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
    className="overflow-hidden"
  >
  <span className="text-primary thick-text-sub-red">Tú equipo</span>
  </motion.div>
</motion.div>
      {/* Cards animadas */}
      <div className="sticky top-1/2 -translate-y-1/4 w-full max-w-4xl">
        {teamData.map((section, i) => {
        const start = i / teamData.length;
                const end = (i + 1) / teamData.length;
      
                const y = useTransform(scrollYProgress, [start, end], [300, 100]);
                const scale = useTransform(scrollYProgress, [start, end], [0, 1.2]);
                const opacity = useTransform(scrollYProgress, [start, end], [1, 1]);

          return (
            <motion.div
              key={section.area}
              style={{ y,scale, opacity }}
              className=" bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-10 mx-6 md:mx-0"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#b40f1d]">
                {section.area}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {section.members.map((m, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0.5,
                      backgroundColor: "rgba(180,15,29,0.06)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all text-center"
                  >
                    <h4 className="font-bold text-lg">{m.name}</h4>
                    <p className="text-gray-600">{m.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
