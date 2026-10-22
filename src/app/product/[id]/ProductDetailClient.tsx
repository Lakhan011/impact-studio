"use client";

import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

const products: Record<
  string,
  { name: string; price: string; description: string }
> = {
  "landing-page": {
    name: "Landing page",
    price: "$ 3,000.00 USD",
    description:
      "Iconic Impact Studio onepager made on Webflow with custom animations and design.",
  },
  website: {
    name: "Website",
    price: "$ 5,000.00 USD",
    description:
      "Iconic Impact Studio website made on Webflow with custom animations and design.",
  },
  "webflow-web-app": {
    name: "Webflow Web App",
    price: "$ 10,000.00 USD",
    description:
      "Iconic Impact Studio web app made on Webflow with custom animations and design.",
  },
};

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

export default function ProductDetailClient({ id }: { id?: string }) {
  const product =
    (id && products[id]) ? products[id] : products["landing-page"];

  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <main className="page-wrapper">
      {/* 1. Hero Product */}
      <section className="section hero-product">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-product">
            <div className="subtitle">{product.price}</div>
            <h1 className="no-margins">{product.name}</h1>
            <div className="limit-subtitle-product">
              <div className="subtitle">{product.description}</div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-commerce-commerceaddtocartbutton cta cursor-pointer"
              >
                {added ? "Added to cart ✓" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Questions We Get Section */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid grid-faq-halves">
            <div className="left-faq-halves">
              <h2 className="no-margins">Questions we get</h2>
            </div>
            <div className="right-faq-halves">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="expandable-single-faq"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: isOpen
                        ? "rgba(255, 46, 46, 0.04)"
                        : "transparent",
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <div className="expandable-top">
                      <div className="heading-expandable">{faq.q}</div>
                      <div className="plus-expand-master">
                        <div className="plus-line" />
                        <div
                          className="plus-line vertical"
                          style={{
                            transform: isOpen
                              ? "rotate(0deg) scale(0)"
                              : "rotate(-90deg) scale(1)",
                            transition:
                              "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="expandable-bottom"
                      style={{
                        maxHeight: isOpen ? "240px" : "0px",
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

      {/* 3. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
