"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const brandLogos = [
  { name: "Nike", image: "/nike-logo.jpg" },
  { name: "Adidas", image: "/adidas-logo.jpg" },
  { name: "Spotify", image: "/spotify-logo.jpg" },
  { name: "Apple", image: "/apple-logo.jpg" },
  { name: "Google", image: "/google-logo.jpg" },
  { name: "Amazon", image: "/amazon-logo.jpg" },
  { name: "Microsoft", image: "/microsoft-logo.jpg" },
  { name: "Samsung", image: "/samsung-logo.jpg" },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const teamScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1.5, 1, 0.8]);
  const teamOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [1, 1, 1, 1]
  );
  const teamBorderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 24]);

  const brandOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const brandScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  const gradientY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Glitch effect aleatorio
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 150)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="proyectos" className="relative  bg-black">
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
        className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-30"
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
      
      {/* Title section */}
 <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 pt-20 text-center relative"
        >
          {/* Glitch Title */}
          <div className="relative ">
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
              IMPACTO
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
                  IMPACTO
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
                  IMPACTO
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
             REAL
            </h3>
            
            {/* Animated underline */}
            <motion.div
              className="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-800 mt-2"
              initial={{ width: 0, x: 0 }}
              whileInView={{ 
                width: "100%",
                x: [0, 10, -10, 0]
              }}
              transition={{
                width: { duration: 1, ease: "easeOut" },
                x: { duration: 0.5, delay: 1, ease: "easeInOut" }
              }}
            />
          </motion.div>
          
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 }
              }
            }}
            className="text-gray-400 text-xl md:text-2xl mt-8 max-w-3xl mx-auto font-light"
          >
            Historias de impacto real y transformacion Digital
          </motion.p>
        </motion.div>
  

      <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
        <motion.div
          className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl mx-auto px-4">
            {/* Grid container */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-6">
              {/* Top row - brand logos */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`top-${index}`}
                  style={{ opacity: brandOpacity, scale: brandScale }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
                >
                  <img
                    src={
                      brandLogos[index]?.image ||
                      "/placeholder.svg?height=200&width=200"
                    }
                    alt={brandLogos[index]?.name || `Brand ${index + 1}`}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}

              {/* Middle row - brand, team (center), brand */}
              <motion.div
                style={{ opacity: brandOpacity, scale: brandScale }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
              >
                <img
                  src={
                    brandLogos[3]?.image ||
                    "/placeholder.svg?height=200&width=200"
                  }
                  alt={brandLogos[3]?.name || "Brand 4"}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>

              {/* Center - Team image */}
              <motion.div
                style={{
                  scale: teamScale,
                  opacity: teamOpacity,
                  borderRadius: teamBorderRadius,
                }}
                className="relative aspect-square overflow-hidden shadow-2xl ring-4 ring-primary ring-offset-4"
              >
                <img
                  src="/apa-team-photo.jpg"
                  alt="APA Marketing Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 text-white"
                ></motion.div>
              </motion.div>

              <motion.div
                style={{ opacity: brandOpacity, scale: brandScale }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
              >
                <img
                  src={
                    brandLogos[4]?.image ||
                    "/placeholder.svg?height=200&width=200"
                  }
                  alt={brandLogos[4]?.name || "Brand 5"}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>

              {/* Bottom row - brand logos */}
              {[5, 6, 7].map((index) => (
                <motion.div
                  key={`bottom-${index}`}
                  style={{ opacity: brandOpacity, scale: brandScale }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-2 md:p-5"
                >
                  <img
                    src={
                      brandLogos[index]?.image ||
                      "/placeholder.svg?height=200&width=200"
                    }
                    alt={brandLogos[index]?.name || `Brand ${index + 1}`}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
