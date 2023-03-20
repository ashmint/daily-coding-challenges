/* 6 Kyu - Character with longest consecutive repetition

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)

*/


//SOLUTION 

function longestRepetition(s) {
    let finishedArray = []
    let temp = []
    let splitted = s.split('')
    splitted.forEach((x, i) => {
        if (i === 0) {
            temp.push(x)
        }
        else if (x === temp[0]) {
            temp.push(x)
        }
        else {
            finishedArray.push(temp.join(''))
            temp = []
            temp.push(x)
        }
    })
    finishedArray.push(temp.join(''))
    let largestIndex = finishedArray.map(x => x.length).sort((a, b) => b - a)[0]
    let biggestElement = finishedArray.find(x => x.length === largestIndex)
    return [biggestElement.slice(0, 1), biggestElement.length]
}