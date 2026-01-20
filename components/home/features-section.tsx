"use client";

import { useState } from 'react';

export default function FeaturesShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Moderation & Guardrails",
      description: "AI-native, context-aware safety for both user content and agent responses - built-in, not bolted on. Includes visual rule engine, fallback handling, and multilingual/media support.",
      span: "col-span-1"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Track everything from conversation health to agent success. Out-of-the-box dashboards help you improve UX, tune logic, and measure ROI - without extra tooling.",
      span: "col-span-1"
    }
  ];

  const secondRowFeatures = [
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Notification Engine",
      description: "Push, Email, and SMS alerts that respect user preferences and timing logic - includes retries, quiet hours, frequency controls, and custom templates.",
      span: "col-span-1"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Developer Tooling",
      description: "UI Kits, SDKs, APIs, webhooks, and visual builders to match any team's workflow - whether you're building MVPs or managing multiple teams at scale.",
      span: "col-span-1"
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Multi-Tenant Infrastructure",
      description: "Run multiple brands, communities, or customer sets on the same backend. Isolate logic, moderation, and branding per tenant with zero code duplication.",
      span: "col-span-1"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              Shared Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Not just plumbing.<br />
            Smart plumbing.
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            All core products come wired into a common set of powerful systems that bring safety, insights, and engagement to every interaction.
          </p>
        </div>

        {/* Features Grid */}
        {/* First Row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${feature.span} group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300 ${
                hoveredCard === feature.id 
                  ? 'bg-purple-500/20 text-purple-400 scale-110' 
                  : 'bg-gray-800/50 text-gray-400'
              }`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                hoveredCard === feature.id ? 'text-white' : 'text-gray-200'
              }`}>
                {feature.title}
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className={`text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                hoveredCard === feature.id 
                  ? 'text-purple-400' 
                  : 'text-gray-500'
              }`}>
                Learn more
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredCard === feature.id ? 'translate-x-1' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/0 to-blue-500/0 transition-all duration-300 pointer-events-none ${
                hoveredCard === feature.id ? 'from-purple-500/5 to-blue-500/5' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {secondRowFeatures.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${feature.span} group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-300 ${
                hoveredCard === feature.id 
                  ? 'bg-purple-500/20 text-purple-400 scale-110' 
                  : 'bg-gray-800/50 text-gray-400'
              }`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                hoveredCard === feature.id ? 'text-white' : 'text-gray-200'
              }`}>
                {feature.title}
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className={`text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                hoveredCard === feature.id 
                  ? 'text-purple-400' 
                  : 'text-gray-500'
              }`}>
                Learn more
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredCard === feature.id ? 'translate-x-1' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/0 to-blue-500/0 transition-all duration-300 pointer-events-none ${
                hoveredCard === feature.id ? 'from-purple-500/5 to-blue-500/5' : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}