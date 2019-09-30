function sumConsecutives(s) {
 let result = [];
 let holder = [];
 
 for(let i = 0; i < s.length; i++) {
    let current = s[i];
    let afterCurrent = s[i+1];

    if(current !== afterCurrent && !holder.includes(current)) {
      result.push(current);
    }

    if(current !== afterCurrent && holder.includes(current)) {
      let total = 0;
      holder.push(current);
      holder.forEach(num => total+= num);
      result.push(total);
      holder = [];
    }

    if(current === afterCurrent) {
      holder.push(current);
    }
 }

 return result;
}
