// Functions:

// In TypeScript, functions are blocks of reusable code that can have 
// typed parameters and typed return values for safety and clarity.
// Key points:
// You can specify parameter types and return type.
// Functions can be named, anonymous, or arrow functions.
// Optional (?) and default parameters are supported.
// 👉 Example with optional and arrow function:
// const greet = (name: string = "User"): string => `Hello, ${name}`;

// 1. Declarative Function / Named Function
// A function with a specific name, often used for reusability and readability.
// ✅ Definition: A function declared with a name using the function keyword.
function hello () {
    console.log('Hellow World One')
}
hello()

// 2. Anonymous Function
// A function without a name, usually assigned to a variable.
// ✅ Definition: A function defined without a name, often used as a callback or inline function.
let helloTwo = function () {
    console.log('Hellow World Two')
}
helloTwo()

// 3. Arrow Function / ES6 Functions
// A shorter syntax for writing anonymous functions using the => (arrow) notation.
// ✅ Definition: A concise function expression that doesn’t have its own this context — great for callbacks and simple operations.
var helloThree = () => {
console.log("Hello World Three")
}
helloThree()

// Functions with Arguments and Returns
// 1.  Named Function
let additon = function(a: number, b: number): number {
  return a + b;
};
additon(8, 4)
console.log(additon(8, 4))

// 2.  Anonymous Function
let multiply = function(a: number, b: number): number {
  return a * b;
};
console.log(multiply(10, 3))

// 3.  Arrow Function 
let divide = (a: number, b: number): number => a / b;
console.log(divide(100, 2))

// import function
import { printAge } from '../helpers/print-helpers.js'

printAge(18)

// import everything
import * as helpers from '../helpers/print-helpers.js'

printAge(25)