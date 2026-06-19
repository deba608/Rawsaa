# RAWSA | Design System & Visual Identity Guidelines

This document outlines the design decisions, visual system, color palettes, and motion guidelines for the **RAWSA by Stoneman Foodtech** brand experience.

---

## 1. Brand Personality & Identity

RAWSA represents a premium, modern, natural fruit drink company with deep Indian roots. The brand balancing act:
* **Fresh & Natural**: Inspired by pure nature and raw ingredients.
* **Energetic & Youthful**: Bold fruit pairings, modern typography, dynamic transitions.
* **Indian Editorial**: Subtle tribal artwork accents derived from Packaging Designs, avoiding SaaS generic layouts or minimalist Apple-clone coldness.
* **Trustworthy**: Underpinned by Stoneman Foodtech's scalability and high-quality processing.

---

## 2. Color System

The website relies on a dynamic, context-aware styling system. As the user switches flavors, the color system shifts:

### Core Brand Colors
* **Cream White (Background)**: `#FAF8F5` (Warm, natural, organic paper feel)
* **Matte Black (Text/Ink)**: `#121212` (Premium, editorial high-contrast)
* **Accent Charcoal**: `#2D2D2D`

### Flavor-Specific Palettes

| Flavor | Primary Color | Light Tint (BG Accent) | Highlight/Gradient |
| :--- | :--- | :--- | :--- |
| **Orange** | `#FF7A00` (Bright Orange) | `#FFF3E6` (Creamy Orange) | `#FF5100` |
| **Mango** | `#FFC800` (Golden Yellow) | `#FFFBE6` (Soft Mango) | `#FF9A00` |
| **Appy Rush (Apple)** | `#4CAF50` (Fresh Green) | `#E8F5E9` (Soft Green) | `#2E7D32` |
| **Pink Guava** | `#FF8DA1` (Soft Pink) | `#FFF0F2` (Creamy Pink) | `#E91E63` |
| **Sweet Tamarind** | `#8D5B4C` (Warm Tamarind) | `#F5EFEF` (Light Clay) | `#5D4037` |
| **Mixed Fruit** | `#B92B27` (Berry Crimson) | `#FDF2F2` (Soft Crimson) | `#1565C0` (Blue accent combo) |

---

## 3. Typography Hierarchy

We use Google Fonts optimized through Next.js for zero layout shift:

* **Display Headers (Syne)**:
  * Used for main section headings, large numbers, and premium punchlines.
  * Styles: Bold / Extra-Bold, tracking slightly tight.
  * CSS: `font-family: var(--font-display);`
* **Editorial Headers (Playfair Display)**:
  * Used for storytelling, quote accents, and subtitles.
  * Styles: Italic, tracking relaxed.
  * CSS: `font-family: var(--font-serif);`
* **Body & Interface (Plus Jakarta Sans)**:
  * Used for UI elements, descriptions, paragraphs, buttons, and forms.
  * Styles: Regular (400) / Medium (500) / Semi-Bold (600).
  * CSS: `font-family: var(--font-sans);`

---

## 4. Visual Elements & Layout

* **Editorial Magazine Layout**: Large generous margins (`margin: 8rem 0`), asymmetrical layout structures, side-by-side text columns, and large numbers.
* **Organic Flowing Shapes**: Background shapes using SVG blobs and CSS borders to mimic organic fruit splatters or packaging paper cuts.
* **Tribal Accent Patterns**:
  * Indian tribal geometry (warli/gond inspired line strokes, dotted circles, triangular patterns) will be utilized as subtle SVG borders, line separators, and micro-background structures.
  * *Rule*: Keep tribal styling to < 10% of visual screen space. It must look like a premium modern drink, not a history project.

---

## 5. Motion & Animation Guidelines

Animations must feel natural, heavy, and satisfying:

* **Kinetic Scroll (Lenis)**:
  * Smooth scrolling duration: `1.2s`
  * Easing: Cubic-bezier deceleration (`Math.min(1, 1.001 - Math.pow(2, -10 * t))`)
* **Scroll-Linked Reveals (GSAP & ScrollTrigger)**:
  * Floating fruits: Parallax movement at rates of `0.2` to `0.5` relative to scroll speed.
  * Bottle Showcase: Smoothly rotate the central bottle around its Y-axis (`rotationY`) and slide horizontally as sections transition.
* **UI Interactions (Framer Motion)**:
  * Card Hover: Hovering on flavor cards will scale the card by `1.04`, shift the container color via CSS custom property interpolation, and bounce floating fruit particles outward.
  * Flavor Switcher: Use Framer Motion's `layoutId` for smooth underline and state transitions.
