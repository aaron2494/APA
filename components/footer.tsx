"use client"

import { Instagram, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-primary">APA</span> Marketing
            </div>
            <p className="text-sm text-accent-foreground/80 text-pretty">
              Creamos impacto real para marcas que quieren destacar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#proyectos"
                className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#servicios"
                className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
              >
                Servicios
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent-foreground/60">
              © {currentYear} APA Marketing. Todos los derechos reservados.
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
    </footer>
  )
}
