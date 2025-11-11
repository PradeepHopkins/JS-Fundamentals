// =====================================================
// # Objects and Arrays in TypeScript
// =====================================================
// Learn how to work with complex data structures

// 1. Basic Object with Interface
interface Customer {
    firstName: string;
    lastName: string;
}

const customer: Customer = {
    firstName: "Pradeep",
    lastName: "Hopkins"
}

// Accessing Object Properties
console.log("Full object:", customer)
console.log("First name:", customer.firstName)    // Dot notation
console.log("Last name:", customer["lastName"])   // Bracket notation

// Modifying Object Properties
customer.firstName = "Steve"                      // Using dot notation
customer["lastName"] = "Smith"                    // Using bracket notation
console.log(`Updated name: ${customer.firstName} ${customer.lastName}`)

// 2. Nested Objects with Arrays
interface CarDealer {
    dealerName: string;
    location: string;
    cars: string[];
    contact: {
        phone: string;
        email: string;
    };
}

const carDealer: CarDealer = {
    dealerName: "Kun Shop",
    location: "Chennai",
    cars: ["Volvo", "BMW", "Tesla", "BYD"],
    contact: {
        phone: "+91-123-456-7890",
        email: "info@kunshop.com"
    }
}

// 3. Working with Arrays
// Type-safe array declaration
const cars: string[] = ["Volvo", "BMW", "Tesla", "BYD"]

// Array Operations
console.log("\nArray Operations:")
console.log("Full array:", cars)
console.log("First element:", cars[0])
cars[1] = "Skoda"                                // Modifying elements
console.log("After modification:", cars)

// Array Methods
console.log("\nArray Methods:")
cars.push("Mercedes")                            // Add to end
console.log("After push:", cars)
cars.pop()                                       // Remove from end
console.log("After pop:", cars)
console.log("Array length:", cars.length)
console.log("Find Tesla:", cars.indexOf("Tesla"))

// 4. Accessing Nested Properties
console.log("\nNested Object Access:")
console.log("Dealer's cars:", carDealer.cars)    // Using dot notation
console.log("Last car:", carDealer.cars[carDealer.cars.length - 1])
console.log("Contact email:", carDealer.contact.email)

// 5. Object Methods and Properties
const dealerInfo = Object.keys(carDealer)        // Get all property names
console.log("\nDealer properties:", dealerInfo)

// 6. Array Transformation
const carPrices: number[] = [50000, 75000, 100000, 85000]
const formattedPrices = carPrices.map(price => `$${price.toLocaleString()}`)
console.log("\nFormatted prices:", formattedPrices)

// 7. Advanced Array Operations
console.log("\nAdvanced Array Operations:")
// Filter: Find cars priced under 80000
const affordableCars = carPrices.filter(price => price < 80000)
console.log("Affordable cars:", affordableCars)

// Sort: Sort cars by name
const sortedCars = [...cars].sort()
console.log("Sorted cars:", sortedCars)

// Find: Find specific car
const teslaCar = cars.find(car => car === "Tesla")
console.log("Found Tesla:", teslaCar)

