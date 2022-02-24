function solution(number) {
    let totalSum = 0;
    const numArr = [];
    const holder1 = [];

    for(let i = 1; i < number; i++) {
        if(numArr.length === 0) {
            numArr.push(i);
        } else {
            numArr.push(i)
        }
    }

   for(let j = 0; j < numArr.length; j++) {
        let multiplier = 3 * numArr[j];
        if(multiplier < number) {
            holder1.push(multiplier);
        }    
   }


   for(let h = 0; h < numArr.length; h++) {
        let multiplier = 5 * numArr[h];
        if(multiplier < number) {
            holder1.push(multiplier);
        }    
   }

   const holder2 = [...new Set(holder1)];
   holder2.forEach(num => totalSum += num);

   return totalSum;
   
}