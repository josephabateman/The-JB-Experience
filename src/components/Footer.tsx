import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["About", "Testimonials", "FAQ", "Contact"];

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 py-8">
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-6 border-t border-gray-200 dark:border-gray-700 lg:grid-cols-5">
          {/* Logo Section */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold dark:text-gray-100">The</span>
              <Image
                src="/img/favicon.svg"
                alt="Logo"
                width="32"
                height="32"
                className="w-8 dark:invert"
              />
              <span className="text-lg font-semibold dark:text-gray-100">Experience</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center lg:items-start">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 py-1"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-gray-600 dark:text-gray-300 mb-2">Follow Joe&apos;s artist career</span>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/joebatemanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-indigo-500"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}
        </div>
      </Container>
    </div>
  );
}

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
