function specialNumber(n) {
	let special = '012345';
	let strNum = n.toString();
	let bool = false;

	for(let i = 0;  i < strNum.length; i++) {
		if(special.includes(strNum[i])) {
			bool = true;
		} else {
			bool = false;
			return 'NOT';
		}
	}

	return 'Special!!';
}