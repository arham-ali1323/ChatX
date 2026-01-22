"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";
import { Shield, Bell, BarChart3, Lock, Zap, Eye, AlertCircle, CheckCircle, MessageSquare, Phone, Video, MoreHorizontal } from 'lucide-react';

const chatMockups = [
  {
    title: "Moderation & Safety",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    messages: [
      { user: "Richard", text: "I have early access to GTA6!", type: "danger" },
      { system: "This message violates platform rules." }
    ]
  },
  {
    title: "Smart Notifications",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    messages: [
      { user: "Anna", text: "You have 3 unread messages 🔔" },
      { user: "System", text: "Push notification sent successfully", type: "success" }
    ]
  },
  {
    title: "Analytics & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    messages: [
      { user: "Admin", text: "User engagement increased by 32%" },
      { user: "System", text: "Peak activity detected at 8:00 PM", type: "info" }
    ]
  }
];

const features = [
  {
    id: 0,
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    iconColor: 'text-red-400',
    title: 'Content Moderation',
    description: 'AI-powered content filtering and safety controls',
    details: 'Automatically detect and filter inappropriate content, spam, and policy violations while preserving meaningful conversations.'
  },
  {
    id: 1,
    icon: Bell,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-400',
    title: 'Smart Notifications',
    description: 'Intelligent alerts and notification management',
    details: 'Customizable notification channels, quiet hours, and priority-based routing ensure users stay informed without being overwhelmed.'
  },
  {
    id: 2,
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-400',
    title: 'Analytics & Insights',
    description: 'Deep conversation analytics and user engagement metrics',
    details: 'Real-time dashboards and detailed reports on conversation patterns, user activity, and team productivity.'
  }
];

export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            Advanced Capabilities
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            In-app messaging and calling
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              functions elevated.
            </span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Built-in conversation moderation, bandwidth optimization, usage analytics, and more
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Chat Interface Mockup */}
         <div className="relative max-w-lg mx-auto">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeFeature}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={chatMockups[activeFeature].image}
          alt={chatMockups[activeFeature].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
        <h3 className="text-white font-semibold text-sm">
          {chatMockups[activeFeature].title}
        </h3>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 h-80">
        {chatMockups[activeFeature].messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl text-sm ${
              msg.type === "danger"
                ? "bg-red-500/15 text-red-400"
                : msg.type === "success"
                ? "bg-green-500/15 text-green-400"
                : msg.type === "info"
                ? "bg-blue-500/15 text-blue-400"
                : "bg-slate-800 text-slate-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </motion.div>
  </AnimatePresence>
</div>


          {/* Right Side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature: { icon: any; id: React.Key | null | undefined; color: any; iconColor: any; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: number) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`
                    group cursor-pointer bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300
                    ${activeFeature === index 
                      ? 'border-indigo-500/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/10' 
                      : 'border-slate-800 hover:border-slate-700'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${activeFeature === index 
                        ? `bg-gradient-to-br ${feature.color}` 
                        : 'bg-slate-800'
                      }
                    `}>
                      <Icon className={`w-6 h-6 ${activeFeature === index ? 'text-white' : feature.iconColor}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">
                        {feature.description}
                      </p>
                      
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <p className="text-slate-400 text-sm mb-4">
                            {feature.details}
                          </p>
                          <button className="text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2">
                            Learn more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}