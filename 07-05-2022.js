/* 7 Kyu - Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/


//SOLUTION

function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach( x => ['a','e','i','o','u'].includes(x) ? vowelsCount++ : vowelsCount)
    return vowelsCount;
  }




/*  7 Kyu - Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

*/


//SOLUTION

function DNAStrand(dna){
    let comp = dna.split('').map(x=>{
      switch(x){
          case 'A':
            return 'T'
            break;
          case 'T':
            return 'A'
            break;
          case 'G':
            return 'C'
            break;
          case 'C':
            return 'G'
            break;   
      }
    }).join('');
    return comp;  
}

/* 7 Kyu - Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/


//SOLUTION

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a - b).slice(0,2).reduce((acc,x) => acc + x ,0)
  }