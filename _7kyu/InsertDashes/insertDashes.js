/*

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) 
that will insert dashes ('-') between each two odd digits in num.
For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

const insertDash = num => {
    const numArr = String(num).split('').map(number => parseInt(number));
    const testArr = [];
    numArr.forEach((numb, i) => {
        testArr.push(numb);
        if((numb % 2 ) !== 0 && (numArr[i+1] % 2) !== 0 && numArr[i+1] !== undefined) {
            testArr.push('-');    
        }
    })
    return testArr.map(num => num.toString()).join('');
}