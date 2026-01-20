export default function ChatXFooter() {
  const footerLinks = {
    products: {
      title: "Products",
      links: [
        "Real-time Chat",
        "Voice & Video Calls",
        "AI Chat Platform"
      ]
    },
    platformFeatures: {
      title: "Platform Features",
      links: [
        "Content Moderation",
        "Smart Notifications",
        "Chat Analytics",
        "Team Workspaces",
        "API Integration",
        "Widget Builder",
        "UI Kit Builder",
        "UI Components",
        "Developer SDKs"
      ]
    },
    solutions: {
      title: "Solutions",
      links: [
        "Use Cases",
        "Live Chat",
        "Team Collaboration",
        "Healthcare Chat",
        "Community Platforms",
        "Dating Apps",
        "ChatX vs Competitors",
        "Alternative to SendBird",
        "Alternative to Stream",
        "Compare Chat SDKs"
      ]
    },
    developers: {
      title: "Developers",
      links: [
        "Documentation",
        "Sample Apps",
        "API Reference",
        "Product Updates",
        "Feature Requests",
        "System Status",
        "Developer Support"
      ]
    },
    build: {
      title: "Build",
      links: [
        "React Chat SDK",
        "React Native Chat",
        "Flutter Chat SDK",
        "Next.js Chat",
        "Expo Chat"
      ]
    },
    resources: {
      title: "Resources",
      links: [
        "Blog",
        "Tutorials",
        "Chat Templates",
        "Chat UI Kits",
        "React Chat UI",
        "Flutter Chat UI",
        "Android Chat UI",
        "React Native Chat UI",
        "iOS Chat UI"
      ]
    },
    company: {
      title: "Company",
      links: [
        "Careers",
        "Partners",
        "Pricing",
        "Implementation",
        "Contact Sales",
        "Legal",
        "Terms of Service",
        "Privacy Policy",
        "Security",
        "Data Processing",
        "Bug Bounty"
      ]
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight">ChatX</h2>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          {/* Products */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.products.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.platformFeatures.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.platformFeatures.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.solutions.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers & Build */}
          <div>
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.developers.title}</h3>
              <ul className="space-y-2.5">
                {footerLinks.developers.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.build.title}</h3>
              <ul className="space-y-2.5">
                {footerLinks.build.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.resources.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold mb-4 text-purple-400">{footerLinks.company.title}</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            2025 © ChatX
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
              aria-label="Community"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.128 20 14.991 20 10c0-5.523-4.477-10-10-10z"/>
              </svg>
              Community
            </a>

            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
              </svg>
              LinkedIn
            </a>

            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19.615 3.184c-.23-.863-.905-1.538-1.768-1.768C16.272.984 10 .984 10 .984s-6.272 0-7.847.432c-.863.23-1.538.905-1.768 1.768C0 4.759 0 8.159 0 8.159s0 3.4.385 4.975c.23.863.905 1.538 1.768 1.768 1.575.432 7.847.432 7.847.432s6.272 0 7.847-.432c.863-.23 1.538-.905 1.768-1.768.385-1.575.385-4.975.385-4.975s0-3.4-.385-4.975zM7.961 11.105V5.213l5.247 2.946-5.247 2.946z"/>
              </svg>
              YouTube
            </a>

            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>

            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}