/* 8 Kyu - Multiple of index


Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


*/


//SOLUTION 


function multipleOfIndex(array) {
    return array.filter((x, i) => x % i === 0)
}



/* 6 Kyu - Sort the odd

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


*/


//SOLUTION 


function sortArray(array) {
    let arr = array.filter(x => x % 2 !== 0).sort((a, b) => a - b)
    array.forEach((y, i) => {
        if (y % 2 === 0) {
            arr.splice(i, 0, y)
        }
    });
    return arr
}
