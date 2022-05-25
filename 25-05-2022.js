/* 8 Kyu - Reverse List Order

In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/


//SOLUTION

function reverseList(list) {
    return list.reverse()
   }



/* 8 Kyu - Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/


//SOLUTION 


function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0 ) || (flower2 % 2 === 0 && flower1 % 2 !== 0 )
  }


/* 8 Kyu - Is it even?

In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/


//SOLUTION 


function testEven(n) {
    return n % 2 === 0
}



