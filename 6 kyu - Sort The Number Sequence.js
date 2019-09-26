function sortSequence(arr) {
	let newArr = [];
	let sum = [];
	let result = [];	
	let holder = [];

	// filling "newArr" with sub-array of number except 0 from "arr"
	// "holder" is an array to hold a num from "arr"
	// "holder" will be pushed to "newArr" when 0 appear in loop (but 0 wont be pushed to "holder")
	for(let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if(num !== 0) {
			holder.push(num);
		} else if(num === 0) {
			holder.sort((a,b) => a-b);
			newArr.push(holder);
			holder = [];
		}
		
	}
	// finding the sum of all number in sub-array in "newArray" 
	// the sum value will be stored in "sum" array
	// then it will be sorted in ascending order
	for(let j = 0; j < newArr.length; j++) {
		let current = 0;
		let element = newArr[j];
		
		element.forEach(num => {
			current += num;
		});
		
		sum.push(current);
		sum.sort((a,b) => a-b);	
	}
	// for every sum value in 'sum', we will compare it 
	// with the total sum of number in sub-array in "newArr" 
	// if the sum-values equal with the total sum of value in sub-array, 
	// then all the number in the sub-array will be pushed to "result" array
	// 'break' is used to place the number in its original order
	sum.forEach(total => {
			for(let i = 0; i < newArr.length; i++) {
				let currentArrSum = 0;
				
				newArr[i].forEach(num => {
					currentArrSum += num;	
				});

				if(total === currentArrSum) {
					newArr[i].push(0);
					newArr[i].forEach(num => {
						result.push(num);
					});

					newArr.splice(newArr.indexOf(newArr[i]), 1);
					break;
				}

			}
		});

	return result;
}


