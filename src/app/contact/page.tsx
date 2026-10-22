"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactSection from "@/components/homepage/ContactSection";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import PageTitleFlip from "@/components/common/PageTitleFlip";

const teamMembers = [
  {
    name: "Michael Scott",
    image: "/65be18faa9d744382c0b3e4f_Team 4.jpg",
  },
  {
    name: "Ryan Howard",
    image: "/65be18faf2a284760a51a316_Team 2.jpg",
  },
  {
    name: "Pam Halpert",
    image: "/65be18fba4270c124171b8d9_Team 3.jpg",
  },
];

const faqs = [
  {
    q: "How much can I customise Webflow template?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
  {
    q: "Do you offer discounts?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
  {
    q: "Why Impact Studio is a great template?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
  {
    q: "What value Impact Studio brings?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
  {
    q: "Who is Wavesdesign?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
  {
    q: "Why Wavesdesign templates are the best?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
  },
];

export default function ContactPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="page-wrapper">
      {/* 1. Hero Contact */}
      <section className="section hero-contact">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-left">
            <PageTitleFlip title="Get in touch" />
          </div>
        </div>
      </section>

      {/* 2. Contact Section */}
      <ContactSection />

      {/* 3. Meet the Team Section */}
      <section className="section paddings-0">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="heading-left mg-bottom-80 center-landscape">
            <h2 className="no-margins">Meet the team</h2>
          </div>
          <div className="w-layout-grid grid-team-thirds">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="tile-team">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={870}
                  height={1000}
                  className="image-team"
                />
                <h3 className="no-margins">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid grid-faq-halves">
            <div className="left-faq-halves">
              <h2 className="no-margins">Questions we get</h2>
            </div>
            <div className="right-faq-halves">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqs.includes(idx);
                return (
                  <div
                    key={idx}
                    className="expandable-single-faq"
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="expandable-top">
                      <div className="heading-expandable">{faq.q}</div>
                      <div className="plus-expand-master">
                        <div className="plus-line" />
                        <div
                          className="plus-line vertical"
                          style={{
                            opacity: isOpen ? 0 : 1,
                            transform: isOpen
                              ? "rotate(0deg) scale(0)"
                              : "rotate(-90deg) scale(1)",
                            transition:
                              "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="expandable-bottom"
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        overflow: "hidden",
                        paddingTop: isOpen ? "16px" : "0px",
                        transition:
                          "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding-top 0.35s ease",
                      }}
                    >
                      <p className="faq-paragraph">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
