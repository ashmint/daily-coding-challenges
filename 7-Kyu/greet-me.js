/* 7kyu - Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/


//SOLUTION 


var greet = function (name) {
    return "Hello " + `${name.slice(0, 1).toUpperCase()}` + `${name.toLowerCase().slice(1, name.length)}!`
};