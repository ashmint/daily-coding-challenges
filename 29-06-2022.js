/* 8 Kyu - Lario and Muigi Pipe Problem


Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/


//SOLUTION 


function pipeFix(numbers) {
    let arr = [];
    for (i = numbers[0]; i <= numbers.slice(-1); i++) {
        arr.push(i)
    }
    return arr
}


/* 8 Kyu - Add Length


What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.


*/


//SOLUTION


function addLength(str) {
    return str.split(" ").map(x => `${x} ${x.length}`)
}




/* 7 Kyu - Fix string case


In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

*/


//SOLUTION 


function solve(s) {
    let lowerCount = s.split('').filter(x => x === x.toLowerCase()).length
    let upperCount = s.split('').filter(x => x === x.toUpperCase()).length
    return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase()
}