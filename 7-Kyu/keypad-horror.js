/* 7 Kyu - Keypad horror


Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only

*/

//SOLUTION 

function computerToPhone(numbers) {
    let computerInput = numbers.split('')
    let tring = ''
    computerInput.forEach(x => {
        if (x > 6) tring += (Number(x) - 6)
        else if (x > 3) tring += Number(x)
        else if (x > 0) tring += (Number(x) + 6)
        else tring += 0
    })
    return tring
}

