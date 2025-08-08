"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const navigation = [
    { name: "About", link: "#about" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full">
      <nav className="absolute top-0 left-0 w-full z-10 flex flex-wrap items-center justify-between p-4 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white rounded-md">
          <span>The</span>
          <Image src="/images/favicon.svg" width="32" height="32" alt="Logo" className="w-8 invert" />
          <span>Experience</span>
        </Link>

        {/* Mobile Navigation */}
        <Disclosure as="div" className="lg:hidden">
          {({ open, close }) => (
            <>
              {/* Menu Button */}
              <Disclosure.Button className="relative z-20 p-2 text-white rounded-md focus:outline-none">
                {open ? (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5h16M4 12h16M4 19h16" />
                  </svg>
                )}
              </Disclosure.Button>

              {/* Mobile Menu Panel */}
              <Disclosure.Panel className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-6">
                {/* Close Button in Top Right */}
                <button
                  onClick={() => close()} 
                  className="absolute top-5 right-5 text-white hover:text-red-400 transition"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Menu Items */}
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-white text-2xl px-6 py-3 rounded-md hover:text-indigo-400 transition"
                    onClick={() => close()} // Close menu when clicking an item
                  >
                    {item.name}
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-white hover:text-indigo-500 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
