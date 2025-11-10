// Loops
/* TypeScript loops are control structures that allow you to execute a block of code repeatedly as long 
as a specified condition is true or while iterating over a collection (like arrays, objects, or strings).
🧭 Purpose of Loops:
To repeat actions automatically.
To process collections like arrays or objects.
To perform calculations or aggregations over data.
To automate repetitive operations with fewer lines of code. */

// 1. for Loop
// The traditional counting loop.
/* 
syntax:
for (initialization; condition; increment) {
  // code block
}  
*/
for (let i = 0; i < 5; i++) {
    console.log("Hello World!" + i)
}

// ✅ Notes:
// You can specify the type of i (e.g., let i: number = 0).
// This loop runs while condition is true.

// 2. for...of Loop
// Used to iterate over iterable objects — like arrays, strings, or sets.
// Syntax:
//          for (const item of iterable) {
//              code block
//          } 

let listOfFruits = ['Apple', 'Orange', 'Mango', 'Grapes']
for (const fruits of listOfFruits) {
    console.log(fruits)

}

// Brake
let Vegetables = ['Onion', 'Potato', 'Tomato', 'Califour']
for (const veg of Vegetables) {
    console.log(veg)
    if (veg == 'Tomato') {
        break
    }
}

// ✅ Notes:
// Safer than for...in for arrays.
// Returns values (not keys/indexes).

// 3. ES6 forEach() Loop
// The forEach() method executes a given callback function once for each element 
// in the array, in order, without modifying the original array.
// Syntax:
// array.forEach(callback(currentValue [, index [, array]]) [, thisArg]);

Vegetables.forEach((veg) => {
    console.log(veg)
})

// 4. for...in Loop
// Used to iterate over the keys (properties) of an object.
// Syntax:
//         for (const key in object) {
//             code block
//         }

let person = { name: "Alice", age: 25, city: "London" };

for (const key in person) {
  console.log(`${key}: ${person[key as keyof typeof person]}`);
}
// ✅ Notes:
// Returns keys, not values.
// You often need type assertions (key as keyof typeof object) to satisfy TypeScript’s type checker.

// 5. while Loop
// Repeats as long as the condition is true.
// syntax:
//            while (condition) {
//                  code block
//            }

let i: number = 0;

while (i < 3) {
  console.log(`i is ${i}`);
  i++;
}

// 6. do...while Loop
// Like while, but executes at least once.
// Syntax:
//          do {
//               code block
//          } while (condition);

let count: number = 0;

do {
  console.log(`Count is ${count}`);
  count++;
} while (count < 3);
