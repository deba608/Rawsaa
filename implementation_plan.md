# Implementation Plan - RAWSA Premium Beverage Brand Website (Next.js)

Designing a world-class, premium beverage brand website for **RAWSA by Stoneman Foodtech**. 

The goal is to create a premium, editorial, and highly interactive consumer brand website (inspired by contemporary Indian branding and premium lifestyle products like Paper Boat / Hector Beverages) that positions RAWSA as a scalable beverage brand. We will showcase the current flavors (Orange, Mango, Appy Rush, Pink Guava, Sweet Tamarind, Mixed Fruit) using dynamic interactions, premium scroll effects, and tribal packaging accents.

---

## User Review Required

We have aligned on the following structural and design direction:
1. **Framework & Setup**: **Next.js App Router** with **Vanilla CSS** for performance, styling control, and future scalability (e-commerce, dynamic pages).
2. **Animation Libraries**: **GSAP** (with ScrollTrigger) for parallax/scroll-linked animations, **Framer Motion** for state-driven component transitions (such as the flavor switchers), and **Lenis** for smooth client-side kinetic scrolling.
3. **Typography**: Google Fonts loaded via `next/font/google` in `src/app/layout.js` (**Playfair Display** for editorial serif headings, **Plus Jakarta Sans** for body copy, and **Syne** for dynamic display highlights).
4. **Tribal Accents**: Tribal packaging patterns will be used as elegant SVGs to accent layouts, borders, and sections, rather than dominating the page.

---

## Proposed Changes

The project files are set up in `c:\Users\Dev\Desktop\Raswa\`.

### Phase 1: Project Setup (Completed)
We bootstrapped the Next.js structure and installed the required packages: `gsap`, `lenis`, `framer-motion`, and `lucide-react`.

### Phase 2: Design System & Styling
We will define custom design tokens in a central CSS file to support dynamic, flavor-swapping color palettes:

#### [MODIFY] [globals.css](file:///c:/Users/Dev/Desktop/Raswa/src/app/globals.css)
Establish global variables:
- **Core Background**: Cream White (`#FAF8F5`)
- **Core Dark Text**: Matte Black (`#121212`)
- **Flavor Variables**: Dynamic CSS properties mapping to active flavor configurations:
  - **Orange**: Primary Orange (`#FF7A00`), Bright Orange accents.
  - **Mango**: Golden Yellow (`#FFC800`), Mango Yellow accents.
  - **Appy Rush**: Fresh Green (`#4CAF50`), Apple Green accents.
  - **Pink Guava**: Soft Pink (`#FF8DA1`), Guava Pink accents.
  - **Sweet Tamarind**: Warm Brown (`#8D5B4C`), Tamarind Brown/Amber accents.
  - **Mixed Fruit**: Multi-color accents (`#E040FB`, `#FF4081`, `#00E5FF`).

---

### Phase 3: Brand Components & Layouts
We will implement the following modular components under `src/components/`:

#### [NEW] [Navbar.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/Navbar.js)
Minimal premium header with logo, navigation links, and subtle tribal accents.

#### [NEW] [Hero.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/Hero.js)
Features a large central rotating RAWSA bottle showcase. Includes a dynamic flavor switcher, floating fruit element parallax, and editorial brand headlines.

#### [NEW] [FlavorsGallery.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/FlavorsGallery.js)
Magazine-style cards displaying all flavors. Includes micro-animations where cards elevate, colors shift, and fruits animate on hover.

#### [NEW] [WhyRawsa.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/WhyRawsa.js)
Clean narrative section presenting key benefits (*No Added Sugar*, *No Artificial Sweeteners*, *No Added Colours*, *Real Fruit Taste*) utilizing elegant typography and tribal frames.

#### [NEW] [BrandStory.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/BrandStory.js)
Editorial magazine layout detailing RAWSA's natural inspiration, Indian roots, and parent support from Stoneman Foodtech.

#### [NEW] [Lifestyle.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/Lifestyle.js)
Visual grid showcasing active lifestyle scenarios (Sports, Travel, College, Outdoors).

#### [NEW] [ProductFamily.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/ProductFamily.js)
Lineup section displaying all bottles together, showcasing RAWSA as a unified brand rather than standalone products.

#### [NEW] [ContactForm.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/ContactForm.js)
Business inquiry form optimized for distributor, retail, and partnership inquiries.

#### [NEW] [Footer.js](file:///c:/Users/Dev/Desktop/Raswa/src/components/Footer.js)
Premium footer with navigation links, contact info, and tribal details.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to confirm zero bundler/typescript errors.
- Run Lighthouse in Headless Chrome to inspect page speed, accessibility, and SEO structure (target 90+).

### Manual Verification
- Test flavor transitions in Hero section to ensure the bottle swaps, text fades, and background gradients change smoothly.
- Test scroll feel with Lenis and GSAP ScrollTrigger to ensure smooth transitions on all target viewports (Desktop, Tablet, Mobile).
- Verify contact form submission validations.
