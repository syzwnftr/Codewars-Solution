/*

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!


*/

function removeEveryOther(arr){
    return arr.map((val, i) =>  {
      if (i === 0) return val;
      return (i % 2 !== 0) ? undefined : val;
    }).filter(val => val !== undefined);
}

// one-line solution
const removeEveryOther = arr => {
    return arr.map((val,i) => (i === 0) ? val : (i % 2 !== 0) ? undefined : val).filter(val => val !== undefined);
}