---
description: "Run tests, or create test script if none exists, verify pass"
---

# /test — Test Runner

1. Check if test scripts exist:
   - Look for `jest.config.*`, `vitest.config.*`, or test files in `src/`
   - Check `package.json` for `"test"` script
2. If tests exist:
   a. Run `npm test` (or the appropriate test command)
   b. If all pass, report success and stop
   c. If any fail, read error output, fix the failing test or code, re-run (max 5x)
3. If no tests exist:
   a. Create a minimal test script that verifies the build compiles and key pages render
   b. Use Node.js built-in test runner or a simple assertion script
   c. Run the test script and verify it passes
   d. Report results to user
4. Never delete or weaken tests to make them pass
