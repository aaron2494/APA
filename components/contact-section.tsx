"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"

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
          <ClipReveal>HAGAMOSLO POSIBLE</ClipReveal>
          <ClipReveal delay={0.12}><span className="font-black">JUNTOS.</span></ClipReveal>
        </h2>

        {/* Card negra con el formulario */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-black rounded-3xl p-8 md:p-10 w-full max-w-[520px]"
        >
          <form onSubmit={handleSubmit} className="space-y-4">

            {[
              { type: "text", placeholder: "Nombre", key: "name", required: true },
              { type: "text", placeholder: "Empresa", key: "company", required: false },
              { type: "email", placeholder: "Email", key: "email", required: true },
            ].map((field, i) => (
              <motion.input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                required={field.required}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.35, ease: "easeOut" }}
                className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-full px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors"
              />
            ))}

            <motion.textarea
              placeholder="Mensaje"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.59, duration: 0.35, ease: "easeOut" }}
              className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-2xl px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors resize-none"
            />

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#c0001a] hover:bg-[#a0001a] text-white rounded-full px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              ENVIAR
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  )
}
