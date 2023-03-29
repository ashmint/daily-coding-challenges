/*  5 Kyu - String incrementer


Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/



//SOLUTION


function incrementString (strng) {
    let char = strng.split('').filter(x => isNaN(x)).join('')
    let number = strng.split('').filter(x => ! isNaN(x)).join('')
    let val = 1
    
    if (number.length === 0){
      return char + '1'
    }
    else if (Number(number) === 0){
      number = number.slice(0,-1) + '1'
      return char + number
    }
    else{
     number = number.split('').map(x => Number(x) )
    
    for(i = number.length - 1 ; i >= 0 ; i --){
      if(number[i] + 1 === 10){
        number[i] = 0
      }
      else{
        number[i] += val
        val = 0
        break;
      }
    }
    
    
    }
    return val === 1 ? char + '1' + number.join('') : char + number.join('')
    }