/*

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.


*/

function unusedDigits() {
    let numArr = '0123456789';
    let result = [];
    let str = '';

    for(let i = 0; i < arguments.length; i++) {
        let arrToStr = arguments[i].toString();
        str += arrToStr;
    }

    for(let j = 0; j < numArr.length; j++) {
        if(!str.includes(numArr[j])) {
            result.push(numArr[j]);
        }
    }

    return result.join('');  
}



