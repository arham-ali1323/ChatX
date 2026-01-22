"use client";
import ProductHero from '@/components/product/product-hero'
import AdvancedCapabilities from '@/components/product/featuresshowcase'
import CustomerStories from '@/components/product/CustomerStories'
import TechnologiesShowcase from '@/components/home/technologies-architecture';
import EnterpriseSecurity from '@/components/home/security-showcase';
import UseCaseCard from '@/components/product/UseCaseCard';
import StunningHeroSection from '@/components/home/stunning-hero-section';
import IntegrationSection from '@/components/product/IntegrationSection';
import ProductCore from '@/components/product/ProductCore';
import ClientMarquee from '@/components/home/ClientMarquee';
const page = () => {
  return (
    <div>
        <ProductHero/>
        <ClientMarquee/>  
        <ProductCore/>    
        <AdvancedCapabilities/>
        <EnterpriseSecurity/>
        <UseCaseCard/>
        <IntegrationSection/>
        <TechnologiesShowcase/>
        <CustomerStories/>
        <StunningHeroSection/>
    </div>
  )
}

export default page
