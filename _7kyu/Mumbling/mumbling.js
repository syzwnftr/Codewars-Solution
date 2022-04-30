/*

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
    const result = [];
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        count++;
        let word = '';
        
        if(count === 1) {
            word += s[i].toUpperCase();
        } else {
            for(let j = 0; j < count; j++) {
                (j === 0) ? word += s[i].toUpperCase() : word += s[i].toLowerCase();  
            }
        }
        result.push(word);
    }

    return result.join('-');
}
