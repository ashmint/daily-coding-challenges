/*  8 Kyu -  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence


Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"


*/


//SOLUTION 


function replace(s){
    return s.split('').map(x =>{
      return ['A','E','I','O','U'].includes(x.toUpperCase()) ? '!' : x
    }).join('');
  }