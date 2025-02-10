"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (

        <Container className="!p-0">
          <div className="w-full p-2 rounded-2xl">
            {faqdata.map((item) => (
              <div key={item.question} className="mb-5">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                        <span>{item.question}</span>
                        <ChevronUpIcon
                          className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                        {item.answer}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </Container>
      

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
