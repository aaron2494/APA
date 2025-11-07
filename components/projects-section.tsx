"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    client: "TST",
    description:
      "Posicionamos la marca como referente en electrodomésticos a través de una estrategia integral que combina contenido orgánico, campañas digitales e influencers.",
    image: "/modern-appliance-store-branding-campaign.jpg",
  },
  {
    client: "Lure",
    description:
      "Lanzamiento de nueva línea de productos con campaña 360° que generó un incremento del 150% en engagement.",
    image: "/sports-brand-product-launch-campaign.jpg",
  },
  {
    client: "Nativo",
    description: "Estrategia de contenido y growth marketing que llevó a la startup de 0 a 50K seguidores en 6 meses.",
    image: "/tech-startup-social-media-growth.jpg",
  },
  {
    client: "Restaurante Premium",
    description: "Rebranding completo y estrategia digital que triplicó las reservas online en el primer trimestre.",
    image: "/premium-restaurant-branding-and-marketing.jpg",
  },
]

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

export function ProjectsSection() {
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
              Nuestros <span className="text-primary">Proyectos</span>
            </h2>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
              Cada proyecto es una historia de transformación digital, creatividad y resultados medibles.
            </p>
          </motion.div>
        </div>
      </div>

      <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
        <motion.div
          className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
          style={{
            background: useTransform(
              gradientY,
              (y) => `linear-gradient(to bottom, 
                rgba(229, 9, 20, 0.03) 0%, 
                rgba(229, 9, 20, 0.08) ${y}, 
                rgba(229, 9, 20, 0.03) 100%)`,
            ),
          }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* Grid container */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Top row - brand logos */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={`top-${index}`}
                  style={{ opacity: brandOpacity, scale: brandScale }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 flex items-center justify-center p-6 md:p-10"
                >
                  <img
                    src={brandLogos[index]?.image || "/placeholder.svg?height=300&width=300"}
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

      {/* Final phrase section */}
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Innovación, diseño y <span className="text-primary">tecnología.</span>
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto"
          >
            Transformamos ideas en experiencias digitales que conectan marcas con personas.
          </motion.p>

          {/* Project cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h4 className="text-2xl font-bold text-black">{project.client}</h4>
                  <p className="text-black/60 leading-relaxed">{project.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group">
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
