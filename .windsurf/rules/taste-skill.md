---
trigger: always_on
description: "Taste-Skill — anti-slop design rules. No AI tells, no generic patterns, disciplined layout."
---

# Taste-Skill — Anti-Slop Design

## Three Dials
- **VARIANCE**: Sections must look visually distinct. No two adjacent sections with same layout.
- **MOTION**: Animate to reveal content, not to decorate. Respect `prefers-reduced-motion`.
- **DENSITY**: Let content breathe. Whitespace is not wasted space.

## Forbidden AI Tells (Slop Detection)
Sources: sailop.com AI slop research (2026), 7-dimension slop scoring

### Color
- No generic purple/blue gradients (`blue-500` to `indigo-600`)
- No pure black (`#000`) or pure white (`#fff`) for text/bg — use off-blacks/off-whites
- No Tailwind default blue/purple/pink as primary
- Named CSS variables only — no hardcoded hex in components

### Typography
- No Inter/Poppins/Roboto/Montserrat as sole font — use a duo (display + body)
- No uniform letter-spacing across hierarchy levels
- Use `text-wrap: balance` on headings, `text-wrap: pretty` on body
- Variable font weight as a system, not a one-off choice

### Layout
- No centered hero with badge + h1 + subhead + 2 CTAs (AI canonical hero structure)
- No 3 equal-height feature cards in a grid
- No `max-w-7xl mx-auto` on every section — vary widths
- No identical `py-20` on every section — vary padding
- No bilateral symmetry everywhere — use 60/40 or 70/30 asymmetric splits
- No `grid-cols-3` for features, pricing, and testimonials alike

### Motion
- No `opacity: 0` + `translateY(20px)` + `ease-in-out` on every section (83% of AI sites)
- No `scale-105` on hover — use meaningful interactions (content shifts, not opacity)
- No linear stagger intervals (every child delayed by exactly 0.1s)
- No `backdrop-blur-md` navigation (AI default)
- One signature animation per page, not fade-up on everything

### Copy
- No "elegant" / "seamless" / "powerful" / "transform" / "unlock" / "elevate"
- No "Ngaji Anywhere, Anytime, Anyone" or similar tagline slogans
- No "Never too late to connect" or similar generic inspirational phrases
- No generic claims ("fast, secure, reliable, scalable") — use specific numbers/methods
- No "Trusted by" logo strips with grayscale logos
- No fake social proof (fake 5-star ratings, fake "500+ users", fake avatar stacks)
- No emoji as feature icons
- No `bg-clip-text` gradient on hero keywords unless brand-justified
- No em-dashes in headings or copy
- Headlines as arguments, not slogans
- CTAs as full sentences, not just "Get Started"

### Structure
- No canonical section order (nav -> hero -> features -> testimonials -> pricing -> faq -> cta -> footer)
- Break the rhythm — put pricing first if audience is price-sensitive, eliminate sections that don't serve the user
- No identical card chrome (same padding, radius, shadow, gaps) across all card types

### Iconography
- Consistent icon set — don't mix custom image icons with Lucide icons
- No icons in nav unless they add information
- Numbered indices like [01] [02] are better than generic icons for lists

## Layout Discipline
- Sections need visual hierarchy: one hero element per section, rest supports it
- Alternating bg colors between sections (white / cream / dark) for rhythm
- Cards: use `rounded-2xl` consistently, never mix radius sizes
- Buttons: `rounded-full` for pills, consistent across site
- Max content width: `max-w-7xl` for full sections, `max-w-4xl` for text-focused
- Section padding: `py-20 lg:py-28` standard, never less
- Asymmetric splits encouraged: 60/40, 70/30, not always 50/50

## Tailwind v4 Conventions
- Colors via `@theme` CSS variables only — no hardcoded hex in components
- Use `cn()` for conditional classes, never template literals for class strings
- `text-accent-*` for text on light bg (dark navy = readable)
- `text-primary-*` for yellow accents only, never for body text
- Shadows: use tinted shadows (`shadow-primary-500/20`) not generic black

## Pre-Flight Check
Before marking any UI task complete:
1. No AI tells from forbidden list above
2. Text contrast passes WCAG AA (dark on light, light on dark)
3. No two adjacent sections look identical in layout
4. All animations have `viewport={{ once: true }}` to prevent re-trigger
5. Mobile layout doesn't just stack desktop — it adapts
6. No fake social proof (fake ratings, fake user counts, fake testimonials)
7. No canonical AI hero structure (badge + centered h1 + subhead + 2 CTAs)
8. Copy uses specific claims, not generic slogans
9. Icon set is consistent (all Lucide or all custom, not mixed)
10. At least one section breaks the canonical order or layout pattern
