/* "1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks */

function hydrate(s) {
    const arr = s.split(' ').map(word => parseInt(word)).filter(word => isNaN(word) === false).reduce((acc, total) => acc + total, 0);
    return (arr === 1) ? `${arr} glass of water` : `${arr} glasses of water`; 
  }