"use client";

import React from 'react';

function Brand({ label, top, left }: { label: string; top: string; left: string }) {
  return (
    <div
      className="absolute z-20 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white"
      style={{ top, left }}
    >
      {label}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

export default function CustomersPage() {
  return (
    <section className="relative min-h-screen bg-[#0B0B14] overflow-hidden text-white">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a2e_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      {/* WORLD MAP */}
      <img
        src="/images/world-map.svg"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* BRAND TAGS */}
      <Brand label="Clutch" top="30%" left="15%" />
      <Brand label="Bitdefender" top="20%" left="50%" />
      <Brand label="Appknox" top="28%" left="68%" />
      <Brand label="Ticmas" top="65%" left="35%" />
      <Brand label="One Wardrobe" top="60%" left="80%" />

      {/* CENTER TEXT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">
          The interaction engine
        </h2>
        <p className="mt-3 text-3xl md:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          behind your favorite products
        </p>
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-center">
          <Stat value="113,000+" label="apps powered by ChatX" />
          <Stat value="126M+" label="users connected worldwide" />
          <Stat value="7M+" label="messages sent every day" />
          <Stat value="163+" label="countries connected" />
        </div>
      </div>
    </section>
  );
}