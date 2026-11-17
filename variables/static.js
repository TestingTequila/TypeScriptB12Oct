"use strict";
class Check {
    static bankName = "Bank Of America";
    customerName;
    accountNUmber;
    routingNumber;
    constructor(customerName, accountNUmber, routingNumber) {
        this.customerName = customerName;
        this.accountNUmber = accountNUmber;
        this.routingNumber = routingNumber;
    }
    printDetails() {
        console.log(Check.bankName + ", " + this.customerName + ", " + this.accountNUmber + ", " + this.routingNumber);
    }
    static subtraction(num1, num2) {
        return num1 - num2;
    }
}
var check = new Check("Jason", 56756756, 6789);
console.log(Check.bankName);
check.printDetails();
var sub = Check.subtraction(12, 4);
console.log("subtraction:" + sub);
