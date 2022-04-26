/* 6 Kyu - Counting Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

//SOLUTION

function duplicateCount(text){
    let texts = text.toLowerCase()
    let doneValues = []
    let count = 0;
    let finalCount = 0;
    for(i=0; i<texts.length ; i++){
      if(! doneValues.includes(texts[i])){
        for(j=0;j<texts.length;j++){
          if(texts[i] === texts[j])
            count++
        }
      }
      if (count > 1){
        finalCount++
      }
      count = 0;
      doneValues.push(texts[i])
    }
    return finalCount;  
  }


/* 8 Kyu - Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

//SOLUTION

function removeChar(str) {
    return str.slice(1, -1);
  }

/* 8 kyu- You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

//SOLUTION

function check(a, x) {
    value = false
    a.forEach(element => {
      if(element === x) 
        value = true
      });
    return value;
  }

