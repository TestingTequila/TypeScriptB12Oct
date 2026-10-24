var x: number = 10;
var y: number = 20;
var z: number = 5;

// &&, ||, !

//condition1, condition2, condition3
// && Operator --> All the condition needs to be true

// T | F | F
// F | F | F
// F | T | F
// T | T | T

console.log((x>y)&&(x>z));  // F && T = F
console.log((x>z)&& (y>x)); // T && T = T 
console.log((x>z)&& (y>x)&&(y>z)); // T && T && T 
console.log((x>z)&& (y>x)&&(y<z)); //T && T && F 

// || Operator --> Any one of the condition has to be true

// T | F | T
// F | F | F
// F | T | T
// T | T | T

console.log("=====================OR Operator========================");

console.log((x>y)||(x>z));  // F || T = T
console.log((x>z)|| (y>x)); // T || T = T 
console.log((x>z)|| (y>x)||(y>z)); // T || T || T  = T
console.log((x>z)|| (y>x||y<z)); //T &|| T || F = T
console.log((x<z)||(y<z)); // F || F = F

console.log("=====================NOT Operator=======================");

console.log(x===y); // False
console.log(x!=y); // True