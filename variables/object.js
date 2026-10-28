"use strict";
var student = {
    name: "John",
    age: 25,
    score: 90
};
console.log(student.name);
console.log(student.age);
console.log(student.score);
console.log("=========================================");
for (var item in student) {
    console.log(item);
}
console.log("=========================================");
for (var item in student) {
    console.log(student[item]);
}
console.log("=========================================");
var product = {
    productName: "Mobile",
    productModel: "Iphone",
    isExtendable: true,
    price: 2456
};
console.log(product.productName);
console.log(product.productModel);
console.log(product.isExtendable);
console.log(product.price);
