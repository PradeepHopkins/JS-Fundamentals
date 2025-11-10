// # The console.log() function is used to print output to the console
console.log("Hello World!")

// # Variables in TypeScript
// Three ways to declare variables:
// - let: Block-scoped, can be reassigned
// - const: Block-scoped, cannot be reassigned
// - var: Function-scoped (avoid using - legacy)

// Example: Variable Declaration and Assignment
let firstName: string = "Pradeep"
let lastName: string = "Hopkins"
console.log(`Full name: ${firstName} ${lastName}`)

// Example: Variable Reassignment
let age: string | number = "25"
console.log(`Initial age: ${age}`)
age = 26  // TypeScript allows type changes when using union types
console.log(`Updated age: ${age}`)

// Example: Constants
const occupation: string = "Engineer"
console.log(`Occupation: ${occupation}`)
// const variables must be initialized and cannot be reassigned
// This would cause an error:
// const place: string
// place = "Chennai"

// # TypeScript Data Types
// TypeScript data types define the kind of values a variable can hold, ensuring type safety at compile time.
// Comprehensive examples of different types

// Basic Types
const text: string = "Jack Sparrow"        // String type
const count: number = 30                      // Number type
const isActive: boolean = true              // Boolean type
const empty: null = null                    // Null type
const notSet: undefined = undefined         // Undefined type

// Any Type (avoid when possible)
let flexible: any                           // Can hold any type
flexible = "API"
flexible = 10
flexible = true
flexible = [10, 20, 30]
flexible = { name: "API", count: 18 }

// Arrays
const numbers: number[] = [10, 30, 40, 50]  // Number array
const birthInfo: [number, string, number] = [20, "May", 2000]  // Tuple

// Enum - Named Constants
enum Color { 
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
const selectedColor: Color = Color.Blue

// Object Type with Interface
interface Student {
    name: string
    age: number
    isGraduate: boolean
}

const studentDetails: Student = {
    name: "Pradeep",
    age: 20,
    isGraduate: true
}

// Union Types
let identifier: number | string   // Can be number or string
identifier = 18
identifier = "8th of November"

// Function Type Examples
function greet(name: string): string {
    return `Hello, ${name}!`
}

// Void Function Example (returns nothing)
function logMessage(message: string): void {
    console.log(message)
    // No return statement needed
}

// Null vs Undefined Example
let userResponse: string | null = null      // Explicitly set to null
let userInput: string | undefined           // Automatically undefined when not assigned


/* 
Main data types:

string – for text (let name: string = "John";)

number – for numeric values (let age: number = 25;)

boolean – for true/false (let isActive: boolean = true;)

any – for any type (not type-safe)

void – for functions that return nothing

null / undefined – represent absence of a value

array – list of items (let nums: number[] = [1, 2, 3];)

tuple – fixed-length array with specific types (let user: [string, number] = ["John", 25];)

enum – named constant values (enum Color { Red, Green, Blue })

object – structured data (let person: { name: string; age: number } = { name: "Tom", age: 30 };)

union – multiple possible types (let id: string | number;)

👉 In short: TypeScript supports basic, object, and advanced types to make code safer and more predictable. */