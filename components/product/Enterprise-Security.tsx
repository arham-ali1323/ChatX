"use client";
import React from "react";
import Head from "next/head";
import {
  Hexagon,
  Sparkles,
  Box,
  Layout,
  ArrowRight,
  Globe,
  ShieldCheck,
  Activity,
  Users,
  CheckCircle2,
} from "lucide-react";
export default function EnterpriseSecurity() {
  return (
    <>
        {/* --- ENTERPRISE SECURITY SECTION --- */}
       <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950 py-20 px-8">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-bold text-xs tracking-widest uppercase mb-4">
              Enterprise-Grade Security
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Security and scale you can trust
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Global edge network, iron-clad security, and 99.999% uptime.
              Battle-tested infrastructure that scales to billions of users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-white/10 rounded-[2.5rem] overflow-hidden  bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950">
            {/* Edge Network */}
            <div className="md:col-span-5 p-12 border-r border-b md:border-b-0 border-white/10 relative overflow-hidden group">
              <div className="mb-24 flex justify-center">
                <div className="relative">
                  <Globe className="w-40 h-40 text-blue-400/10 group-hover:text-blue-400/20 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Edge network</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Lightning-fast chat delivery through 35+ edge locations
                worldwide, ensuring minimal latency for all users.
              </p>
            </div>

            {/* Stats */}
            <div className="md:col-span-3 border-r border-white/10 flex flex-col">
              <div className="p-12 border-b border-white/10 flex-1">
                <div className="flex items-center gap-2 text-blue-400 mb-6">
                  <Activity size={14} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Uptime SLA</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter text-white">99.999%</div>
              </div>
              <div className="p-12 flex-1">
                <div className="flex items-center gap-2 text-blue-400 mb-6">
                  <Users size={14} /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scalability</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter text-white">5B+ chats</div>
              </div>
            </div>

            {/* Compliance Badge Grid */}
            <div className="md:col-span-4 p-12  bg-gradient-to-b from-gray-950 via-indigo-950/10 to-gray-950">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
                Enterprise security
              </h4>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "AICPA SOC", icon: <ShieldCheck />, color: "blue" },
                  { label: "GDPR", icon: <CheckCircle2 />, color: "blue" },
                  { label: "HIPAA", icon: <ShieldCheck />, color: "blue" },
                  { label: "ISO 27001", icon: <CheckCircle2 />, color: "blue" }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full border border-slate-700 bg-slate-800/50 flex flex-col items-center justify-center gap-2 group hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`${badge.color === "blue" ? "text-blue-400 group-hover:text-blue-300" : badge.color === "blue" ? "text-blue-400 group-hover:text-blue-300" : badge.color === "blue" ? "text-blue-400 group-hover:text-blue-300" : "text-orange-400 group-hover:text-orange-300"} transition-colors`}>
                      {React.cloneElement(badge.icon as React.ReactElement<any>, { width: 32, height: 32, strokeWidth: 1 })}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </>
  );
}