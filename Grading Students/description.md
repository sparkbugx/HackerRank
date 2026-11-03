# 🎓 Grading Students - HackerRank Solution

![Difficulty: Easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen)  
![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)  
![Category: Algorithms](https://img.shields.io/badge/Category-Algorithms-orange)

## 📝 Problem Description

HackerLand University has the following grading policy:

- Every student receives a `grade` in the inclusive range from `0` to `100`.
- Any `grade` less than `40` is a failing grade.

Sam is a professor at the university and likes to round each student's `grade` according to these rules:

- If the difference between the `grade` and the next multiple of `5` is less than `3`, round the `grade` up to the next multiple of `5`.
- If the value of `grade` is less than `38`, no rounding occurs as the result will still be a failing grade.

**Examples:**

- `grade = 84` rounds to `85` (85 - 84 is less than 3)
- `grade = 29` does not round (result is less than 38)
- `grade = 57` does not round (60 - 57 is 3 or higher)

Given the initial value of `grade` for each of Sam's `n` students, write code to automate the rounding process.

---

## 💻 TypeScript Solution

```typescript
function gradingStudents(grades: number[]): number[] {
    return grades.map((grade) => {
        // Failing grades are never rounded
        if (grade < 38) {
            return grade;
        }

        // Find the next multiple of 5
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

        // Round up only if the difference is less than 3
        return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
    });
}
```

---

## 🧪 Example Walkthrough

**Input:** `grades = [73, 67, 38, 33]`

1. `73` → next multiple of `5` is `75`, difference is `2` → rounded to `75`
2. `67` → next multiple of `5` is `70`, difference is `3` → stays `67`
3. `38` → next multiple of `5` is `40`, difference is `2` → rounded to `40`
4. `33` → less than `38` → stays `33`

**Output:** `[75, 67, 40, 33]`

---

## 📝 Function Description

Complete the `gradingStudents` function in the editor below.

**Parameter:**
- `grades: number[]` - the grades before rounding

**Returns:**
- `number[]` - the grades after rounding

## 📥 Input Format

The first line contains a single integer, `n`, the number of students.
Each of the subsequent `n` lines contains a single integer, `grades[i]`.

## 📋 Constraints

- `1 ≤ n ≤ 60`
- `0 ≤ grades[i] ≤ 100`

## 📊 Sample Input 0

```
4
73
67
38
33
```

## 📊 Sample Output 0

```
75
67
40
33
```

## 📝 Explanation 0

- Student 1 received a `73`, and the next multiple of `5` from `73` is `75`. Since `75 - 73 < 3`, the student's grade is rounded to `75`.
- Student 2 received a `67`, and the next multiple of `5` from `67` is `70`. Since `70 - 67 = 3`, the grade will not be modified and the student's final grade is `67`.
- Student 3 received a `38`, and the next multiple of `5` from `38` is `40`. Since `40 - 38 < 3`, the student's grade is rounded to `40`.
- Student 4 received a grade below `38`, so the grade will not be modified and the student's final grade is `33`.

---
