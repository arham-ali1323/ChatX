"use client";
import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Globe,
  ShieldCheck,
  Activity,
  Users,
  MessageSquare,
  Phone,
  ChevronDown,
  Info
} from "lucide-react";
import { main, div } from "framer-motion/client";

// --- CONSTANTS ---
const USER_OPTIONS = ["1k", "10k", "25k", "50k", "100k", "500k", "1M", "10M+"];

const COMPARISON_DATA = {
  usage: [
    { label: "Monthly Active Users", build: "100", basic: "As per tier", advanced: "As per tier", enterprise: "As per tier" },
    { label: "MAU overage rate", build: "-", basic: "$0.10 per MAU", advanced: "$0.10 per MAU", enterprise: "No Overage" },
    { label: "Concurrent connections included", build: "25", basic: "5% MAU included", advanced: "5% MAU included", enterprise: "10% MAU included" },
    { label: "Concurrent connections overage rate", build: "-", basic: "$1 per concurrent", advanced: "$1 per concurrent", enterprise: "No Overage" },
    { label: "Messages/month", build: "Unlimited", basic: "Unlimited", advanced: "Unlimited", enterprise: "Unlimited" },
    { label: "Message storage", build: "Unlimited", basic: "Unlimited", advanced: "Unlimited", enterprise: "Unlimited" },
    { label: "Message retention", build: "6 months", basic: "6 months", advanced: "6 months", enterprise: "6 months" },
    { label: "Images & Files storage", build: "Unlimited", basic: "Unlimited", advanced: "Unlimited", enterprise: "Unlimited" },
  ],
  messaging: [
    { label: "One-on-one private chat", build: true, basic: true, advanced: true, enterprise: true },
    { label: "Group text conferences", build: true, basic: true, advanced: true, enterprise: true },
    { label: "Users list", build: true, basic: true, advanced: true, enterprise: true },
    { label: "Friends list", build: true, basic: true, advanced: true, enterprise: true },
    { label: "Users & Friends presence", build: true, basic: true, advanced: true, enterprise: true },
  ]
};

