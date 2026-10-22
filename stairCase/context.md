# Staircase

## Staircase detail
This is a staircase of size $n = 4$:

```text
   #
  ##
 ###
####
```

Its base and height are both equal to $n$. It is drawn using `#` symbols and spaces. **The last line is not preceded by any spaces.**

Write a program that prints a staircase of size $n$.

---

## Function Description
Complete the `staircase` function with the following parameter(s):
* `int n`: an integer

### Print
Print a staircase as described above. No value should be returned.

**Note:** The last line is not preceded by spaces. All lines are right-aligned.

---

## Input Format
A single integer, $n$, denoting the size of the staircase.

## Constraints
* $0 < n \le 100$

---

## Sample Input

```text
6
```

## Sample Output

```text
     #
    ##
   ###
  ####
 #####
######
```

## Explanation

The staircase is right-aligned, composed of `#` symbols and spaces, and has a height and width of $n = 6$.