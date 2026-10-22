<div align="center">

# Plus Minus

[![HackerRank](https://img.shields.io/badge/HackerRank-Plus%20Minus-00EA64?style=for-the-badge&logo=hackerrank&logoColor=white)](https://www.hackerrank.com/challenges/plus-minus/problem)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Warmup-blue?style=for-the-badge)

**Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.**

[Problem Statement](https://www.hackerrank.com/challenges/plus-minus/problem) &nbsp;•&nbsp; [Explanation](#explanation)

</div>

---

## Example

`arr = [1, 1, 0, -1, -1]`

There are `n = 5` elements: two positive, two negative and one zero. Their ratios are `2/5 = 0.400000`, `2/5 = 0.400000` and `1/5 = 0.200000`. Results are printed as:

```text
0.400000
0.400000
0.200000
```

---

## Function Description

Complete the `plusMinus` function with the following parameter:

| Parameter |    Type    |         Description          |
| :-------: | :--------: | :--------------------------: |
|  `arr`    | `int arr[n]` | an array of integers      |

### Prints

Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. **The function does not return a value.**

| Order | Ratio        | Description                        |
| :---: | :----------- | :--------------------------------- |
|  `1`  | `positive`   | count of values `> 0` divided by `n` |
|  `2`  | `negative`   | count of values `< 0` divided by `n` |
|  `3`  | `zero`       | count of values `= 0` divided by `n` |

---

## Input Format

* The first line contains an integer `n`, the size of the array.
* The second line contains `n` space-separated integers that describe `arr[n]`.

---

## Constraints

* `0 < n <= 100`
* `-100 <= arr[i] <= 100`

---

## Sample Input

```text
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Sample Output

```text
0.500000
0.333333
0.166667
```

---

## Explanation

* There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
* The proportions of occurrence are positive: `3/6 = 0.500000`, negative: `2/6 = 0.333333` and zeros: `1/6 = 0.166667`.

> **Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to `10^-4` are acceptable.

---

<div align="center">

**Problem URL:** <https://www.hackerrank.com/challenges/plus-minus/problem>

</div>
