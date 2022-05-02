/* 6 Kyu - Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

//SOLUTION

var uniqueInOrder=function(iterable){
    let arr;
    if (typeof iterable === 'string'){
      arr = iterable.split('').filter((x,i) => x !== iterable[i - 1])
    }
    else
      arr = iterable.filter((x,i) => x !== iterable[i - 1])
    return arr;
    }

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

