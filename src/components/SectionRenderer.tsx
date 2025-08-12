"use client";

import { SECTION_ORDER, type SectionKey } from '@/config/sections';
import { 
  AboutSection, 
  ContactSection, 
  TestimonialsSection, 
  BookingFormSection 
} from '@/components/sections';

// Map section keys to components
const SECTION_COMPONENTS = {
  about: AboutSection,
  contact: ContactSection,
  testimonials: TestimonialsSection,
  'booking-form': BookingFormSection,
} as const;

interface SectionRendererProps {
  sections?: SectionKey[];
}

export const SectionRenderer = ({ sections = SECTION_ORDER }: SectionRendererProps) => {
  return (
    <>
      {sections.map((sectionKey) => {
        const Component = SECTION_COMPONENTS[sectionKey];
        if (!Component) {
          console.warn(`Section component not found for key: ${sectionKey}`);
          return null;
        }
        return <Component key={sectionKey} />;
      })}
    </>
  );
};