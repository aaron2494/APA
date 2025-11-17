"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
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
    area: "Comunasdas",
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

export  function TeamSection() {
  return (
<<<<<<< HEAD
    <section className="relative bg-black py-24 px-4 md:px-8 overflow-hidden min-h-screen">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
     backgroundImage: `
  linear-gradient(to right, rgba(255,0,0,0.5) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,0,0,0.5) 1px, transparent 1px)
`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl opacity-30"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl opacity-20"
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
      
       <div className="relative max-w-7xl mx-auto">
        {/* Header Disruptivo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 text-center relative"
        >
          {/* Glitch Title */}
          <div className="relative">
            <motion.h2
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.5 }
                }
              }}
              className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tighter relative ${glitchActive ? 'glitch' : ''}`}
              style={{
           textShadow: glitchActive ? '0.05em 0 0 #ff0033, -0.05em 0 0 #ffffff' : 'none'

              }}
            >
              NUESTRO EQUIPO 
            </motion.h2>
            
            {/* Glitch layers */}
            {glitchActive && (
              <>
                <motion.h2
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                  style={{
                  color: '#ff0033',
                    left: '4px',
                    textShadow: '-2px 0 #ff0080',
                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
                  }}
                  animate={{
                    left: ['4px', '-2px', '3px']
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  NUESTRO EQUIPO
                </motion.h2>
                <motion.h2
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                  style={{
                    color: '#ffffff',
                    left: '-4px',
                    textShadow: '2px 0 #00ffff',
                    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
                  }}
                  animate={{
                    left: ['-4px', '2px', '-3px']
                  }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                >
                  NUESTRO EQUIPO
                </motion.h2>
              </>
            )}
          </div>

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
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-red-500 via-rose-500 to-red-800 bg-clip-text text-transparent tracking-tighter">
             TU EQUIPO
            </h3>
            
            {/* Animated underline */}
=======
    
    <div style={container}>
>>>>>>> parent of 456f85d (rework complete)
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
      {teamData.map((section, i) => (
        <Card
          i={i}
          key={section.area}
          area={section.area}
          members={section.members}
        />
      ))}
    </div>
  );
}

interface CardProps {
  area: string;
  members: { name: string; role: string }[];
  i: number;
}

function Card({ area, members, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(350)}, ${hue(0)})`; // Rojo APA degradado

  return (
    
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card "
      >
        <h3 style={areaTitle}>{area}</h3>
        <div style={membersGrid}>
          {members.map((m, idx) => (
            <div key={idx} style={memberBox}>
              <p style={memberName}>{m.name}</p>
              <p style={memberRole}>{m.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -10,
    opacity: 1,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 90%, 45%)`;

/* ==============================
   STYLES (idénticos al ejemplo)
   ============================== */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
 opacity: 0.6,
};

const card: React.CSSProperties = {
  width: 340,
  minHeight: 460,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 24,
  background: "rgba(255,255,255)",
  boxShadow:
    "0 0 1px rgba(0,0,0,0.08), 0 0 8px rgba(0,0,0,0.08), 0 0 16px rgba(0,0,0,0.1)",
  transformOrigin: "10% 60%",
  padding: "30px 20px",
  backdropFilter: "blur(8px)",
};

const areaTitle: React.CSSProperties = {
  fontSize: "1.5rem",
  color: "#b40f1d",
  textAlign: "center",
  marginBottom: 20,
  fontWeight: 700,
  letterSpacing: "0.5px",
};

const membersGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 12,
  width: "100%",
};

const memberBox: React.CSSProperties = {
  background: "rgba(180,15,29,0.05)",
  borderRadius: 12,
  padding: "12px 10px",
  textAlign: "center",
};

const memberName: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "1rem",
  color: "#111",
  marginBottom: 4,
};

const memberRole: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#555",
};