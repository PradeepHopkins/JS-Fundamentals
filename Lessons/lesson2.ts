// # String Operations in TypeScript
// Learn different ways to work with strings

// 1. String Concatenation (Traditional)
// Using + operator to join strings
const price: number = 50
const itemName: string = "Cup"
const messageToPrint: string = "The price for your " + itemName + " is " + price + " rupees"
console.log(messageToPrint)

// 2. String Interpolation (Template Literals)
// Using backticks (`) and ${} for dynamic values
const messageToPrint2: string = `The price for your ${itemName} is ${price} rupees`
console.log(messageToPrint2)

// 3. String Methods Examples
const productName: string = "Coffee Machine"
console.log(`Length: ${productName.length}`)              // String length
console.log(`Uppercase: ${productName.toUpperCase()}`)    // Convert to uppercase
console.log(`Lowercase: ${productName.toLowerCase()}`)    // Convert to lowercase
console.log(`Contains 'Coffee': ${productName.includes('Coffee')}`)  // Check if string contains text

// 4. String Template Literals with Multiple Lines
const receipt: string = `
Product: ${itemName}
Price: ${price} rupees
Date: ${new Date().toLocaleDateString()}
Thank you for your purchase!
`
console.log(receipt)

// 5. String Formatting with Numbers
const quantity: number = 3
const totalPrice: number = price * quantity
const formattedMessage: string = `
Order Summary:
${quantity}x ${itemName}
Total: ${totalPrice.toFixed(2)} rupees
`
console.log(formattedMessage)

// 6. Advanced String Operations
const description: string = "   Premium Coffee Maker   "
console.log(`Trimmed: "${description.trim()}"`)          // Remove whitespace
console.log(`Substring: ${description.substring(3, 10)}`) // Extract part of string
console.log(`Replace: ${description.replace('Coffee', 'Tea')}`) // Replace text

// 7. Working with Arrays of Strings
const items: string[] = ['Coffee', 'Tea', 'Sugar']
const itemList: string = items.join(', ')                // Join array elements
console.log(`Available items: ${itemList}`)