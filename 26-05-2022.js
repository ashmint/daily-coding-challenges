/* 8 Kyu - Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/


//SOLUTION 


function past(h, m, s){
    return Math.floor(h * 3.6 * 10**6 + m * 6 * 10**4 + s * 10**3);
  }



/* 8 Kyu - Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/


//SOLUTION 

function findMultiples(integer, limit) {
    let newArray = []
    for(i =integer ; i<=limit;i++){
      if (i % integer === 0){
        newArray.push(i)
      }
    }
    return newArray
  }



/* 8 Kyu - Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/


//SOLUTION 


const rps = (p1, p2) => {
    if (p1 === p2){
      return "Draw!";
    }
    else if((p1 === 'scissors' && p2 === 'paper') || ( p1 === 'rock' && p2 === 'scissors') || ( p1 === 'paper' && p2 === 'rock') ){
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };