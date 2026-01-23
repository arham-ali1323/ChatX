"use client";

import { useState, useEffect } from 'react';

export default function RealtimeCommunicationHero() {
  const [activeMessage, setActiveMessage] = useState(0);

  const messages = [
    { sender: "Innovative Online Shopping", text: "Awesome! Can I see a couple of pictures?", time: "4:53 pm", type: "received" },
    { sender: "You", text: "Sure! Sending them over now", time: "4:54 pm", type: "sent" },
    { sender: "Tessa", text: "Thanks! Looks good", time: "4:55 pm", type: "received" },
    { sender: "You", text: "And yes - just send your address, and I'll ship it out.", time: "4:56 pm", type: "sent" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-white text-sm font-medium px-4 py-2 border border-gray-700 rounded-full">
                Real Time User Communication
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Connect your users,<br />
              with <span className="text-blue-400">in-app messaging</span> and calling, effortlessly
            </h1>

            {/* Description */}
            <div className="space-y-4 text-gray-400 text-lg">
              <p>
                <strong className="text-gray-300">Production-ready, user-to-user in-app messaging and calls for any stack.</strong>
              </p>
              <p>
                Toggle features, customize to fit, and ship. Whether you're using no-code or building from scratch. Compliant with major global regulations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
                Schedule a demo
              </button>
              <button className="bg-transparent hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all">
                Start for free
              </button>
            </div>
          </div>

          {/* Right Visual - Chat & Call Interface */}
          <div className="relative">
            {/* Chat Interface */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 mb-6 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Innovative Online Shopping</div>
                  <div className="text-gray-500 text-xs">by Laura Doe</div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mb-6">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-500 ${
                      idx <= activeMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {msg.type === 'received' ? (
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tl-none max-w-xs">
                            {msg.text}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <div>
                          <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-xs">
                            {msg.text}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Reactions */}
                <div className="flex gap-2 pl-10">
                  <div className="bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1">
                    <span>👍</span>
                    <span className="text-xs text-gray-400">2</span>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="bg-gray-800 rounded-xl p-3 flex items-center gap-2">
                <button className="text-gray-500 hover:text-gray-300">😊</button>
                <button className="text-gray-500 hover:text-gray-300">😎</button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none"
                />
                <button className="text-gray-500 hover:text-gray-300">📎</button>
                <button className="bg-white w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900">→</span>
                </button>
              </div>

              {/* Compliance Badges */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-800">
                {['SOC 2', 'GDPR', 'HIPAA', 'ISO'].map((badge) => (
                  <div key={badge} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Call Interface */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 shadow-2xl">
              {/* Video Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
                    alt="Tessa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Tessa
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                    alt="John Paul"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    John Paul
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
              </div>

              {/* Call Info */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div>
                  <div className="text-white font-semibold">Mary Jane (You)</div>
                  <div className="text-gray-500 text-xs">9:40 AM | Dallas Awareness</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center">
                    <span className="text-xs text-green-500">📊</span>
                  </div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex items-center justify-center gap-3">
                <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition">
                  <span className="text-gray-300">🎥</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition">
                  <span className="text-gray-300">🔇</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition">
                  <span className="text-gray-300">🎤</span>
                </button>
                <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition">
                  <span className="text-gray-300">•••</span>
                </button>
                <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center transition">
                  <span className="text-white">📞</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}