/*

Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

More examples in test cases.

Good luck!

*/


function solve(eq) {
    // replace number with 'N', split the string into an array and reverse it
    let result = eq.replace(/[0-9]+/g, 'N').split('').reverse();

    // split str into an array (only number) and reverse it
    let num = eq.split(/[^0-9]+/).filter(num => num != '').reverse();

    // replace every 'N' in result with number
    for(let i = 0; i < result.length; i++) {
        if(result[i] === 'N') {
            result[i] = num.shift();
        }
    }

    return result.join('');
}