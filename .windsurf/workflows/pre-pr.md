---
description: "Full check — lint + typecheck + build + test + diff summary"
---

# /pre-pr — Pre-PR Full Check

1. Run `npx eslint src` — fix all errors and warnings
2. Run `npx tsc --noEmit` — fix all type errors
3. Run `npm run build` — must pass with zero errors
4. Run tests (or `/test` workflow if no tests exist)
5. Run `git diff --stat` to summarize all changes
6. Run `git diff` to review all changes line-by-line
7. Report:
   - Files changed count
   - Lines added/removed
   - Any remaining warnings or issues
   - Suggested PR title and description based on the changes
