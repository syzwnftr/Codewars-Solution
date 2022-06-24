/*

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

*/


function consecutive(arr, a, b) {
    let newArr;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === a || arr[i] === b) {
        newArr = arr.slice(i, i+2);
        break;
        }
    }

    for(let j = 0; j < newArr.length; j++) {
        if(newArr[j] === a || newArr[j] === b) {
        return (newArr[j+1] === a || newArr[j+1] === b) ? true : false; 
        }
    }
}