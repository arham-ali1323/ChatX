"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Video, Users, MessageCircle, Zap, TrendingUp, Shield, Sparkles, Play, Calendar, Star } from 'lucide-react';

const useCases = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'Universally compatible.\nInfinitely adaptable.',
    description: 'Provide HIPAA-compliant secure communication with end-to-end encryption, video calls, and support patient-provider messaging, online consultations, and secure medical file sharing, optimized for every use case.',
    icon: Heart,
    color: 'from-emerald-500 to-teal-500',
    mockup: 'healthcare',
    features: ['End-to-end encryption', 'HIPAA compliant', 'Video consultations', 'Secure file sharing']
  },
  {
    id: 2,
    category: 'Marketplace',
    title: 'Connect buyers\nand sellers.',
    description: 'Transform your marketplace with real-time chat—safe and calling—to boost customer engagement, drive sales, and support seamless transactions, ensuring buyers and sellers communicate effortlessly.',
    icon: ShoppingBag,
    color: 'from-purple-500 to-indigo-500',
    mockup: 'marketplace',
    features: ['Real-time messaging', 'Transaction support', 'Buyer-seller connect', 'Payment integration']
  },
  {
    id: 3,
    category: 'On-demand services',
    title: 'Instant communication\nfor instant needs.',
    description: 'Simplify real-time coordination with secure, customized chat and calling optimized for high-performance and seamless user experiences.',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    mockup: 'ondemand',
    features: ['Live tracking', 'Quick responses', 'Service coordination', 'User notifications']
  },
  {
    id: 4,
    category: 'Dating & social apps',
    title: 'Meaningful connections,\nmoderated safely.',
    description: 'Build engaging social experiences with powerful AI-powered moderation, video calling, and personalized messaging features that keep your community safe and users engaged.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    mockup: 'dating',
    features: ['AI moderation', 'Video dating', 'Safe messaging', 'Profile matching']
  },
  {
    id: 5,
    category: 'Social and communities',
    title: 'Foster vibrant\ncommunities.',
    description: 'Create thriving communities with group chats, forums, media sharing, and live streaming capabilities that keep members connected and active.',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    mockup: 'community',
    features: ['Group chats', 'Media sharing', 'Live streaming', 'Community forums']
  }
];

