/* 7 Kyu - Shortest Word


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/


//SOLUTION 


function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
  }




/* 8 Kyu - What is between?


Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]


*/


//SOLUTION 


function between(a, b) {
    let arr = []
    for(i=a ; i<=b ; i++){
      arr.push(i)
    }
    return arr
  }