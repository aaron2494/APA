"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const services = [
  {
    title: "Comunicación, PR Brand & Publicidad",
    description: "PR · Influencer Marketing · Activaciones de Marca · Publicidad en medios tradicionales · Producción de eventos",
  },
  {
    title: "Gestión de Redes",
    description: "Social Media · Community Management · Paid Media",
  },
  {
    title: "Creatividad & Contenido",
    description: "Diseño Gráfico · Creación de contenido · Producciones audiovisuales · Spots publicitarios",
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

  const [glitchActive, setGlitchActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔴 DETECTAR MÓVIL Y OPTIMIZAR ANIMACIONES
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 🔴 GLITCH OPTIMIZADO - MENOS FRECUENTE EN MÓVIL
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(prev => !prev);
    }, isMobile ? 5000 : 3000); // Menos frecuente en móvil
    return () => clearInterval(interval);
  }, [isMobile]);

  // 🔴 FONDO OPTIMIZADO - MÁS SIMPLE EN MÓVIL
  const BackgroundElements = useMemo(() => (
    <>
      {/* Fondo base */}
      <div className="absolute inset-0 bg-black -z-20" />
      
      {/* Grilla optimizada para móvil */}
      <div
        className="absolute inset-0 opacity-[0.15] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,0,0,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,0,0.4) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? "50px 50px" : "90px 90px",
        }}
      />

      {/* Orb optimizado - menos en móvil */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-40 w-[350px] h-[350px] bg-red-600 rounded-full blur-[90px] opacity-40 -z-10"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 w-[350px] h-[350px] bg-red-900 rounded-full blur-[100px] opacity-40 -z-10"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </>
  ), [isMobile]);

  // 🔴 TÍTULO OPTIMIZADO - GLITCH MÁS SIMPLE EN MÓVIL
  const TitleSection = useMemo(() => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12 md:mb-20 mt-8 md:mt-10 text-center relative"
    >
      {/* Título principal con glitch optimizado */}
      <div className="relative mb-6 md:mb-8">
        <motion.h2
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 0.1 }
            }
          }}
          className={`text-4xl md:text-6xl lg:text-8xl font-black text-white mb-2 md:mb-4 tracking-tight relative ${
            glitchActive && !isMobile ? 'glitch' : ''
          }`}
          style={{
            textShadow: glitchActive && !isMobile 
              ? '0.05em 0 0 #ff0033, -0.05em 0 0 #ffffff'
              : 'none'
          }}
        >
          QUE HACEMOS
        </motion.h2>

        {/* Capas de glitch solo en desktop */}
        {glitchActive && !isMobile && (
          <>
            <motion.h2
              className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black tracking-tight pointer-events-none"
              style={{
                color: '#ff0033',
                left: '1px',
                textShadow: '-2px 0 #ff0080',
                clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 10%)'
              }}
              animate={{ left: ['1px', '-1px', '1px'] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              QUE HACEMOS
            </motion.h2>
            <motion.h2
              className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black tracking-tight pointer-events-none"
              style={{
                color: '#ffffff',
                left: '-1px',
                textShadow: '2px 0 #00ffff',
                clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
              }}
              animate={{ left: ['-1px', '1px', '-1px'] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              QUE HACEMOS
            </motion.h2>
          </>
        )}
      </div>

      {/* Subtítulo optimizado */}
      <motion.div
        variants={{
          hidden: { opacity: 0, rotateX: 90 },
          visible: { 
            opacity: 1,
            rotateX: 0,
            transition: { delay: 0.3, duration: 0.8 }
          }
        }}
        className="relative inline-block"
      >
        <h3 className="text-2xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-red-500 via-rose-500 to-red-800 bg-clip-text text-transparent tracking-tight">
          Y COMO LO HACEMOS
        </h3>

        {/* Línea animada - más simple en móvil */}
        <motion.div
          className="h-1 md:h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-800 mt-1 md:mt-2"
          initial={{ width: 0, x: 0 }}
          whileInView={{
            width: "100%",
            x: isMobile ? 0 : [0, 10, -10, 0] // Sin movimiento en móvil
          }}
          transition={{
            width: { duration: 1, ease: "easeOut" },
            x: isMobile ? { duration: 0 } : { duration: 0.5, delay: 1, ease: "easeInOut" }
          }}
        />
      </motion.div>
    </motion.div>
  ), [glitchActive, isMobile]);

  // 🔴 CARD COMPONENT OPTIMIZADO
  const ServiceCard = useCallback(({ service, index, total }: { service: typeof services[0], index: number, total: number }) => {
    const start = index / total;
    const end = (index + 1) / total;

    const y = useTransform(scrollYProgress, [start, end], [100, -100]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.7]);
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

    // 🔴 EFECTOS DE HOVER SOLO EN DESKTOP
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], isMobile ? [0, 0] : [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], isMobile ? [0, 0] : [-15, 15]);

    const onMove = useCallback((e: React.MouseEvent) => {
      if (isMobile) return;
      const r = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - (r.left + r.width / 2));
      mouseY.set(e.clientY - (r.top + r.height / 2));
    }, [isMobile, mouseX, mouseY]);

    const onLeave = useCallback(() => {
      if (isMobile) return;
      mouseX.set(0);
      mouseY.set(0);
    }, [isMobile, mouseX, mouseY]);

    return (
      <motion.div
        key={index}
        style={{ y, scale, opacity }}
        className="sticky top-1/2 -translate-y-1/2 overflow-hidden"
      >
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            transition: {
              delay: index * (isMobile ? 0.1 : 0.15), // Menos delay en móvil
              duration: 0.6,
              type: "spring",
              stiffness: isMobile ? 100 : 120, // Menos stiffness en móvil
            },
          }}
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          className="relative bg-black border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 overflow-hidden cursor-pointer"
        >
          {/* Background gradient optimizado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500 to-fuchsia-600 opacity-20"
            animate={!isMobile ? { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] } : {}}
            transition={!isMobile ? { duration: 6, repeat: Infinity } : {}}
          />

          {/* Noise texture - más sutil en móvil */}
          <div
            className="absolute inset-0 opacity-20 md:opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
              backgroundSize: isMobile ? "100px" : "200px",
            }}
          />

          {/* Scanline - solo en desktop */}
          {!isMobile && (
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
          )}

          {/* Esquina glow - más sutil en móvil */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-red-500 opacity-20"
            style={{ 
              clipPath: "polygon(100% 0, 0 0, 100% 100%)", 
              filter: isMobile ? "blur(10px)" : "blur(20px)" 
            }}
            animate={!isMobile ? { scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] } : {}}
            transition={!isMobile ? { duration: 2, repeat: Infinity } : {}}
          />

          {/* CONTENIDO OPTIMIZADO */}
          <div className="relative z-10 text-white">
            <p className="uppercase text-xs md:text-sm text-red-400 font-bold mb-2 md:mb-3 tracking-wider">
              Nuestros servicios
            </p>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              {service.description}
            </p>

            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 md:px-6 md:py-3 border-2 border-white rounded-full text-white flex items-center gap-2 hover:bg-white hover:text-black transition-all text-sm md:text-base"
            >
              Descubrí más ↗
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }, [isMobile, scrollYProgress]);

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] md:min-h-[230vh] text-white flex flex-col items-center justify-start overflow-hidden"
    >
      {BackgroundElements}
      {TitleSection}

      {/* Cards container optimizado */}
      <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mt-[15vh] md:mt-[25vh] px-4">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index} 
            total={services.length} 
          />
        ))}
      </div>

      {/* CTA final optimizado */}
      <motion.div
        className="sticky mb-12 md:mb-20 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary text-white font-medium text-base md:text-lg tracking-wide hover:bg-gray-900 transition-all"
        >
          HABLEMOS DE TU PROYECTO
        </motion.button>
      </motion.div>
    </section>
  );
}