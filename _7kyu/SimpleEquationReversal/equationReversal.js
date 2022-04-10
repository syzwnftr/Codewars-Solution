/*

Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

More examples in test cases.

Good luck!

*/


function solve(eq) {
    let result = eq.replace(/[0-9]+/g, 'N').split('').reverse();
    let num = eq.split(/\D+/).filter(num => num != '').reverse();

     for(let i = 0; i < result.length; i++) {
        if(result[i] === 'N') {
            result[i] = num.shift();
        }
    }

    return result.join('');
}