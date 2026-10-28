"use strict";
var stats = "This is TypeScript";
console.log(stats.indexOf('S')); //12
console.log(stats.indexOf('O')); //?
var email = "Waeljanbask.com";
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
if (atposition == -1 || dotposition == -1) {
    console.log("Invalid Email id");
}
else {
    console.log("Valid Email Id");
}
