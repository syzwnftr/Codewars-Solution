/*

In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"

Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

*/

function nameThatNumber(num) {
    const zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToNineTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twentyToNinety = ['twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];

    if(String(num).length === 1) {
        return zeroToNine[num];
    } 

    if(String(num).length === 2) {
        if(String(num)[0] === '1') {
            let lastDigit = Number(String(num)[1]);

            return tenToNineTeen[lastDigit];
        }

        let firstDigit = Number(String(num)[0]);
        let secondDigit = Number(String(num)[1]);

        return secondDigit ? `${twentyToNinety[firstDigit - 2]} ${zeroToNine[secondDigit]}` : `${twentyToNinety[firstDigit - 2]}`;
    }
}
