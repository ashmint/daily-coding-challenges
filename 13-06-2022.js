/* 8 Kyu - Difference of Volumes of Cuboids


In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

*/



//SOLUTION


function findDifference(a, b) {
    return Math.abs((a.reduce((acc, x) => acc * x, 1) - b.reduce((ac, y) => ac * y, 1)))
}



/* 7 Kyu - Remove anchor from URL


Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"


*/


//SOLUTION


function removeUrlAnchor(url) {
    return url.split('#')[0];
}


/* 8 Kyu - Pre-FizzBuzz Workout #1


This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

*/


//SOLUTION 


function preFizz(n) {
    let arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}


