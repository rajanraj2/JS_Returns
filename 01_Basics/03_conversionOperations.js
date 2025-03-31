// let score;
// let scoreString = "33abc"

// console.log(typeof score); // number
// console.log(typeof(score)); // number

// let valueNumber = Number(scoreString) // converts string to number
// console.log(typeof scoreString); 
// console.log(typeof valueNumber); // number
// console.log(valueNumber); // NAN // not a number
// console.log(typeof score);

// null is converted to 0
// bool is converted to number 
// undefinded is converted to NaN

// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0

// let a = ""
// console.log(Boolean(a)); // true
// "" -> false
// " " -> true
// "rajan" -> true

// let someNumber = "33" 
// console.log(typeof someNumber); // NaN
// console.log(typeof Number(someNumber)); // NaN


// ==================================== Operations ====================================


let value = 3
let negValue = -value // negation
console.log(negValue); // -3

console.log(1 + "2")
console.log(1 + 2 + "3")

// + is used to convert to number here 
// but is not a good practice to do it in this way
console.log(typeof(+true)) // number
console.log(+"")