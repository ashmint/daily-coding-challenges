/* 7 Kyu - Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/

//SOLUTION

const binaryArrayToNumber = arr => {
    let base = 1
    let vari
    let newArr = arr.reverse().map(x=>{
      vari = base * x;
      base *= 2;
      return vari;
    }).reduce((acc,x) => acc + x ,0)
    return newArr;
  };



/* 8 Kyu - Total amount of points

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

//SOLUTION


function points(games) {
    let newArr = games.map(x=> x.split(':')).map(x =>{
      if (x[0] > x[1]){
        return 3
      }
      else if (x[0] < x[1]){
        return 0
      }
      else{
        return 1
      }
    }).reduce((acc,x) => acc + x ,0)
    
    return newArr;
  }