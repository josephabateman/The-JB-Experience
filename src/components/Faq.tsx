"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { PRICING } from "../config/pricing";

export const Faq = () => {
  const getIcon = (question: string) => {
    if (question.includes("singer") || question.includes("videos")) return "🎤";
    if (question.includes("line-up") || question.includes("different")) return "🎸";
    if (question.includes("timings") || question.includes("change")) return "⏰";
    if (question.includes("iPod") || question.includes("DJ")) return "🎵";
    if (question.includes("set up") || question.includes("time")) return "⚡";
    if (question.includes("songs") || question.includes("set list")) return "📋";
    if (question.includes("equipment") || question.includes("PA")) return "🔊";
    if (question.includes("learn") || question.includes("requests")) return "💡";
    return "❓";
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqdata.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      <section className="section">
      <div className="text-center mb-10">
        <p className="eyebrow mb-3">Good to know</p>
        <h2 className="text-3xl font-bold text-ink-900 dark:text-white mb-4 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Everything you need to know about booking direct — no agency fees.
        </p>
      </div>

      <Container className="!p-0">
        <div className="w-full space-y-2">
          {faqdata.map((item, index) => (
            <div key={item.question} className="bg-white dark:bg-ink-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-neutral-50 dark:hover:bg-ink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-opacity-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">{getIcon(item.question)}</span>
                        </div>
                        <span className="text-base font-semibold text-ink-900 dark:text-white">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDownIcon
                        className={`${open ? "transform rotate-180" : ""} w-4 h-4 text-gold-600 dark:text-gold-400 transition-transform duration-200 flex-shrink-0 ml-3`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-5 pb-4">
                      <div className="ml-11 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                        {item.answer}
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Have a different question?
          </p>
          <a href="#booking-form" className="btn-gold">
            Get in touch
          </a>
        </div>
      </Container>
    </section>
    </>
  );
};

const faqdata = [
  {
    question: "Why book direct vs agency?",
    answer: "Save up to 30% by booking directly with The JB Experience. Agencies add 20-40% commission on top of our rates. Direct booking means better communication, more flexibility with requests, and lower costs."
  },
  {
    question: "Coverage areas from East London base?",
    answer: `Based in East London, serving London and surrounding areas including Essex and Hertfordshire. Extended travel available for premium events. Travel costs calculated at £${PRICING.baseTravelCostPerMile} per mile from our E10 base.`
  },
  {
    question: "Cost for hiring?",
    answer: `Wedding band prices: £${PRICING.soloPrice} (solo with loop pedal), £${PRICING.duoPrice.toLocaleString()} (duo), £${PRICING.trioPrice.toLocaleString()} (full band). Corporate events are custom quoted. These are direct booking prices with no agency fees. Travel and venue requirements may apply.`
  },
  {
    question: "Can you learn first dance/special songs?",
    answer: "Yes! Learning your first dance song is included at no extra cost for weddings. We can adapt songs for acoustic or full band setups. Special requests outside our setlist incur a small rehearsal fee."
  },
  {
    question: "Equipment included in quote?",
    answer: "Complete PA and lighting system included. We need minimum 3m x 2m space for setup. All professional equipment is provided for a fantastic performance at your event."
  }
];
