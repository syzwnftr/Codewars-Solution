/*

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS
Examples

""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"


*/

function swap(str){
    return str.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
}