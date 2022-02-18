// My solution #1 (hmm not right)
function mostValueWord(str) {
	let arrWord = str.toLowerCase().split(' ', str.length - 1);
	let wordValue = 0;
	let totalValue = 0;
	let valueableWord;

	for(let i = 0; i < arrWord.length; i=0) {
		let word = arrWord.pop();
		let arrLetter = word.split('');

		for(let j = 0; j < arrLetter.length; j=0) {
			let letter = arrLetter.pop();
			let currentVal = letter.charCodeAt(0) - 96;
			totalValue = totalValue + currentVal;	
		}

		if(totalValue > wordValue) {
			wordValue = totalValue;
			valueableWord = word;
		}

		totalValue = 0;
	}

	return valueableWord;
}


// My solution #2 
// Extended from the above solution
function mostValueWord2(str) {
  // transform input into an array of words
  let arrWord = str.toLowerCase().split(' ');
  let wordValue = 0;
  let sum = 0;
  let word;

  // iterate the array of words ["hello", "my", "name", "is"]
  for(let i = 0; i < arrWord.length; i++) {
    // iterate the letter of the words 
    // for example arrWord[0] will iterate "hello"
    // and returning the charCode value for the word
    for(let j = 0; j < arrWord[i].length; j++) {
      sum += arrWord[i].charCodeAt(j) - 96; 
    }

    // assigning the value of sum, which hold the charCode value of the word
    // to a wordValue variable if the sum > wordValue
    // also, assigning the current word being iterate to variable word
    if(sum > wordValue) {
      wordValue = sum;
      word = arrWord[i];
    }

    totalValue = 0;
  }

  return word;
}

// My solution #3(doesnt know if this will pass the test yet)
function test(str) {
  const arr = str.split(' ');
  let sum = 0;
  let wordValue = 0;
  let valueableWord;

  arr.forEach(word => {
    for(let i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i) - 96;
    }

    if(sum > wordValue) {
      wordValue = sum;
      valueableWord = word;
    }
    
    sum = 0;
   
  });

   console.log(valueableWord);
}








/********** OTHERS SOLUTION  **********/


// Solution found from internet
function high(x){
  let highest = 0, current = 0, winner = '';
  
  let xArr = x
  .toLowerCase()
  .split(` `)
  .map(x => x.split(``));
  
  let alphabet = '_abcdefghijklmnopqrstuvwxyz'
  .split(``)
  .reduce((key,letter, i) => {
    key[letter] = i;
    return key;
  },{});

  console.log(xArr,alphabet);
  
  for(let i = 0; i < xArr.length; i++){
    let word = xArr[i];
    for(let j = 0; j < word.length; j++){
      let letter = word[j];
      if(letter in alphabet){
        current += alphabet[letter];
        //console.log(current,xArr[i]);
      }
    }
    if(current > highest){
          highest = current;
          winner = word;
    }
    current = 0;
  }
  
  return winner.toString().replace(/,/gi,``);
}



// Correct solution #1
function high(x){
  var arr = x.toLowerCase().split(" ");
  var sum = 0;
  var holder = 0;
  var holder2 = 0;
  for(var i = 0; i < arr.length; i++) {
  
    for(var j = 0; j < arr[i].length; j++) {
    
      sum += arr[i].charCodeAt(j) - 96;
      
    }
  
    if (sum > holder) { 
      holder = sum;
      holder2 = i;

     }
    sum = 0;
  }
   console.log(arr[holder2]);
   return arr[holder2];
  
}




// Correct solution #2
function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}