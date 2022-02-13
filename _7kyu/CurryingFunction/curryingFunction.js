function multiplyAll(numArr) {
	return (intInput) => {
		const result = numArr.map(num => num * intInput);
		return result;
	}
}

