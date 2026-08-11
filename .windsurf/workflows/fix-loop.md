---
description: "Self-correction loop — build, fix, lint, fix, test, fix (max 5 rounds)"
---

# /fix-loop — Agentic Self-Correction Loop

This is the core agentic loop. Run this when you need to verify everything works end-to-end.

## Round Structure (max 5 rounds)

### Round 1: Build
1. Run `npm run build`
2. If success → go to Lint step
3. If fail → read errors, fix root cause, re-run build (max 3 sub-iterations)
4. If still failing → report to user, do not continue

### Round 2: Lint
1. Run `npx eslint src`
2. If clean → go to Test step
3. If issues → fix each one, re-run lint (max 3 sub-iterations)
4. If still has issues → report to user, do not continue

### Round 3: Type Check
1. Run `npx tsc --noEmit`
2. If clean → go to Test step
3. If errors → fix type issues, re-run (max 3 sub-iterations)

### Round 4: Test
1. Run `npm test` or create minimal test if none exists
2. If all pass → go to Review step
3. If failures → fix failing tests or code, re-run (max 3 sub-iterations)

### Round 5: Final Review
1. Run `git diff` to review all changes
2. Check for AI tells (taste-skill rules)
3. Check for performance issues (vercel-react rules)
4. Check for over-engineering (ponytail rules)
5. Report final status to user

## Rules
- Never skip a step to "save time"
- Never disable tests or lint rules to pass
- Never mark as complete with outstanding errors
- If you hit max iterations on any step, STOP and report — do not silently continue
- Each fix should be minimal and target the root cause
