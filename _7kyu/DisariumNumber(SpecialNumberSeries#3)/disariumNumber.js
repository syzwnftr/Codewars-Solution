function disariumNumber(n) {
	let strNum = String(n);
	let total = 0;
	for(let i = 0; i < strNum.length; i++) {
		let power = i + 1;
		total += (strNum[i]**power);
	}

	if(total === n) {
		return "Disarium !!"
	} else {
		return "Not !!"
	}
}