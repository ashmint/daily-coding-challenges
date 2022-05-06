/* 6 Kyu - Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

//SOLUTION

function expandedForm(num) {
    let prod = 1
    let temp;
    newNum = (num+'').split('').map(x => Number(x))
    let newNewNum = newNum.reverse().map((x,i) => {
      if(x != [0]){
        temp = x * prod;
        prod *= 10;
        return temp;
      }
      else{
        prod *= 10;
        return x;
      }
    }).reverse();
    return newNewNum.filter(x=> x !== 0).join(' + ');
  }




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


/* 8 Kyu - Sum without highest and lowest number

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/


//SOLUTION


function sumArray(array) {
    if(array === null || array === undefined || array.length < 3){
      return 0;
    }
    else{
      return array.sort((a,b) => a-b).slice(1,-1).reduce((acc,x) => acc + x ,0)
    }
  }