export default function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  const currentCase = useCases[activeCase];
  const Icon = currentCase.icon;

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            Use Cases
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for every industry,
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              optimized for your needs
            </span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {useCases.map((useCase, index) => {
            const TabIcon = useCase.icon;
            return (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveCase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
                  ${activeCase === index
                    ? `bg-gradient-to-r ${useCase.color} text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                  }
                `}
              >
                <TabIcon className="w-5 h-5" />
                <span>{useCase.category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${currentCase.color} shadow-lg`}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight whitespace-pre-line">
              {currentCase.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed">
              {currentCase.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {currentCase.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentCase.color}`} />
                  <span className="text-slate-400 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-6 px-8 py-4 bg-gradient-to-r ${currentCase.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              Explore {currentCase.category}
            </motion.button>
          </motion.div>

          {/* Right Side - Mockup */}
          <motion.div
            key={`mockup-${activeCase}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Healthcare Mockup */}
            {currentCase.mockup === 'healthcare' && (
              <div className="relative max-w-md mx-auto">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                  {/* Chat Header */}
                  <div className="bg-slate-800/50 backdrop-blur-sm px-4 py-3 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/40?img=33" alt="Doctor" className="w-10 h-10 rounded-full" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">Dr. Sarah Johnson</h4>
                        <p className="text-emerald-400 text-xs flex items-center gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          Available now
                        </p>
                      </div>
                      <div className="ml-auto flex gap-2">
                        <button className="p-2 hover:bg-slate-700 rounded-lg">
                          <Video className="w-4 h-4 text-slate-400" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-4 h-80 overflow-y-auto">
                    <div className="flex gap-2">
                      <img src="https://i.pravatar.cc/32?img=33" alt="" className="w-8 h-8 rounded-full" />
                      <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                        <p className="text-slate-200 text-sm">Hello! How are you feeling today?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 justify-end">
                      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs">
                        <p className="text-white text-sm">Much better, thank you doctor!</p>
                      </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="text-emerald-400 text-xs font-semibold">End-to-end encrypted</p>
                        <p className="text-slate-400 text-xs">HIPAA compliant messaging</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            )}

            {/* Marketplace Mockup */}
            {currentCase.mockup === 'marketplace' && (
              <div className="relative max-w-md mx-auto">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="p-4 space-y-4">
                    {/* Product Card */}
                    <div className="bg-slate-800 rounded-xl p-3 flex gap-3">
                      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100" alt="Product" className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">Wireless Headphones</h4>
                        <p className="text-purple-400 font-bold text-lg">$299</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-slate-400 text-xs">4.8 (234)</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-3">
                      <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-2">
                        <p className="text-slate-200 text-sm">Hi! Is this still available?</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl rounded-tr-sm px-4 py-2 ml-auto max-w-[80%]">
                        <p className="text-white text-sm">Yes! Ready to ship today 📦</p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-semibold transition-colors">
                        Buy Now
                      </button>
                      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-colors">
                        Make Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* On-demand Services Mockup */}
            {currentCase.mockup === 'ondemand' && (
              <div className="relative max-w-md mx-auto">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="p-4 space-y-4">
                    {/* Service Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/40?img=14" alt="Driver" className="w-12 h-12 rounded-full" />
                        <div>
                          <h4 className="text-white font-semibold">Michael Driver</h4>
                          <p className="text-orange-400 text-sm">Arriving in 3 min</p>
                        </div>
                      </div>
                      <div className="bg-orange-500/10 px-3 py-1 rounded-full">
                        <p className="text-orange-400 text-xs font-bold">⚡ Express</p>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-slate-800 rounded-xl h-32 flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">Live tracking active</p>
                      </div>
                    </div>

                    {/* Status Updates */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-slate-300">Driver picked up your order</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-slate-600 rounded-full" />
                        <span className="text-slate-500">On the way to destination</span>
                      </div>
                    </div>

                    {/* Quick Message */}
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl px-4 py-3">
                      <p className="text-white text-sm">I'm nearby! Meet you at the entrance 👋</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dating App Mockup */}
            {currentCase.mockup === 'dating' && (
              <div className="relative max-w-md mx-auto">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="p-4 space-y-4">
                    {/* Profile Preview */}
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <img src="https://i.pravatar.cc/400?img=5" alt="Profile" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white text-2xl font-bold">Sarah, 28</h4>
                        <p className="text-slate-300 text-sm">2 miles away</p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl px-4 py-3">
                      <p className="text-white text-sm">Hey! Love your travel photos 📸</p>
                    </div>

                    {/* Safety Badge */}
                    <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-3 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-pink-400" />
                      <p className="text-pink-400 text-xs">AI-moderated for safety</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Community Mockup */}
            {currentCase.mockup === 'community' && (
              <div className="relative max-w-md mx-auto">
                <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                  <div className="p-4 space-y-4">
                    {/* Group Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        TG
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Tech Geeks</h4>
                        <p className="text-slate-400 text-sm">234 members • 12 online</p>
                      </div>
                    </div>

                    {/* Media Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
                          <img src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?w=200`} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Live Stream Badge */}
                    <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Play className="w-5 h-5 text-white fill-white" />
                        <span className="text-white font-semibold">Live Stream</span>
                      </div>
                      <span className="text-white text-sm">👁️ 234</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Active Users', value: '10M+', icon: Users },
            { label: 'Messages/Day', value: '500M+', icon: MessageCircle },
            { label: 'Uptime', value: '99.99%', icon: TrendingUp },
            { label: 'Industries', value: '50+', icon: Sparkles }
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <StatIcon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${currentCase.color} bg-clip-text text-transparent`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}