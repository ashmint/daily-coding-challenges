/* 7 Kyu - List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

//SOLUTION

function filter_list(l) {
    return l.filter(x => Number.isInteger(x));
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




/* 8 Kyu - Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/


//SOLUTION 

function basicOp(operation, value1, value2)
{
  return operation === '+' ? value1 + value2 :
         operation === '-' ? value1 - value2 :
         operation === '*' ? value1 * value2 :
                             value1 / value2 ;
}
