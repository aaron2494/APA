"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 🔴 --- Componente de red animada (APA + su gente) ---
function AnimatedNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const connectDistance = 140;
    const nodeColor = "#b40f1d";

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.fillRect(0, 0, width, height);

      // Líneas de conexión
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDistance) {
            const opacity = 1 - dist / connectDistance;
            ctx.strokeStyle = `rgba(180,15,29,${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodos
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 1, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(0.3px)" }}
    />
  );
}

// --- Texto inicial animado ---
function SplitAnimatedText() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-3xl md:text-4xl font-bold text-gray-900 text-center overflow-hidden px-4"
    >
      <motion.div
        variants={{
          hidden: { x: -30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        Preferimos no contarte{" "}
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: 30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="text-primary"
      >
        quiénes somos
      </motion.div>
    </motion.div>
  );
}

// --- Sección completa ---
const TESTIMONIALS = [
  { id: 1, text: "APA nos llevó al siguiente nivel.", author: "Marcos — Cliente" },
  { id: 2, text: "Creatividad y estrategia impecables.", author: "Sofía — Cliente" },
  { id: 3, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 4, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
  { id: 5, text: "Transformaron nuestra comunicación.", author: "Lucía — Cliente" },
  { id: 6, text: "Resultados medibles y experiencias memorables.", author: "Julián — Cliente" },
];

export function ApproachSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [calculatedHeight, setCalculatedHeight] = useState<number | null>(null);

  // 🧭 Calcular altura necesaria para el scroll horizontal
  useEffect(() => {
    const calculate = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!wrapper || !track || !sticky) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const contentWidth = track.scrollWidth;
      const horizontalToScroll = Math.max(contentWidth - vw, 0) + 100;
      const neededHeight = Math.ceil(vh + horizontalToScroll);

      setCalculatedHeight(neededHeight);
      wrapper.style.setProperty("--horizontal-to-scroll", `${horizontalToScroll}px`);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [trackRef.current]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const horizontalToScroll = trackRef.current
    ? Math.max(trackRef.current.scrollWidth - window.innerWidth, 0) + 100
    : 0;
  const x = useTransform(scrollYProgress, [0, 1], [`0px`, `${-horizontalToScroll}px`]);

  return (
    <section className="relative bg-white text-gray-900">
      {/* Hero Intro */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <SplitAnimatedText />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mt-8 text-gray-500 text-lg leading-relaxed"
        >
          Y que lo hagan quienes ya confiaron en nosotros...
        </motion.p>
      </div>

      {/* Horizontal scroll con red animada */}
      <div
        ref={wrapperRef}
        className="relative"
        style={calculatedHeight ? { height: `${calculatedHeight}px` } : undefined}
      >
        {/* 🔴 Fondo de red APA */}
        <div className="absolute inset-0 z-[0] overflow-hidden h-full">
          <AnimatedNetwork />
        </div>

        {/* Cards con scroll */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10"
        >
          <div className="w-full max-w-6xl px-6">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 items-center will-change-transform pr-24"
            >
              {TESTIMONIALS.map((t, i) => (
                <motion.article
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="relative min-w-[250px] md:min-w-[360px] lg:min-w-[300px]
                             min-h-[280px] md:min-h-[320px] lg:min-h-[320px]
                             bg-gradient-to-br from-white/95 to-white/85
                             backdrop-blur-2xl rounded-3xl shadow-2xl
                             border border-white/40 border-b-white/20 border-r-white/20
                             flex flex-col justify-between flex-shrink-0 overflow-hidden
                             group hover:scale-[1.02] hover:shadow-3xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#b40f1d] via-[#e53e3e] to-[#b40f1d] shadow-lg" />
                  <div className="relative z-10 p-8 flex-1 flex flex-col">
                    <div className="mb-4 text-4xl text-[#b40f1d]/20 font-serif">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed flex-1 font-medium">
                      {t.text}
                    </blockquote>
                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b40f1d] to-[#e53e3e] flex items-center justify-center text-white font-bold shadow-lg">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800 tracking-wide">
                            {t.author}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 font-medium">
                            Cliente Satisfecho
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center overflow-hidden px-4"
          >
            <motion.div
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              ¿Querés que tu marca{" "}
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: 30, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-primary"
            >
              también hable por vos?
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 py-5"
          >
            Coordiná una videollamada y descubrí cómo podemos ayudarte a destacarte.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            href="https://3260.agency/agenda-ok#calendly"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-primary/90 transition"
          >
            CONOCENOS
          </motion.a>
        </div>
      </div>
    </section>
  );
}
