import { Hero } from '@/components/home/Home-hero';
import ChatInterface from '@/components/Chat-massages/ChatInterface';
import FeaturesShowcase from '@/components/home/features-section';
import TechnologiesArchitecture from '@/components/home/technologies-architecture';
import TrustSecurity from '@/components/home/TrustSecurity';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import StunningHeroSection from '@/components/home/stunning-hero-section';
import CoreProduct from '@/components/home/Core-Product';
import ClientMarquee from '@/components/home/ClientMarquee';
const page = () => {  
  return (
    <div>
      <Hero />
      <ClientMarquee />
      <ChatInterface />
      <CoreProduct />
      <FeaturesShowcase />
      <TechnologiesArchitecture />
      <TrustSecurity />
      <CustomerTestimonials />
      <StunningHeroSection />
    </div>
  )
}

export default page