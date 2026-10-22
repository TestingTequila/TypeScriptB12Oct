var num1: number = 10;
var num2: number = 2;

var num3: number= num2;

console.log(num1);//10
console.log(num2);//2
console.log(num3);//2

num3 += num1; // num3 = num3(2)+ num1(10);
console.log(num3);//12

num3 -= num1; // num3 = num3(12)- num1(10);
console.log(num3);//2