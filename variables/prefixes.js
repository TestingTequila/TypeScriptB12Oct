"use strict";
function test1() {
    if (true) {
        var message = "Hello";
    }
    console.log(message);
}
console.log("==============let prefix=================");
function test2() {
    if (true) {
        let message = "Hello";
    }
    // console.log(message); 
    // Error as let cannot be accessed outside the block in which this is defined 
}
console.log("==================let reaasigning============================");
// Use let when you expect to assign new value to the variable 
let age = 25;
console.log(age);
age = 30;
console.log(age);
console.log("==================var reaasigning============================");
var count = 45;
console.log(count);
count = 60;
console.log(count);
console.log("=====================for loop using var=================================");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("=====================for loop using let=================================");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
var username = "Ashish";
username = "Wael";
console.log(username);
