# APA — Agencia Paliza | Reglas del Proyecto

## La Marca

**Nombre completo:** Agencia Paliza | **Abreviación:** APA
**Slogan:** "Construyamos un impacto juntos"
**Fundadoras:** Dana y Agostina (2023, Buenos Aires, Argentina)
**Identidad:** Lunfardo argentino. "Paliza" = golpe fuerte. La agencia que hace que las marcas peguen fuerte en el mercado.

### Valores de marca
Transparencia · Sensatez · Modestia · Calidad · Innovación

### Lo que transmite la web
**Intelectualidad · Creatividad · Arte · Diseño · Practicidad · Vanguardismo**

La web es una VIDRIERA. El visitante debe pensar "deben ser buenos en lo que hacen" antes de leer una sola palabra. La estética habla antes que el copy.

### Público objetivo
Gerentes de marketing, directores creativos, dueños de empresas y pymes, directores comerciales. Personas que pueden seleccionar una agencia y tercerizar servicios. NO le hablamos a colegas de la industria.

---

## Stack Técnico

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 15 (App Router) | Framework principal |
| React | 18 | UI |
| TypeScript | 5 | Tipado |
| Tailwind CSS | 4 | Estilos (sin `var()` en className) |
| Framer Motion | latest | Animaciones — EL CORE DEL PROYECTO |
| shadcn/ui | — | Componentes base |
| Inter | Google Fonts | Tipografía |

**No hay backend.** Single-page con secciones. Todo es `"use client"` donde hay animaciones.

---

## Paleta de Colores

```
Cherry Red:  #b40f1d / oklch(0.40 0.20 22)  — PRIMARY. Color de impacto.
Dark Red:    #c0001a                          — Usado en secciones de fondo rojo
Black:       oklch(0.145 0 0)                — Secciones de contraste oscuro
White:       oklch(1 0 0)                    — Fondo principal / secciones limpias
```

### Regla de alternancia de secciones
Las secciones alternan fondo para crear ritmo visual:
- Hero: imagen con overlay oscuro + tinte rojo
- Servicios: header rojo → cards negras sobre blanco
- Quiénes somos: negro superior → imagen B&W sticky
- Contacto/Footer: negro

**NUNCA mezclar rojo de fondo con texto rojo.** El rojo es de contraste, siempre sobre negro o blanco.

### Clases de tipografía personalizadas (globals.css)
```css
.thick-text          /* Heading principal — rojo con stroke */
.thick-text-sub-black /* Subheading — negro con stroke */
.thick-text-sub-red   /* Subheading — rojo con stroke */
```

---

## Animaciones — LA REGLA MÁS IMPORTANTE

> La web de APA es una EXPERIENCIA VISUAL. Las animaciones NO son decoración, son el producto. Cada sección debe sentirse como una pieza de diseño en movimiento.

### Librería: Framer Motion SIEMPRE

Nunca usar CSS animations o keyframes para elementos interactivos. Usar Framer Motion para todo lo que se mueva.
Las clases `.animate-fade-in-up` y `.animate-fade-in` de globals.css son SOLO para casos estáticos muy puntuales.

### Patrones de animación establecidos

#### 1. Reveal por letra (Hero)
```tsx
// Stagger letra por letra con spring physics
variants={{
  hidden: { opacity: 0, scale: 0.2, y: 100, filter: "blur(12px)" },
  visible: {
    opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}}
// Contenedor con staggerChildren: 0.02
```

#### 2. Scroll-driven con useTransform (Servicios)
```tsx
// Cards que se apilan y escalan con el scroll
const y       = useTransform(scrollYProgress, [start, end], [100, -150])
const scale   = useTransform(scrollYProgress, [start, end], [1, 0.5])
const opacity = useTransform(scrollYProgress, [start, end], [1, 0])
// Sección sticky con height: "200vh" o más
```

#### 3. Sticky scroll con cards escalonadas (Testimoniales)
```tsx
// Cada card aparece en un rango diferente del scroll
const card1Opacity = useTransform(scrollYProgress, [0.0, 0.18], [0, 1])
const card2Opacity = useTransform(scrollYProgress, [0.28, 0.45], [0, 1])
// Wrapper con height: "320vh", sticky inner con h-screen
```

