
/* 6 Kyu - Bit Counting


Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/


//SOLUTION 


var countBits = function (n) {
    return n.toString(2)
            .split('')
            .filter( x => x === '1')
            .length
}

/* 8 Kyu - Find the smallest integer in the array


Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

//SOLUTION

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }



/* 7 Kyu - As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


*/


//SOLUTION 


function gimme (triplet) {
    let z = triplet.slice()
    let y = triplet.sort((a,b) => a-b)
    return z.indexOf(y[1])
  }