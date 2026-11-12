"use strict";
class Traveller {
    firstName;
    lastName;
    frequentFlyer;
    display() {
        console.log(traveller1.firstName + ", " + traveller1.lastName + ", " + traveller1.frequentFlyer);
    }
    constructor(firstName, lastName, frequentFlyer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyer = frequentFlyer;
    }
}
var traveller1 = new Traveller("Kerrie", "Wright", 50);
traveller1.display();
// traveller1.firstName= "John";
// traveller1.lastName ="Hill";
//traveller1.frequentFlyer =100;
console.log("==================================================");
for (let item in traveller1) {
    console.log(item + ":" + traveller1[item]);
}
