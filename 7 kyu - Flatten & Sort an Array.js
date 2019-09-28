function flattenAndSort(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		let current = arr[i].sort();
		if(current.length == 0) {
			continue;
		} else {
			for(let j = 0; j < current.length; j++) {
				newArr.push(current[j])
				newArr.sort((a,b) => a-b);
			}
		}
	}

	return newArr;
}