/* 8 Kyu - The Wide-Mouthed frog!


The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide


*/

//SOLUTION 


function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  }




/* 8 Kyu - All Star Code Challenge #18


This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1


*/


//SOLUTION 


function strCount(str, letter){  
    return str.split(letter).length-1
  }



  