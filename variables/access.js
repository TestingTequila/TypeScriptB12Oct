"use strict";
//public/readonly/private 
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var student = new Student("Jason", 23);
student.name = "Kerrie";
console.log(student.name);
console.log(student.age);
//console.log(new Student("Jason", 23).name);
//console.log(new Student("Jason", 19).age);
