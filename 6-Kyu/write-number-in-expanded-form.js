/* 6 Kyu - Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

//SOLUTION

function expandedForm(num) {
    let prod = 1
    let temp;
    newNum = (num+'').split('').map(x => Number(x))
    let newNewNum = newNum.reverse().map((x,i) => {
      if(x != [0]){
        temp = x * prod;
        prod *= 10;
        return temp;
      }
      else{
        prod *= 10;
        return x;
      }
    }).reverse();
    return newNewNum.filter(x=> x !== 0).join(' + ');
  }


