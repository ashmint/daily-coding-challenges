

/* 8 Kyu - Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

//SOLUTION

function sumMix(x){
    return x.reduce((acc,y) => acc + Number(y) ,0)
  }




/* 8 Kyu - Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/


//SOLUTION


function abbrevName(name){

    return name.split(' ').map(x => x[0].toUpperCase()).join('.')

}


