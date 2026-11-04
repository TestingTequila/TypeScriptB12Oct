"use strict";
var levels = [20, 30, 12, 30, 100, 20];
console.log(levels.toString());
console.log(levels.join(","));
console.log(levels.slice(3, 5));
console.log(levels.slice(3));
console.log("====================Splice========================");
levels.splice(2, 3, 88, 99);
console.log(levels.toString());
console.log("====================push========================");
levels.push(100, 200, 300);
console.log(levels.toString());
console.log("====================pop========================");
console.log(levels.pop()); //300
console.log(levels.toString());
function add(num1, num2) {
    return num1 + num2;
}
function calculate(fun) {
    console.log(fun);
}
calculate(add(12, 4));
