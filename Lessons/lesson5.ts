// Logical Operators
// logival "AND"
console.log(true && true) // all values have to be TRUE for experssion to be TRUE

// logivcal "OR"
console.log(true || false) // any value should be TRUE for the experssion to be TRUE

var ageIsMoreThanEighteen = true
var isIndianCitizen = false

var eligiblityForDriverLicense = ageIsMoreThanEighteen && isIndianCitizen
console.log('The Customer is eligble for Driving lincense: ' + eligiblityForDriverLicense)

var eligiblityForDriverLicense = ageIsMoreThanEighteen || isIndianCitizen
console.log('The Customer is eligble for Driving lincense: ' + eligiblityForDriverLicense)

// logical "NOT"
console.log(!true)
const a: number = 6;
const b: number = 10;
console.log(a !== b);
