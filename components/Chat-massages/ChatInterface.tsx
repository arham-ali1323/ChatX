"use client";

import { MessageSquare, Send, Reply, Search, Bell, BarChart3, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Instant Messaging',
      category: 'Core Communication'
    },
    {
      icon: Send,
      title: 'Message Delivery',
      category: 'Core Communication'
    }
  ];

  const capabilities = [
    { icon: Shield, label: 'Message\nEncryption' },
    { icon: BarChart3, label: 'Chat\nAnalytics' },
    { icon: Bell, label: 'Push\nNotifications' },
    { icon: Users, label: 'Team\nChannels' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The complete platform for every{' '}
              <span className="bg-gradient-to-r from-blue-600 to-slate-400 bg-clip-text text-transparent">
                message
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              ChatX Messaging delivers instant communication with read receipts, typing indicators, 
              and comprehensive search capabilities. Built for teams that need reliable, secure messaging 
              with file sharing, reactions, and intelligent moderation to keep conversations productive.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-4 bg-blue-600  text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Messaging Free
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-gray-800/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Messaging Docs
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Platform Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Top Row - Communication Types */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Core Communication */}
              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Instant Messaging</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Message Delivery</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 font-medium">Core Communication</p>
              </motion.div>

              {/* Advanced Features */}
              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <Reply className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-400">Smart Reply System</p>
                </div>
                <p className="text-sm text-slate-300 font-medium mt-8">AI-Enhanced Features</p>
              </motion.div>
            </div>

            {/* Center - ChatX Messaging Core */}
            <motion.div
              className="bg-gradient-to-br from-blue-600/20 via-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 mb-8 relative overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ChatX Messaging</h3>
                <p className="text-sm text-slate-300">Core Platform</p>
              </div>
            </motion.div>

            {/* Bottom - Capabilities */}
            <div className="grid grid-cols-4 gap-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    <Icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs text-slate-400 whitespace-pre-line leading-tight">
                      {capability.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting Lines */}
           <svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ zIndex: 0 }}
>
  {/* ───────── STATIC BASE LINES ───────── */}
  {/* Top → Center */}
  <line
    x1="50%"
    y1="18%"
    x2="50%"
    y2="38%"
    stroke="rgba(168,85,247,0.15)"
    strokeWidth="2"
  />

  {/* Center → Bottom */}
  <line
    x1="50%"
    y1="58%"
    x2="50%"
    y2="78%"
    stroke="rgba(168,85,247,0.15)"
    strokeWidth="2"
  />

  {/* ───────── FLOWING ANIMATED LINES ───────── */}
  {/* Top → Center flow */}
  <motion.line
    x1="50%"
    y1="18%"
    x2="50%"
    y2="38%"
    stroke="url(#flowGradientTop)"
    strokeWidth="2"
    strokeDasharray="6 14"
    animate={{ strokeDashoffset: [0, -40] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* Center → Bottom flow */}
  <motion.line
    x1="50%"
    y1="58%"
    x2="50%"
    y2="78%"
    stroke="url(#flowGradientBottom)"
    strokeWidth="2"
    strokeDasharray="6 14"
    animate={{ strokeDashoffset: [0, -40] }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* ───────── GRADIENTS ───────── */}
  <defs>
    <linearGradient id="flowGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
      <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
      <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
    </linearGradient>

    <linearGradient id="flowGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
      <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>

          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '100M+', label: 'Messages Sent' },
            { number: '99.9%', label: 'Uptime' },
            { number: '<100ms', label: 'Message Latency' },
            { number: '24/7', label: 'Message Support' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.h3
                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-slate-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.1, type: 'spring' }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
