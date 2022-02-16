function automorphic(n) {
	let strNum = n.toString();
	let square = String(n**2).split('');
	let holder = [];
	for(let i = 0; i < strNum.length; i++) {
		if(holder.length === 0) {
			holder.splice(0, 0, square.pop());
		} else {
			holder.splice(0, 0, square.pop());
		}
	}

	let numHolder = Number(holder.join(''));

	if(numHolder === n) {
		return 'Automorphic';
	} else {
		return 'Not!!';
	}

}