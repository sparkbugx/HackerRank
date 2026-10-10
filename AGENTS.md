AGENTS.md — HackerRancks

Build / typecheck
- `npm run build` runs `tsc` to compile `src/` to `dist/`
- No separate lint or typecheck script; `tsc` with `"strict": true` is the source of truth

Test
- No test framework configured. The `Time-Conversaion/` directory contains a coding challenge (12h → 24h time conversion). Implement the function in `Time-Conversaion/timeconversation.ts` and verify manually.

Entry points
- `src/index.ts` — trivial app (`console.log('Happy developing ✨')`)
- `Time-Conversaion/timeconversation.ts` — empty; implement the time conversion function described in `Problem.md`

Monorepo structure
- Root is a single npm package (`private: true`). `src/` and `Time-Conversaion/` are the only code directories.

Env / deps
- No runtime dependencies. devDependency is `typescript` only.
- No env files, no .env loading.

Git
- No commits yet; standard git workflow applies.