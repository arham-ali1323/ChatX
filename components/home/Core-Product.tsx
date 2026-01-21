"use client";

import { useState, useRef, useEffect } from 'react';

export default function CometChatTimeline() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      id: 0,
      badge: "Core Products",
      title: "The CometChat communication stack",
      description: "These are the building blocks of modern interaction — user-to-user chat, voice and video, and conversational AI agents. Each piece is modular, interoperable, and production-ready from day one, so you can start simple and scale without limits.",
      subtitle: "Real-time user communication",
      visual: "architecture"
    },
    {
      id: 1,
      badge: "Core Products",
      title: "The CometChat communication stack",
      description: "Power rich, branded conversations across chat and calls with prebuilt UI, strong infra, and developer-friendly tooling. Whether it's DMs, forums, consultations, or classrooms, CometChat makes it seamless, secure, and ready to scale.",
      keyFeatures: [
        "1:1, group, and broadcast chat",
        "Rich media, reactions, threads",
        "Video & voice calls (1:1 or group)",
        "Typing indicators, read receipts",
        "Screen sharing, recording, transcription"
      ],
      visual: "agent-ui"
    },
    {
      id: 2,
      badge: "Core Products",
      title: "The CometChat communication stack",
      subtitle: "Full-stack AI agent platform",
      description: "LLMs can think. CometChat helps them perform.",
      subdescription: "From branded interfaces to guardrails, re-engagement, and insights, CometChat gives you the full stack to deploy, monitor, and evolve AI agents - fast. No glue code, no chaos.",
      keyFeatures: [
        "Plug in your agent or build in-platform",
        "RAG & tool-calling support",
        "Agent-ready UI (citations, memory, retries, actions)",
        "Guardrails + fallback logic",
        "Built-in analytics and user tracking"
      ],
      visual: "ai-agent"
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
                {section.visual === 'architecture' && <ArchitectureVisual />}
                {section.visual === 'agent-ui' && <AgentUIVisual />}
                {section.visual === 'ai-agent' && <AIAgentVisual />}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ArchitectureVisual() {
  return (
    <div className="space-y-4">
      {/* User-to-User Communication */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">User-to-User Communication</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              💬
            </div>
            <span>Chat & Messaging</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              📞
            </div>
            <span>Voice and Video Calling</span>
          </div>
        </div>
      </div>

      {/* Agentic Communication */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Agentic Communication</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              🤖
            </div>
            <span>Agent Builder</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              ✨
            </div>
            <span>Agent Experience Layer</span>
          </div>
        </div>
      </div>

      {/* Shared Capabilities */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Shared Capabilities</h3>
        <div className="grid grid-cols-2 gap-3">
          {['Moderation & Guardrails', 'Analytics & Insights', 'Notifications Engine', 'Multi-Tenant Infra'].map((cap, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                {['🛡️', '📊', '🔔', '🏢'][idx]}
              </div>
              <span className="text-xs text-gray-400">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CometChat Foundation */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">CometChat Foundation</h3>
        <div className="grid grid-cols-3 gap-3">
          {['Flexible Integrations', 'Cross-Platform Support', 'Compliant & Scalable'].map((cap, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                {['🔗', '💻', '✅'][idx]}
              </div>
              <span className="text-xs text-gray-400">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgentUIVisual() {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop"
        alt="Agent UI"
        className="w-full h-auto rounded-2xl border border-gray-800 shadow-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent rounded-2xl"></div>
    </div>
  );
}

function AIAgentVisual() {
  return (
    <div className="space-y-4">
      {/* Agent Chat Interface 1 */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-white font-semibold">AI Agent</span>
          <div className="ml-auto flex gap-2">
            <button className="w-8 h-8 bg-gray-800 rounded-lg">+</button>
            <button className="w-8 h-8 bg-gray-800 rounded-lg">⚙️</button>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6 mb-4">
          <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
            👋
          </div>
          <p className="text-center text-white text-lg">Hello, Jack!</p>
          <p className="text-center text-white text-xl font-semibold">How can I help?</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {['Create image →', 'Analyze data →', 'Make a plan →', 'Summarize text →', 'Help me write →', 'More →'].map((action, idx) => (
            <button key={idx} className="bg-gray-800 hover:bg-gray-700 text-gray-400 text-sm py-2 px-3 rounded-lg transition">
              {action}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-2">
          <span className="text-gray-500 text-sm">Ask anything...</span>
          <div className="ml-auto flex gap-2">
            <button className="text-gray-500">😊</button>
            <button className="text-gray-500">🎤</button>
            <button className="bg-white w-6 h-6 rounded"></button>
          </div>
        </div>
      </div>

      {/* Agent Chat Interface 2 */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-white font-semibold">AI Agent</span>
          <div className="ml-auto flex gap-2">
            <button className="w-8 h-8 bg-gray-800 rounded-lg">+</button>
            <button className="w-8 h-8 bg-gray-800 rounded-lg">⚙️</button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300">
            I haven't received my package yet. Can you check?
            <span className="text-xs text-gray-500 block mt-1">4:30 PM</span>
          </div>
          
          <div className="bg-primary/20 border border-primary/30 rounded-lg p-3 text-sm text-gray-200">
            Your package was expected on July 13, but it's currently delayed due to a weather issue. The new delivery date is <strong>July 16</strong>.<br/>
            You'll receive a notification once it's out for delivery.
            <div className="mt-3 space-y-1">
              <div className="text-xs">In the meantime, I can help you with:</div>
              <ul className="text-xs list-disc list-inside">
                <li>Setting a delivery reminder</li>
                <li>Connecting you to our support team</li>
                <li>Tracking the package manually</li>
              </ul>
            </div>
            <div className="flex gap-2 mt-3">
              {['📋', '👍', '👎', '⬇️', '↻'].map((icon, idx) => (
                <button key={idx} className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700 transition">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-2 mt-4">
          <span className="text-gray-500 text-sm">Ask anything...</span>
          <div className="ml-auto flex gap-2">
            <button className="text-gray-500">😊</button>
            <button className="text-gray-500">🎤</button>
            <button className="bg-white w-6 h-6 rounded"></button>
          </div>
        </div>
      </div>
    </div>
  );
}