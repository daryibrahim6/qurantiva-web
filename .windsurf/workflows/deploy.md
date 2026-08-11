---
description: "Pre-flight check, build, deploy to Netlify"
---

# /deploy — Deploy to Netlify

1. **Pre-flight checks:**
   a. Verify `.env.local` has all required variables (GMAIL_USER, GMAIL_APP_PASSWORD, WA_NUMBER, WA_NUMBER_ALT, NEXT_PUBLIC_WA_NUMBER)
   b. Run `npm run build` — must pass with zero errors
   c. Run `npx eslint src` — must pass with zero errors
   d. Check `netlify.toml` exists and is valid

2. If any pre-flight check fails, stop and report the issue. Do not deploy broken code.

3. **Deploy:**
   a. If `netlify.toml` exists and site is already linked, run `netlify deploy --prod`
   b. If not linked, ask user for Netlify site ID or create new site
   c. Set environment variables in Netlify if not already set

4. **Post-deploy:**
   a. Verify the deployed URL responds with 200
   b. Check that key pages load (/, /daftar)
   c. Report deploy URL to user
