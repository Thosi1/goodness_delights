# Goodness Delights Bakehouse — Website

A complete, responsive Next.js 14 website for an elegant bakery and custom cake
business. Built with TypeScript, Tailwind CSS, React Hook Form + Zod, and
Lucide icons.

## What's included

- **Home page** — hero, featured categories, bestsellers, custom cake promo,
  our story, testimonials, Instagram-style gallery, newsletter signup
- **Shop page** — search, category filter, sorting, dietary labels
- **Product detail page** — gallery, flavour/size options, personalised
  message, quantity selector, related products
- **Custom cake request page** — 5-step form (customer details, event
  details, cake preferences, reference image upload, review) treated as a
  quotation request, not a confirmed order
- **Cart** — drawer + full page, persisted in `localStorage` for the session
- **Checkout** — contact/billing details, collection/delivery, date
  validation (no unrealistic dates), discount code field, payment method
  placeholder
- **About & Contact pages** — story, values, founder profile, contact form,
  map placeholder, FAQ accordion
- Accessible semantic HTML, labelled forms, visible focus states, alt text
- Mock product data for 12 products across all 6 categories

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To create a production build:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                  # Next.js App Router pages
    page.tsx            # Home
    shop/page.tsx        # Shop listing
    shop/[slug]/page.tsx # Product detail
    custom-cakes/page.tsx
    cart/page.tsx
    checkout/page.tsx
    about/page.tsx
    contact/page.tsx
    layout.tsx           # Root layout, fonts, header/footer/cart drawer
    globals.css
  components/            # Reusable UI components
  data/                  # Mock product, testimonial & FAQ data
  lib/                   # Cart context, utils, Zod validation schemas
  types/                 # Shared TypeScript types
```

## Customising for a real bakery

1. **Branding** — update the bakery name in `src/components/Header.tsx`,
   `src/components/Footer.tsx`, and `src/app/layout.tsx` (metadata). Replace
   "Petal & Crumb" throughout.
2. **Products** — edit `src/data/products.ts`. Replace the `picsum.photos`
   placeholder image URLs with real product photography (update
   `next.config.js` `images.remotePatterns` to match your image host).
3. **Contact details** — update the address, phone, email and hours in
   `src/components/Footer.tsx` and `src/app/contact/page.tsx`.
4. **Testimonials & FAQs** — edit `src/data/testimonials.ts`.
5. **Colours & type** — design tokens live in `tailwind.config.ts`
   (`cream`, `blush`, `brown`, `gold` palettes) and `src/app/layout.tsx`
   (Fraunces serif + Work Sans body fonts via `next/font/google`).
6. **Map** — replace the placeholder in `src/app/contact/page.tsx` with a
   real Google Maps (or other) embed.

## Connecting a real backend

This build uses local mock data and `localStorage` so it runs without a
server. Every integration point is marked with a `NOTE:` comment in the
code. Key places to connect real services:

| Feature | File | Replace with |
|---|---|---|
| Product data | `src/data/products.ts` | Database / CMS query (e.g. via an API route) |
| Cart persistence | `src/lib/cart-context.tsx` | Server-side cart tied to a session/account |
| Custom cake image upload | `src/components/ImageUploader.tsx`, `src/components/CustomCakeForm.tsx` | Upload files to Cloudinary, Amazon S3, or Supabase Storage; submit form payload to your backend/CRM |
| Custom cake & contact form submission | `src/components/CustomCakeForm.tsx`, `src/components/ContactForm.tsx` | API route that stores the request and sends a notification email (e.g. Resend, SendGrid) |
| Checkout / payment | `src/app/checkout/page.tsx` | A real payment gateway (Stripe, PayFast, Yoco) and an order-management system |
| Newsletter signup | `src/components/Newsletter.tsx` | Email marketing service (Mailchimp, Klaviyo) |

No API keys or credentials are hard-coded anywhere in this project.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Hook Form + Zod for form validation
- Lucide React icons
- Local mock data, no external backend required to run
