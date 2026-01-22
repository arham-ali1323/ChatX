"use client";

import { useState, useRef, useEffect } from 'react';

export default function ProductCore() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      id: 0,
      badge: "ChatX Products",
      title: "The complete communication platform",
      description: "ChatX provides everything you need to build powerful in-app communication experiences. From real-time messaging to AI-powered features, our platform scales with your business.",
      subtitle: "Enterprise-ready messaging",
      visual: "messaging"
    },
    {
      id: 1,
      badge: "ChatX Products",
      title: "Intelligent conversations",
      description: "Transform customer interactions with AI-powered chat, smart routing, and automated responses that understand context and deliver personalized experiences.",
      keyFeatures: [
        "AI-powered chatbots and assistants",
        "Natural language processing",
        "Smart conversation routing",
        "Automated response suggestions",
        "Sentiment analysis and insights"
      ],
      visual: "ai-chat"
    },
    {
      id: 2,
      badge: "ChatX Products",
      title: "Scale with confidence",
      subtitle: "Global infrastructure",
      description: "Built for enterprises that demand reliability, security, and performance. ChatX handles billions of messages while maintaining 99.999% uptime.",
      subdescription: "Deploy once, scale globally without limits.",
      keyFeatures: [
        "99.999% uptime SLA guarantee",
        "Auto-scaling infrastructure",
        "Edge network in 35+ locations",
        "Real-time analytics and monitoring",
        "Enterprise-grade security"
      ],
      visual: "infrastructure"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const sectionHeight = container.scrollHeight / timelineData.length;
      const newActiveSection = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        timelineData.length - 1
      );
      
      setActiveSection(newActiveSection);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950 overflow-hidden">
      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {timelineData.map((section, index) => (
          <section
            key={section.id}
            className="min-h-screen snap-start flex items-center justify-center py-20 px-6"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {section.badge}
                </span>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {section.title}
                </h2>
                
                {section.subtitle && (
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {section.subtitle}
                  </h3>
                )}
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {section.description}
                </p>

                {section.subdescription && (
                  <p className="text-gray-400 text-base leading-relaxed">
                    {section.subdescription}
                  </p>
                )}
                
                {section.keyFeatures && (
                  <div className="space-y-4 pt-4">
                    <h4 className="text-primary font-semibold">Key features:</h4>
                    <ul className="space-y-3">
                      {section.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-primary text-xl">+</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="text-primary hover:text-primary/80 font-semibold mt-4 transition">
                      Learn more →
                    </button>
                  </div>
                )}
              </div>

              {/* Right Visual */}
              <div className="relative">
                {section.visual === 'messaging' && <MessagingVisual />}
                {section.visual === 'ai-chat' && <AIChatVisual />}
                {section.visual === 'infrastructure' && <InfrastructureVisual />}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function MessagingVisual() {
  return (
    <div className="space-y-4">
      {/* Real-time Messaging */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Real-time Messaging</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              💬
            </div>
            <span>Instant messaging</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              📞
            </div>
            <span>Voice & video calls</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              📁
            </div>
            <span>File sharing</span>
          </div>
        </div>
      </div>

      {/* Collaboration Tools */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Collaboration Tools</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              👥
            </div>
            <span>Group conversations</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              📝
            </div>
            <span>Shared workspaces</span>
          </div>
        </div>
      </div>

      {/* Platform Features */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Platform Features</h3>
        <div className="grid grid-cols-2 gap-3">
          {['End-to-end encryption', 'Multi-platform sync', 'Custom themes', 'API access'].map((cap, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                {['🔒', '🔄', '🎨', '🔗'][idx]}
              </div>
              <span className="text-xs text-gray-400">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIChatVisual() {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop"
        alt="AI Chat Interface"
        className="w-full h-auto rounded-2xl border border-gray-800 shadow-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent rounded-2xl"></div>
    </div>
  );
}

function InfrastructureVisual() {
  return (
    <div className="space-y-4">
      {/* Global Network */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Global Network</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Edge locations</span>
            <span className="text-primary font-bold">35+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Average latency</span>
            <span className="text-green-500 font-bold">&lt;50ms</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Uptime SLA</span>
            <span className="text-green-500 font-bold">99.999%</span>
          </div>
        </div>
      </div>

      {/* Scalability Metrics */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Scalability</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Messages per day</span>
            <span className="text-blue-500 font-bold">5B+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Concurrent users</span>
            <span className="text-blue-500 font-bold">10M+</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Auto-scaling</span>
            <span className="text-green-500 font-bold">✓</span>
          </div>
        </div>
      </div>

      {/* Security Compliance */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Security & Compliance</h3>
        <div className="grid grid-cols-2 gap-3">
          {['SOC 2', 'GDPR', 'HIPAA', 'CCPA'].map((cert, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-green-500 font-bold">✓</span>
              </div>
              <span className="text-xs text-gray-400">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
