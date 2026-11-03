"use strict";
var courses = ["Angular", "React", "Java", "JavaScript"];
console.log(courses);
// courses.push("TypeScript");
// console.log(courses);
console.log("======Using For in Loop=============");
for (var i = 0; i < courses.length; i++) {
    if (courses[i] === "Java") {
        console.log("Not interested....");
    }
    else {
        console.log(courses[i]);
    }
}
console.log("======Using For in Loop=============");
// var courses1 = ["Angular", "React", "Java", "JavaScript",10]; // This allows adding of string and number at the later stage as well
// console.log(courses1);
// courses1.push("TypeScript");
// console.log(courses1);
// courses1.push(12);
// var courses2:any = ["Angular", "React", "Java", "JavaScript"]; // This allows adding of string and number at the later stage as well
// console.log(courses2);
// courses.push("TypeScript");
// console.log(courses2);
// courses2.push(12);
console.log("==============De-Structuring Array=========================");
// The process of assigning arrays elements to indivdual variables 
var [a, b, c, d] = courses;
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("=================================================");
var [e, f, g] = courses;
console.log("e: " + e);
console.log("f: " + f);
console.log("g: " + g);
