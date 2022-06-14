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


