/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!
*/

//First Solution
const doubleChar = (str) => str.split("").map(x => x + x).join("");


//Second Solution
function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}
