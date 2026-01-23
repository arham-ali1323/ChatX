"use client";
import React from 'react';

import AdvancedCapabilities from '@/components/product/featuresshowcase';
import CustomerStories from '@/components/product/CustomerStories';
import TechnologiesShowcase from '@/components/home/technologies-architecture';
import EnterpriseSecurity from '@/components/product/Enterprise-Security';
import StunningHeroSection from '@/components/home/stunning-hero-section';
import IntegrationSection from '@/components/product/IntegrationSection';
import ClientMarquee from '@/components/home/ClientMarquee';
import { ChatHero } from '@/components/Chat-massages/ChatHero';
import ChatFeatures from '@/components/Chat-massages/ChatFeatures';
import ChatCoreProduct from '@/components/Chat-massages/ChatCoreProduct';
const page = () => {
  return (
    <div>
        <ChatHero/>
        <ClientMarquee/>  
        <ChatFeatures/>
        <ChatCoreProduct/>
        <AdvancedCapabilities/>
        <EnterpriseSecurity/>
        <IntegrationSection/>
        <TechnologiesShowcase/>
        <CustomerStories/>
        <StunningHeroSection/>
    </div>
  )
}

export default page
