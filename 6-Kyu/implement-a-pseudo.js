/* 6 Kyu - Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)

*/

//SOLUTION 


function encrypt(text, n) {
    if (!text || n <= 0){
      return text;
    }
    else{
    let evenString, oddString
    let concatString = ''
    for(i=0;i<n;i++){
     evenString = text.split('').filter((x,j)=> j % 2 === 0).join('')  
     oddString = text.split('').filter((x,j)=> j % 2 !== 0).join('')
     concatString = (oddString + evenString) 
     text = concatString;
    }
    return concatString; 
   }
   }
   
   
    
   function decrypt(encryptedText, n) {
     if (!encryptedText || n <= 0) return encryptedText;
     const ans = new Array(encryptedText.length);
     while (n--) {
       let j = 0;
       for (let i = 1; i < ans.length; i += 2) {
         ans[i] = encryptedText[j++];
       }
       for (let i = 0; i < ans.length; i += 2) {
         ans[i] = encryptedText[j++];
       }
       encryptedText = ans.join('');
     }
     return encryptedText;
   }