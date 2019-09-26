// If using console.log, use this...
function removeMinimum() {
	let numList = [2, 3, 4, 1, 5, 1, 1, 1];
	let value = Math.min(...numList)
	let firstPos = numList.indexOf(value)
	numList.splice(firstPos, 1);
	console.log(numList);
}
removeMinimum();

// If want to return value to function, use this...
const removeMinimum2 = (input) => {
	let numArray = input;
	let smallestValue = Math.min(...numArray);
	let firstPos  = numArray.indexOf(smallestValue);
	numArray.splice(firstPos, 1);
	return numArray;	
};


// Right answer(for codewars)
const removeMinimum3 = (numbers) => {
	function doWork() {
		let instResult = [];
		numbers.forEach(num => instResult.push(num));
		return instResult;
	}
	let result = doWork();
	let smallestValue = Math.min(...result);
	let firstPos  = result.indexOf(smallestValue);
	result.splice(firstPos, 1);
	return result;
};


