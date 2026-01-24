'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ClientMarquee from '@/components/home/ClientMarquee';
import StunningHeroSection from '@/components/home/stunning-hero-section';
import TechnologiesShowcase from '@/components/home/technologies-architecture';

const features = [
  {
    tag: "User Insights",
    title: "Track user behavior from first message to loyalty patterns.",
    description: "Identify your power users and at-risk segments.",
    points: [
      "Monitor population health and engagement patterns across your entire user base.",
      "Track activity trends, identify your top users and groups.",
      "Pinpoint churn risks with cohort analysis and abandonment funnels."
    ],
    image: "/charts-1.png",
    reverse: false
  },
  {
    tag: "Chat + Messaging Insights",
    title: "Gain actionable insights into chat engagement and interaction.",
    description: "Track data and insights that matter to your brand.",
    points: [
      "Understand conversation quality and content dynamics.",
      "Track sent, delivered, and read patterns across hourly heatmaps.",
      "Measure engagement through average messages per conversation."
    ],
    image: "/charts-2.png",
    reverse: true // This flips the flex-row direction
  },
  {
    tag: "Chat + Messaging Insights",
    title: "Gain actionable insights into chat engagement and interaction.",
    description: "Track data and insights that matter to your brand.",
    points: [
      "Understand conversation quality and content dynamics.",
      "Track sent, delivered, and read patterns across hourly heatmaps.",
      "Measure engagement through average messages per conversation."
    ],
    image: "/charts-3.png",
    reverse: false
  }
];

export default function InsightsSection() {
  return (<>
  <section className="relative pt-20 pb-32 overflow-hidden bg-[#030303]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-purple-400 text-sm font-medium">Insights & Analytics</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Turn every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              conversation
            </span> into <br />
            actionable insights
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            Unified analytics that decode user behavior, predict churn, and optimize engagement. 
            All in one dashboard. From AI-powered funnels to personality insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all">
              Schedule a demo
            </button>
            <button className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-lg font-semibold transition-all">
              Start Building
            </button>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="flex-1 relative w-full">
          <div className="relative z-10 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
             <Image 
               src="/dashboard-mockup.png" 
               alt="Analytics Dashboard" 
               width={800} 
               height={600} 
               className="w-full h-auto"
             />
          </div>
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>

    <section className="bg-[#030303] text-white py-24 px-6 md:px-12">
        <ClientMarquee/>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-500 text-sm font-medium">Actionable Insights for Every User Group</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Understand user engagement,<br/> behavior patterns and more.</h2>
        </div>

        {/* Feature Rows */}
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <span className="text-blue-400 font-mono text-sm">{feature.tag}</span>
                <h3 className="text-3xl font-semibold leading-tight">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-blue-500">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic/Image */}
              <div className="flex-1 bg-gradient-to-br from-zinc-900 to-black p-4 rounded-2xl border border-zinc-800 shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <TechnologiesShowcase/>
      <StunningHeroSection/>
    </section>
      </>
  );
}