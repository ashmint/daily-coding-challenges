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


/* 7 Kyu - Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/


//SOLUTION 


function getMiddle(s)
{ let len = Math.floor((s.length/2)) 

 return s.length % 2 === 0 ? `${s[len - 1]}${s[len]}` : s[len]

}