#### 4. whileInView para secciones (Headings)
```tsx
initial={{ x: -40, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 0.7, ease: "easeOut" }}
viewport={{ once: true, amount: 0.3 }}
```

#### 5. Parallax de imagen de fondo (Hero)
```tsx
const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 600], [0, 300])
// Aplicado en motion.div con will-change-transform
```

### Reglas de animación

- **`once: true`** en todos los `whileInView`. Las animaciones no se repiten al scrollear hacia arriba.
- **`will-change-transform`** en elementos con parallax o transforms pesados.
- **Spring physics** para elementos que tienen "peso" (títulos, cards grandes): `type: "spring"`.
- **`ease: "easeOut"`** para entradas de texto y elementos secundarios.
- **Stagger** en listas: `staggerChildren` entre 0.02 (letras) y 0.15 (cards).
- **Delays encadenados:** Los elementos de una sección aparecen en secuencia lógica (título → texto → CTA).
- **No animar color o background** salvo casos muy específicos. Animar transform, opacity, filter, scale.
- **`whileTap={{ scale: 0.97 }}`** en todos los botones. **`whileHover={{ scale: 1.05 }}`** en CTAs secundarios.
- El Hero tiene su propia secuencia de intro que NO se puede alterar sin revisar todos los timings encadenados.

### Performance de animaciones
- Usar `motion.div` con `style` para transforms scroll-driven (NO className).
- Los efectos scroll-driven usan `useScroll` + `useTransform` — NO `useState` + `onScroll`.
- `"use client"` es obligatorio en cualquier componente con Framer Motion.

---

## Estructura de Componentes

```
app/
  page.tsx          — Composición de secciones (sin lógica)
  layout.tsx        — Metadata SEO, fuente Inter, dark mode forzado
  globals.css       — Variables de color, tipografía custom, keyframes base

components/
  header.tsx        — Fixed, transparente → blur al scrollear
  hero-section.tsx  — Animación intro compleja letra por letra
  approach-section.tsx — Sticky scroll con testimoniales
  projects-section.tsx — Scroll-driven stacking de servicios
  about-section.tsx    — Sección nosotros
  team-section.tsx     — Equipo
  contact-section.tsx  — Formulario de contacto
  footer.tsx           — Footer simple
  ui/                  — shadcn/ui components (no modificar)
```

---

## Convenciones de Código

### IDs de sección (navegación)
```
#proyectos   — ProjectsSection (servicios)
#servicios   — ApproachSection
#nosotros    — AboutSection
#contacto    — ContactSection
```

### Tamaños de texto responsive
Patrón establecido para headings grandes:
```
text-4xl md:text-4xl lg:text-7xl   — Headings de sección
text-[10vw] md:text-[9vw] lg:text-[10vw]  — Hero principal
```

### Imágenes
- Siempre `next/image` con `fill` + `sizes` correcto.
- Imágenes de fondo: `object-cover object-center` (o `object-top` según composición).
- B&W con `grayscale` para la foto de equipo en la sección sticky.
- `priority` solo en la imagen del Hero (above the fold).

---

## Reglas Generales

- **Dark mode forzado.** El `html` tiene `className="dark"`. No hay toggle de tema.
- **No construir después de cambios** (`next build`). Solo `next dev` para desarrollo.
- **No añadir comentarios** al código existente salvo que la lógica sea verdaderamente no obvia.
- **No refactorizar** lo que no se pidió. El código existente tiene decisiones intencionales.
- **No mover animaciones a CSS** cuando ya están en Framer Motion. La fuente de verdad de movimiento es Framer Motion.
- El archivo `tailwind.config` no existe explícitamente — Tailwind 4 lee la configuración desde `globals.css` y `postcss.config.mjs`.

---

## Copy y Tono

- Mayúsculas en headings de impacto: `¿QUÉ HACEMOS?`, `HACELO DISTINTO`, `¿QUIÉNES SOMOS?`
- El copy es breve, directo y en español rioplatense. Sin tecnicismos de agencia.
- CTA principal siempre apunta a `#contacto`.
- Slogan: **"Construyamos un impacto juntos"** — no modificar.

---

## Redes Sociales

- Instagram: @agenciapaliza / @palizamedia
- LinkedIn: /company/agencia-paliza
- Atención: Lunes a viernes, 9 a 17hs (sin oficina presencial)
