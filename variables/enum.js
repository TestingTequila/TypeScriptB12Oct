"use strict";
var weekday;
(function (weekday) {
    weekday[weekday["Monday"] = 10] = "Monday";
    weekday[weekday["Tuesday"] = 11] = "Tuesday";
    weekday[weekday["Wednesday"] = 12] = "Wednesday";
    weekday[weekday["Thursday"] = 13] = "Thursday";
    weekday[weekday["Friday"] = 14] = "Friday";
})(weekday || (weekday = {}));
console.log(weekday[0]); // Value
console.log(weekday.Monday); // index --0 
