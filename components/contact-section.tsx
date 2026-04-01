"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ClipReveal } from "@/components/clip-reveal"

type FormState = { status: "idle" | "success" | "error"; message?: string }

export function ContactSection() {
  const [state, setState] = useState<FormState>({ status: "idle" })
  const [isPending, setIsPending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: "Agencia Paliza — Web",
          subject: `Nuevo contacto — ${formData.get("name")}${formData.get("company") ? ` (${formData.get("company")})` : ""}`,
          replyto: formData.get("email"),
          name: formData.get("name"),
          email: formData.get("email"),
          empresa: formData.get("company") || "—",
          mensaje: formData.get("message"),
          botcheck: formData.get("botcheck"),
        }),
      })

      if (res.ok) {
        setState({ status: "success" })
        formRef.current?.reset()
      } else {
        setState({ status: "error", message: "No pudimos enviar tu mensaje. Intentá de nuevo más tarde." })
      }
    } catch {
      setState({ status: "error", message: "No pudimos enviar tu mensaje. Intentá de nuevo más tarde." })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <motion.section
      id="contacto"
      className="relative bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >

      {/* Fondo rojo — cubre la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-[420px] md:h-[460px] bg-[#c0001a]" />

      <div className="relative px-6 md:px-12 pt-10 md:pt-14 pb-6">

        {/* Título */}
        <h2 className="text-5xl md:text-7xl text-white leading-tight mb-8">
          <ClipReveal>HAGAMOSLO POSIBLE</ClipReveal>
          <ClipReveal delay={0.12}><span className="font-black">JUNTOS.</span></ClipReveal>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
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

                  <input type="checkbox" name="botcheck" className="hidden" />

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

          {/* Columna derecha — logos desktop */}
          <div className="hidden md:flex flex-col justify-between py-6">
            <div className="relative h-[180px] w-full">
              <Image
                src="/logos/LOGO-COMPLETO-BLANCO.png"
                alt="Agencia Paliza"
                fill
                className="object-contain object-left"
                sizes="50vw"
              />
            </div>
            <div className="relative h-[180px] w-full">
              <Image
                src="/logos/PALIZA-MEDIA NEGRO.png"
                alt="Paliza Media"
                fill
                className="object-contain object-left"
                sizes="50vw"
              />
            </div>
          </div>

        </div>

        {/* Logos — solo mobile, debajo del form */}
        <div className="flex md:hidden items-center justify-center gap-8 mt-10 ">
          <div className="relative h-[120px] w-[240px]">
            <Image
              src="/logos/LOGO-COMPLETO-ROJO.png"
              alt="Agencia Paliza"
              fill
              className="object-contain"
              sizes="240px"
            />
          </div>
          <div className="relative h-[120px] w-[240px]">
            <Image
              src="/logos/PALIZA-MEDIA NEGRO.png"
              alt="Paliza Media"
              fill
              className="object-contain"
              sizes="240px"
            />
          </div>
        </div>

      </div>
    </motion.section>
  )
}
