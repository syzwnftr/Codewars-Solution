/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

*/

const createPhoneNumber = (numbers) => {
    return numbers.reduce((phoneNo, num, i) => {
        return i === 2 ? phoneNo += `${num}) ` : i === 5 ? phoneNo += `${num}-` : phoneNo += num;
    }, '(');
}

// alt
function createPhoneNumber(numbers){
    let phoneNo = '(';
    numbers.forEach((num, i) => {
      if(i === 2) {
        phoneNo += `${num}) `;
      } else if(i === 5) {
        phoneNo += `${num}-`;
      } else {
        phoneNo += num;
      }
    });
    return phoneNo;
}
