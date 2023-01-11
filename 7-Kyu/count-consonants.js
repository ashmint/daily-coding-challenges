/*

7 Kyu - Count consonants

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


*/


//SOLUTION 


function consonantCount(str) {
    return str.toLowerCase().split('').filter(x => !['a', 'e', 'i', 'o', 'u',].includes(x) && x.match(/[a-z]/i)).length
}

