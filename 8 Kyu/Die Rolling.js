/*
Hello! Today your task is to build a basic die feature, where you will get a range in the form (min, max) - both included - and return a random number in the inclusive range.

Props if you don't use your language's random library!

dice(2, 7); // returns a value that can be 2, 3, 4, 5, 6, 7
Good luck!
*/

//First Solution
function dice(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

//////////

//Second Solution
function dice(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}
