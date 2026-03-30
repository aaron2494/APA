import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Cursor } from "@/components/cursor"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciapaliza.com"),
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
    url: "https://agenciapaliza.com",
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
    <html lang="es" className={GeistSans.variable}>
      <body className="font-sans antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  )
}
