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

Description file style (HackerRank problems)
- Each problem lives in its own `Problem Name/` directory with `description.md` (and `problem.ts` for the solution).
- Rewrite HackerRank page dumps into clean Markdown. Never keep page chrome: sidebar/footer links ("Need Help?", "View discussions", "View editorial", "View top submissions", "rate this challenge", "MORE DETAILS", "Download problem statement", "Download sample test cases", "Suggest Edits"), social share links, raw HTML, `<style>`/`<script>`/MathJax SVG markup, or editor UI.
- Follow this skeleton, in order, separated by `---` horizontal rules:
  1. `# <emoji> Problem Name - HackerRank Solution`
  2. Badge lines (two trailing spaces for line breaks):
     `![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)`  
     `![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)`  
     `![Category: Algorithms](https://img.shields.io/badge/Category-Algorithms-orange)`
  3. `## 📝 Problem Description` — statement plus a `**Examples:**`/`**Example:**` bullet list
  4. `## 💻 TypeScript Solution` — fenced ```typescript block with a commented, typed solution
  5. `## 🧪 Example Walkthrough` — `**Input:**`, numbered steps, `**Output:**`
  6. `## 📝 Function Description` — `**Parameter:**` and `**Returns:**` bullet lists
  7. `## 📥 Input Format`
  8. `## 📋 Constraints` — bullet list with backticked bounds
  9. `## 📊 Sample Input 0` and `## 📊 Sample Output 0` — fenced code blocks
  10. `## 📝 Explanation 0`
- Use emoji headings exactly as above, `##` for all sections, `**bold labels**`, backticks for code/identifiers, and 4-space indented function bodies.
- Source problem text must survive intact: policy, rounding/edge cases, constraints, sample I/O, and explanation.
- Reference examples: `Birthday Cake Candles/description.md`, `Grading Students/description.md`.
- Verify before finishing: `grep -niE "need help|view discussions|view editorial|top submissions|rate this challenge|more details|download problem|suggest edits|share on|<style|<svg|mathjax|linkedin|twitter" "<Problem>/description.md"` returns nothing.