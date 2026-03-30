import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ApproachSection } from "@/components/approach-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ApproachSection />
      <ProjectsSection />
      <AboutSection />
      <TeamSection  />
      <ContactSection />
      <Footer />
    </main>
  )
}
