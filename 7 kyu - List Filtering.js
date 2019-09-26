// 'More-clear' version
function filterList(input) {
	const arryList = input.filter(list => {
		return isNaN(list) === false;
	});	

	return arryList;
}


// Simplified version
function filterList2(input) {
	return input.filter(list => isNaN(list) === false);	
}
/* The above version have no problem to filter out a alphabetical character that is a string */
/* However, it will still treat a numerical string as a number. The program supposed to print out only number data type */
/* For example: Test case: ([1,2,'aasf','1','123',123]) will return [1,2,'1','123',123] */


// USE THIS!
// More accurate version
function filterList3(input) {
	return input.filter(list => typeof(list) === "number");	
}
/* Above function will produce a new array/list that only consist of number data type */