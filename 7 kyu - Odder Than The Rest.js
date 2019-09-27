function oddOne(arr) {
  let result;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      result = i;
      return result;
    }  
  }
  return result = -1;
}