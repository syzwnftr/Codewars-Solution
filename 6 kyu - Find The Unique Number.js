// Correct answer
function findUniq(arr) {
  for(let i=0; i < arr.length; i++) {
    let initPos = arr.indexOf(arr[i]);
    let lastPos = arr.lastIndexOf(arr[i]);
    
    if(initPos === lastPos) {
      return arr[i];
    }
  }
}
 
// Answer from some genius in Codewars
function findUniq2(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}