/* 6 Kyu - Convert string to camel case


Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/


//SOLUTION 


function toCamelCase(str) {
    //console.log(str, 'testing')
    if (str === '') {
        return ''
    } else {

        let containmentArea = []
        let splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_")
        //[ 'the', 'stealth', 'warrior' ]
        let firstElement = containmentArea.push(splitString.splice(0, 1))
        for (let word in splitString) {

            let splitWords = splitString[word].split('')
            let capitalLetter = splitWords[0].toUpperCase()

            splitWords.splice(0, 1, capitalLetter)
            let joinedWord = splitWords.join('')

            containmentArea.push(joinedWord)
            let newSentence = containmentArea.join('')

        }
        return containmentArea.join('')
    }
}