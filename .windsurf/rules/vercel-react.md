---
trigger: always_on
description: "Vercel React/Next.js best practices — performance optimization, bundle size, server components"
---

# Vercel React & Next.js Best Practices

## Critical
- Eliminate data waterfalls: use `Promise.all` for parallel fetches, not sequential awaits
- Server Components by default — only add `"use client"` when you need interactivity
- Never import server-only code (DB, secrets, fs) into client components
- Use `next/image` for all images — never raw `<img>` tags

## High Priority
- Avoid barrel imports: import from specific paths (`lucide-react/icons/...`) when bundle size matters
- Use `next/dynamic` for heavy client components that aren't needed immediately
- Minimize `"use client"` boundary — push it as deep into the tree as possible
- Use `React.cache()` for deduplicating identical data fetches within a request

## Medium-High
- Pass data as props from Server Components rather than fetching in client
- Use `loading.tsx` and `error.tsx` for route-level suspense boundaries
- Prefer `generateStaticParams` + `generateMetadata` for dynamic routes
- Keep RSC payload small — don't serialize large objects, pass IDs and fetch on client if needed

## Re-render Optimization
- Extract expensive components into memoized subcomponents
- Use `useMemo` for expensive computations, not for trivial values
- Avoid passing new object/array references as props on every render
- Use `useCallback` for handlers passed to memoized children

## Next.js App Router
- Use `layout.tsx` for persistent UI, `page.tsx` for route-specific content
- Colocate route-specific components in the route folder
- Use `searchParams` prop (Server Component) over `useSearchParams` (client) when possible
- Set `export const dynamic = 'force-static'` for pages that should be prerendered
- Use `export const revalidate` for ISR instead of manual cache invalidation

## Bundle Size
- Check `next build` output for oversized routes
- Tree-shake: don't import entire libraries for one function
- Prefer `motion/react` over `framer-motion` (smaller, tree-shakeable)
- Use CSS for animations when possible (transitions, keyframes) over JS
