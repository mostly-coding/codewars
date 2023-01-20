/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//First Solution
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

////////////////////

//Second Solution
function fakeBin(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}
