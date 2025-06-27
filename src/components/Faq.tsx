"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

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

      <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Everything you need to know about booking London&apos;s best wedding band direct - no agency fees!
        </p>
      </div>

      <Container className="!p-0">
        <div className="w-full space-y-4">
          {faqdata.map((item, index) => (
            <div key={item.question} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-opacity-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{getIcon(item.question)}</span>
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.question}
                        </span>
                      </div>
                      <ChevronDownIcon
                        className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-600 dark:text-indigo-400 transition-transform duration-200 flex-shrink-0 ml-4`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-5">
                      <div className="ml-14 text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Have a different question?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
          >
            <span>💬</span>
            Get in Touch
          </a>
        </div>
      </Container>
    </section>
    </>
  );
};

const faqdata = [
  {
    question: "Why should I book direct instead of using a wedding band agency?",
    answer: "Booking direct with The JB Experience saves you up to 30% compared to agency prices. Agencies typically charge 20-40% commission on top of our standard rates. By booking directly, you get the same professional wedding band service, better communication, and more flexibility with special requests - all at a lower cost. You're dealing directly with the musicians who will perform at your event."
  },
  {
    question: "What areas do you cover from your East London (E10) base?",
    answer: "We primarily serve a 40-mile radius from East London (E10 5ZD), covering all of London, Essex, Hertfordshire, Kent, and Surrey. This includes popular wedding venues in Chingford, Walthamstow, Enfield, Hertford, Watford, St. Albans, Chelmsford, and surrounding areas. Travel costs are calculated at £1 per mile, with additional congestion zone charges if applicable."
  },
  {
    question: "How much does it cost to hire The JB Experience for a wedding?",
    answer: "Our wedding band prices start from £499 for solo acoustic performance with live loop pedal, and £1,199 for our full three-piece band (vocals/guitar, bass, drums). These are direct booking prices with no agency fees. Additional costs include travel (£1 per mile from E10), and parking as required by your venue. London congestion zone charges may apply."
  },
  {
    question: "Can you learn our first dance song for our wedding?",
    answer: "Absolutely! Learning your first dance song is included in all our wedding packages at no extra cost. We work with you to ensure we deliver the perfect version of your special song. We're experienced with a wide range of genres and can adapt songs to suit our acoustic or full band setup."
  },
  {
    question: "Which London venues have you performed at?",
    answer: "We regularly perform at venues throughout London, Essex, and Hertfordshire including hotels, private estates, registry offices, and unique venues. Popular areas we cover include Chingford, Walthamstow, Enfield, Hertford, Watford, St. Albans, and Chelmsford. We're familiar with most venue requirements and setup procedures across the region."
  },
  {
    question: "Can I pick the songs you play from the set list?",
    answer: "Our set lists are crafted based on extensive experience and audience feedback to ensure a lively atmosphere where guests can dance and enjoy themselves. However, we’re more than happy to discuss specific song requests and tailor our performance to fit your event’s vibe."
  },
  {
    question: "Is all of the equipment (e.g. PA & lighting) included in your quote?",
    answer: "Yes, our quote includes a complete PA and lighting system. For optimal performance, we generally require a minimum space of 3m by 2m. We will ensure that everything is set up for a fantastic show!"
  },
  {
    question: "Can you learn song requests before the event?",
    answer: "If a song isn't on our set list, there's a good chance we might already know it. For any special requests that we don’t already know, we are happy to learn a new song for you for a small additional fee which covers rehearsal time and preparation."
  }
];
