// Conditional Statement
/* 
syntax:

if (Condition) {
    // exceute some code here
} else {
    // execute some code here
}
 */

// if hours between 6 to 12 print 'Good Moring'
// if hours between 12 to 18 print 'Good Afternoon'
// otherwise 'Good Evening'

let hour = 18
if (hour >= 6 && hour < 12) {
    console.log("Good Moring")
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("GOod Evening")
}

var ageIsMoreThanEighteen = true
var isIndianCitizen = true

if(ageIsMoreThanEighteen && isIndianCitizen) {
    console.log("The Customer is eligble for Driving lincense")
} else {
    console.log("The Customer is not eligble for Driving lincense")
}