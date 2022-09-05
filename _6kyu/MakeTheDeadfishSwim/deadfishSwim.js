/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

function parse(data) {
    let num = 0;
    let arr = [];
    for(let i = 0; i < data.length; i++) {
        switch(data[i]) {
            case 'i':
                num += 1;
                break;
            case 'd':
                num -= 1;
                break;
            case 's':
                num = num ** 2;
                break;
            case 'o':
                arr.push(num);
                break;
            default: 
                break;
        }
    }

    return arr;
}
