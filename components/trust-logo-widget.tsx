"use client"

import { useEffect } from "react"

type WindowWithTrustLogo = Window & {
  TrustLogo?: (img: string, id: string, mode: string) => void
}

export function TrustLogoWidget() {
  useEffect(() => {
    const host =
      window.location.protocol === "https:"
        ? "https://secure.trust-provider.com/"
        : "http://www.trustlogo.com/"

    const script = document.createElement("script")
    script.src = `${host}trustlogo/javascript/trustlogo.js`
    script.async = true
    script.onload = () => {
      const w = window as WindowWithTrustLogo
      if (typeof w.TrustLogo !== "undefined") {
        w.TrustLogo(
          "https://micuenta.donweb.com/img/sectigo_positive_sm.png",
          "CL1",
          "none"
        )
      }
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <a
      href="https://donweb.com/es-ar/certificados-ssl"
      id="comodoTL"
      title="Certificados SSL Argentina"
      className="sr-only"
    >
      Certificados SSL Argentina
    </a>
  )
}
