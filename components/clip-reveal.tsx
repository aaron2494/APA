"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ClipRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ClipReveal({ children, delay = 0, className }: ClipRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" })

  return (
    <span ref={ref} style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        initial={{ y: "105%" }}
        animate={isInView ? { y: "0%" } : { y: "105%" }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ display: "block" }}
        className={className}
      >
        {children}
      </motion.span>
    </span>
  )
}
