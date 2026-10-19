"use client";

import { useState } from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$10k - $25k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Contact Hero */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] pt-24 pb-16 px-6">
        <div className="main-container">
          <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
            Get in touch
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[115px] font-medium uppercase leading-[0.95] tracking-tight">
            LET’S WORK TOGETHER
          </h1>
          <p className="mt-8 text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-normal opacity-90 max-w-[850px]">
            Have a project in mind or want to discuss collaboration? Fill out the details below and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Direct Details Grid */}
      <section className="section pb-32 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-[#FFF0E3] p-8 sm:p-12 md:p-16 rounded-3xl border border-[#FF3128]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#FF3128] text-[#FFF8EB] flex items-center justify-center text-4xl">
                    ✓
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight">
                    Thank You!
                  </h3>
                  <p className="text-xl opacity-90 max-w-[450px]">
                    We’ve received your message and will reach out to schedule our discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm uppercase tracking-wider font-semibold opacity-70">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#FF3128] py-3 text-xl md:text-2xl outline-none focus:border-[#FF4138] placeholder-[#FF3128]/40"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-sm uppercase tracking-wider font-semibold opacity-70">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#FF3128] py-3 text-xl md:text-2xl outline-none focus:border-[#FF4138] placeholder-[#FF3128]/40"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-sm uppercase tracking-wider font-semibold opacity-70">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#FF3128] py-3 text-xl md:text-2xl outline-none cursor-pointer"
                    >
                      <option value="$10k - $25k">$10,000 – $25,000</option>
                      <option value="$25k - $50k">$25,000 – $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-sm uppercase tracking-wider font-semibold opacity-70">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Goals, timeline, required deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-[#FF3128] py-3 text-xl md:text-2xl outline-none focus:border-[#FF4138] placeholder-[#FF3128]/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-[#FF3128] text-[#FFF8EB] rounded-full text-xl font-medium uppercase tracking-wider hover:bg-[#FF4138] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Direct Channels */}
            <div className="lg:col-span-5 flex flex-col space-y-12 lg:pl-6">
              <div>
                <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">Direct Contact</span>
                <a href="mailto:hi@impact.com" className="text-3xl md:text-4xl font-medium hover:underline block mb-2">
                  hi@impact.com
                </a>
                <span className="text-xl opacity-80 block">+1 (555) 019-2834</span>
              </div>

              <div>
                <span className="text-sm uppercase tracking-widest opacity-60 block mb-2">Location</span>
                <p className="text-xl md:text-2xl font-medium leading-[1.4]">
                  Impact Studio HQ<br />
                  172 Franklin St, Greenpoint<br />
                  Brooklyn, NY 11222
                </p>
              </div>

              <div>
                <span className="text-sm uppercase tracking-widest opacity-60 block mb-3">Socials</span>
                <div className="flex flex-col space-y-2 text-xl font-medium">
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter / X ↗</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn ↗</a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
