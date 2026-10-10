# Protein Ring Mutation Simulation

Some scientists are working on protein recombination, and during their research, they have found a remarkable fact: there are 4 proteins in the protein ring that mutate after every second according to a fixed pattern. For simplicity, proteins are called A, B, C, D (you know, protein names can be very complicated). A protein mutates into another one depending on itself and the protein right after it. Scientists determined that the mutation table goes like this:

## Mutation Table

| Current \ Next | A | B | C | D |
|----------------|---|---|---|---|
| **A**          | A | B | C | D |
| **B**          | B | A | D | C |
| **C**          | C | D | A | B |
| **D**          | D | C | B | A |

Here rows denote the protein at current position, while columns denote the protein at the next position. And the corresponding value in the table denotes the new protein that will emerge. So for example, if protein i is A, and protein i + 1 is B, protein i will change to B. All mutations take place simultaneously. The protein ring is seen as a circular list, so last protein of the list mutates depending on the first protein.

## Input Format

Input contains 2 lines.
- First line has 2 integers `n` and `k`, being the length of the protein ring and the desired number of seconds.
- Second line contains a string of length `n` containing uppercase letters A, B, C, or D only, describing the ring.

### Constraints

### Output Format

Output a single line with a string of length `n`, describing the state of the ring after `k` seconds.

## Sample Input 0

```
5 15
AAAAD
```

## Sample Output 0

```
DDDDA
```

## Explanation 0

The complete sequence of mutations is:

```
AAADD
AADAD
ADDDD
DAAAD
DAADA
DADDD
DDAAA
ADAAD
DDADD
ADDAA
DADAA
DDDAD
AADDA
ADADA
DDDDA

https://www.hackerrank.com/challenges/pmix/problem