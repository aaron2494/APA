"use client"

import { Instagram, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-accent text-accent-foreground py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative h-14 w-24">
              <Image src="/logos/APA-ROJO.png" alt="APA" fill className="object-contain object-left" sizes="96px" />
            </div>
            <p className="text-sm text-accent-foreground/80 text-pretty">
              Construyamos un impacto juntos
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces</h3>
            <nav aria-label="Navegación footer" className="flex flex-col space-y-2">
              <Link
                href="#proyectos"
                className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#servicios"
                className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Clientes
              </Link>
              <Link href="#nosotros" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Seguinos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/agenciapaliza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/agencia-paliza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent-foreground/60">
              © {currentYear} APA . Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
