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