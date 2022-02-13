// My solution
const XO = str => {
	let input = str.toLowerCase();
	let obj = {};
	const xo = 'ox';

	for(let i = 0; i <  input.length; i++) {
		let letter;
		letter = input[i];
		if(xo.includes(letter)) {
			if(!obj[letter]) {
				obj[letter] = 1;
			} else {
				obj[letter] += 1;
			}
		}
	}

	return obj.o === obj.x;
};


// Solution from Codewars
const XO2 = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}