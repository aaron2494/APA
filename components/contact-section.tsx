"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <h2 className="fade-in-element text-5xl md:text-7xl lg:text-8xl font-bold opacity-0 text-white uppercase leading-none mb-16">
            HAGAMOSLO POSIBLE JUNTOS.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-transparent border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12"
            />

            <Input
              id="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-transparent border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12"
            />

            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-transparent border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12"
            />

            <Textarea
              id="message"
              placeholder="Mensaje"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-transparent border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none resize-none"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-black hover:bg-black/80 text-white rounded-none h-12 font-bold tracking-widest uppercase"
            >
              ENVIAR
            </Button>
          </form>

        </div>
      </div>
    </section>
  )
}
