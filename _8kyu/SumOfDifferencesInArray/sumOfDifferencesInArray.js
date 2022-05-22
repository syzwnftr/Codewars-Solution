/*

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

*/

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a)
              .map((num, i) => num - arr[i+1])
              .filter(num => isNaN(num) === false)
              .reduce((sum, curr) => sum + curr, 0);
}