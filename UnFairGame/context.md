# Unfair Game

> **Problem link:** [https://www.hackerrank.com/challenges/unfair-game/problem](https://www.hackerrank.com/challenges/unfair-game/problem)

---

## Problem Statement

You are playing a game of Nim with a friend. The rules are as follows:

1. Initially, there are `N` piles of stones. Two players play alternately.
2. In each turn, a player can choose one non-empty pile and remove any number of stones from it. At least one stone must be removed.
3. The player who picks the last stone from the last non-empty pile wins the game.

It is currently your friend's turn. You suddenly realize that if your friend was to play optimally in that position, you would lose the game. So while he is not looking, you decide to cheat and add some (possibly `0`) stones to each pile. You want the resultant position to be such that your friend has no guaranteed winning strategy, even if he plays optimally. You cannot create a new pile of stones. You can only add stones, and not remove stones from a pile. **What is the least number of stones you need to add?**

---

## Input Format

- The first line contains the number of cases `T`.
- `T` cases follow. Each case contains:
  - The number `N` on the first line.
  - `N` numbers on the second line. The `i`-th number denotes `s_i`, the number of stones in the `i`-th pile currently.

---

## Constraints

| Constraint | Value |
| ---------- | ----- |
| Number of cases | `1 <= T <= 20` |
| Number of piles | `2 <= N <= 15` |
| Stones per pile | `1 <= s_i < 1000000000 (10^9)` |

---

## Output Format

Output `T` lines, containing the answer for each case. If the current position is already losing for your friend, output `0`.

---

## Sample

### Sample Input

```text
3
2
1 3
3
1 1 1
4
10 4 5 1
```

### Sample Output

```text
2
3
6
```

---

## Explanation

- **Case 1:** Add `2` stones to the first pile. Then both piles will have `3` stones each. It is easy to verify that your friend cannot win the game unless you make a mistake.
- **Case 2:** Add `1` stone to the first pile, and `2` stones to the second pile.
- **Case 3:** The least number of stones to add is `6`.

---

## Solution

### 1. Core Idea (Nim theory)

A Nim position is a **loss for the player to move** exactly when the **XOR of all pile sizes is `0`** (a *P-position*).
Since it is your friend's turn, your goal is to turn the current position into one with `XOR = 0`, using only
**additions** (piles may only grow), while **minimizing the total number of stones added**.

> If the current `XOR` is already `0`, the answer is `0`.

### 2. Why a Greedy Fails

Adding `k` stones to a pile changes **many bits at once**, and a choice made at a high bit forces constraints on
all lower bits. The bits are therefore coupled, so we solve it with a **bit-by-bit DP from the most significant
bit (MSB) down to the least significant bit (LSB)** — a classic *digit DP*.

Since `s_i < 10^9 < 2^30`, bits `30 .. 0` are enough.

### 3. DP State

Each state is packed into a single integer:

```text
state = (p << N) | mask
```

| Field | Bits | Meaning |
| ----- | ---- | ------- |
| `p` | `1` | Running **XOR parity** of the current bit across the piles processed so far. |
| `mask` | `N` | Set of **"free" piles**: piles already bumped `0 -> 1` at a **higher** bit, so their lower bits can now be chosen freely. |

A pile is **tight** while its bit choice must still keep the new value `>=` original value.
Once a pile is bumped `0 -> 1` at some bit (making it strictly larger), all of its lower bits become
**unconstrained** — any `0/1` is reachable because we control the exact number of stones added.

`dp[state]` stores the **minimum stones added so far** to reach that state.

### 4. Transitions

For each bit `b` (from `30` down to `0`), for each pile `i`, and for each choice `c ∈ {0, 1}` of the pile's new
bit at position `b`:

Let `orig = (s[i] >> b) & 1` be the original bit, and `isFree = (mask >> i) & 1`.

- **Forbidden:** if the pile is *tight*, `orig = 1`, and `c = 0` — we cannot shrink a pile before any higher bump.
- **Cost:** `cost = (c - orig) * 2^b`. Summed over all bits this telescopes to `new_value - old_value`, so total
  cost equals the total number of stones added (always `>= 0`).
- **Becoming free:** if the pile is *tight*, `orig = 0`, and `c = 1`, set `mask |= (1 << i)` for the next state
  (the pile is now strictly larger).
- The XOR parity updates as `p ^ c`.

### 5. Feasibility Filter (force XOR = 0)

After all `N` piles at bit `b` are processed, any state whose parity bit is `p = 1` is **discarded**
(set to `Infinity`). This forces the XOR of that bit across all piles to be `0` for every bit —
i.e. the final XOR of all piles is `0`.

### 6. Answer

After the last bit, take the **minimum cost over all states with `p = 0`** (the `mask` may be anything):

```text
answer = min(dp[mask])  for all masks with p = 0
```

### 7. Complexity

| Resource | Value |
| -------- | ----- |
| Bits | `31` (`30 .. 0`) |
| Piles | `N` |
| States | `2^(N+1)` |
| Choices per state | `2` |

Overall `O(31 · N · 2^(N+1))`, about `6 · 10^7` operations at `N = 15` — comfortably within the limits.

### 8. Mapping to the Code

| Step | Location |
| ---- | -------- |
| State space + base case `dp[0] = 0` | `unFairGame.ts:28-32` |
| MSB -> LSB bit loop | `unFairGame.ts:34-35` |
| Read original bit `orig` | `unFairGame.ts:39` |
| Choice `c ∈ {0,1}` and the "shrink" guard | `unFairGame.ts:47-48` |
| Cost `(c - orig) * 2^b` | `unFairGame.ts:50` |
| Free-mask update on `0 -> 1` bump | `unFairGame.ts:54-56` |
| XOR filter (drop `p = 1` states) | `unFairGame.ts:65-69` |
| Final answer over `p = 0` states | `unFairGame.ts:71-77` |
