
HackerRank Home
|
Prepare
Certify
Compete
Search

2
|
Switch to..

PrepareAlgorithmsWarmupMini-Max Sum
Mini-Max Sum
234 more points to get your next star!
Rank: 989683|Points: 241/475
Problem Solving
Problem
Submissions
Leaderboard
Discussions
Editorial
HackerRank Logo
|
PrepareAlgorithmsWarmupMini-Max Sum
Exit Full Screen View
Problem	Submissions	Leaderboard	Discussions	Editorial
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the  function with the following parameter(s):

: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.No value should be returned.

Note For some languages, like C, C++, and Java, the sums may require that you use a long integer due to their size.

Input Format

A single line of five space-separated integers.

Constraints


Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use a 64-bit integer to store the sums.

Need help to get started? Try the Solve Me First problem.

Language
TypeScript
More
1234567891011121314151617181920212223242526272829303132333435
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
…}

Line: 42 Col: 1

Test against custom input
BlogScoringEnvironmentFAQAbout UsHelpdeskCareersTerms Of ServicePrivacy Policy
