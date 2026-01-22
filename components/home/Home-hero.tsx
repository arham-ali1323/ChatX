"use client";

import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Video, Shield, BarChart3, Bell, Building2 } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative mx-auto px-4 py-32 text-center overflow-hidden
  bg-[#070B1A]"
    >
      {/* Blue main glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div
          className="absolute -top-48 h-[520px] w-[1000px] rounded-full
      bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.35),transparent_70%)]
      blur-3xl"
        />
      </div>

      {/* Bottom blue curve */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48
    bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_70%)]"
      />
      <div className="relative z-10">
        {/* Heading */}
        <h1
          className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold 
  bg-linear-to-r from-[#2009cb] via-[#C7BEF9] to-[#2009cb]
  bg-clip-text text-transparent
  drop-shadow-[0_0_20px_rgba(216,210,244,0.35)]"
        >
          The complete chat platform for modern applications
        </h1>

        <p
          className="mt-12 mx-auto max-w-xl text-lg 
  text-[#A9A4C5]"
        >
          Embed powerful chat features directly into your platform.
          Real-time messaging, voice/video calls, and intelligent AI assistants
          to transform user engagement.
        </p>

        <p
          className="mt-6 mx-auto max-w-2xl text-base 
  text-[#8B85B3]"
        >
          Built for developers who value simplicity and scalability. 
          Our comprehensive SDK and pre-built UI components let you launch 
          in days, not months. Join thousands of companies already using 
          ChatX to connect millions of users worldwide.
        </p>


        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-md bg-primary px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            href={"/pricing"}
          >
            Start ChatX Free
          </Link>

          <Link
            className="rounded-md bg-transparent border border-gray-500 px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            href={"/demo"}
          >
            Try ChatX Demo
          </Link>
        </div>
      </div>
    </section>
    
  );
}