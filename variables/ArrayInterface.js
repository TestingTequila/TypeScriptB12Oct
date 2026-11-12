"use strict";
var studentNames = ["John", "Kerrie", "Lee"];
var studentScore = {};
studentScore["John"] = 100;
studentScore["Bob"] = 90;
for (var item in studentScore) {
    console.log(item + ": " + studentScore[item]);
}
