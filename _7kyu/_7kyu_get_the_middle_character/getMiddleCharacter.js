function getMiddle(s)
{
  let arrS = s.split('');
  let arrStwo;
  let midWords;
  
  if(arrS.length === 1) {
    midWords = arrS.join('');
    return midWords;
  }
  
  if((arrS.length % 2) !== 0) {
    midWords = arrS[Math.floor(arrS.length / 2)];
  } else {
    let n = (arrS.length / 2)
    arrStwo = arrS.splice(n);
    midWords = arrS.pop() + arrStwo.shift();
  }
  return midWords; 
}



