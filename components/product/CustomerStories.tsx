"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Building2, CreditCard, ShoppingCart, Users } from "lucide-react";

const brands = [
  {
    name: "PANGEA",
    icon: Building2,
    desc: "Automating payments and compliance. Pangea AI uses ChatX to streamline workflows.",
  },
  {
    name: "randstad",
    icon: Users,
    desc: "Randstad uses ChatX to enhance internal communication with AI-powered assistance.",
  },
  {
    name: "Stripe",
    icon: CreditCard,
    desc: "Stripe improves developer productivity using ChatX across teams.",
  },
  {
    name: "Shopify",
    icon: ShoppingCart,
    desc: "Shopify leverages ChatX to scale customer support and operations.",
  },
];

export default function FeaturedStories() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="bg-gradient-to-b from-[#0b0c14] to-[#06070d] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl md:text-5xl lg:text-6xl font-medium text-gray-300">Featured
          <span className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-[#2009cb] via-[#C7BEF9] to-[#2009cb] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,210,244,0.35)]"> customer stories</span>
        </h2>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6 px-6">
            {brands.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-[66.666%] sm:w-[50%] md:w-[50%] lg:w-[40%]"
                >
                  <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
                    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-lg bg-white/10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-white">
                      {brand.name}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                      {brand.desc}
                    </p>
                    <button className="rounded-md border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black">
                      Read story
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
