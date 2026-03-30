"use client"

import type React from "react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contacto" className="relative bg-white">

      {/* Fondo rojo — cubre la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-[380px] md:h-[420px] bg-[#c0001a]" />

      <div className="relative px-6 md:px-12 pt-10 md:pt-14 pb-20">

        {/* Título */}
        <h2 className="text-5xl md:text-7xl text-white leading-tight mb-8">
          HAGAMOSLO POSIBLE
          <br />
          <span className="font-black">JUNTOS.</span>
        </h2>

        {/* Card negra con el formulario */}
        <div className="bg-black rounded-3xl p-8 md:p-10 w-full max-w-[520px]">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-full px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors"
            />

            <input
              type="text"
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-full px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-full px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors"
            />

            <textarea
              placeholder="Mensaje"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-2xl px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors resize-none"
            />

            <button
              type="submit"
              className="bg-[#c0001a] hover:bg-[#a0001a] text-white rounded-full px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              ENVIAR
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}
