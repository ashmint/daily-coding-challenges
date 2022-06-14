/* 7 Kyu - Find the next perfect square!


You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/


//SOLUTION 


function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) return -1;
    sq++;
    while (Math.sqrt(sq) % 1 !== 0) {
        sq++;
    }
    return sq;
}


/* 8 Kyu - Convert to Binary


Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  should return 1 
to_binary(5)  should return 101 
to_binary(11) should return 1011 

Example:

toBinary(1)  should return 1 
toBinary(5)  should return 101 
toBinary(11) should return 1011 

*/


//SOLUTION 


function toBinary(n) {
    return Number(n.toString(2))
}


/* 6 Kyu - Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!


*/


//SOLUTION 


function createPhoneNumber(numbers) {
    let first = numbers.slice(0, 3).map(x => String(x)).join('');
    let second = numbers.slice(3, 6).map(x => String(x)).join('');
    let third = numbers.slice(6, 10).map(x => String(x)).join('');
    return `(${first}) ${second}-${third}`
}


/* 7 Kyu - Sum of a sequence


Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]

*/


//SOLUTION


const sequenceSum = (begin, end, step) => {
    let sum = 0
    for (i = begin; i <= end; i += step) {
        sum += i
    }
    return sum
};


