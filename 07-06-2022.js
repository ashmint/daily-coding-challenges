/* 8 Kyu - Name Shuffler


Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"


*/


//SOLUTION 


function nameShuffler(str){
    return str.split(' ').reverse().join(" ");
  }


/* 7 Kyu - Find the vowels


We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)


*/


//SOLUTION


function vowelIndices(word){
    let arr = []
    word.split('').forEach((x,i) => {
      if (['a','e','i','o','u', 'y'].includes(x.toLowerCase()) === true) {
      arr.push(i+1)
      }
    });
    return arr
  }