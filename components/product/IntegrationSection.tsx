import React from 'react';
import { Hexagon, Sparkles, Box, Layout } from 'lucide-react';

const IntegrationSection = () => {
  const integrationMethods = [
    {
      title: "Widget Builder",
      description: "Customize entirely and toggle chat functions as needed",
      features: [
        "Customize entirely and toggle chat functions as needed",
        "Integrate with a single line of code",
        "Deploy and launch your in-app chat"
      ],
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      additionalText: "Widget Builder allows full flexibility to customize chat experience to your exact needs.",
      isFeatured: true,
    },
    {
      title: "UI Kit Builder",
      description: "The low code option to build in-app chat without the hassle",
      icon: <Hexagon className="w-5 h-5 text-gray-400" />,
      additionalText: "Use UI Kit Builder to speed up development with ready-made components.",
      isFeatured: false,
    },
    {
      title: "Chat UI Kits",
      description: "Pre-built UI components with modern and pixel perfect design that is completely customizable.",
      icon: <Sparkles className="w-5 h-5 text-gray-400" />,
      additionalText: "Chat UI Kits give you a polished look instantly without coding everything from scratch.",
      isFeatured: false,
    },
    {
      title: "Chat SDKs",
      description: "Open source SDKs and APIs for all popular frameworks to build bespoke chat experiences.",
      icon: <Box className="w-5 h-5 text-gray-400" />,
      additionalText: "Integrate Chat SDKs for full control over backend and front-end chat experience.",
      isFeatured: false,
    },
  ];

  return (
    <section className="bg-[#050509] text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-purple-500 font-medium mb-4">Integrating In-App Chat</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Integrate real-time messaging that <br /> grows with your needs
          </h2>
          <p className="text-gray-400 text-lg">
            Start with any integration method and scale to others as your needs evolve
          </p>
        </div>

        {/* Integration Grid with Connector Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Horizontal Connector Line (Visible on Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[1px] bg-gray-800 z-0" />

          {integrationMethods.map((method, index) => (
            <div key={index} className="relative z-10 flex flex-col group">
              {/* Node/Icon container */}
              <div className="flex items-center mb-8">
                {/* Connection Dot */}
                <div className="absolute top-[37px] -left-1 w-2 h-2 rounded-full bg-gray-700 border border-gray-900" />

                <div className="p-3 rounded-lg border bg-[#111116] border-gray-800 z-10">
                  {method.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className={`flex-1 rounded-xl p-6 transition-all duration-300 relative bg-transparent border border-gray-800 hover:border-purple-500/30 hover:bg-purple-900/10`}>
                <h4 className="text-xl font-bold mb-4">{method.title}</h4>
                
                {method.isFeatured ? (
                  <ul className="space-y-3 mb-4">
                    {method.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {method.description}
                  </p>
                )}

                {/* Additional Text on Hover */}
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {method.additionalText}
                </p>

                <a href="#" className="text-purple-500 text-sm font-semibold hover:text-purple-400 transition-colors mt-4 inline-block">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
