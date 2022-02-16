function strong(n) {
	let strNum = String(n);
	let totalSum = 0;

	for(let i = 0; i < strNum.length; i++) {
		let element = Number(strNum[i]);
		let totalMul = 1;
		

		if(element === 0) {
			totalMul = 1;
		} else {
			for(let j = 1; j <= element; j++) {
				totalMul *= j;
			}	
		}
		
		totalSum += totalMul;
	}

	if(totalSum === n) {
		return "STRONG!!!!";
	} else {
		return "Not Strong !!"; 
	}
}