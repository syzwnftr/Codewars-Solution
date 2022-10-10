/*

Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

*/

function isSortedAndHow(array) {
  let ascending = [...array].sort((a, b) => a - b);
  let descending = [...array].sort((a, b) => b - a);
  let result = "yes, ascending";

  for (let i = 0; i < array.length; i++) {
    if (ascending[i] !== array[i]) {
      result = "no";
    }
  }

  if (result === "no") {
    for (let j = 0; j < array.length; j++) {
      if (descending[j] !== array[j]) {
        break;
      } else {
        result = "yes, descending";
      }
    }
  }

  return result;
}
