"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per project",
      desc: "Ideal for early-stage startups needing a high-impact landing page to launch fast.",
      features: [
        "High-converting 1-page landing page",
        "Mobile & responsive design",
        "Custom subtle animations",
        "Webflow setup & SEO basics",
        "2 weeks delivery time",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$5,000",
      period: "per project",
      desc: "Our most popular package for scaling companies looking for a full website overhaul.",
      features: [
        "Up to 8 custom designed pages",
        "CMS architecture (Blog & Projects)",
        "Advanced scroll interactions",
        "Full technical SEO setup",
        "4 weeks delivery time",
        "2 rounds of revisions",
      ],
      highlighted: true,
    },
    {
      name: "Dedicated Studio",
      price: "$8,500",
      period: "per month",
      desc: "Your external design & Webflow team on tap. Pause or cancel anytime.",
      features: [
        "Unlimited design & build requests",
        "1 active request at a time",
        "Average 48h turnaround",
        "Direct Slack communication",
        "Weekly strategic syncs",
      ],
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: "How fast can you launch our project?",
      a: "Typical Starter landing pages take 10 to 14 business days. Full multi-page sites in the Growth tier are typically completed within 3 to 5 weeks.",
    },
    {
      q: "Can we work with our existing Figma designs?",
      a: "Absolutely. If you already have completed Figma files, our engineering team can translate them into pixel-perfect, responsive Webflow code immediately.",
    },
    {
      q: "Are there long-term commitments for the monthly plan?",
      a: "No long-term contracts. The Dedicated Studio plan operates on a flexible month-to-month basis that you can pause or cancel at any moment.",
    },
    {
      q: "Do you assist with hosting and domain configuration?",
      a: "Yes, we handle custom domain connection, SSL certificates, Webflow hosting setup, and post-launch verification tests.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Pricing Hero */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] pt-24 pb-16 px-6">
        <div className="main-container text-center max-w-[900px] mx-auto">
          <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
            Transparent Investment
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[95px] lg:text-[110px] font-medium uppercase leading-[0.95] tracking-tight">
            SIMPLE PRICING
          </h1>
          <p className="mt-8 text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-normal opacity-90">
            Transparent, fixed investment models designed for momentum and measurable impact.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section pb-32 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between p-8 sm:p-10 md:p-12 rounded-3xl border-2 border-[#FF3128] transition-transform duration-300 ${
                  tier.highlighted
                    ? "bg-[#FF3128] text-[#FFF8EB] md:-translate-y-4 shadow-xl"
                    : "bg-[#FFF0E3] text-[#FF3128]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-medium uppercase tracking-tight">
                      {tier.name}
                    </h3>
                    {tier.highlighted && (
                      <span className="px-3 py-1 bg-[#FFF8EB] text-[#FF3128] rounded-full text-xs font-semibold uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-5xl md:text-6xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-lg opacity-80">{tier.period}</span>
                  </div>

                  <p className="text-lg opacity-90 leading-[1.4] mb-8 pb-8 border-b border-current/20">
                    {tier.desc}
                  </p>

                  <ul className="space-y-4 text-base md:text-lg mb-10">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3">
                        <span className="mt-0.5">✳</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-full text-center text-lg font-medium uppercase tracking-wider transition-all hover:scale-105 active:scale-95 ${
                    tier.highlighted
                      ? "bg-[#FFF8EB] text-[#FF3128] hover:bg-[#FFF8EB]/90"
                      : "bg-[#FF3128] text-[#FFF8EB] hover:bg-[#FF4138]"
                  }`}
                >
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] py-24 px-6 border-t border-[#FF3128]/20">
        <div className="main-container max-w-[900px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-center mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="flex flex-col divide-y-2 divide-[#FF3128]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight pr-4">
                    {faq.q}
                  </h3>
                  <span className="text-3xl font-light transform transition-transform duration-200">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {openFaq === idx && (
                  <p className="mt-4 text-lg md:text-xl opacity-90 leading-[1.5]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
