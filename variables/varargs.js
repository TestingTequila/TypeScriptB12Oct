"use strict";
var product = function (...nums) {
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        //console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log("====================================================");
console.log(product(1, 2, 3, 4, 5));
console.log(product(12, 34, 56));
console.log(product("Jason", 34, true));
console.log("====================================================");
const applicationName = "Amazon";
let loginAttempts = 0;
loginAttempts++;
loginAttempts++;
console.log(applicationName);
console.log(loginAttempts);
console.log(browserName);
