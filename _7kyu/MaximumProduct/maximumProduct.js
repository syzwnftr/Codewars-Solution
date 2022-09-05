/*

Task

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

*/

function adjacentElementsProduct(array) {
    let maxProduct = undefined;
    array.forEach((num, i) => {
        if((i + 1) !== array.length) {
            let multiply = array[i] * array[i + 1];
            if(multiply > maxProduct || maxProduct === undefined) {
                maxProduct = multiply;
            }
        }  
    })
    return maxProduct;
}
