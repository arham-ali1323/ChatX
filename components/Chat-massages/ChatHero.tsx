"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Users, Zap, Shield, Globe } from 'lucide-react';

export function ChatHero() {
  return (
    <section
      className="relative mx-auto px-4 py-32 text-center overflow-hidden
  bg-[#070B1A]"
    >
      {/* Purple main glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div
          className="absolute -top-48 h-[520px] w-[1000px] rounded-full
      bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.35),transparent_70%)]
      blur-3xl"
        />
      </div>

      {/* Bottom purple curve */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48
    bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.25),transparent_70%)]"
      />
      <div className="relative z-10">
        {/* Heading */}
        <h1
          className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold 
  bg-linear-to-r from-[#7c3aed] via-[#C7BEF9] to-[#7c3aed]
  bg-clip-text text-transparent
  drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
        >
          Advanced messaging solutions for modern teams
        </h1>

        <p
          className="mt-12 mx-auto max-w-xl text-lg 
  text-[#A9A4C5]"
        >
          Transform your communication with intelligent chat features.
          Real-time messaging, file sharing, reactions, and comprehensive moderation
          to enhance team collaboration.
        </p>

        <p
          className="mt-6 mx-auto max-w-2xl text-base 
  text-[#8B85B3]"
        >
          Designed for teams that demand efficiency and security. 
          Our enterprise-grade messaging platform delivers instant communication 
          with advanced features like read receipts, typing indicators, and message search. 
          Join thousands of organizations already using ChatX Messaging to connect their teams.
        </p>


        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-md bg-purple-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-purple-700 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
            href={"/messaging/setup"}
          >
            Start Messaging Free
          </Link>

          <Link
            className="rounded-md bg-transparent border border-purple-500 px-8 py-4 text-sm font-medium text-white transition hover:bg-purple-900/30 dark:bg-transparent dark:text-white dark:hover:bg-purple-900/30"
            href={"/messaging/demo"}
          >
            Try Messaging Demo
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { icon: MessageSquare, text: "Real-time Chat" },
            { icon: Send, text: "Instant Delivery" },
            { icon: Users, text: "Group Conversations" },
            { icon: Zap, text: "Lightning Fast" },
            { icon: Shield, text: "End-to-End Encryption" },
            { icon: Globe, text: "Global Scale" }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-full"
            >
              <feature.icon className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
