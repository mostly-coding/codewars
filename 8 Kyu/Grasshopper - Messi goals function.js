// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//First Solution
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//////////

//Second Solution
const goals = (...n) => n.reduce((s, v) => s + v, 0);

///////////

//Third Solution
function goals() {
  return [...arguments].reduce((a, b) => a + b, 0);
}
