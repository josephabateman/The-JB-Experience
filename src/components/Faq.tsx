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
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Common questions about booking and performances
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
  );
};

const faqdata = [
  {
    question: "Will the singer be the same as who I see in the videos?",
    answer: "Yes! Joe will always be the lead singer at your event, ensuring you get the experience shown in our videos. In the rare case a band member is unavailable, we have pre-auditioned substitute musicians (deps) ready to step in. As a professional band, our reputation is paramount, and you can trust that all our musicians are of the highest caliber."
  },
  {
    question: "Do you have different line-up options?",
    answer: "Yes! Our standard lineup features Joe as the lead vocalist and guitarist, accompanied by bass and drums, creating a versatile sound for various events. Additionally, Joe is available as a stand-alone option. Inquire for details."
  },
  {
    question: "What if my timings change after I've booked you?",
    answer: "We understand that event schedules can change, and we do our best to accommodate these adjustments. If your timings shift slightly as your event approaches, please let us know, and we will work together to ensure everything runs smoothly."
  },
  {
    question: "Can you provide an iPod/DJ service before and between your sets?",
    answer: "Yes, at a small additional cost. It includes a Spotify playlist that we can create for you, or you can provide your own. We often receive requests for this service and are happy to assist!"
  },
  {
    question: "How much time do you need to set up?",
    answer: "We typically require 1 hour to set up before performance time. Once our PA system is ready, we can start playing a playlist to help create the perfect atmosphere and get your guests excited for our live performance!"
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
