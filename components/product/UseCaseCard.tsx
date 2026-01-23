"use client";
import { useState } from 'react';

interface IntegrationMethod {
  id: string;
  title: string;
  icon: string;
  features?: string[];
  description: string;
  color: string;
}

interface IntegrationCardProps {
  method: IntegrationMethod;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function ChatIntegrationMethods() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const integrationMethods: IntegrationMethod[] = [
    {
      id: 'widget',
      title: 'Widget Builder',
      icon: '⚙️',
      features: [
        'Customize entirely and toggle chat functions as needed',
        'Integrate with a single line of code',
        'Deploy and launch your in-app chat'
      ],
      description: 'The fastest way to add chat with zero coding required.',
      color: 'purple'
    },
    {
      id: 'ui-kit',
      title: 'UI Kit Builder',
      icon: '🎨',
      description: 'The low code option to build in-app chat without the hassle',
      color: 'gray'
    },
    {
      id: 'ui-kits',
      title: 'Chat UI Kits',
      icon: '✨',
      description: 'Pre-built UI components with modern and pixel perfect design that is completely customizable.',
      color: 'gray'
    },
    {
      id: 'sdks',
      title: 'Chat SDKs',
      icon: '🔧',
      description: 'Open source SDKs and APIs for all popular frameworks to build bespoke chat experiences.',
      color: 'gray'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
              Integrating In-App Chat
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Integrate real-time messaging that<br />
            grows with your needs
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Start with any integration method and scale to others as your needs evolve
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent hidden lg:block"></div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {integrationMethods.map((method, index) => (
              <div key={method.id} className="relative">
                {/* Connection Dot */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 border-2 border-purple-500 rounded-full hidden lg:block z-10"></div>
                
                <IntegrationCard
                  method={method}
                  isHovered={hoveredCard === method.id}
                  onHover={() => setHoveredCard(method.id)}
                  onLeave={() => setHoveredCard(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ method, isHovered, onHover, onLeave }: IntegrationCardProps) {
  const isWidget = method.id === 'widget';

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative h-full transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2' : ''
      }`}
    >
      <div
        className={`h-full bg-gradient-to-br backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
          isWidget
            ? 'from-purple-900/30 to-purple-950/30 border-purple-500/50'
            : 'from-gray-900/50 to-gray-950/50 border-gray-800'
        } ${
          isHovered && !isWidget
            ? 'border-purple-500/30 shadow-xl shadow-purple-500/10'
            : ''
        }`}
      >
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
            isWidget
              ? 'bg-purple-500/20 text-purple-400'
              : isHovered
              ? 'bg-gray-700 text-gray-300 scale-110'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          <span className="text-3xl">{method.icon}</span>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isWidget || isHovered ? 'text-white' : 'text-gray-200'
          }`}
        >
          {method.title}
        </h3>

        {/* Features or Description */}
        {method.features ? (
          <ul className="space-y-3 mb-6">
            {method.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <span className="text-purple-400 text-lg flex-shrink-0 mt-0.5">+</span>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {method.description}
          </p>
        )}

        {/* Learn More Link */}
        <button
          className={`text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
            isWidget || isHovered ? 'text-purple-400' : 'text-gray-500'
          }`}
        >
          Learn more
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Hover Glow */}
      {!isWidget && (
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 transition-all duration-300 pointer-events-none ${
            isHovered ? 'from-purple-500/5 to-blue-500/5' : ''
          }`}
        ></div>
      )}
    </div>
  );
}