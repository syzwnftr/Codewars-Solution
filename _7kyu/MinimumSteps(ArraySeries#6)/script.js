
/*  Minimum Steps (Array Series #6)

Given an array of N integers, you have to find 
how many times you have to add up the smallest numbers in the array 
until their Sum becomes greater or equal to K.


Input >> Output Examples

Example #1

minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

Explanation:

    We add two smallest elements (1 + 2), their sum is 3 .

    Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

    Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .



Example #2

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)

Explanation:

    We add two smallest elements (4 + 2), their sum is 6 .

    Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

    Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

    Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
*/


// solution #1
function minimumSteps(numbers, value){
    return numbers.sort((a, b) => a - b).filter(number => (value -= number) > 0).length;
}

// solution #2 (using reduce())
function minimumSteps(numbers, value){
    const arr = [];
    numbers.sort((a, b) => a - b).reduce((total, num) => {
     if((total - num) > 0) {
       arr.push(num);
       return total - num;
     } else {
       return arr;
     }
    }, value);
    
    return arr.length;
}

 
     