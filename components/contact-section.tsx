"use client"

import { useState, useTransition, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"

export function ContactSection() {
  const [state, setState] = useState<ContactState>({ status: "idle" })
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await sendContactEmail({ status: "idle" }, formData)
      setState(result)
      if (result.status === "success") formRef.current?.reset()
    })
  }

  return (
    <section id="contacto" className="relative bg-white">

      {/* Fondo rojo — cubre la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-[420px] md:h-[460px] bg-[#c0001a]" />

      <div className="relative px-6 md:px-12 pt-10 md:pt-14 pb-20">

        {/* Título */}
        <h2 className="text-5xl md:text-7xl text-white leading-tight mb-8">
          <ClipReveal>HAGAMOSLO POSIBLE</ClipReveal>
          <ClipReveal delay={0.12}><span className="font-black">JUNTOS.</span></ClipReveal>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Columna izquierda — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-black rounded-3xl p-8 md:p-10 w-full"
          >
            <AnimatePresence mode="wait">
              {state.status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-8 flex flex-col items-center gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-14 h-14 rounded-full bg-[#c0001a] flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                  <p className="text-white text-lg font-semibold">¡Mensaje recibido!</p>
                  <p className="text-white/60 text-sm">Te respondemos a la brevedad.</p>
                  <button
                    onClick={() => setState({ status: "idle" })}
                    className="mt-2 text-white/40 text-xs underline underline-offset-2 hover:text-white/70 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  exit={{ opacity: 0 }}
                >
                  {[
                    { type: "text", placeholder: "Nombre", name: "name", required: true },
                    { type: "text", placeholder: "Empresa", name: "company", required: false },
                    { type: "email", placeholder: "Email", name: "email", required: true },
                  ].map((field, i) => (
                    <motion.input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      disabled={isPending}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.08, duration: 0.35, ease: "easeOut" }}
                      className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-full px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors disabled:opacity-50"
                    />
                  ))}

                  <motion.textarea
                    placeholder="Mensaje"
                    name="message"
                    rows={4}
                    required
                    disabled={isPending}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.59, duration: 0.35, ease: "easeOut" }}
                    className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 rounded-2xl px-5 py-3 text-sm outline-none focus:border-white/70 transition-colors resize-none disabled:opacity-50"
                  />

                  {state.status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs px-1"
                    >
                      {state.message}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isPending}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
                    whileHover={isPending ? {} : { scale: 1.03 }}
                    whileTap={isPending ? {} : { scale: 0.97 }}
                    className="bg-[#c0001a] hover:bg-[#a0001a] text-white rounded-full px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                        />
                        ENVIANDO...
                      </>
                    ) : (
                      "ENVIAR"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Columna derecha — info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="pt-2 md:pt-4"
          >
            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-mono mb-2">Atención</p>
                <p className="text-white text-sm leading-relaxed">Lunes a viernes<br />9:00 — 17:00 hs</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-mono mb-3">Redes sociales</p>
                <div className="flex flex-col gap-2">
                  <a href="https://instagram.com/agenciapaliza" target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm hover:text-primary transition-colors">
                    Instagram · @agenciapaliza
                  </a>
                  <a href="https://instagram.com/palizamedia" target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm hover:text-primary transition-colors">
                    Instagram · @palizamedia
                  </a>
                  <a href="https://linkedin.com/company/agencia-paliza" target="_blank" rel="noopener noreferrer"
                    className="text-white text-sm hover:text-primary transition-colors">
                    LinkedIn · Agencia Paliza
                  </a>
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-mono mb-2">Ubicación</p>
                <p className="text-white text-sm leading-relaxed">Buenos Aires, Argentina<br />Trabajo 100% remoto</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
