/* 7 Kyu - Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/


//SOLUTION 

function descendingOrder(n){
    return Number((n + '').split('').map(x=>Number(x)).sort((a,b) => b - a).join(''))
  }



  
/* 8 Kyu - Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

//SOLUTION

function removeExclamationMarks(s) {
    return s.split('!').join('')
  }
