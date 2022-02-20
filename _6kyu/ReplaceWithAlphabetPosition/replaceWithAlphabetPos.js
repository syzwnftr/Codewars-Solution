const alphabetPosition = (text) => {
	const alphbt = 'abcdefghijklmnopqrstuvwxyz';
	const textArr = text.toLowerCase().split('');
	const letterPosition = textArr.map(letter => {
		if(alphbt.includes(letter)) {
			return alphbt.charCodeAt(alphbt.indexOf(letter)) - 96;
		}

	});

	return letterPosition.filter(position => position !== undefined).join(' ');
};