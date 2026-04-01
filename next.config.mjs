/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optimizaciones de imagen
  images: {
    unoptimized: true, // requerido para static export
  },
  // Eliminar console logs en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimizaciones experimentales
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

export default nextConfig
