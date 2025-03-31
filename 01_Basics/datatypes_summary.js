// data type is categorized into two types: primitive and reference types
// on the basis of mutability
// primitive types are immutable, whereas reference types are mutable

// based on how they are stored in memory
// primitive types are stored in stack memory, whereas reference types are stored in heap memory    
// stack memory is faster than heap memory
// stack memory is used for static memory allocation, whereas heap memory is used for dynamic memory allocation
// stack memory is used for storing primitive types, whereas heap memory is used for storing reference types   

// Primitive : string, number, boolean, null, undefined, symbol, bigint
// primitive data types are call by value

// Reference (Non Primitive) : object, array, function, date, regex, map, set, weakmap, weakset, promise, error, etc.

// Symbol is a new primitive data type introduced in ES6
// Symbol is a unique and immutable data type that can be used as an identifier for object properties
const id = Symbol("id"); // unique identifier
const anotherId = Symbol("id"); // unique identifier
// console.log(id === anotherId); // false

const bigNumber = 49579324658934258974298n; // bigint
// console.log(bigNumber);
// console.log(typeof bigNumber); // bigint
// bigint is a new primitive data type introduced in ES11 (ES2020)
// bigint is used to represent integers with arbitrary precision
// bigint is used to represent large integers that are beyond the range of the number data type
// bigint is used to represent integers that are larger than 2^53 - 1
// bigint is used to represent integers that are smaller than -(2^53 - 1)
// bigint is used to represent integers that are larger than Number.MAX_SAFE_INTEGER
// bigint is used to represent integers that are smaller than Number.MIN_SAFE_INTEGER
// bigint is used to represent integers that are larger than Number.MAX_VALUE
// bigint is used to represent integers that are smaller than Number.MIN_VALUE
// bigint is used to represent integers that are larger than Number.POSITIVE_INFINITY
// bigint is used to represent integers that are smaller than Number.NEGATIVE_INFINITY


const heroes = ["Batman", "Superman", "Spiderman", "Ironman", "Hulk"];
const heroDetails = {
    name: "Batman",
    age: 35,
    city: "Gotham",
    powers: ["flying", "strength", "speed"]
}
// console.log(heroes); // array
// console.log(heroDetails); // object

const greet = function() {
    console.log("Hello World from function");
}
greet(); // function
console.log(greet); // function
console.log(typeof greet); // function