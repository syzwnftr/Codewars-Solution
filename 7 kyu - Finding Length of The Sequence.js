function lengthOfSequence(arr, n) {
	let firstIndex = arr.indexOf(n); 
	let lastIndex = arr.lastIndexOf(n);
	const nArr = arr.filter(num => num === n);

	if(nArr.length > 2) {
		return 0;
	} else {
		return (lastIndex - firstIndex) + 1
	}
}

