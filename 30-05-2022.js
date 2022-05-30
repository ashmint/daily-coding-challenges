/* 7 Kyu - Find the capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/


//SOLUTION 


var capitals = function (word) {
    return word.split('').map((x,i) => {
      if (x === x.toUpperCase()){
        return i;
      }
      else{
        return x;
      }
    }).filter(x => typeof(x) === 'number'  )
  };