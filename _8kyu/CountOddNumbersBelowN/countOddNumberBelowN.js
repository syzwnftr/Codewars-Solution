/*

Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!

*/

function oddCount(n){
    return Math.floor(n/2);
}

// DO NOT USE THIS SOLUTION 
// This solution will only work on small int
// Big int will make it out of memory
function oddCount(n){
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(i % 2 !== 0) {
            count++
        }
    }
    return count;
}


