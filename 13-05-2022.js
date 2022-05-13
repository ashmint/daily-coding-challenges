/*  6 Kyu - Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/


//SOLUTION 

function persistence(num) {
    let count = 0;
   while(num >= 10){
     count++;
     num =  ('' + num).split('').reduce((acc , x) => acc * Number(x) , 1)
   }
   return count
 }


/*  8 Kyu - Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


*/


//SOLUTION 

const quarterOf = (month) => {
    while(month % 3 !== 0){
      month++
    }
    return month/3
  }



