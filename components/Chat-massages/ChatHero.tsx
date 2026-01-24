"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Users, Zap, Shield, Globe } from 'lucide-react';

export function ChatHero() {
  return (
    <section
      className="relative mx-auto px-4 py-32 text-center  selection:bg-blue-500/30 overflow-hidden"
    >
     {/* Bottom blue curve */}
      <div className="relative z-10">
        {/* Heading */}
        <h1
          className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold 
   bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600
  bg-clip-text text-transparent
  drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
        >
          Advanced messaging solutions for modern teams
        </h1>

        <p
          className="mt-12 mx-auto max-w-xl text-xl 
  text-[#A9A4C5]"
        >
          Transform your communication with intelligent chat features.
          Real-time messaging, file sharing, reactions, and comprehensive moderation
          to enhance team collaboration.
        </p>

        <p
          className="mt-6 mx-auto max-w-xl text-xl 
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
            className="rounded-md bg-blue-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
            href={"/messaging/setup"}
          >
            Start Messaging Free
          </Link>

          <Link
            className="rounded-md bg-transparent border border-blue-500 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-900/30 dark:bg-transparent dark:text-white dark:hover:bg-blue-900/30"
            href={"/messaging/demo"}
          >
            Try Messaging Demo
          </Link>
        </div>
      </div>
    </section>
    
  );
}
