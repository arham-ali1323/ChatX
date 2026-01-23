"use client";

import { useState } from 'react';
import { MessageSquare, Send, Reply, Search, Users, Shield, Zap, Clock } from 'lucide-react';

export default function ChatCoreProduct() {
  const [activeTab, setActiveTab] = useState('messaging');

  const tabs = [
    { id: 'messaging', label: 'Messaging', icon: MessageSquare },
    { id: 'delivery', label: 'Delivery', icon: Send },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const features = {
    messaging: [
      { icon: MessageSquare, title: 'Real-time Chat', description: 'Instant messaging with typing indicators and read receipts' },
      { icon: Reply, title: 'Smart Replies', description: 'AI-powered suggested responses for faster communication' },
      { icon: Users, title: 'Group Conversations', description: 'Create channels and groups for team collaboration' }
    ],
    delivery: [
      { icon: Send, title: 'Instant Delivery', description: 'Messages delivered in under 100ms globally' },
      { icon: Clock, title: 'Message History', description: 'Complete searchable conversation history' },
      { icon: Zap, title: 'Push Notifications', description: 'Real-time alerts for important messages' }
    ],
    search: [
      { icon: Search, title: 'Advanced Search', description: 'Search across all conversations with filters' },
      { icon: MessageSquare, title: 'Content Indexing', description: 'AI-powered content analysis and categorization' },
      { icon: Users, title: 'User Discovery', description: 'Find and connect with team members easily' }
    ],
    security: [
      { icon: Shield, title: 'End-to-End Encryption', description: 'Military-grade encryption for all messages' },
      { icon: Users, title: 'Access Control', description: 'Granular permissions and role-based access' },
      { icon: MessageSquare, title: 'Content Moderation', description: 'Automated filtering and moderation tools' }
    ]
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Built for modern<br />
            messaging needs
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            ChatX Messaging provides enterprise-grade features with the simplicity your team needs. 
            From real-time delivery to advanced search, we've got you covered.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 border border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features[activeTab as keyof typeof features].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Uptime SLA' },
            { number: '<100ms', label: 'Message Latency' },
            { number: '256-bit', label: 'Encryption' },
            { number: '24/7', label: 'Support' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
