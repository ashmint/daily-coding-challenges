/*8 Kyu - Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

//SOLUTION

function fakeBin(x){
    return [...x].map(x => x < 5 ? '0' : '1' ).join('')
  }

/* 8 Kyu - Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

*/

//SOLUTION

function invert(array) { 
  return array.map(x => x * -1)  
}

