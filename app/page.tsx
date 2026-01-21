import { Hero } from '@/components/home/hero';
import ChatInterface from '@/components/home/chat-interface';
import FeaturesShowcase from '@/components/home/features-section';
import TechnologiesArchitecture from '@/components/home/technologies-architecture';
import TrustSecurity from '@/components/home/TrustSecurity';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import StunningHeroSection from '@/components/home/stunning-hero-section';
import CoreProduct from '@/components/home/Core-Product';

const page = () => {  
  return (
    <div className="bg-black min-h-screen">
      <Hero />
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