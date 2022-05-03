/* 5 Kyu - Valid Parentheses

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100


*/

//SOLUTION

function validParentheses(parens) {
  let result = true
  let lb = 0 
  let i = 0;
  if ((parens[0] === ')') || (parens.length === 1) || (parens[parens.length-1] === "(" )){
    return false
  }
  else{
    while(i <= (parens.length - 1)){
      if(lb < 0){
        break;
      }
      parens[i] === '(' ? lb++ : lb--
      i++;
      }
    return lb === 0 ? true : false
    }
  }



/* 6 Kyu - Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

//SOLUTION

function towerBuilder(nFloors) {
    let tower = []
    let width = (nFloors * 2) - 1
    let starCount
    let space = ' '
    let spaceCount
    let star = '*'
    for(i=1;i<=nFloors;i++){
      star = '*'
      space = ' '
      starCount = (i * 2) - 1
      spaceCount = (width - starCount) / 2
      space = space.repeat(spaceCount)
      star = star.repeat(starCount)
      tower.push(space + star + space)
      }
    return tower
  }

/* 