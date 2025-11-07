"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"


const brandLogos = [
  { name: "Nike", image: "/nike-logo.jpg" },
  { name: "Adidas", image: "/adidas-logo.jpg" },
  { name: "Spotify", image: "/spotify-logo.jpg" },
  { name: "Apple", image: "/apple-logo.jpg" },
  { name: "Google", image: "/google-logo.jpg" },
  { name: "Amazon", image: "/amazon-logo.jpg" },
  { name: "Microsoft", image: "/microsoft-logo.jpg" },
  { name: "Samsung", image: "/samsung-logo.jpg" },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const teamScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1.5, 1, 0.8])
  const teamOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [1, 1, 1, 1])
  const teamBorderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 24])

  const brandOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
  const brandScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1])

  const gradientY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="proyectos" className="relative bg-white">
      {/* Title section */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              Impacto <span className="text-primary">Real</span>
            </h2>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
              Historia de transformación digital, creatividad y resultados medibles.
            </p>
          </motion.div>
        </div>
      </div>

      <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
        <motion.div
          className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
          style={{
            background: useTransform(
              gradientY,
              (y) => `linear-gradient(to bottom, 
                rgba(229, 9, 20, 0.02) 0%, 
                rgba(229, 9, 20, 0.01) ${y}, 
                rgba(229, 9, 20, 0.08) 100%)`,
            ),
          }}
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
                    src={brandLogos[index]?.image || "/placeholder.svg?height=200&width=200"}
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
                  src={brandLogos[3]?.image || "/placeholder.svg?height=200&width=200"}
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
                <img src="/apa-team-photo.jpg" alt="APA Marketing Team" className="w-full h-full object-cover" />
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
                  src={brandLogos[4]?.image || "/placeholder.svg?height=200&width=200"}
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
                    src={brandLogos[index]?.image || "/placeholder.svg?height=200&width=200"}
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
  )
}