---
name: Aetheric Portfolio
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434845'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737875'
  outline-variant: '#c3c8c4'
  surface-tint: '#57615c'
  primary: '#57615c'
  on-primary: '#ffffff'
  primary-container: '#d8e2dc'
  on-primary-container: '#5b6560'
  inverse-primary: '#bfc9c3'
  secondary: '#615c68'
  on-secondary: '#ffffff'
  secondary-container: '#e7e0ee'
  on-secondary-container: '#67626e'
  tertiary: '#4f6074'
  on-tertiary: '#ffffff'
  tertiary-container: '#d0e1f9'
  on-tertiary-container: '#546478'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe5df'
  primary-fixed-dim: '#bfc9c3'
  on-primary-fixed: '#151d1a'
  on-primary-fixed-variant: '#3f4945'
  secondary-fixed: '#e7e0ee'
  secondary-fixed-dim: '#cac4d2'
  on-secondary-fixed: '#1d1a24'
  on-secondary-fixed-variant: '#494550'
  tertiary-fixed: '#d3e4fc'
  tertiary-fixed-dim: '#b7c8df'
  on-tertiary-fixed: '#0b1d2e'
  on-tertiary-fixed-variant: '#38485b'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-padding: 2.5rem
  gutter: 1.5rem
  section-gap: 5rem
  stack-sm: 0.75rem
  stack-md: 1.5rem
---

## Brand & Style

The design system is centered on a **Premium Glassmorphism** aesthetic, reimagining a professional academic portfolio as a high-end editorial experience. The brand personality is scholarly yet ethereal—combining the rigor of academic documentation with the lightness of modern digital luxury.

The visual mood is defined by:
- **Airy Translucency:** Interfaces appear as layers of frosted glass suspended over soft, shifting gradients.
- **Academic Elegance:** Sophisticated typography and generous white space maintain a serious, structured tone.
- **Digital Glow:** Subtle, localized light sources create depth and draw focus to key milestones and metrics.
- **Sophisticated Calm:** A palette of desaturated pastels replaces the high-contrast black/beige of the original, reducing cognitive load while elevating the sense of quality.

## Colors

The palette utilizes "Aetheric Pastels" to create a soft, breathable atmosphere. 

- **Primary (Mint):** Used for primary actions and success states, symbolizing growth and academic progress.
- **Secondary (Lavender):** Used for secondary highlights and categorical accents (e.g., Reflection sections).
- **Tertiary (Pale Blue):** Used for interactive elements and technical data (e.g., Evidence links).
- **Glass Base:** A highly transparent white base layer that serves as the foundation for all containers.
- **Background:** A soft, multi-stop radial gradient using the primary, secondary, and tertiary colors at low opacity (10-15%) to create a dynamic, living backdrop.

## Typography

This design system pairs a high-contrast luxury serif for storytelling with a precision-engineered sans-serif for academic data.

- **Headlines:** `Playfair Display` provides an editorial, authoritative feel. Large display sizes should use tighter tracking for a premium look.
- **Body & Data:** `Hanken Grotesk` offers exceptional legibility for long-form reflections and tabular data. It remains neutral and professional, grounding the more expressive headlines.
- **Hierarchy:** Use the `label-lg` style for small headers (like "ACADEMIC YEAR") to maintain the structured archival feel of the original portfolio.

## Layout & Spacing

The layout follows a **Fluid Grid** model with expansive margins to evoke the feeling of a premium magazine or high-end gallery.

- **Sidebar:** A fixed-width glass panel (280px) on the left provides persistent navigation, using a backdrop blur of 20px.
- **Main Canvas:** A fluid area that centers content with a maximum readable width of 1200px for text-heavy sections.
- **Breakpoints:**
  - **Desktop (1200px+):** Full sidebar and multi-column assignment grids.
  - **Tablet (768px - 1199px):** Sidebar collapses into a glass drawer; margins reduce to 1.5rem.
  - **Mobile (<768px):** Single column flow; display typography scales down to `headline-lg-mobile`.

## Elevation & Depth

Depth is communicated through optical effects rather than traditional shadows.

- **Surface Layers:** All containers use a `backdrop-filter: blur(15px)` and a semi-transparent white background.
- **The "Inner Glow":** Instead of drop shadows, containers use a 1px solid border at 50% opacity and a subtle `box-shadow: inset 0 1px 1px rgba(255,255,255,0.8)`.
- **Z-Axis Hierarchy:**
  - **Level 0 (Background):** Animated pastel mesh gradients.
  - **Level 1 (Cards/Sections):** Low blur (8px), 40% white opacity.
  - **Level 2 (Modals/Active Nav):** High blur (24px), 60% white opacity, subtle external bloom (shadow with 0 offset, large spread, very low opacity).

## Shapes

The shape language is sophisticated and soft. The use of `rounded-lg` (1rem) for main containers and `rounded-xl` (1.5rem) for major decorative sections creates a modern, organic feel that contrasts with the traditional serif typography. Interactive elements like buttons and chips should remain slightly more structured using the base 0.5rem radius.

## Components

- **Glass Cards:** Used for Assignments and Modules. Features a white border-top (1px) for a "lit from above" effect. Content inside is left-aligned with generous internal padding (2rem).
- **Buttons:**
  - **Primary:** Solid white background with 80% opacity, dark text, and a subtle external glow on hover.
  - **Secondary:** Ghost style with a 1px glass border; fills with primary pastel on hover.
- **Progress Indicators (Rubric):** Circular gauges or soft-filled bars using the Mint color. Use a "glow" effect behind the percentage text to indicate "Readiness."
- **Navigation Links:** Active states are indicated by a subtle background "blob" of color behind the text rather than a solid sidebar block.
- **Input Fields:** Minimalist glass containers with a slightly higher blur and a bottom-border focus state in Lavender.
- **Chips/Tags:** Small, pill-shaped glass containers with `label-sm` typography and tinted backgrounds corresponding to the category (e.g., tech, language, reflection).