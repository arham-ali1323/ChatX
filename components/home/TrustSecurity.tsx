"use client";
import { useState } from 'react';

export default function TrustSecurity() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: 'multi-tenant',
      title: 'Multi-Workspace Architecture',
      description: 'Isolate teams and projects with dedicated workspaces. Zero code duplication required.',
      visual: 'diagram',
      span: 'row-span-2'
    },
    {
      id: 'encryption',
      title: 'Advanced Encryption',
      description: 'Military-grade end-to-end encryption for all communications.',
      visual: 'lock',
      span: 'row-span-2'
    },
    {
      id: 'global',
      title: 'Global Chat Network',
      description: 'Deploy across 50+ regions worldwide for instant message delivery.',
      visual: 'map',
      span: 'row-span-1'
    },
    {
      id: 'uptime',
      title: '99.999%',
      subtitle: 'Message Delivery',
      visual: 'stat',
      span: 'row-span-1',
      large: true
    },
    {
      id: 'edge',
      title: 'Real-time Edge Delivery',
      description: 'Lightning-fast chat through 100+ edge locations globally, ensuring sub-50ms latency.',
      visual: 'network',
      span: 'row-span-2'
    },
    {
      id: 'compliance',
      title: 'Security Standards',
      visual: 'badges',
      span: 'row-span-1'
    },
    {
      id: 'auditing',
      title: 'Advanced Security Controls',
      description: 'Complete visibility and control over chat security policies.',
      visual: 'shield',
      span: 'row-span-1'
    },
    {
      id: 'rbac',
      title: 'Access Management',
      description: 'Role-based permissions with comprehensive audit trails.',
      visual: 'lock-shield',
      span: 'row-span-1'
    },
    {
      id: 'users',
      title: '100M+',
      subtitle: 'Active Users',
      visual: 'stat',
      span: 'row-span-1',
      large: true
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
              ChatX Security & Trust
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Infrastructure you can trust.<br />
            Security you can rely on.
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Trusted by leading companies worldwide. We've built the most secure and scalable chat platform so you can focus on your users.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isHovered={hoveredCard === feature.id}
              onHover={() => setHoveredCard(feature.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, isHovered, onHover, onLeave }: {
  feature: any;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const renderVisual = () => {
    switch (feature.visual) {
      case 'diagram':
        return (
          <div className="relative h-32 flex items-center justify-center">
            <div className="relative">
              {/* Network diagram */}
              <div className="flex gap-8">
                <div className="flex flex-col gap-3">
                  <div className="w-16 h-8 bg-purple-500/20 border border-purple-500/30 rounded"></div>
                  <div className="w-16 h-8 bg-purple-500/20 border border-purple-500/30 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500/30 border border-purple-500/50 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-16 h-8 bg-purple-500/20 border border-purple-500/30 rounded"></div>
                  <div className="w-16 h-8 bg-purple-500/20 border border-purple-500/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'lock':
        return (
          <div className="relative h-32 flex items-center justify-center">
            <div className="flex flex-col gap-2 text-purple-400">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AES-256 encryption</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>TLS 1.3</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>End-to-end secure</span>
              </div>
              <svg className="w-16 h-16 text-purple-500 mt-2 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        );
      
      case 'map':
        return (
          <div className="relative h-20 flex items-center justify-center">
            <div className="relative w-full h-full opacity-30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-50">🌍</div>
              </div>
            </div>
          </div>
        );
      
      case 'network':
        return (
          <div className="relative h-32 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Network visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Connection lines */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-32 h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"
                      style={{
                        transform: `rotate(${i * 36}deg)`,
                        transformOrigin: 'center'
                      }}
                    ></div>
                  ))}
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full"></div>
                  {/* Edge nodes */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-purple-400 rounded-full"
                      style={{
                        top: `${50 + 40 * Math.sin((i * 72 * Math.PI) / 180)}%`,
                        left: `${50 + 40 * Math.cos((i * 72 * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'badges':
        return (
          <div className="relative h-20 flex items-center justify-center gap-4">
            {['SOC 2', 'GDPR', 'ISO', 'HIPAA'].map((badge) => (
              <div key={badge} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-xs font-bold text-gray-400">{badge}</span>
              </div>
            ))}
          </div>
        );
      
      case 'shield':
        return (
          <div className="relative h-20 flex items-center justify-center">
            <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        );
      
      case 'lock-shield':
        return (
          <div className="relative h-20 flex items-center justify-center gap-4">
            <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
        feature.span || ''
      } ${
        isHovered 
          ? 'border-purple-500/50 shadow-xl shadow-purple-500/10' 
          : 'border-gray-800 hover:border-gray-700'
      }`}
    >
      {/* Visual */}
      {feature.visual && renderVisual()}

      {/* Content */}
      <div className={feature.large ? 'text-center' : ''}>
        <h3 className={`font-bold mb-2 transition-colors duration-300 ${
          feature.large ? 'text-5xl text-white mb-2' : 'text-xl text-gray-200'
        } ${isHovered ? 'text-white' : ''}`}>
          {feature.title}
        </h3>

        {feature.subtitle && (
          <p className="text-purple-400 text-sm font-semibold mb-2">
            {feature.subtitle}
          </p>
        )}

        {feature.description && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        )}
      </div>

      {/* Hover Glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 transition-all duration-300 pointer-events-none ${
        isHovered ? 'from-purple-500/5 to-blue-500/5' : ''
      }`}></div>
    </div>
  );
}