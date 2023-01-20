/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)

should return

[5.0, 10.0, 15.0]
*/

//First Solution
function multiples(m, n) {
  var arr = [];
  for (var i = 1; i <= m; ++i) arr.push(n * i);
  return arr;
}

/////////////////////

//Second Solution
function multiples(m, n) {
  return Array.from(Array(m), (_v, i) => (i + 1) * n);
}
