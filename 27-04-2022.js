/* 6 Kyu - How many pages in a book?

Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.

*/

//SOLUTION

function amountOfPages(summary){
    let temp = ''
    counter = 0
    let i = 1;
    while(!counter){
      if(temp.length >= summary){
        counter = 1;
      }
      else{
        temp += i
        i++
      }
    }
    return i-1;
}

/* 8 Kyu - How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/


//SOLUTION

function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    return (classPoints.reduce((sum,element) => sum + element , 0) / classPoints.length) < yourPoints ? true : false
  }

