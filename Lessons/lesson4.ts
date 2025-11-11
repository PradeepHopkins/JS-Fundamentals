// =====================================================
//  TypeScript Operators and Comparisons
// =====================================================
// Learn different types of operators and their uses

// # 1. Relational (Comparison) Operators
console.log("\nRelational Operators:")
const num1: number = 10
const num2: number = 5

// Greater than (>)
console.log(`${num1} > ${num2}:`, num1 > num2)    // true

// Less than (<)
console.log(`${num2} < ${num1}:`, num2 < num1)    // true

// Greater than or equal to (>=)
console.log(`${num1} >= ${num1}:`, num1 >= num1)  // true

// Less than or equal to (<=)
console.log(`${num2} <= ${num2}:`, num2 <= num2)  // true

// # 2. Equality Operators
console.log("\nEquality Operators:")

// Type-safe comparisons
const numericString: string = "1"
const numericValue: number = 1
console.log("Type-safe equality examples:")
console.log(`String "1" === "1":`, numericString === "1")        // true
console.log(`Number 1 === 1:`, numericValue === 1)               // true

// String comparisons
const str1: string = "hello"
const str2: string = "hello"
console.log("\nString comparison:", str1 === str2)               // true

// Number comparisons
const num3: number = 100
const num4: number = 100
console.log("Number comparison:", num3 === num4)                 // true

// # 3. Logical Operators
console.log("\nLogical Operators:")
const isValid: boolean = true
const isEnabled: boolean = false

// AND (&&)
console.log("AND operator:", isValid && isEnabled)             // false

// OR (||)
console.log("OR operator:", isValid || isEnabled)              // true

// NOT (!)
console.log("NOT operator:", !isValid)                         // false

// Number range checks
const userAge: number = 25
const isAdultAge: boolean = userAge >= 18 && userAge <= 65
console.log("Is adult age:", isAdultAge)                       // true

// Null checks
const nullableValue: string | null = null
console.log("Is null:", nullableValue === null)                // true
console.log("Is not null:", nullableValue !== null)            // false

// # 4. Object Comparisons
interface Person {
    id: number;
    name: string;
}

const person1: Person = { id: 1, name: "John" }
const person2: Person = { id: 1, name: "John" }

console.log("\nObject Comparisons:")
// Objects are compared by reference
console.log("Same content, different objects:", person1 === person2)          // false
// Compare individual properties
console.log("Comparing properties:", 
    person1.id === person2.id && person1.name === person2.name)              // true

// Example of type guard
function isString(value: unknown): value is string {
    return typeof value === "string"
}

const unknownValue: unknown = "test"
if (isString(unknownValue)) {
    console.log("\nString length:", unknownValue.length)  // TypeScript knows it's a string
}

// # 5. Comparison with Different Types
console.log("\nComparison with Different Types:")
const numberString: string = "123"
const actualNumber: number = 123

/* console.log("String to Number comparison:")
console.log(`"123" == 123:`, numberString == actualNumber)     // true (coercion)
console.log(`"123" === 123:`, numberString === actualNumber)   // false (strict)
*/

// # 6. Common Comparison Patterns
console.log("\nCommon Comparison Patterns:")

// Checking for null or undefined
const nullable: string | null = null
console.log("Is null:", nullable === null)              // true
console.log("Is undefined:", nullable === undefined)    // false

/*
TypeScript Comparison Best Practices:
- Always use === and !== instead of == and != for type safety
- Use explicit type annotations to prevent unintended comparisons
- When comparing objects, compare their properties individually
- Use type guards for complex type comparisons
- Be careful with null/undefined checks
- Consider using utility types for safer comparisons
*/
