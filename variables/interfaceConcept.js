"use strict";
console.log("===============Employee Interfce========================");
var emp1 = {
    empID: 101,
    employeeName: "Wael",
    email: "wael@janbask.com",
    department: "QA",
    salary: 50000
};
console.log(emp1.empID + ", " + emp1.employeeName + ", " + emp1.email + ", " + emp1.department + ", " + emp1.salary);
var emp2 = {
    empID: 102,
    employeeName: "Jason",
    email: "jason@janbask.com",
    department: "Developer",
    salary: 70000
};
console.log(emp2.empID + ", " + emp2.employeeName + ", " + emp2.email + ", " + emp2.department + ", " + emp2.salary);
console.log("===============Product Interface========================");
var product1 = {
    id: 123,
    name: "IPhone",
    description: "Amazing Features",
    price: 2000,
    color: "White",
    display() {
        console.log(product1.id + ", " + product1.name + ", " + product1.price + ", " + product1.description + product1.color);
    }
};
var product2 = {
    id: 1234,
    name: "Samsung",
    description: "Good Battery Life",
    price: 1500,
    color: "Black",
    display() {
        console.log(product2.id + ", " + product2.name + ", " + product2.price + ", " + product2.description + product2.color);
    }
};
console.log("********************************************************************");
console.log(product1.id + ", " + product1.name + ", " + product1.description + ", " + product1.price);
console.log(product2.id + ", " + product2.name + ", " + product2.description + ", " + product2.price);
console.log(product1.display());
console.log(product2.display());
console.log("********************************************************************");
var student1 = {
    studentID: 432,
    studentName: "Kerrie",
    email: "kerrie@Janbaskschool.com",
    age: 23
};
console.log(student1.studentID + ": " + student1.studentName + ": " + student1.email + ": " + student1.age + ": " + student1.section);
class Passenger {
    firstName;
    lastName;
    frequentFlyer;
    constructor(firstName, lastName, frequentFlyer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyer = frequentFlyer;
    }
    display() {
        console.log(this.firstName + ", " + this.lastName + ", " + this.frequentFlyer);
    }
}
var passenger1 = new Passenger("Wael", "Mark", 20);
passenger1.display();
var passenger2 = new Passenger("Justin", "Roger", 30);
passenger2.display();
var passenger3 = new Passenger("Kerrie", "Wright", 45);
passenger3.display();
console.log("=============================================");
for (let item in passenger1) {
    //console.log(item);
    console.log(item + ": " + passenger1[item]);
}
console.log("==================FLIGHT===========================");
class Flight {
    flightNumber;
    from;
    to;
    constructor(flightNumber, from, to) {
        this.flightNumber = flightNumber;
        this.from = from;
        this.to = to;
    }
    display() {
        console.log(this.flightNumber + ", " + this.from + ", " + this.to);
    }
}
var flight1 = new Flight(5436, "New York", "New Jersey");
flight1.display();
