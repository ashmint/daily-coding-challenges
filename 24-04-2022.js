/* 8-kyu Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// SOLUTION 

function positiveSum(arr) {
    return arr.reduce((acc,x) => x < 0 ? acc : acc + x , 0)
  }