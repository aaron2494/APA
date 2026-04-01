"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center will-change-transform"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center gap-0">
            {/* Logo oficial — blur + scale con spring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, filter: "blur(18px)" }}
              animate={{ opacity: 1, scale: 2, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: 0.45, type: "spring", stiffness: 500, damping: 30 }}
              className="relative w-[52vw] md:w-[28vw] lg:w-[20vw] aspect-[2/1]"
            >
              <Image
                src="/logos/APA-BLANCO.png"
                alt="APA"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Línea roja debajo — aparece después del logo */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[2px] bg-[#c0001a] origin-left mt-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
