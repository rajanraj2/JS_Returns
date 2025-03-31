"use strict";  // use all js code as newer version

// alert(3 + 3); // can't use it now becuase we're using nodejs, not browser

let userName = "Rajan Raj"
let age = 22
let isLoggedIn = true

// primitive data types (immutable)

// number -> 2 to the power 53 - 1
// BigInt -> 2 to the power 53 - 1 and beyond
// string -> ""
// boolean -> true/false
// null -> empty value (standalone value) (typeof -> object)
// undefined -> uninitialized value (not assigned yet)
// symbol -> unique value (used in objects)


// object -> collection of key-value pairs (reference type)
// array -> collection of values (reference type)
// function -> collection of code (reference type)

console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (bug in js)
console.log(typeof undefined); // undefined
console.log(typeof BigInt); // function (constructor function)
