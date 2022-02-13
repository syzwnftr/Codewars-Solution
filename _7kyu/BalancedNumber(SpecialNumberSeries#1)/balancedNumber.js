function balancedNum(num) {
	let strNum = String(num).split('');
	let leftSide = [];
	let rightSide = [];
	let sumLeftSide = 0;
	let sumRightSide = 0;
	
	if(strNum.length === 1) {
		return "Balanced";
	}

	if(strNum.length % 2 === 0) {
		let spotToFill = (strNum.length / 2) - 1;
		for(let i = 0; i < strNum.length; i++) {
			if(leftSide.length !== spotToFill) {
				leftSide.push(Number(strNum.shift()));
			}

			if(rightSide.length !== spotToFill) {
				rightSide.push(Number(strNum.pop()));
			}
		}
	} else if(strNum.length % 2 !== 0) {
		let spotToFill = (strNum.length - 1) / 2;
		for(let i = 0; i < strNum.length; i++) {
			if(leftSide.length !== spotToFill) {
				leftSide.push(Number(strNum.shift()));
			}

			if(rightSide.length !== spotToFill) {
				rightSide.push(Number(strNum.pop()));
			}
		}
	}

	leftSide.forEach(num => sumLeftSide += num);
	rightSide.forEach(num => sumRightSide += num);

	if(sumLeftSide === sumRightSide) {
		return "Balanced";
	} else {
		return "Not Balanced";
	}
		
}