function menFromBoys(arr) {
	const arrNew = [...new Set(arr)];
	const evenNum = arrNew.filter(num => num % 2 === 0).sort((a,b) => a-b);
	const oddNum = arrNew.filter(num => num % 2 !== 0).sort((a,b) => b-a);
	const result = [];
	evenNum.forEach(num => result.push(num));
	oddNum.forEach(num => result.push(num));

	return result;

}