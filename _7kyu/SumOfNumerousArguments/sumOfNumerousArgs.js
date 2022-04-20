/*

After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. 
If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.
Example

findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 

Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript


*/

//solution #1
function findSum(){
    const negativeNum = num => num < 0;
    return (arguments.length !== 0) ? [...arguments].some(negativeNum) ? -1 : [...arguments].reduce((sum, curr) => sum + curr, 0) : 0;
}

//solution #2
function findSum(){
    let sum = 0;
    if(arguments.length !== 0) {
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i] < 0) {
                return -1;
            }
            sum += arguments[i];
        }
    }

    return sum;
}


