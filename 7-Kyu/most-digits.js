/* 7 kyu - Most Digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.


*/


//SOLUTION 

function findLongest(array) {
    console.log(array)
    let max = (Math.max(...array) + '').split('').length
    console.log(max)
    return array.find(x => (x + '').length == max)
}

