/* 6 Kyu - Your order, please

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/


//SOLUTION 


function order(words){
    let word = []
    words = words.split(' ')
    words.forEach((x,i) => x.split('').forEach(y => {
      if (!isNaN(y)){
        word[Number(y)] = words[i]  
      }
    }));
    return word.join(' ').slice(1)
    }




/* 8 Kyu - Drink about


Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/

//SOLUTION 


function peopleWithAgeDrink(old) {
    return (old >= 21) ? 'drink whisky' :
           (old >= 18) ? 'drink beer' :
           (old >= 14) ? 'drink coke' : 'drink toddy' ;
  };

