/* 8 Kyu  - Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.


*/


//SOLUTION


function booleanToString(b) {
    return b ? 'true' : 'false';
}




/* 8 Kyu - Filling an array (part 1)


We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.


*/


//SOLUTION 


const arr = N => {

    return N === undefined ? [] : [...Array(N)].map((x, i) => i)
}