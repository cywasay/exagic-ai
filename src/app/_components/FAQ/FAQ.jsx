"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What separates EXAGIC AI from traditional SEO companies?",
      answer:
        'We lead the industry through the application of mechanistic interpretability. We don\'t just optimize for "clicks"; we steer how AI models retrieve and cite your specific brand data.',
    },
    {
      question: "Why do manufacturers in the SF Bay Area need SRO?",
      answer:
        "Industrial buyers now use AI agents to source parts. SRO ensures that when an agent searches for a supplier in Fremont or San Leandro, your business is the one it trusts and selects.",
    },
    {
      question: "Do you offer ranking guarantees?",
      answer:
        "We focus on visibility and citation share. We do not offer arbitrary ranking guarantees, as AI model outputs are probabilistic; however, we optimize the data to maximize the probability of selection.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="rag-section border-t border-zinc-100 bg-zinc-50"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 min-h-[450px]">
        <h2
          id="faq-heading"
          className="text-4xl font-semibold text-zinc-900 text-center"
        >
          FAQs
        </h2>

        <dl className="mt-16 space-y-0 w-full">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item group"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left font-medium text-zinc-900 hover:text-brand transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span itemProp="name">{faq.question}</span>
                  <svg
                    className={`ml-4 h-5 w-5 shrink-0 text-zinc-400 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "pb-6" : "max-h-0"}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                hidden={openIndex !== index}
              >
                <div
                  className="text-sm text-zinc-500 leading-relaxed"
                  itemProp="text"
                >
                  {faq.answer}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
