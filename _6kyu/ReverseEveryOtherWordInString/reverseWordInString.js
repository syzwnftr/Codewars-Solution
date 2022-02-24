function reverse(str) {
	let arr = str.split(' ').filter(word => word !== "");

	for(let i = 0; i < arr.length; i++) {
		if(i % 2 !== 0) {
			const letterArr = arr[i].split('').reverse().join('');
			arr[i] = letterArr;
		}
	}

	return arr.join(' ');
}