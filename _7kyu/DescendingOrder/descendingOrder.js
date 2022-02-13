// Create a function that take a value of non-negative integers and display it in descending order based of the the value of the integers
// Test case: 33452 will return -> 54332


// Solution #1
function doWork(input) {
	let value = input.toString();
	value = value.split("");
	const compareFunction = (a,b) => b-a;
	let descOrder = value.sort(compareFunction)
	let strDesc = descOrder.join("");
	let intDesc = Number(strDesc);
	return intDesc;
}

// Solution #2
const doWork2 = function (input) {
	let value = input.toString().split("");
	let sortValue = value.sort();
	let descValue = sortValue.reverse();
	let reverseStr = descValue.join("");
	return Number(reverseStr);
};

// Solution #3
const doWork3 = (input) => Number(String(input).split("").sort().reverse().join(""));