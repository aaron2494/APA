"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function Cursor() {
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true)
      return
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseenter", show)
    document.addEventListener("mouseleave", hide)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseenter", show)
      document.removeEventListener("mouseleave", hide)
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <>
      {/* Punto central — sigue exacto */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="w-2 h-2 rounded-full bg-[#c0001a]" />
      </motion.div>

      {/* Halo — sigue con spring */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="w-8 h-8 rounded-full border border-[#c0001a]/50" />
      </motion.div>
    </>
  )
}
