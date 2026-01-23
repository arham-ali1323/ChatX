"use client";
import { useState } from 'react';

export default function ChatXProductsResources() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const products = [
    {
      id: 'chat-calling',
      icon: '💬',
      title: 'Chat and Calling',
      description: 'Real-time chat with messaging & calling with enterprise scalability'
    },
    {
      id: 'ai-explore',
      icon: '🤖',
      title: 'AI Explore',
      description: 'Build agentic conversations using AI-powered chatbot technology'
    },
    {
      id: 'moderation',
      icon: '🛡️',
      title: 'Moderation',
      description: 'Safety tools with advanced content filtering tools'
    },
    {
      id: 'notifications',
      icon: '🔔',
      title: 'Notifications',
      description: 'Smart engagement by sending instant push notifications'
    },
    {
      id: 'insights',
      icon: '📊',
      title: 'Insights',
      description: 'Generate AI-powered insights for meaningful conversations'
    }
  ];

  const resources = [
    {
      id: 'help-center',
      icon: '❓',
      title: 'Help Center',
      description: 'Support and answers for all your ChatX questions',
      link: 'Learn more →'
    },
    {
      id: 'demo',
      icon: '🎮',
      title: 'Interactive Demo',
      description: 'Experience ChatX in action before you integrate',
      link: 'Launch demo →'
    },
    {
      id: 'updates',
      icon: '📱',
      title: 'Product Updates',
      description: 'Stay ahead of the curve with latest releases',
      link: 'Learn more →'
    },
    {
      id: 'status',
      icon: '📈',
      title: 'Status Page',
      description: 'Stay informed of any service interruptions',
      link: 'Learn more →'
    },
    {
      id: 'mcp',
      icon: '💎',
      title: 'Core MCP',
      description: 'Understanding Core Chat MCP is your A-tools for instant customization',
      link: 'Learn more →'
    },
    {
      id: 'office-hours',
      icon: '📅',
      title: 'Office Hours',
      description: 'Book live, one-on-one solution engineers to refine your integration',
      link: 'Book your slot →'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
       <div className="max-w-6xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* LEFT: Content */}
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        ChatX
      </h1>

      <p className="text-gray-600 text-lg max-w-md">
        Seamlessly integrate real-time chat, voice, and video functionalities.
      </p>
    </div>

    {/* RIGHT: Chat Interface Preview */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-lg">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900">
              Search
            </span>
            <span className="text-xs text-gray-500">
              3:30 PM
            </span>
          </div>

          {/* Conversations */}
          <div className="space-y-4">
            {[
              {
                title: "Emilia - Luis Moreto",
                text: "User question 13 Jun 2020",
              },
              {
                title: "ChatX power topic",
                text: "Content preview text",
              },
              {
                title: "Emilia - Luis Moreto",
                text: "Message sent last week...",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outgoing Message */}
      <div className="bg-blue-600 text-white rounded-xl p-4 max-w-xs ml-auto">
        <p className="text-sm mb-2">
          Seamlessly integrate real-time chat, voice and video functionalities.
        </p>
        <p className="text-xs opacity-90">
          Experience instant messaging, high-quality audio and video calling...
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isHovered={hoveredCard === product.id}
                onHover={() => setHoveredCard(product.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-gray-600 mb-8">
            Quick links for popular integration guides, API references, and community support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                isHovered={hoveredCard === resource.id}
                onHover={() => setHoveredCard(resource.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, isHovered, onHover, onLeave }: {
  product: any;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`bg-white rounded-xl border p-6 transition-all duration-300 cursor-pointer ${
        isHovered
          ? 'border-blue-300 shadow-lg shadow-blue-100 -translate-y-1'
          : 'border-gray-200 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 ${
            isHovered ? 'bg-blue-100' : 'bg-gray-100'
          }`}
        >
          {product.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
            isHovered ? 'text-blue-600 translate-x-1' : 'text-gray-400'
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
      </div>
    </div>
  );
}

function ResourceCard({ resource, isHovered, onHover, onLeave }: {
  resource: any;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`bg-white rounded-xl border p-6 transition-all duration-300 cursor-pointer ${
        isHovered
          ? 'border-blue-300 shadow-lg shadow-blue-100 -translate-y-1'
          : 'border-gray-200 shadow-sm'
      }`}
    >
      <div className="mb-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 transition-all duration-300 ${
            isHovered ? 'bg-blue-100' : 'bg-gray-100'
          }`}
        >
          {resource.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {resource.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {resource.description}
        </p>
      </div>
      <button
        className={`text-sm font-medium flex items-center gap-2 transition-colors duration-300 ${
          isHovered ? 'text-blue-600' : 'text-gray-600'
        }`}
      >
        {resource.link}
      </button>
    </div>
  );
}