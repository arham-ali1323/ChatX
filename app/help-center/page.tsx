"use client";

import { Search } from "lucide-react";

export default function HelpCenter() {
  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-br from-indigo-950 to-blue-900 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How can we help you?
          </h1>
          <p className="text-gray-300 mb-8">
            Search articles, FAQs and guides to get started quickly.
          </p>

          <div className="flex max-w-xl mx-auto bg-white rounded-full p-1">
            <input
              placeholder="Search for your query"
              className="flex-1 px-5 py-3 text-gray-900 outline-none rounded-full"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* MAIN CARDS */}
        <Grid
          title="Popular help topics"
          items={[
            { title: "Product", desc: "All you need to know about ChatX features." },
            { title: "Quick setup & configuration", desc: "Guides to integrate chat quickly." },
            { title: "Billing & account", desc: "Manage plans, invoices and subscriptions." },
            { title: "FAQs", desc: "Find answers to common questions." },
          ]}
        />

        {/* ADDITIONAL */}
        <Grid
          title="Additional resources"
          items={[
            { title: "Daily office hours", desc: "Live help sessions with our team." },
            { title: "Documentation", desc: "Everything you need to build faster." },
            { title: "Sample apps", desc: "Pre-built examples for popular frameworks." },
          ]}
        />

        {/* PROMOTED */}
        <Grid
          title="Promoted articles"
          items={[
            { title: "How to Use the Usage Dashboard", desc: "Track metrics and usage insights." },
            { title: "How Does Chat History Work?", desc: "Understand message persistence." },
            { title: "Webhooks: Requests & Events", desc: "Listen and respond to events." },
          ]}
          cols={3}
        />

        {/* CTA */}
        <div className="bg-white border rounded-2xl p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get in touch
            </h3>
            <p className="text-gray-600 max-w-md">
              Didn’t find what you were looking for? Our team is here to help.
            </p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
            Contact support
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- */

function Grid({
  title,
  items,
  cols = 4,
}: {
  title: string;
  items: { title: string; desc: string }[];
  cols?: number;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {title}
      </h2>

      <div
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Search size={18} />
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
