/* 7 Kyu - Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/


//SOLUTION 


function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };



/* 8 Kyu - Correct the mistakes of the character recognition software 

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/


//SOLUTION


function correct(string)
{
  return string.split('').map(x=>{
    return x === '5' ? 'S' : x === '0' ? 'O' : x === '1' ? 'I' : x
  }).join('')
}


/* 8 Kyu - Is it a palindrome?


Write a function that checks if a given string (case insensitive) is a palindrome.

*/


//SOLUTION 


function isPalindrome(x) {
    return x.toUpperCase().split('').reverse().join('') === x.toUpperCase() ? true : false
  }



/* 8 Kyu - Century From Year


Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


*/


//SOLUTION 


function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }