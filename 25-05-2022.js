/*  8 Kyu - Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

//SOLUTION

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }






/* 7 Kyu - Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/

// SOLUTION

function friend(friends){
  let trueFriends = friends.filter(x => x.length === 4)
  return trueFriends
}


/* 8 Kyu - Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

//SOLUTION

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15, dogYears = 15
    if ( humanYears > 1){
      catYears += 9;
      dogYears += 9;
    }
    for (i = 2; i < humanYears ; i++){
      catYears += 4;
      dogYears += 5;
    }
    return [humanYears,catYears,dogYears]
  }