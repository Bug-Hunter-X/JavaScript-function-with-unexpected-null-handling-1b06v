# JavaScript Function with Unexpected Null Handling

This repository demonstrates a common, yet subtle, bug in JavaScript function related to null handling. The `foo` function intends to add two numbers but returns `null` prematurely if either input is `null`, even if the other is a valid number. This behavior might be unexpected and lead to errors in applications.

## Bug Description:
The issue lies within the conditional statement.  The function should ideally handle cases where one input is `null` gracefully, perhaps by treating `null` as 0 or throwing an error. The current implementation short-circuits addition without considering non-null values.

## Solution:
The provided solution demonstrates how to handle null values more appropriately.  Choose the approach (treating null as 0 or throwing an error) that best suits the application's requirements.

## How to Reproduce:
1. Clone this repository.
2. Open `bug.js` to see the buggy function.
3. Run `bug.js` in a JavaScript environment (Node.js, browser console, etc.).
4. Observe the unexpected `null` output for cases where one argument is `null` and the other is a number.
5. Compare the behavior with the corrected version in `bugSolution.js`.