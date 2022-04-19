/*

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, 
lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck!


*/

const solve = (s) => {
    const uppercase = s.match(/[A-Z]/g) || [];
    const lowercase = s.match(/[a-z]/g) || [];
    const num = s.match(/[0-9]/g) || [];
    const specialChar = s.match(/[^a-zA-Z0-9]/g) || [];

    return [uppercase.length, lowercase.length, num.length, specialChar.length];
   
}