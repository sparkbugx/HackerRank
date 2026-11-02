

# 🧮 Mini-Max Sum - HackerRank Solution

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)
![Category: Algorithms](https://img.shields.io/badge/Category-Algorithms-orange)

## 📝 Problem Description

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

**Example:**
`arr = [1, 3, 5, 7, 9]`
* The minimum sum is `1 + 3 + 5 + 7 = 16`
* The maximum sum is `3 + 5 + 7 + 9 = 24`
* **Output:** `16 24`

---

## 💻 TypeScript Solution

```typescript
function miniMaxSum(arr: number[]): void {
    let totalSum: number = 0;
    
    // Initialize min and max with the first element of the array
    let minVal: number = arr[0];
    let maxVal: number = arr[0];
    
    // Loop through the array to calculate the total sum, min, and max values
    for (let i = 0; i < arr.length; i++) {
        let currentNumber: number = arr[i];
        
        totalSum += currentNumber;
        
        // Update minimum value if a smaller number is found
        if (currentNumber < minVal) {
            minVal = currentNumber;
        }
        
        // Update maximum value if a larger number is found
        if (currentNumber > maxVal) {
            maxVal = currentNumber;
        }
    }
    
    // Calculate the minimum and maximum possible sums
    let minSum: number = totalSum - maxVal;
    let maxSum: number = totalSum - minVal;
    
    // Print the results as space-separated integers
    console.log(`${minSum} ${maxSum}`);
}