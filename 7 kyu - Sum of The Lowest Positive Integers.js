const sumLowestValue = function() {
	const numArray = [-22, -1, 13, 17];
	let total;
	let num1, num2;

	num1 = Math.min(...numArray);

	for(let i=0; i < numArray.length; i++) {
		if (numArray[i] === num1) {
			numArray.splice(i, 1);
		}
	}

	num2 = Math.min(...numArray);
	total = num1 + num2;
	console.log("Total:", total);
}

sumLowestValue();