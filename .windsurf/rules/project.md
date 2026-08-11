---
trigger: always_on
description: "Qurantiva project rules — TypeScript, Tailwind v4, Bahasa Indonesia, component conventions"
---

# Qurantiva Project Rules

## General
- TypeScript strict mode
- All text content in Bahasa Indonesia
- File naming: kebab-case for files, PascalCase for components
- Import order: react -> next -> third-party -> local

## Styling
- Tailwind CSS v4 only — config via `@theme` in `src/app/globals.css` (NO tailwind.config.ts)
- Use `cn()` from `@/lib/utils` for conditional classes
- No inline styles except dynamic values
- No custom CSS unless absolutely necessary

## Components
- Server Components by default
- `"use client"` only for interactive components (forms, animations, state)
- Animations: use `motion/react` (NOT `framer-motion`), use `whileInView` for scroll reveals

## Forms
- Validation: zod + react-hook-form
- Use `@hookform/resolvers/zod` for resolver

## API Routes
- Return JSON responses
- Handle errors gracefully with try/catch
- Never hardcode secrets — use environment variables from `.env.local`

## Environment
- `GMAIL_USER`, `GMAIL_APP_PASSWORD` — for Nodemailer
- `WA_NUMBER`, `WA_NUMBER_ALT` — WhatsApp numbers
- `NEXT_PUBLIC_WA_NUMBER` — client-side WhatsApp number
