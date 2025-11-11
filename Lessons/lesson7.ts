// =====================================================
// TYPESCRIPT FUNCTIONS - COMPLETE STUDY GUIDE
// =====================================================
// Functions are blocks of reusable code that perform specific tasks.
// TypeScript adds type safety with parameter and return type annotations.

// # 1. Declarative Function / Named Function
// A function with a specific name, often used for reusability and readability.

console.log("\n--- 1. NAMED FUNCTION ---")
{
    // Define a function
    function greet(): void {
        console.log("Hello! Welcome to TypeScript functions")
    }
    
    // Call the function
    greet()
    
    // Named function with a return value
    function add(a: number, b: number): number {
        return a + b
    }
    
    const sum: number = add(10, 5)
    console.log(`10 + 5 = ${sum}`)
}

// # 2. Anonymous Function
// A function without a name, usually assigned to a variable.

console.log("\n--- 2. ANONYMOUS FUNCTION ---")
{
    // Function expression assigned to a variable
    const sayGoodbye = function(): void {
        console.log("Goodbye! Thanks for learning")
    }
    
    sayGoodbye()
    
    // Anonymous function with parameters and return type
    const multiply = function(x: number, y: number): number {
        return x * y
    }
    
    console.log(`5 × 3 = ${multiply(5, 3)}`)
}

// # 3. Arrow Function (ES6)
// A concise syntax using => (arrow) notation.

console.log("\n--- 3. ARROW FUNCTION ---")
{
    // Basic arrow function
    const divide = (a: number, b: number): number => {
        return a / b
    }
    console.log(`20 ÷ 4 = ${divide(20, 4)}`)
    
    // Single-line arrow function (implicit return)
    const square = (n: number): number => n * n
    console.log(`5² = ${square(5)}`)
    
    // Arrow function with single parameter
    const double = (n: number): number => n * 2
    console.log(`Double of 7 = ${double(7)}`)
}

// # 4. PARAMETERS - DEFAULT & OPTIONAL

console.log("\n--- 4. DEFAULT & OPTIONAL PARAMETERS ---")
{
    // Default parameter
    function createUser(name: string, role: string = "user"): string {
        return `User: ${name}, Role: ${role}`
    }
    
    console.log(createUser("Alice"))  // Uses default "user"
    console.log(createUser("Bob", "admin"))  // Overrides default
    
    // Optional parameter (marked with ?)
    function displayInfo(name: string, age?: number): void {
        if (age) {
            console.log(`Name: ${name}, Age: ${age}`)
        } else {
            console.log(`Name: ${name}, Age: Not provided`)
        }
    }
    
    displayInfo("Charlie")
    displayInfo("Diana", 25)
}

// # 5. REST PARAMETERS

console.log("\n--- 5. REST PARAMETERS ---")
{
    // Accepts any number of numbers and returns their sum
    function sumAll(...numbers: number[]): number {
        let total = 0
        for (const num of numbers) {
            total += num
        }
        return total
    }
    
    console.log(`Sum of 1, 2, 3 = ${sumAll(1, 2, 3)}`)
    console.log(`Sum of 5, 10, 15, 20 = ${sumAll(5, 10, 15, 20)}`)
    
    // Rest parameters with spread operator
    const nums: number[] = [10, 20, 30]
    console.log(`Sum of array = ${sumAll(...nums)}`)
}

// # 6. FUNCTION TYPES & CALLBACKS

console.log("\n--- 6. CALLBACKS ---")
{
    // Define a function type
    type MathOperation = (a: number, b: number) => number
    
    function calculate(x: number, y: number, operation: MathOperation): number {
        return operation(x, y)
    }
    
    // Use different operations
    const addOp: MathOperation = (a, b) => a + b
    const subtractOp: MathOperation = (a, b) => a - b
    const multiplyOp: MathOperation = (a, b) => a * b
    
    console.log(`Calculate 10 + 5 = ${calculate(10, 5, addOp)}`)
    console.log(`Calculate 10 - 5 = ${calculate(10, 5, subtractOp)}`)
    console.log(`Calculate 10 × 5 = ${calculate(10, 5, multiplyOp)}`)
}

// # 7. HIGHER-ORDER FUNCTIONS

console.log("\n--- 7. HIGHER-ORDER FUNCTIONS ---")
{
    // Function that returns a function
    function makeMultiplier(factor: number): (num: number) => number {
        return (num: number) => num * factor
    }
    
    const multiplyBy2 = makeMultiplier(2)
    const multiplyBy10 = makeMultiplier(10)
    
    console.log(`Multiply 5 by 2 = ${multiplyBy2(5)}`)
    console.log(`Multiply 5 by 10 = ${multiplyBy10(5)}`)
}

// # 8. ARROW FUNCTIONS WITH ARRAY METHODS

console.log("\n--- 8. ARRAY METHODS WITH ARROW FUNCTIONS ---")
{
    const numbers: number[] = [1, 2, 3, 4, 5]
    
    // map: transform each element
    const doubled = numbers.map((n) => n * 2)
    console.log("Doubled:", doubled)
    
    // filter: select elements that match condition
    const evenNumbers = numbers.filter((n) => n % 2 === 0)
    console.log("Even numbers:", evenNumbers)
    
    // reduce: combine elements into a single value
    const total = numbers.reduce((sum, n) => sum + n, 0)
    console.log("Sum of all:", total)
    
    // forEach: execute function for each element
    console.log("Each number squared:")
    numbers.forEach((n) => console.log(`  ${n}² = ${n * n}`))
}

// 9. PRACTICAL EXAMPLE - USER MANAGEMENT

console.log("\n--- 9. PRACTICAL EXAMPLE ---")
{
    interface User {
        id: number
        name: string
        email: string
        active: boolean
    }
    
    const users: User[] = [
        { id: 1, name: "Alice", email: "alice@example.com", active: true },
        { id: 2, name: "Bob", email: "bob@example.com", active: false },
        { id: 3, name: "Charlie", email: "charlie@example.com", active: true }
    ]
    
    // Function to filter active users
    const getActiveUsers = (userList: User[]): User[] => {
        return userList.filter((user) => user.active)
    }
    
    // Function to get user names
    const getUserNames = (userList: User[]): string[] => {
        return userList.map((user) => user.name)
    }
    
    // Function to find user by ID
    const findUserById = (userList: User[], id: number): User | undefined => {
        return userList.find((user) => user.id === id)
    }
    
    console.log("Active users:", getActiveUsers(users).length)
    console.log("All user names:", getUserNames(users))
    const foundUser = findUserById(users, 2)
    if (foundUser) {
        console.log(`Found user: ${foundUser.name} (${foundUser.email})`)
    }
}

/*
BEST PRACTICES:
✅ DO:
- Add type annotations to parameters and return values
- Use descriptive function names (getUserById, not getU)
- Keep functions small and focused (one responsibility)
- Use arrow functions for callbacks and simple operations
- Use rest parameters for variable-length arguments
- Leverage higher-order functions for reusability

❌ DON'T:
- Create functions with too many parameters (use objects instead)
- Forget return type annotations
- Use `var` keyword (use `const`/`let`)
- Create deeply nested functions (hard to read)
- Use `function` keyword inside functions unnecessarily
- Forget about function scope and closures
*/
