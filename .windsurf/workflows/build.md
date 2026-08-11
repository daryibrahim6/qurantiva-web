---
description: "Build project, auto-fix errors, loop max 5x"
---

# /build — Build & Auto-Fix Loop

1. Run `npm run build` in the project root
2. If build succeeds, report success and stop
3. If build fails, read the error output carefully
4. Identify the root cause of each error
5. Fix each error with minimal changes (follow Ponytail rules)
6. Go back to step 1 (max 5 iterations)
7. If still failing after 5 iterations, report all remaining errors to user with full context
