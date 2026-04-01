import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ApproachSection } from "@/components/approach-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { BrandsMarquee } from "@/components/brands-marquee"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { ClientsMarquee } from "@/components/clients-marquee"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <StatsSection />
      <ClientsMarquee />
      <ApproachSection />
      <ProjectsSection />
      <AboutSection />
      <BrandsMarquee />
      <TeamSection  />
      <ContactSection />
      <Footer />
    </main>
  )
}
