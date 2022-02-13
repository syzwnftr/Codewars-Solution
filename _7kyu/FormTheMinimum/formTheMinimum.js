function findMinValue(arr) {
	let removeDupl = new Set(arr.sort());
	let minValArr = ([...removeDupl]);
	let result = '';

	for(let i = 0; i < minValArr.length; i++) {
		result += String(minValArr[i]);
	}

	return Number(result);
}
