---
description: "Run ESLint, auto-fix warnings, loop max 5x"
---

# /lint — Lint & Auto-Fix Loop

1. Run `npx eslint src` in the project root
2. If no errors or warnings, report clean and stop
3. For each lint issue:
   a. Read the rule name and message
   b. If auto-fixable, run `npx eslint src --fix`
   c. If not auto-fixable, manually fix following the rule's guidance
4. Go back to step 1 (max 5 iterations)
5. If still has issues after 5 iterations, report remaining warnings to user
6. Never disable lint rules to silence warnings — fix the code instead
