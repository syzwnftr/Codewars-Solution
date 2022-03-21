/*

Dot Calculator

You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

    + Addition
    - Subtraction
    * Multiplication
    // Integer Division

Your Work (Task)

You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
Examples (Input => Output)

* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""

 */

function dotCalculator (equation) {
    if(equation.includes('+')) {
      let result = equation.split(' ').join('').split('+').join('');
      return result;
    }
    
    if(equation.includes('-')) {
      const arr = equation.split(' ').join('').split('-'); 
      let n = arr[0].length - arr[1].length;
      let result = '';
      for(let i = 0; i < n; i++) {
        result += '.';
      }
      return result;
    }
    
    if(equation.includes('*')) {
      const arr = equation.split(' ').join('').split('*'); 
      let n = arr[0].length * arr[1].length;
      let result = '';
      for(let i = 0; i < n; i++) {
        result += '.';
      }
      return result;
    }
    
    if(equation.includes('//')) {
      const arr = equation.split(' ').join('').split('//'); 
      let n;
      if(arr[0].length % arr[1].length !== 0) {
          n = (arr[0].length / arr[1].length) - 1;
      } else {
        n = arr[0].length / arr[1].length;
      }
      let result = '';
      for(let i = 0; i < n; i++) {
        result += '.';
      }
      return result;
    }
  }
