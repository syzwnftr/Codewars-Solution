function maxTriSum(arr) {
	let newArr = [...new Set(arr)];
	let total = 0;

	if(newArr.length === 3) {
		newArr.forEach(num => total += num);
		return total;
	} 

	if(newArr.length > 3) {
		for(let i = newArr.length; i > 3; i--) {
			newArr.splice(newArr.indexOf(Math.min(...newArr)), 1);
		}
		newArr.forEach(num => total += num);
		return total;	
	}
}