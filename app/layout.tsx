import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciapaliza.com"),
  title: {
    default: "APA Marketing | Agencia de Marketing Digital",
    template: "%s | APA Marketing",
  },
  description: "Creamos impacto real. Estrategia, contenido y creatividad para marcas que quieren destacar. Comunicación, PR, Redes, Creatividad y Digital.",
  keywords: ["marketing digital", "agencia de marketing", "PR", "publicidad", "redes sociales", "branding", "Buenos Aires", "Argentina"],
  authors: [{ name: "APA Marketing" }],
  creator: "APA Marketing",
  publisher: "APA Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://agenciapaliza.com",
    title: "APA Marketing | Agencia de Marketing Digital",
    description: "Creamos impacto real. Estrategia, contenido y creatividad para marcas que quieren destacar.",
    siteName: "APA Marketing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APA Marketing - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APA Marketing | Agencia de Marketing Digital",
    description: "Creamos impacto real. Estrategia, contenido y creatividad para marcas que quieren destacar.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">

      <body className={`font-sans ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
