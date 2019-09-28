function camelCase(word) {
	let arrWord = word.split(' ');
	let arr = arrWord.filter(str => str !== '');
	let result = '';

	for(let i = 0; i < arr.length; i++) {	
		let firstLetter = arr[i][0].toUpperCase();
		let newWord = firstLetter + arr[i].slice(1);
		result += newWord;
		
	}

	return result;
}