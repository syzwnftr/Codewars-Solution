/*

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

    lst contains integers, that means it may contain some negative numbers
    if lst is empty or contains a single element, return 0
    lst is not sorted

[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

Have fun!


*/

function maxDiff(list) {
    let max, min;
    if(list.length === 0) {
      max = 0;
      min = 0;
    } else {
        list.forEach(num => {
            if(max === undefined && min === undefined) {
                max = num;
                min = num;
            }
            
            if(max !== undefined && num > max) {
                max = num;
            }

            if(min !== undefined && num < min) {
                min = num;
            }
        });
    }
  
    return max - min;
};


/* better approach

function maxDiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0;
};

*/