function tidyNumber(n) {
	let strNum = n.toString();
	let bool = false;
	for(let i = 0; i < strNum.length-1; i++) {
		let firstNum = strNum[i];
		let secondNum = strNum[i+1];
		console.log(secondNum);

		if(firstNum < secondNum || firstNum === secondNum) {
			bool = true;
		} else {
			return bool = false;
		}
	}	

	return bool = true;
}