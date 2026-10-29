"use strict";
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("======Print number from 10-1 using for loop");
for (var j = 10; j > 0; j--) {
    console.log(j);
}
console.log("======WAP to print table of 2 using for loop");
for (var k = 1; k <= 10; k++) {
    console.log(2 * k);
}
console.log("======Calculate the sum of numbers from 1 to 10 using for loop");
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("SUM = " + sum);
console.log("======WAP to print table of 2 using for loop");
var k = 1;
for (; k <= 10;) {
    console.log(2 * k);
    k++;
}
console.log("WAP to print even numbers from 2-10");
for (var i = 2; i <= 10; i += 2) {
    console.log(i);
}
