/* 7 Kyu - Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

*/


//SOLUTION 

var number=function(array){
    return array.map((x,i) => `${i + 1}: ${x}`)
  }



/* 


/* 7 Kyu - Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/


//SOLUTION 


function reverseWords(str) {
    return str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
  }

