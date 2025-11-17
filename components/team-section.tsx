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
    
    <div style={container}>
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