export default function CometChatPricing() {
  const [selectedProduct, setSelectedProduct] = useState<"chat" | "calls" | "ai">("chat");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [userIndex, setUserIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 font-sans antialiased pb-20">
          <div>
            {/* --- DETAILED COMPARISON TABLE --- */}
            <section className="max-w-7xl mx-auto px-6 pt-20">
              <div className="mb-12">
                <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">Pricing plans</p>
                <h2 className="text-4xl font-bold">Detailed Plan Comparison</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left border-b border-white/10">
                      <th className="py-6 pr-4 w-1/4 text-2xl font-bold">Usage</th>
                      <th className="py-6 px-4 text-center border-x border-white/5">
                        <div className="text-sm font-bold">Build</div>
                        <div className="text-[10px] text-gray-500 uppercase">Free Forever</div>
                      </th>
                      <th className="py-6 px-4 text-center border-r border-white/5">
                        <div className="text-sm font-bold">Basic</div>
                        <div className="text-[10px] text-gray-500 uppercase">$239/month</div>
                      </th>
                      <th className="py-6 px-4 text-center bg-blue-600/10 rounded-t-xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[8px] px-3 py-1 rounded-full uppercase font-bold">Most popular</div>
                        <div className="text-sm font-bold">Advanced</div>
                        <div className="text-[10px] text-gray-500 uppercase">$339/month</div>
                      </th>
                      <th className="py-6 px-4 text-center">
                        <div className="text-sm font-bold">Enterprise</div>
                        <div className="text-[10px] text-gray-500 uppercase text-xs">Starts from 10k MAU</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_DATA.usage.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 pr-4 flex items-center gap-2 text-xs text-gray-400">
                          {row.label} <Info size={12} className="opacity-40" />
                        </td>
                        <td className="py-4 px-4 text-center text-xs font-medium border-x border-white/5">{row.build}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium border-r border-white/5">{row.basic}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium bg-blue-600/5">{row.advanced}</td>
                        <td className="py-4 px-4 text-center text-xs font-medium">{row.enterprise}</td>
                      </tr>
                    ))}
                    
                    {/* Expandable Section */}
                    <tr className="border-b border-white/10">
                      <td colSpan={5} className="py-8">
                        <h3 className="text-xl font-bold mb-4">In-app Messaging</h3>
                        <p className="text-xs font-bold text-gray-500 uppercase mb-4">Core messaging experience</p>
                      </td>
                    </tr>

                    {COMPARISON_DATA.messaging.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-4 pr-4 text-xs text-gray-400 flex items-center gap-2">{row.label} <Info size={12} className="opacity-40" /></td>
                        {[row.build, row.basic, row.advanced, row.enterprise].map((val, i) => (
                          <td key={i} className={`py-4 px-4 text-center ${i === 2 ? 'bg-blue-600/5' : ''}`}>
                            {val ? <div className="w-4 h-4 rounded-full bg-blue-500/40 border border-blue-500 mx-auto flex items-center justify-center"><div className="w-1.5 h-1.5 bg-blue-200 rounded-full" /></div> : "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-700 rounded-xl font-bold text-sm hover:bg-blue-500 transition-all"
                >
                  Expand all Features <ChevronDown size={16} className={`${isExpanded ? 'rotate-180' : ''} transition-transform`} />
                </button>
              </div>
            </section>
          </div>
        {/* --- OTHER TABS (CALLS/AI) - PREVIOUSLY BUILT --- */}
        {selectedProduct === "calls" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
             {/* Built to match screenshot 2026-01-24 210956.png */}
             <div className="bg-[#0A0A0F] border border-white/5 p-10 rounded-[2.5rem]">
               <h3 className="text-4xl font-bold mb-6">Build</h3>
               <p className="text-gray-400 text-sm mb-12">A sandbox plan for you to create an MVP and test out CometChat for free.</p>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Highlights</p>
               <p className="text-sm text-gray-300 flex items-center gap-2 mb-12"><Sparkles size={14} className="text-blue-500" /> 10K voice and video minutes available to test</p>
               <button className="w-32 py-3 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5">Try for free</button>
             </div>
             {/* ... (Other Call Cards) */}
          </div>
        )}

        {selectedProduct === "ai" && (
           <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#0A0A0F] p-12 rounded-[3rem] border border-white/5 animate-in zoom-in-95 duration-500">
             {/* Built to match screenshot 2026-01-24 211038.png */}
             <div className="flex-1">
               <h2 className="text-5xl font-bold mb-6 tracking-tighter">Ship your agent with CometChat - <span className="text-blue-400">free for the first 500 teams</span></h2>
               <p className="text-gray-400 mb-6">We're opening CometChat's Full Stack Agent Platform - free for our first 500 customers during the initial rollout phase.</p>
             </div>
             {/* ... (Lead Form) */}
           </div>
        )}
    </div>
  );
}

function PricingCard({ title, price, billing, desc, features, popular = false }: any) {
  return (
    <div className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 ${popular ? 'bg-[#0F0F1A] border-blue-500/50 ring-1 ring-blue-500/20 shadow-[0_0_40px_rgba(147,51,234,0.1)]' : 'bg-[#0A0A0F] border-white/5 hover:border-white/10'}`}>
      {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold px-8 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-8 h-12">{desc}</p>
      <div className="mb-8">
        <div className="flex items-baseline gap-1 font-bold">
          <span className="text-4xl">${price}</span>
          {price !== "Custom" && <span className="text-gray-500 text-xs">/month</span>}
        </div>
        <p className="text-gray-500 text-xs mt-2 font-medium">{billing}</p>
      </div>
      <button className={`w-full py-3 rounded-xl font-bold text-sm mb-8 transition-all ${popular ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
        {price === "0" ? "Try for free" : price === "Custom" ? "Contact us" : "Start Free"}
      </button>
      <div className="mt-auto">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4">{title === "Advanced" ? "Everything in Basic, Plus" : title === "Enterprise" ? "Everything in Advanced, Plus" : title + " Plan Features"}</p>
        <ul className="space-y-3">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <Sparkles size={12} className="text-blue-500 shrink-0 mt-0.5" /> <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}