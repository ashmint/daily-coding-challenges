/* 8 Kyu - Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/


//SOLUTION 

function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }



/* 7 Kyu - Don't give me five!


Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

*/


//SOLUTION 

function dontGiveMeFive(start, end)
{
  let arr = [...Array((end-start) + 1)].map((_, i) => start + i );  //Populates an array with elements from start to end
  return arr.filter(x => ! (x +'').split('').includes('5')).length  // Filters the array for elements containing a 5 in it
  
}

