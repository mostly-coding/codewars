// This function should return an object, but it's not doing what's intended. What's wrong?

//First Solution
function mystery() {
  var results = { sanity: "Hello" };
  return results;
}

////////////////////

//Second Solution
const mystery = () => ({sanity: 'Hello'});