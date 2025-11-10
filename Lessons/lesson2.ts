// Concatination and Interpolation

var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your " + itemName + " is " + price + " rupees" // Concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} rupees` // Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)