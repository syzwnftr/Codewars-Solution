function jumpingNumber(num) {
	let strNum = num.toString();
	let jumpOrNot = null;
	
	if(strNum.length === 1) {
		return "Jumping!!";
	}

	for(let i = 0; i < strNum.length-1; i++) {
		let firstNum = parseInt(strNum[i]);
		let secondNum = parseInt(strNum[i+1]);

		if(firstNum - secondNum === 1 || firstNum - secondNum === -1) {
			jumpOrNot = true;
		} else if(firstNum - secondNum !== 1 || firstNum - secondNum !== -1) {
			jumpOrNot = false;
			return "Not!!";
		}
	}	

	return "Jumping!!";

}