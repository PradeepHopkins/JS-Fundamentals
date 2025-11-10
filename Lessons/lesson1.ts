// Hello World

console.log("Hello World!")

// Variables
var firstName = "Pradeep"
let lastName = "Hopkins"
console.log(firstName)
let age, sex
age = "25"
console.log(age)
sex = "Male"
age = "26"
console.log(age)
age = 27
console.log(age)

// Constands
const occupation = "Engineer"
console.log(occupation)
// const declarations must be initialized.
// const place
// place = "chennai"

// DataTypes
var man = "jack Sparrow" // string
var ageOfBrother = 30 // number
var isHeMarried = true // boolean
var yearsInMarriage = null // null (no value)
var numberOfBrothers = undefined // explicitly declare a variable as undefined or a union with another type (Useful for optional values that might not be initialized)
var queues // for any type (not type-safe)
queues = "API"
queues = 10
queues = true
queues = null
queues = [10, 20, 30]
queues = { queueName : "API", numOfQueues: 18}
var numbers = [10, 30 ,40 ,50] // array – list of items
var dateOfbirth = [20, "May", 2000]// tuple - fixed-length array with specific types
enum colours { Red, Green, Blue} // enum - named constant values (enum Color { Red, Green, Blue })
let studentDetails = {name: "Pradeep", age: 20, isGraduate: true} // object -structured data
let date: number | string // union – multiple possible types
date = 18
date = "8th Of november"


