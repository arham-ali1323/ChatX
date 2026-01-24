"use client";
import { SetStateAction, useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Do you offer HIPAA compliance?",
      answer: "Yes, we offer HIPAA compliance with our Advanced and Enterprise plans. Our platform includes Business Associate Agreement (BAA) support, encrypted data transmission and storage, audit logging, and comprehensive security controls to meet HIPAA requirements for healthcare applications."
    },
    {
      question: "Do you offer multi-tenancy?",
      answer: "Yes, multi-tenancy is available with our Advanced and Enterprise plans. This allows you to run multiple brands, communities, or customer sets on the same backend infrastructure while maintaining complete data isolation, separate configurations, and independent branding for each tenant."
    },
    {
      question: "What are Monthly Active Users?",
      answer: "Monthly Active Users (MAU) refers to the number of unique users who engage with your chat application within a calendar month. A user is counted as active when they send or receive at least one message, make a call, or perform any interactive action within your application during the billing period."
    },
    {
      question: "What are Peak Concurrent Connections?",
      answer: "Peak Concurrent Connections (PCC) represents the maximum number of users simultaneously connected to your chat service at any given moment during your billing period. This metric is important for understanding your real-time capacity needs and ensuring your plan can handle traffic spikes."
    },
    {
      question: "What happens if I exceed my plan's limits?",
      answer: "If you exceed your plan limits, we'll notify you in advance. For our Advanced and Enterprise plans, we offer flexible scaling without overages. We'll work with you to upgrade to a suitable plan that matches your growth. Your service will continue uninterrupted, and we'll help you find the right tier for your needs."
    },
    {
      question: "Can I use voice and video calling using real chat?",
      answer: "Yes, voice and video calling are available as add-ons to all paid plans. Our calling features include one-to-one and group calls, screen sharing, call recording, and high-quality audio/video streaming. The calling functionality is fully integrated with our chat platform for a seamless user experience."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a free Build plan that includes all core features with support for up to 100 users. This allows you to fully test and integrate CometChat into your application before upgrading to a paid plan. No credit card is required to start your free trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan. Our Basic plan includes email support with 24-hour response time. Advanced plans get priority support with faster response times and access to our knowledge base. Enterprise customers receive dedicated support with a designated customer success manager, phone support, and custom SLAs."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. For monthly plans, you'll have access until the end of your current billing period. For annual plans, you can cancel but fees are non-refundable. We recommend downgrading to our free Build plan if you want to maintain access while reducing costs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600 opacity-5 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Got questions? We've<br />got answers.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-gray-700 hover:border-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={`bg-gray-900 border rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen 
          ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
          : 'border-gray-800 hover:border-gray-700'
      }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-colors group"
      >
        <span className={`text-lg font-semibold pr-8 transition-colors ${
          isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
        }`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          isOpen 
            ? 'border-blue-500 bg-blue-500/10 rotate-180' 
            : 'border-gray-700 group-hover:border-gray-600'
        }`}>
          <svg
            className={`w-4 h-4 transition-colors ${
              isOpen ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <div className="h-px bg-gray-800 mb-6"></div>
          <p className="text-gray-400 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}