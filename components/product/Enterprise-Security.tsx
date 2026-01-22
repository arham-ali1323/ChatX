"use client";

export default function EnterpriseSecurity() {
  return (
    <section className="relative overflow-hidden bg-[#0B0C14] py-24">
      {/* Subtle grid / lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Lock Icon */}
        <div className="flex justify-center mb-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10">
            <svg
              className="h-10 w-10 text-indigo-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m-.75 0h10.5c.414 0 .75.336.75.75v7.5c0 .414-.336.75-.75.75H6.75a.75.75 0 01-.75-.75v-7.5c0-.414.336-.75.75-.75z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-indigo-400 mb-2">
            Enterprise-Grade Security
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Security and scale you can trust
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400">
            Global edge network, iron-clad security, and 99.999% uptime.
            Battle-tested infrastructure that scales to billions of users.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Edge Network */}
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-sm font-medium text-white mb-2">
              Edge network
            </h4>
            <p className="text-sm text-gray-400">
              Lightning-fast chat delivery through 45+ regions, minimizing
              latency for all users.
            </p>

            {/* Globe */}
            <div className="absolute right-6 bottom-6 h-20 w-20 rounded-full bg-indigo-500/10 blur-xl" />
          </div>

          {/* SLA */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">Uptime SLA</p>
            <p className="mt-2 text-3xl font-semibold text-white">
              99.999%
            </p>

            <div className="mt-6">
              <p className="text-sm text-gray-400">Scalability</p>
              <p className="mt-2 text-3xl font-semibold text-white">
                5B+ <span className="text-base font-normal">chats</span>
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-white mb-4">
              Enterprise security
            </p>

            <div className="grid grid-cols-2 gap-4">
              {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((item) => (
                <div
                  key={item}
                  className="flex h-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
