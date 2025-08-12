// Section Configuration
// Change the order of sections by reordering this array
// Add/remove sections by modifying this configuration

export const SECTION_ORDER = [
  'about',
  'contact', 
  'testimonials',
  'booking-form'
] as const;

export type SectionKey = typeof SECTION_ORDER[number];

// Section metadata for easy management
export const SECTION_CONFIG = {
  about: {
    id: 'about',
    title: 'About',
    description: 'Information about The JB Experience'
  },
  contact: {
    id: 'contact', 
    title: 'Contact',
    description: 'Contact and booking information'
  },
  testimonials: {
    id: 'testimonials',
    title: 'Testimonials', 
    description: 'Client reviews and feedback'
  },
  'booking-form': {
    id: 'booking-form',
    title: 'Booking Form',
    description: 'Quote calculator and booking form'
  }
} as const;