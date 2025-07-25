import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseQubixa } from "@/components/why-choose-qubixa"
import { ServicesOverviewNew } from "@/components/services-overview-new"
import { ClientsSection } from "@/components/clients-section"
import { ProductsInDevelopment } from "@/components/products-in-development"
import { TechStackNew } from "@/components/tech-stack-new"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <WhyChooseQubixa />
      <ServicesOverviewNew />
      <ClientsSection />
      <ProductsInDevelopment />
      {/* <TechStackNew /> */}
      <CTASection />
    </div>
  )
}
