
"use client";
import { useState } from 'react';
import { MessageSquare, CheckCircle, Circle, Users, Settings, MessageSquareQuote, Search, Image, Clock, Type } from 'lucide-react';

export default function ChatFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'reliable-chat',
      title: 'Resilient, reliable chat',
      description: 'Real-time messaging for anyone 1:1, groups, and broadcast channels. Includes reactions, threads, and typing indicators.',
      visual: 'chat-bubbles',
      icon: MessageSquare
    },
    {
      id: 'delivered-receipts',
      title: 'Read & delivered receipts',
      description: 'Track real-time message-status updates delivered to individual recipients or in group conversations.',
      visual: 'receipts',
      icon: CheckCircle
    },
    {
      id: 'user-presence',
      title: 'User presence',
      description: 'Show online/offline status and activity updates in real-time so users know who\'s available to chat.',
      visual: 'presence',
      icon: Circle
    },
    {
      id: 'user-management',
      title: 'User management',
      description: 'Manage roles, friend lists, reporting, blocking, and moderation out of the box.',
      visual: 'user-card',
      icon: Users
    },
    {
      id: 'guided-replies',
      title: 'Guided replies',
      description: 'Keep conversations clear and structured with suggested responses and customizable replies for faster engagement.',
      visual: 'quick-replies',
      icon: MessageSquareQuote
    },
    {
      id: 'conversational-search',
      title: 'Conversational search',
      description: 'Instantly find information with keyword-based search within or across conversations.',
      visual: 'search',
      icon: Search
    },
    {
      id: 'media-support',
      title: 'Rich media support',
      description: 'Send photos, videos, files, locations, GIFs, stickers, and inline code samples. Built to be real-time fast.',
      visual: 'media-grid',
      icon: Image
    },
    {
      id: 'message-history',
      title: 'Message history',
      description: 'Searchable message history, context in load more on your platform. Message history is stored in the cloud.',
      visual: 'history',
      icon: Clock
    },
    {
      id: 'typing-indicators',
      title: 'Typing indicators',
      description: 'Real-time visual feedback indicating by showing when users are typing.',
      visual: 'typing',
      icon: Type
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            In-app chat with<br />
            everything you need.
          </h2>
          
          <p className="text-gray-400 text-lg mb-8">
            Building real-time messaging has never been easier.
          </p>

          <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full border-2 border-gray-600 hover:border-gray-500 transition-all duration-300">
            Explore all features
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isHovered={hoveredFeature === feature.id}
              onHover={() => setHoveredFeature(feature.id)}
              onLeave={() => setHoveredFeature(null)}
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
      case 'chat-bubbles':
        return (
          <div className="space-y-2 mb-4">
            <div className="flex justify-end">
              <div className="bg-purple-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                Hey! How are you?
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full flex-shrink-0"></div>
              <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-2xl rounded-tl-none max-w-[80%]">
                I'm doing great! How about you?
              </div>
            </div>
          </div>
        );

      case 'receipts':
        return (
          <div className="space-y-3 mb-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-xs font-semibold">Message Status</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs">Sent</span>
                  <span className="text-gray-500 text-xs ml-auto">2:45 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs">Delivered</span>
                  <span className="text-gray-500 text-xs ml-auto">2:45 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs">Read</span>
                  <span className="text-gray-500 text-xs ml-auto">2:46 PM</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'presence':
        return (
          <div className="space-y-2 mb-4">
            {['Alex', 'Sarah', 'Mike'].map((name, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-800 rounded-lg p-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                    idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <div className="text-white text-xs font-semibold">{name}</div>
                  <div className="text-gray-500 text-xs">
                    {idx === 0 ? 'Online' : idx === 1 ? 'Away' : 'Offline'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'user-card':
        return (
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
              <div>
                <div className="text-white font-semibold">John Doe</div>
                <div className="text-gray-400 text-xs">@johndoe</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-purple-600 text-white text-xs py-2 rounded-lg">Message</button>
              <button className="bg-gray-700 text-white text-xs py-2 rounded-lg">Block</button>
            </div>
          </div>
        );

      case 'quick-replies':
        return (
          <div className="space-y-2 mb-4">
            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-2xl">
              How can I help you today?
            </div>
            <div className="grid grid-cols-2 gap-2 pl-2">
              <button className="bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs py-2 rounded-lg">
                Get started
              </button>
              <button className="bg-purple-900/50 border border-purple-500/30 text-purple-300 text-xs py-2 rounded-lg">
                Learn more
              </button>
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="mb-4">
            <div className="bg-gray-800 rounded-lg p-3 mb-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="bg-transparent text-white text-xs outline-none flex-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-800/50 rounded p-2">
                <div className="text-purple-400 text-xs font-semibold mb-1">Sarah • 2 hours ago</div>
                <div className="text-gray-400 text-xs">Let's meet at the <span className="bg-purple-500/30 text-purple-300">cafe</span> tomorrow</div>
              </div>
            </div>
          </div>
        );

      case 'media-grid':
        return (
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="bg-purple-600 text-white text-xs px-3 py-2 rounded-lg mt-2">
              📎 Image_2024.jpg
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="space-y-2 mb-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs font-semibold">Yesterday</span>
              </div>
              <div className="space-y-1">
                <div className="text-gray-400 text-xs">Project discussion</div>
                <div className="text-gray-400 text-xs">Meeting notes shared</div>
              </div>
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <div className="flex-1">
                <div className="text-white text-xs font-semibold">Tessa</div>
                <div className="text-gray-500 text-xs">typing...</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <div className="bg-gray-800 px-3 py-2 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
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
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Visual */}
      <div className="min-h-[120px]">
        {renderVisual()}
      </div>

      {/* Content */}
      <div>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-gray-200'
        }`}>
          {feature.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Hover Glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 transition-all duration-300 pointer-events-none ${
        isHovered ? 'from-purple-500/5 to-blue-500/5' : ''
      }`}></div>
    </div>
  );
}