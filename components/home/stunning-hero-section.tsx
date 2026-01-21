"use client";

import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function StunningHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        {/* Large Radial Gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary Gradient */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Bottom Dark Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-indigo-500/20">
            <div className="relative">
              <MessageSquare className="w-10 h-10 text-white" strokeWidth={2} />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            ChatX: Conversations
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-primary to-pink-400 bg-clip-text text-transparent">
              Reimagined.
            </span>
            <br />
            Experience the future.
          </h5>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          ChatX handles the complexity - real-time messaging, file sharing, video calls, and team collaboration - so you can focus on what matters: meaningful connections.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-primary hover:from-indigo-500 hover:to-primary text-white font-semibold rounded-xl shadow-2xl shadow-indigo-500/50 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Chatting Free
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
            
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-xl backdrop-blur-sm transition-all"
          >
            <span className="flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Trust Badges / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Powered by 50,000+ users</span>
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <span className="text-sm">Lightning-fast delivery</span>
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm">End-to-end encrypted</span>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-indigo-500 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            top: '25%',
            right: '25%'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-sm"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            bottom: '25%',
            left: '25%'
          }}
        />
      </div>
    </section>
  );
}