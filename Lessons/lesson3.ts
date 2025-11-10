// Objects

var customer = {
    firstName : "Pradeep",
    lastName : "Hopkins"
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)

// Dot notation
customer.firstName = 'Steve'
// Bracket notation
customer['lastName'] = 'Smith'

console.log(`${customer.firstName} ${customer.lastName}`)
// Array

var carDealer = {
    delarName : 'Kun Shop',
    dearPlace: 'Chennai',
    cars: ["Volvo", "BMW", "Tesla", "BYD"]
}
var car = ["Volvo", "BMW", "Tesla", "BYD"]
console.log(car)
console.log(car[0])
car[1] = "Skoda"
console.log(car[1])
// Accessing Array Elements: To access elements within the array property, you can use either dot notation or bracket notation
console.log(carDealer.cars[3])
console.log(carDealer['cars'][2])

