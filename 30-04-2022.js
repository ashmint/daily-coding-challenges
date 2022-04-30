/* 6 Kyu - Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

//SOLUTION

function arrayDiff(a, b) {
    return a.filter(x => ! b.includes(x)) 
  }



/* 7 Kyu - Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

//SOLUTION 
// Done without Math methods


function highAndLow(numbers){
    let len
    let newString = (numbers+'').split(' ').map(x => Number(x)).sort((a, b) => b - a)
    newString.length === 1 ? newString.push(newString[0]) : newString.splice(1,newString.length - 2 )
    return newString.join(' ')
    }
