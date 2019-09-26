function numericals(str) {
	let arr = str.split('');
	let obj = {};
	let strNumerical = '';

	arr.forEach(letter => {
		if(!obj[letter]) {
			obj[letter] = 1;
		} else {
			obj[letter] += 1;
		}

		strNumerical += obj[letter];
	});

	console.log(obj);
	return strNumerical;
}
