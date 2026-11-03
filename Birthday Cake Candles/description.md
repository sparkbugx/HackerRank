# 🕯️ Birthday Cake Candles - HackerRank Solution

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)  
![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)  
![Category: Algorithms](https://img.shields.io/badge/Category-Algorithms-orange)

## 📝 Problem Description

You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Your task is to count how many candles are the tallest.

Given the candle heights, determine how many candles have the maximum height.

**Example:**

```
candleHeight = [4, 4, 1, 3]
```

The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

---

## 💻 TypeScript Solution

```typescript
function birthdayCakeCandles(candleHeight: number[]): number {
    // Find the maximum height among all candles
    let maxHeight: number = Math.max(...candleHeight);
    
    // Count how many candles have the maximum height
    let count: number = 0;
    for (let i = 0; i < candleHeight.length; i++) {
        if (candleHeight[i] === maxHeight) {
            count++;
        }
    }
    
    return count;
}
```

---

## 🧪 Example Walkthrough

**Input:** `candleHeight = [3, 2, 1, 3]`

1. Maximum height = `3`
2. Count of candles with height `3` = `2`
3. **Output:** `2`

**Input:** `candleHeight = [4, 4, 1, 3]`

1. Maximum height = `4`
2. Count of candles with height `4` = `2`
3. **Output:** `2`

---

## 📝 Function Description

Complete the `birthdayCakeCandles` function in the editor below.

**Parameter:**
- `candleHeight: number[]` - the heights of the candles

**Returns:**
- `number` - the number of candles that are tallest

## 📥 Input Format

The first line contains a single integer, `n`, the size of `candleHeight`.
The second line contains `n` space-separated integers, where each integer describes the height of a candle.

## 📋 Constraints

- `1 ≤ n ≤ 10^5`
- `1 ≤ candleHeight[i] ≤ 10^7`

## 📊 Sample Input 0

```
4
3 2 1 3
```

## 📊 Sample Output 0

```
2
```

## 📝 Explanation 0

Candle heights are `3, 2, 1, 3`. The tallest candles are `3` units, and there are `2` of them.

---