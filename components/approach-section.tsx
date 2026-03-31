"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { MagneticButton } from "@/components/magnetic-button"
import { ClipReveal } from "@/components/clip-reveal"

const TESTIMONIALS = [
  {
    id: 1,
    text: "Nativo bar está contento con el trabajo que realizan en nuestras redes sociales, son muy atentos en cada cosa que les pedimos. Tienen mucha dedicación y lo más importante es que se ponen la camiseta como nosotros, hacen un trabajo muy valioso.",
    author: "Valentina Moro",
    role: "Nativo Bar",
  },
  {
    id: 2,
    text: "Nuestra experiencia fue positiva. El manejo de nuestro Instagram cambió de forma notable, logrando una comunicación mucho más moderna, alineada con tendencias y con el estilo que estábamos buscando para la marca. Destacamos la calidad del trabajo y la buena comunicación",
    author: "Rodrigo Castillo",
    role: "CEO · Empresa C",
  },
  {
    id: 3,
    text: "Una empresa eficiente con metas claras, en constante crecimiento, gente capacitada profesional sobre todo honesta. Su trabajo es muy muy bueno, te guían y marcan el camino hacia nuevas tendencias. Los volvería a contratar sin dudarlo!",
    author: "Rodrigo Castillo",
    role: "CEO · Empresa C",
  },
  {
    id: 4,
    text: "Nuestra experiencia fue positiva. El manejo de nuestro Instagram cambió de forma notable, logrando una comunicación mucho más moderna, alineada con tendencias y con el estilo que estábamos buscando para la marca. Destacamos la calidad del trabajo y la buena comunicación",
    author: "Rodrigo Castillo",
    role: "CEO · Empresa C",
  },
  {
    id: 5,
    text: "Trabajamos con Agencia Paliza hace 2 años y estamos contentos con los resultados que generamos en conjunto con la marca. Al ser fabricantes de electrodomésticos, a veces es un desafío mostrar nuestros productos, pero la agencia logra mes a mes generar contenido de productos estáticos y lo hacen desde ideas creativas e innovadoras. Lograron que la gestión de las redes sociales sea mucho más dinámica, moderna y amigable con el público. Destacamos la calidad humana de todo el equipo.",
    author: "Rodrigo Castillo",
    role: "CEO · Empresa C",
  },
  {
    id: 6,
    text: "Estamos muy contentos con el trabajo de APA. Desde que las conocimos, la imagen mejoró muchísimo, y gran parte de clientes nuevos nos hacen mención a nuestras redes. Siempre que podemos las recomendamos, porque generan confianza ciega.",
    author: "Rodrigo Castillo",
    role: "CEO · Empresa C",
  },
]

const GROUP_1 = TESTIMONIALS.slice(0, 3)
const GROUP_2 = TESTIMONIALS.slice(3, 6)

export function ApproachSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  // Grupo 1 — entra escalonado, sale junto hacia arriba
  const card1Opacity = useTransform(scrollYProgress, [0.02, 0.14, 0.44, 0.54], [0, 1, 1, 0])
  const card1Y       = useTransform(scrollYProgress, [0.02, 0.14, 0.44, 0.54], [50, 0, 0, -30])

  const card2Opacity = useTransform(scrollYProgress, [0.12, 0.24, 0.44, 0.54], [0, 1, 1, 0])
  const card2Y       = useTransform(scrollYProgress, [0.12, 0.24, 0.44, 0.54], [50, 0, 0, -30])

  const card3Opacity = useTransform(scrollYProgress, [0.22, 0.34, 0.44, 0.54], [0, 1, 1, 0])
  const card3Y       = useTransform(scrollYProgress, [0.22, 0.34, 0.44, 0.54], [50, 0, 0, -30])

  // Grupo 2 — entra escalonado después del swap, se queda
  const card4Opacity = useTransform(scrollYProgress, [0.56, 0.66], [0, 1])
  const card4Y       = useTransform(scrollYProgress, [0.56, 0.66], [50, 0])

  const card5Opacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1])
  const card5Y       = useTransform(scrollYProgress, [0.64, 0.74], [50, 0])

  const card6Opacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1])
  const card6Y       = useTransform(scrollYProgress, [0.72, 0.82], [50, 0])

  // Botón — aparece al final
  const btnOpacity = useTransform(scrollYProgress, [0.86, 0.94], [0, 1])
  const btnY       = useTransform(scrollYProgress, [0.86, 0.94], [20, 0])

  const group1Motions = [
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
    { opacity: card3Opacity, y: card3Y },
  ]

  const group2Motions = [
    { opacity: card4Opacity, y: card4Y },
    { opacity: card5Opacity, y: card5Y },
    { opacity: card6Opacity, y: card6Y },
  ]

  return (
    <section id="servicios">

      {/* ── PARTE SUPERIOR: fondo negro ─────────────────────────── */}
      <div className="bg-black px-6 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl md:text-7xl lg:text-7xl text-white leading-none mb-8 md:mb-12">
            <ClipReveal>LO QUE DICEN</ClipReveal>
            <ClipReveal delay={0.1}>DE NOSOTROS</ClipReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed md:ml-[25%]"
          >
            Podríamos presentarnos y contarte nuestra historia en un breve
            párrafo, pero nos pareció una buena idea que nuestros clientes les
            cuenten que significa APA para ellos.
          </motion.p>

        </div>
      </div>

      {/* ── STICKY SCROLL: foto fija + cards que se swapean ─────── */}
      <div ref={wrapperRef} style={{ height: "420vh" }} className="relative">

        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Foto de fondo — B&W, quieta */}
          <div className="absolute inset-0">
            <Image
              src="/quienessomos.png"
              alt="Equipo de APA Agencia Paliza trabajando en estrategias de marketing digital"
              fill
              className="object-cover object-top grayscale"
              sizes="100vw"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k="
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Contenido encima de la foto */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-16 gap-6 md:gap-10">

            {/* Wrapper de cards — grupo 1 en flujo, grupo 2 superpuesto */}
            <div className="relative w-full max-w-6xl">

              {/* Grupo 1 — determina la altura del contenedor */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                {GROUP_1.map((t, i) => (
                  <motion.article
                    key={t.id}
                    style={group1Motions[i]}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-8 flex flex-col gap-3 md:gap-5"
                  >
                    <p className="text-gray-900 text-xs md:text-base leading-relaxed line-clamp-4">
                      {t.text}
                    </p>
                    <div>
                      <p className="text-gray-900 font-semibold text-xs md:text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Grupo 2 — superpuesto, entra cuando grupo 1 sale */}
              <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                {GROUP_2.map((t, i) => (
                  <motion.article
                    key={t.id}
                    style={group2Motions[i]}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-8 flex flex-col gap-3 md:gap-5"
                  >
                    <p className="text-gray-900 text-xs md:text-base leading-relaxed line-clamp-4">
                      {t.text}
                    </p>
                    <div>
                      <p className="text-gray-900 font-semibold text-xs md:text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

            </div>

            {/* Botón CONOCENOS */}
            <motion.div style={{ opacity: btnOpacity, y: btnY }}>
              <MagneticButton>
                <a
                  href="#contacto"
                  className="inline-block bg-primary text-white px-14 py-3 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  CONOCENOS
                </a>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  )
}
