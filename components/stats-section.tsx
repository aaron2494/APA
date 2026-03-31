"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { prefix: "",  value: 3,   suffix: "",   label: "AÑOS DE\nEXPERIENCIA" },
  { prefix: "+", value: 20,  suffix: "",   label: "MARCAS\nTRABAJADAS" },
  { prefix: "",  value: 360, suffix: "°",  label: "SERVICIOS\nINTEGRALES" },
]

function Counter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number
  prefix: string
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.section
      ref={ref}
      className="bg-white border-t border-b border-black/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-3 gap-4 md:gap-0 divide-x divide-black/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col items-center text-center px-4 md:px-12"
            >
              <p className="text-[11vw] md:text-[5vw] lg:text-7xl font-black text-black leading-none tabular-nums">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-3 text-[10px] md:text-xs tracking-widest text-black/50 font-medium whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
