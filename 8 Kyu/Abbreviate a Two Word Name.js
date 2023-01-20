// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// First Solution
function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join(".");
}

////////////////////

//Second Solution
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

////////////////////

// Third Solution
function abbrevName(name) {
  var nameArr = name.split(" ");
  return (nameArr[0][0] + "." + nameArr[1][0]).toUpperCase();
}
