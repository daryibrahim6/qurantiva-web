---
description: "Code review — security, performance, accessibility, patterns"
---

# /review — Code Review

1. Run `git diff` to see all uncommitted changes
2. Review each changed file for:

   ## Security
   - No hardcoded secrets, API keys, or passwords
   - Input validation on all user-facing inputs
   - SQL injection / XSS prevention in place
   - Environment variables used for sensitive data

   ## Performance
   - No unnecessary `"use client"` directives
   - Images use `next/image` component
   - No data waterfalls (sequential awaits that could be parallel)
   - Heavy components use `next/dynamic` or code splitting

   ## Accessibility
   - Semantic HTML (button, nav, main, section with aria-labels)
   - Color contrast passes WCAG AA
   - Interactive elements have focus states
   - Images have alt text

   ## Patterns
   - Follows project rules (kebab-case files, PascalCase components)
   - Uses `cn()` for conditional classes
   - No inline styles except dynamic values
   - Animations use `motion/react` with `whileInView`
   - Text content in Bahasa Indonesia

3. Report findings categorized by severity (Critical, High, Medium, Low)
4. Auto-fix what you can, report what needs user decision
