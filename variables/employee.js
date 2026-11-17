"use strict";
class Employee {
    firstName;
    lastName;
    designation;
    print() {
        console.log("=====Employee Details=====");
    }
    constructor(firstName, lastName, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
}
class Manager extends Employee {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
class Architect extends Employee {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
class Developer extends Employee {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
class QA extends Employee {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
let employee = new Manager("Kerrie", "Wright", "Manager");
employee.print();
let architect = new Architect("Jason", "Hill", "Architect");
architect.print();
let developer = new Developer("Ashish", "Mishra", "Developer");
developer.print();
let qa = new QA("Denis", "Jackson", "QA");
qa.print();
console.log("====Storing Objects in an Array=====");
let emp = new Array(new Manager("Kerrie", "Wright", "Manager"), new Architect("Jason", "Hill", "Architect"), new Developer("Ashish", "Mishra", "Developer"), new QA("Denis", "Jackson", "QA"));
for (let e of emp) {
    e.print();
}
