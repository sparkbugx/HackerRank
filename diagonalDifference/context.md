<div align="center">

# Diagonal Difference

[![HackerRank](https://img.shields.io/badge/HackerRank-Diagonal%20Difference-00EA64?style=for-the-badge&logo=hackerrank&logoColor=white)](https://www.hackerrank.com/challenges/diagonal-difference/problem)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Algorithms-blue?style=for-the-badge)

**Given a square matrix, calculate the absolute difference between the sums of its diagonals.**

[Problem Statement](https://www.hackerrank.com/challenges/diagonal-difference/problem) &nbsp;•&nbsp; [Explanation](#explanation)

</div>

---

## Example

For example, the square matrix `arr` is shown below:

```text
1 2 3
4 5 6
9 8 9
```

* The left-to-right diagonal = `1 + 5 + 9 = 15`
* The right-to-left diagonal = `3 + 5 + 9 = 17`

Their absolute difference is `|15 - 17| = 2`.

---

## Function Description

Complete the `diagonalDifference` function with the following parameter:

| Parameter |         Type         |                  Description                   |
| :-------: | :------------------: | :--------------------------------------------: |
|  `arr`    | `int arr[n][n]`      | a square 2-D array of integers                 |

### Returns

| Type  |                  Description                   |
| :---: | :--------------------------------------------: |
| `int` | the absolute difference in sums along the diagonals |

---

## Input Format

* The first line contains a single integer `n`, the number of rows and columns in the square matrix `arr`.
* Each of the next `n` lines describes a row `arr[i]`, and consists of `n` space-separated integers `arr[i][j]`.

---

## Constraints

* `-100 <= arr[i][j] <= 100`

---

## Sample Input

```text
STDIN           Function
-----           --------
3               arr[][] sizes n = 3, m = 3
11 2 4          arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
4 5 6
10 8 -12
```

## Sample Output

```text
15
```

---

## Explanation

The primary diagonal is:

```text
11
   5
     -12
```

Sum across the primary diagonal: `11 + 5 - 12 = 4`.

The secondary diagonal is:

```text
     4
   5
10
```

Sum across the secondary diagonal: `4 + 5 + 10 = 19`.

Difference: `|4 - 19| = 15`.

> **Note:** `|x|` is the absolute value of `x`.

---

<div align="center">

**Problem URL:** <https://www.hackerrank.com/challenges/diagonal-difference/problem>

</div>
