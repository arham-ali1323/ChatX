"use client";
import { useState } from "react";
import { 
  Sparkles, 
  Check, 
  Phone, 
  MessageSquare, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import PricingPlan from "@/components/pricing/Pricing-Plan";
import FAQAccordion from "@/components/pricing/FAQ-Accordion"
import StunningHeroSection from "@/components/home/stunning-hero-section";
import ClientMarquee from "@/components/home/ClientMarquee";
import ComplianceSection from "@/components/pricing/ComplianceSection";
interface Plan {
  id: string;
  name: string;
  description: string;
  price: string | number;
  billingText?: string;
  cta: string;
  ctaVariant: "primary" | "secondary" | "outline";
  features: string[];
  popular?: boolean;
  featureTitle?: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedTab, setSelectedTab] = useState<"chat" | "calls" | "ai">("chat");

  // --- DATA FROM SCREENSHOTS ---
  const chatPlans: Plan[] = [
    {
      id: "build",
      name: "Build",
      description: "A full featured, free plan for testing and integrating ChatX.",
      price: 0,
      billingText: "Free for development",
      cta: "Try for free",
      ctaVariant: "outline",
      featureTitle: "Build Plan Features",
      features: ["All features", "Up to 100 users", "No credit card required"],
    },
    {
      id: "basic",
      name: "Basic", 
      description: "All the essentials needed for a feature-rich real-time chat experience.",
      price: billingCycle === "yearly" ? 239 : 299,
      billingText: `Billed ${billingCycle}ly`,
      cta: "Start Free",
      ctaVariant: "primary",
      featureTitle: "Basic Plan Features",
      features: ["Rich in-app chat", "Push notifications", "Basic moderation", "Global EDGE network"],
    },
    {
      id: "advanced",
      name: "Advanced",
      description: "An advanced communication suite with built-in multi-channel notifications, AI moderation and insights.",
      price: billingCycle === "yearly" ? 339 : 429,
      billingText: `Billed ${billingCycle}ly`,
      cta: "Start Free",
      ctaVariant: "primary",
      popular: true,
      featureTitle: "Everything in Basic, Plus",
      features: ["AI Rule-based moderation", "Email & SMS notifications", "Multi-tenancy", "AI smart replies & summaries", "In-depth insights", "HIPAA / BAA", "Advanced search", "Message translation"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Access to state-of-the-art features plus higher concurrency, zero overages and top-tier support.",
      price: "Custom",
      billingText: "Enterprise pricing starts from 10k MAU",
      cta: "Contact us",
      ctaVariant: "secondary",
      featureTitle: "Everything in Advanced, Plus",
      features: ["Zero overages", "OpenAI-powered context & prompt based moderation", "OpenAI-powered context & prompt based insights & enrichment"],
    },
  ];

  const callPricing = [
    { title: "Build", desc: "A sandbox plan for you to create an MVP and test out ChatX for free.", highlight: "10K voice and video minutes available to test", cta: "Try for free" },
    { title: "Pay-as-you-go", desc: "Seamlessly add voice and video capabilities to your app and pay for usage.", prices: [{ val: "$0.001", unit: "/user minute", label: "Voice calling/ conferencing" }, { val: "$0.003", unit: "/user minute", label: "Video calling/ conferencing" }, { val: "$0.006", unit: "/minute", label: "Voice and video call recording" }], cta: "Get started" },
    { title: "Custom Pricing", desc: "Custom plans for businesses anticipating higher voice and video usage.", highlights: ["Multi-Tenancy", "Shared or dedicated cloud deployment", "Conversational AI, Insights AI and Moderation AI", "Vertical based pricing"], cta: "Contact us" }
  ];

  return (
    <>
    <div className="min-h-screen text-white font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Simple, Transparent, Predictable</h1>
          <p className="text-gray-400 text-lg">Know exactly what you'll pay - and why.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-[#111116] border border-white/10 rounded-2xl">
            {[
              { id: 'chat', label: 'Chat & Messaging', icon: <MessageSquare size={16}/> },
              { id: 'calls', label: 'Voice & Video Calling', icon: <Phone size={16}/> },
              { id: 'ai', label: 'AI Agent', icon: <Sparkles size={16}/> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedTab === tab.id ? "bg-blue-600 shadow-[0_0_20px_rgba(147,51,234,0.3)] text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CHAT VIEW */}
        {selectedTab === 'chat' && (
          <div className="animate-in fade-in duration-500">
            {/* User Slider & Toggle */}
            <div className="flex justify-center mb-16">
              <div className="flex bg-[#111116] p-1 rounded-xl border border-white/10">
                <button onClick={() => setBillingCycle("monthly")} className={`px-4 py-2 rounded-lg text-sm transition-all ${billingCycle === 'monthly' ? 'bg-[#1a1a24] text-white shadow-sm' : 'text-gray-500'}`}>Pay Monthly</button>
                <button onClick={() => setBillingCycle("yearly")} className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-500'}`}>
                  Pay Yearly <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded uppercase font-bold">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chatPlans.map((plan) => (
                <div key={plan.id} className={`relative group flex flex-col p-8 rounded-[2rem] border transition-all duration-300 ${plan.popular ? 'bg-[#0F0F1A] border-blue-500/50 ring-1 ring-blue-500/20' : 'bg-[#0A0A0F] border-white/5 hover:border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-8 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-8 h-12">{plan.description}</p>
                  
                  <div className="mb-8">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-500 text-sm">/month</span>
                      </div>
                    ) : <span className="text-xl font-bold text-gray-200">{plan.billingText}</span>}
                    {typeof plan.price === 'number' && <p className="text-gray-500 text-xs mt-2">{plan.billingText}</p>}
                  </div>

                  <button className={`w-full py-3 rounded-xl font-bold text-sm mb-8 transition-all ${plan.ctaVariant === 'primary' ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20' : plan.ctaVariant === 'secondary' ? 'bg-indigo-600 hover:bg-indigo-500' : 'border border-white/10 hover:bg-white/5'}`}>{plan.cta}</button>
                  
                  <div className="mt-auto">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{plan.featureTitle}</p>
                    <ul className="space-y-3">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-tight">
                          <Sparkles size={12} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CALLS VIEW */}
        {selectedTab === 'calls' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
            {callPricing.map((card, i) => (
              <div key={i} className="bg-[#0A0A0F] border border-white/5 p-10 rounded-[2.5rem]">
                <h3 className="text-4xl font-bold mb-6">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-12">{card.desc}</p>
                
                {card.highlight && (
                  <div className="mb-12">
                    <p className="text-gray-400 text-xs font-bold uppercase mb-4 tracking-widest">Highlights</p>
                    <div className="flex gap-2 text-sm text-gray-300">
                      <Sparkles size={16} className="text-blue-500 shrink-0" /> {card.highlight}
                    </div>
                  </div>
                )}

                {card.prices && (
                   <div className="space-y-6 mb-12">
                     {card.prices.map((p, idx) => (
                       <div key={idx}>
                         <div className="flex items-baseline gap-1 font-bold">
                           <span className="text-3xl">{p.val}</span>
                           <span className="text-gray-500 text-xs">{p.unit}</span>
                         </div>
                         <p className="text-gray-500 text-xs">{p.label}</p>
                       </div>
                     ))}
                   </div>
                )}

                {card.highlights && (
                  <div className="mb-12">
                    <p className="text-gray-400 text-xs font-bold uppercase mb-4 tracking-widest">Highlights</p>
                    <ul className="space-y-3">
                      {card.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Sparkles size={14} className="text-blue-500 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className={`w-full py-4 rounded-xl font-bold ${i === 1 ? 'bg-blue-600' : 'bg-white/5 border border-white/10'}`}>{card.cta}</button>
              </div>
            ))}
          </div>
        )}

        {/* AI AGENT VIEW */}
        {selectedTab === 'ai' && (
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#0A0A0F] p-12 rounded-[3rem] border border-white/5 animate-in zoom-in-95 duration-500">
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-6">Ship your agent with ChatX - <span className="text-blue-400">free for the first 500 teams</span></h2>
              <p className="text-gray-400 mb-6">We're opening ChatX's Full Stack Agent Platform - free for our first 500 customers during the initial rollout phase.</p>
              <p className="text-gray-400">We'll build and host your agent, give full platform access (UI, moderation, notifications, insights), and get you live fast.</p>
            </div>
            <div className="w-full max-w-md bg-[#111116] p-8 rounded-[2rem] border border-white/10">
               <h3 className="text-xl font-bold mb-6">This is where your agent starts - let's talk!</h3>
               <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="bg-transparent border border-white/10 p-3 rounded-lg text-sm" placeholder="First name*" />
                    <input className="bg-transparent border border-white/10 p-3 rounded-lg text-sm" placeholder="Last name" />
                  </div>
                  <input className="w-full bg-transparent border border-white/10 p-3 rounded-lg text-sm" placeholder="Business email*" />
                  <input className="w-full bg-transparent border border-white/10 p-3 rounded-lg text-sm" placeholder="Company/Organization" />
                  <div>
                    <p className="text-[10px] text-gray-500 mb-2 uppercase font-bold">Where will your agent live?*</p>
                    <select className="w-full bg-transparent border border-white/10 p-3 rounded-lg text-sm appearance-none">
                      <option>Please Select</option>
                    </select>
                  </div>
                  <textarea className="w-full h-24 bg-transparent border border-white/10 p-3 rounded-lg text-sm resize-none" placeholder="What do you want your agent to do?" />
                  <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all">Submit Request</button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <ClientMarquee/>
    <ComplianceSection/>
    <PricingPlan/>
    <FAQAccordion/>
    <StunningHeroSection/> 
    </>
  );
}