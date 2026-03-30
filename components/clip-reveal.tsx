"use client"

import { motion } from "framer-motion"

interface ClipRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ClipReveal({ children, delay = 0, className }: ClipRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "105%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
