"use client";

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: 'TECHSTART',
    logo: 'https://logo.clearbit.com/techstart.com',
    quote: 'ChatX transformed how we communicate with customers. The real-time messaging and AI features helped us increase engagement by 300%.',
    author: 'Sarah Chen',
    role: 'CEO & Founder',
    avatar: 'https://i.pravatar.cc/150?img=33',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    company: 'EduConnect',
    logo: 'https://logo.clearbit.com/educonnect.com',
    quote: 'The video calling feature in ChatX is exceptional. Our virtual classrooms have never been more interactive and reliable.',
    author: 'Michael Rodriguez',
    role: 'Head of Technology',
    avatar: 'https://i.pravatar.cc/150?img=5',
    color: 'from-primary/20 to-pink-500/20'
  },
  {
    id: 3,
    company: 'HealthPlus',
    logo: 'https://logo.clearbit.com/healthplus.com',
    quote: 'ChatX\'s secure messaging platform is perfect for healthcare. The end-to-end encryption and compliance features give us peace of mind.',
    author: 'Dr. Emily Watson',
    role: 'Medical Director',
    avatar: 'https://i.pravatar.cc/150?img=9',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 4,
    company: 'GameHub',
    logo: 'https://logo.clearbit.com/gamehub.com',
    quote: 'Our gaming community loves ChatX. The real-time chat and voice features have created an amazing social experience for our players.',
    author: 'Alex Kim',
    role: 'Community Manager',
    avatar: 'https://i.pravatar.cc/150?img=12',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 5,
    company: 'FinanceFlow',
    logo: 'https://logo.clearbit.com/financeflow.com',
    quote: 'ChatX streamlined our client communications. The multi-workspace feature keeps everything organized and secure.',
    author: 'Jennifer Liu',
    role: 'Operations Lead',
    avatar: 'https://i.pravatar.cc/150?img=14',
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 6,
    company: 'RetailMax',
    logo: 'https://logo.clearbit.com/retailmax.com',
    quote: 'Customer support has never been better. ChatX\'s smart notifications and analytics help us respond 50% faster.',
    author: 'David Park',
    role: 'Customer Experience Director',
    avatar: 'https://i.pravatar.cc/150?img=16',
    color: 'from-rose-500/20 to-pink-500/20'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            ChatX Success Stories
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Trusted by innovators and
            <br />
            industry leaders worldwide
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`
                relative h-full bg-gradient-to-br ${testimonial.color}
                backdrop-blur-sm border border-slate-800/50
                rounded-2xl p-6 transition-all duration-300
                hover:border-slate-700/50 hover:shadow-2xl
                shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_8px_10px_-6px_rgba(0,0,0,0.2)]
                hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_12px_20px_-8px_rgba(0,0,0,0.3)]
              `}>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Company Logo/Name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {testimonial.company.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                    {testimonial.company}
                  </h3>
                </div>

                {/* Decorative Quote Marks */}
                <div className="flex gap-1 mb-4">
                  <div className="w-8 h-8 border-l-2 border-t-2 border-slate-600/50" />
                  <div className="w-8 h-8 border-l-2 border-t-2 border-slate-600/50" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-200 text-[15px] leading-relaxed mb-8 min-h-[140px]">
                  {testimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-slate-700/50 group-hover:ring-white/20 transition-all">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-slate-900 rounded-full" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-slate-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-slate-700/50 hover:border-slate-600/50 rounded-xl text-white font-semibold transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View more stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}