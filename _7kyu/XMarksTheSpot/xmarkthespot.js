/*

#'x' marks the spot

##Task:

Given a two dimensional array, return the co-ordinates of 'x'.

If 'x' is not inside the array, or if 'x' appears multiple times, return []

The co-ordinates should be zero indexed.

You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Example test cases:

'Return an empty array if input is an empty array' => []

[] 

'Return an empty array if no x found' => []

[
  ['o', 'o'],
  ['o', 'o']
]

'Return an empty array if more than one x found' => []

[
  ['x', 'o'],
  ['o', 'x']
]

'Return [0,0] when x at top left' => [0, 0]

[
  ['x', 'o'],
  ['o', 'o']
]

'Return [4,6] for the example below' => [4, 6]

[
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]



*/

 
function xMarksTheSpot(input) {
    const result = [];
   
    // convert 2d array into 1d
    const merged = input.reduce((currentArr, nextArr) => currentArr.concat(nextArr), []);

    // check if the converted array includes 'x'
    if(merged.includes('x') === true) {
        // the number of 'x' in the array
        let howManyX = merged.filter(char => char === 'x').length;
       
        if(howManyX !== 1) {
            return [];
        }

        for(let i=0; i < input.length; i++) {
            for(let j=0; j < input[i].length; j++) {
                if(input[i][j] === 'x') {
                    result.push(i);
                    result.push(input[i].indexOf(input[i][j]));
                }
            }   
        }
    }
    return result;  
}