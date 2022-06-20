/* 8 Kyu - L1: Bartender, drinks!


Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/


//SOLUTION 


function getDrinkByProfession(param) {
    param = param.toLowerCase();

    switch (param) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}


/* 8 Kyu - Reversing Words in a String

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!

*/


//SOLUTION 


function reverse(string) {
    return string.split(' ').reverse().join(' ');
}


/* 8 Kyu - Remove duplicates from list


Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/


//SOLUTION 


function distinct(a) {
    let b = []
    a.forEach(x => {
        if (!b.includes(x)) {
            b.push(x)
        }
    });
    return b
}