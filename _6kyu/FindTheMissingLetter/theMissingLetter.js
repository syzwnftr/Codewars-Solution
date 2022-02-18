// My solution
// Limit on finding one letter only
// But how to solve on multiple missing letter?
function findMissingLetter(str) {
	let input = str.join('');
	const letter = 'abcdefghijklmnopqrstuvwxyz';
	const letter2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let firstLetter = input[0];
	let lastLetter = input[input.length - 1];
	let holder;
	if(letter.includes(firstLetter) && letter.includes(lastLetter)) {
		holder = letter.slice(letter.indexOf(firstLetter), letter.indexOf(lastLetter) + 1);	
	} else if(letter2.includes(firstLetter) && letter2.includes(lastLetter)) {
		holder = letter2.slice(letter2.indexOf(firstLetter), letter2.indexOf(lastLetter) + 1);	
	}

	for(let i = 0; i < holder.length; i++) {
		if(holder[i] !== input[i]) {
			return holder[i];
		}
	}
	
}


// Some answer from codewars to study on
function findMissingLetter2(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}