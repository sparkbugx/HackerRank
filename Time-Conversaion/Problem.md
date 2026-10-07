# Time Conversion: 12-hour AM/PM to 24-hour Military Time

Given a time in **12-hour AM/PM format**, convert it to **military (24-hour) time**.

### Conversion Rules:
- **12:00:00AM** on a 12-hour clock → **00:00:00** on a 24-hour clock
- **12:00:00PM** on a 12-hour clock → **12:00:00** on a 24-hour clock

### Example:
- Input: `12:01:00AM` → Output: `00:01:00`
- Input: `12:01:00PM` → Output: `12:01:00`

## Function Description

Complete the `timeConversion` function below.

### Parameter:
- `s`: a string representing time in 12-hour AM/PM format (e.g., `07:05:45PM`)

### Returns:
- the time in 24-hour format (e.g., `19:05:45`)

## Input Format

A single string that represents a time in 12-hour clock format (e.g., `07:05:45PM`).

## Constraints

- All input times are valid

## Sample Input 0

`07:05:45PM`

## Sample Output 0

`19:05:45`