function highAndLow(numbers){
    const highestLowest = [];
    const numbersArr = numbers.split(' ').map(number => Number(number));

    highestLowest.push(Math.max(...numbersArr)); 
    highestLowest.push(Math.min(...numbersArr));   
    return highestLowest.join(' ');
}

function highAndLow(numbers){
    const numbersArr = numbers.split(' ').map(number => Number(number));
    return [Math.max(...numbersArr), Math.min(...numbersArr)].join(' ');  
}