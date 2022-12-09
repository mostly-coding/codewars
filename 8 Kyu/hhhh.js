/*
Task:

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

//First Solution
function remainder(n, m) {
  return n > m ? n % m : m % n;
}

////////////////////

//Second Solution
function remainder(a, b) {
  if (b > a) return b % a;
  else return a % b;
}
