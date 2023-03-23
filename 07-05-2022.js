/* 7 Kyu - Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/


//SOLUTION

function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach( x => ['a','e','i','o','u'].includes(x) ? vowelsCount++ : vowelsCount)
    return vowelsCount;
  }





