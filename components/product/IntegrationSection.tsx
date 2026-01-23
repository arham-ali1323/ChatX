"use client";
import { useState } from "react";

type IntegrationMethod = {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

export default function ChatIntegrationMethods() {
  const [hovered, setHovered] = useState<string | null>(null);

  const integrationMethods: IntegrationMethod[] = [
    {
      id: "widget",
      title: "Widget Builder",
      icon: "⚙️",
      description: "The fastest way to add chat with zero coding required.",
      features: [
        "Customize chat behavior & UI",
        "Single line integration",
        "Launch instantly in your app",
      ],
    },
    {
      id: "ui-kit",
      title: "UI Kit Builder",
      icon: "🎨",
      description: "Low-code builder for flexible chat experiences.",
      features: [
        "Drag & drop UI blocks",
        "Theming support",
        "Faster than custom builds",
      ],
    },
    {
      id: "ui-kits",
      title: "Chat UI Kits",
      icon: "✨",
      description: "Pre-built components with pixel-perfect design.",
      features: [
        "Modern UI components",
        "Fully customizable",
        "Production ready",
      ],
    },
    {
      id: "sdks",
      title: "Chat SDKs",
      icon: "🔧",
      description: "Build fully custom chat experiences.",
      features: [
        "Open-source SDKs",
        "REST & WebSocket APIs",
        "Framework agnostic",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
            Integrating In-App Chat
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Integrate real-time messaging
            <br /> that grows with your needs
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Start with any integration method and scale effortlessly
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationMethods.map((method) => (
            <IntegrationCard
              key={method.id}
              method={method}
              isHovered={hovered === method.id}
              onEnter={() => setHovered(method.id)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  method,
  isHovered,
  onEnter,
  onLeave,
}: {
  method: IntegrationMethod;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300
        bg-gradient-to-br from-gray-900/50 to-gray-950/50 border-gray-800
        ${isHovered ? "-translate-y-2 shadow-xl shadow-blue-500/10 border-blue-500/40" : ""}
      `}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all
          ${
            isHovered
              ? "bg-blue-500/20 text-blue-400 scale-110"
              : "bg-gray-800 text-gray-400"
          }
        `}
      >
        <span className="text-3xl">{method.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">
        {method.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {method.description}
      </p>

      {/* Hover Content */}
      <ul
        className={`space-y-3 overflow-hidden transition-all duration-300
          ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {method.features.map((feature, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-gray-300">
            <span className="text-blue-400">+</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`mt-6 text-sm font-semibold flex items-center gap-2 transition
          ${isHovered ? "text-blue-400" : "text-gray-500"}
        `}
      >
        Learn more
        <span
          className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}
        >
          →
        </span>
      </button>
    </div>
  );
}
