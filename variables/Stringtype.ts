var s1: string = "This is Typescript/JavaScript session";
var userName: String = 'Ashish';
var s2: string = `My name is ${userName}`;
console.log(s2);

var lang: string = "TypeScript";
var s3: string = `${userName}` + " is learning " + `${lang}` + " Programming Language";
console.log(s3);

//String Functions

console.log(userName.length);
console.log(s2.length);

var s4: string = "      Ashish            ";
console.log(s4);
console.log(s4.trim());

var s5: string = "This is AI Class";
console.log(s5.charAt(3));//s
console.log(s5.charAt(6));//s
console.log(s5.charAt(11));//C

console.log(s5.indexOf('C'));//11
console.log(s5.indexOf('i'));//2

