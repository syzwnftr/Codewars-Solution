/*

Write a function that given two strings determines if they differ by exactly one character.

The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.

Examples:

tower / towe -> true
tower / towner -> true
tower / bower -> true
tower / token -> false
tower / tower -> false

length tak sama
length sama tapi char berbeza

*/

const oneCharDifference = (s1, s2) => {
    let  m = s1.length
    ,    n = s2.length
    , diff = 0;
    
    for (let i = 0, j = 0; i < m || j < n; i++, j++) {
      
      if (s1[i] === s2[j])
        continue;
      
      diff++;
      
      if(s1[i + 1] === s2[j])
        j--;
        
      else if(s1[i] === s2[j + 1])
        i--;
    }
    
    return diff === 1;
};
