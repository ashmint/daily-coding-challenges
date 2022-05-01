/* 8 Kyu - Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

//SOLUTION

function countPositivesSumNegatives(input) {
    let finalArray = []
      if (input == null || input.length === 0){
        return finalArray;
      }
      else{
        let total = 0, negCounter = 0
        input.forEach(x =>{
          if (x > 0){
            total += 1         
          }
          else if (x < 0){
            negCounter += x
          }
        });
          finalArray.push(negCounter)
          finalArray.unshift(total)
          return finalArray
        }
}