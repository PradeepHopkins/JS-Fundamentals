// Relational or Comparison Operators

// > - more than
// < - less than
// >= - more than equal
// <= - less than equal

var result = 10 > 5
console.log(result)
result = 5 > 5
console.log(result)
result = 6 < 4
console.log(result)
result = 5 < 5
console.log(result)
result = 10 >= 10
console.log(result)
result = 12 <= 12
console.log(result)

// Equality operators
// equality operator can be used in two forms: double equals (==) and triple equals (===).

var x = '1'
// 1. Loose comparison (==)
// Performs type coercion — JavaScript tries to convert operands to the same type before comparing.
console.log(x == '1') // true
// 2. Strict comparison (===)
// No type conversion — both the value and the type must match exactly.
console.log(x === '1') // false
// console.log(x === 1) // true
