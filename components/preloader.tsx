"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Letras APA — entran una por una */}
          <motion.div
            className="flex items-center gap-1"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
          >
            {["A", "P", "A"].map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-[18vw] md:text-[12vw] font-black text-white leading-none tracking-tighter"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Línea roja debajo — aparece después de las letras */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[36%] w-[18vw] md:w-[12vw] h-[3px] bg-[#c0001a] origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
