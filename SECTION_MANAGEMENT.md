# 🔧 Section Management Guide

## How to Change Section Order

To reorder sections on the homepage, simply **cut and paste the components** in:

```
/src/app/page.tsx
```

Look for the clearly marked section:

```jsx
{/* ========================================
    MAIN SECTIONS - Move these around to reorder!
    ======================================== */}

{/* 1. ABOUT SECTION - Company info, videos, pricing */}
<AboutSection />

{/* 2. CONTACT SECTION - Phone/email CTA */}
<ContactSection />

{/* 3. TESTIMONIALS SECTION - Client reviews */}
<TestimonialsSection />

{/* 4. BOOKING FORM SECTION - Quote calculator */}
<BookingFormSection />
```

## How to Reorder

### Example: Move Contact to First Position
Just cut `<ContactSection />` and paste it above `<AboutSection />`:

```jsx
{/* 1. CONTACT SECTION - Phone/email CTA */}
<ContactSection />

{/* 2. ABOUT SECTION - Company info, videos, pricing */}
<AboutSection />

{/* 3. TESTIMONIALS SECTION - Client reviews */}
<TestimonialsSection />

{/* 4. BOOKING FORM SECTION - Quote calculator */}
<BookingFormSection />
```

### Example: Remove a Section
Just delete or comment out the component:

```jsx
{/* 1. ABOUT SECTION - Company info, videos, pricing */}
<AboutSection />

{/* 2. CONTACT SECTION - Phone/email CTA */}
<ContactSection />

{/* TESTIMONIALS REMOVED */}
{/* <TestimonialsSection /> */}

{/* 3. BOOKING FORM SECTION - Quote calculator */}
<BookingFormSection />
```

## Available Sections
- `<AboutSection />` - Company info, videos, pricing
- `<ContactSection />` - Phone and email contact with CTA  
- `<TestimonialsSection />` - Client reviews and social proof
- `<BookingFormSection />` - Quote calculator and contact form

## File Structure
```
src/
├── components/
│   └── sections/           # Individual section components
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx  
│       ├── TestimonialsSection.tsx
│       └── BookingFormSection.tsx
└── app/
    └── page.tsx            # 🎯 EDIT THIS FILE to reorder sections
```

## Benefits
✅ **Super Simple** - Just cut/paste components in page.tsx  
✅ **Visual** - See exactly what you're moving  
✅ **Modular** - Each section is a clean, separate component  
✅ **No Config Files** - Direct and straightforward