// Note that this is not a good practice
// 

function firstNSmallest(arr, n) {
	const result = arr.map(num => null);
	if(n === 0) {
		return [];
	}

	// something to replace in original array
	let totalSum = 9999999;

	for(let j = 0; j < n; j++) {
		let smallest = Math.min(...arr);
		result.splice(arr.indexOf(smallest), 1, smallest);
		arr.splice(arr.indexOf(smallest), 1, totalSum);
		console.log(result)
		console.log(arr)	
	}
	return result.filter(num => num !== null);
 }


