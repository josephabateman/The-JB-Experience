# 🔧 Section Management Guide

## How to Change Section Order

To reorder sections on the homepage, simply edit the `SECTION_ORDER` array in:

```
/src/config/sections.ts
```

## Current Order
1. **About** - Company information and key details
2. **Contact** - Phone and email contact with CTA
3. **Testimonials** - Client reviews and social proof  
4. **Booking Form** - Quote calculator and contact form

## How to Reorder

### Example: Move Contact to First Position
```typescript
// In /src/config/sections.ts
export const SECTION_ORDER = [
  'contact',    // ← Move contact first
  'about', 
  'testimonials',
  'booking-form'
] as const;
```

### Example: Remove a Section
```typescript
// Remove testimonials completely
export const SECTION_ORDER = [
  'about',
  'contact',
  'booking-form'  // ← testimonials removed
] as const;
```

## Available Sections
- `about` - AboutSection component
- `contact` - ContactSection component  
- `testimonials` - TestimonialsSection component
- `booking-form` - BookingFormSection component

## File Structure
```
src/
├── config/
│   └── sections.ts          # 🎯 EDIT THIS FILE to change order
├── components/
│   ├── SectionRenderer.tsx  # Renders sections dynamically
│   └── sections/           # Individual section components
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx  
│       ├── TestimonialsSection.tsx
│       └── BookingFormSection.tsx
└── app/
    └── page.tsx            # Main page using SectionRenderer
```

## Benefits
✅ **Easy Reordering** - Change one array, reorder entire page  
✅ **Modular** - Each section is a separate component  
✅ **Type Safe** - TypeScript ensures valid section names  
✅ **Maintainable** - Clear separation of concerns