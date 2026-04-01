import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})
import { Cursor } from "@/components/cursor"
import { Preloader } from "@/components/preloader"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciapaliza.com.ar"),
  title: {
    default: "APA — Agencia Paliza | Marketing Digital Buenos Aires",
    template: "%s | APA Agencia Paliza",
  },
  description: "Agencia de marketing digital boutique en Buenos Aires. Gestión de redes, contenido, paid media, PR y activaciones de marca. Construyamos un impacto juntos.",
  keywords: ["agencia marketing digital", "agencia de marketing Buenos Aires", "gestión redes sociales", "paid media", "PR", "publicidad digital", "branding Argentina", "APA", "Agencia Paliza"],
  authors: [{ name: "APA — Agencia Paliza" }],
  creator: "APA — Agencia Paliza",
  publisher: "APA — Agencia Paliza",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://agenciapaliza.com.ar",
    title: "APA — Agencia Paliza | Marketing Digital Buenos Aires",
    description: "Agencia boutique 360°. Redes, contenido, paid media, PR y activaciones. Construyamos un impacto juntos.",
    siteName: "APA — Agencia Paliza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APA Agencia Paliza — Marketing Digital Buenos Aires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APA — Agencia Paliza | Marketing Digital Buenos Aires",
    description: "Agencia boutique 360°. Redes, contenido, paid media, PR y activaciones.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://agenciapaliza.com.ar",
  },
  icons: {
    icon: "/logos/APA-ROJO.png",
    shortcut: "/logos/APA-ROJO.png",
    apple: "/logos/APA-ROJO.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "APA — Agencia Paliza",
  description:
    "Agencia de marketing digital boutique en Buenos Aires. Gestión de redes sociales, contenido, paid media, PR y activaciones de marca.",
  url: "https://agenciapaliza.com.ar",
  logo: "https://agenciapaliza.com.ar/logos/APA-ROJO.png",
  image: "https://agenciapaliza.com.ar/og-image.jpg",
  email: "hola@agenciapaliza.com.ar",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  sameAs: [
    "https://www.instagram.com/agenciapaliza",
    "https://www.linkedin.com/company/agenciapaliza",
  ],
  knowsAbout: [
    "Marketing Digital",
    "Gestión de Redes Sociales",
    "Paid Media",
    "Community Management",
    "Relaciones Públicas",
    "Producción de Contenido",
    "Branding",
  ],
  foundingDate: "2023",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect a recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased ">
        <Preloader />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
