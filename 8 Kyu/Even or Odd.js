// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//First Solution
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

//Second Solution
const evenOrOdd = (number) => (number % 2 ? "Odd" : "Even");
