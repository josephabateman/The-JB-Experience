// CMS Data Structure Types

export interface SiteSettings {
  id: 'site-settings';
  businessName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  baseLocation: string;
  baseLat: number;
  baseLng: number;
  updatedAt: string;
}

export interface PerformanceType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  members: number;
  displayOrder: number;
  active: boolean;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  text: string;
  rating: number;
  featured: boolean;
  displayOrder: number;
  active: boolean;
  updatedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
  active: boolean;
  updatedAt: string;
}

export interface GalleryImage {
  id: string;
  filename: string;
  alt: string;
  caption?: string;
  category: 'performance' | 'setup' | 'venue' | 'other';
  displayOrder: number;
  active: boolean;
  updatedAt: string;
}

export interface PageContent {
  id: string;
  pageId: 'home' | 'about' | 'setlist' | 'services';
  sectionId: string;
  title?: string;
  content: string;
  type: 'text' | 'html' | 'markdown';
  active: boolean;
  updatedAt: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  postcode: string;
  distance: number;
  travelTime: number;
  surcharge: number;
  active: boolean;
  updatedAt: string;
}

export interface PricingSettings {
  id: 'pricing-settings';
  // Base prices
  soloPrice: number;
  trioPrice: number;
  saxPrice: number; // Additional cost for sax player
  
  // Travel costs
  baseTravelCostPerMile: number;
  additionalPersonTravelCostPerMile: number;
  
  // Surcharges
  distanceSurcharge2Hours: number;
  distanceSurcharge5Hours: number;
  congestionChargePerPerson: number;
  
  // Settings
  distanceThreshold2Hours: number; // miles
  distanceThreshold5Hours: number; // miles
  
  updatedAt: string;
}

// CMS Response types
export interface CMSResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CMSListResponse<T> {
  success: boolean;
  data?: T[];
  total?: number;
  error?: string;
  message?: string;
}

// Auth types
export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
  lastLogin?: string;
  createdAt: string;
}

export interface AuthSession {
  userId: string;
  username: string;
  role: string;
  expiresAt: number;
}

// Form types for CMS admin
export interface CMSFormData {
  [key: string]: any;
}