function highestRank(arr){
	let obj = {};

	arr.forEach(num => {
		if(!obj[num]) {
			obj[num] = 1;
		} else {
			obj[num] += 1;
		}

	});

	let arrValue = Object.values(obj);
	let arrProp = Object.keys(obj);
	let maxValue = Math.max(...arrValue);

	let highestProp = arrProp.filter(prop => {
		if(obj[prop] === maxValue) {
			return prop;
		}
	});

	return Math.max(...highestProp);
	
}

