function DNAStrand(dna){
  let result = '';
  for(let  i = 0; i < dna.length; i++) {
    let element;
    if(dna[i] === 'A') {
      element = 'T';
    } else if(dna[i] === 'T') {
      element = 'A';
    } else if(dna[i] === 'C') {
      element = 'G';
    } else if(dna[i] === 'G') {
      element = 'C';
    }
    
    result += element;
  }
  
  return result;
}