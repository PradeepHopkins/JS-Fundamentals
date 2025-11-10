// Class:
// A class is a blueprint or template for creating objects. It defines properties (variables) and methods (functions).

// Object:
// An object is an instance of a class — it’s a real entity created from that blueprint.

// 1. calling using class name
import { CustomerInformation } from '../helpers/print-helpers.js'
const customerInformation = new CustomerInformation()
customerInformation.printFirstName("Steve")
customerInformation.printSecondname("Smith")

//  2. calling using export object
import { customerInfo } from "../helpers/print-helpers.js"
customerInfo.printFirstName("Steve")
customerInfo.printSecondname("Smith")