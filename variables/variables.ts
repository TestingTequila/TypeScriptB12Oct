// Variables in TypeScript
//Syntax of variable
// var variableName: dataType = value;
var n1: number = 10;
console.log(n1);

var n2: number=55.67;
console.log(n2);

var s1: string = "This is Typescript and JavaScript training Session";
console.log(s1);

var s2 : string = "The king was sick, but his cheeks were red";
console.log(s2);

var b1: boolean = true;
console.log(b1);

var b2: boolean = false;
console.log(b2);

var a1: any = "This is TypeScript and JavaScript training Session - any data type";
console.log(a1);

var a2: any = "This is TypeScript and JavaScript training Session - any data type";
console.log(a2);

var a3: any = {
    empId:101,
    empName:"John",
    empSalary: 50000,
    isPermanent: true
};
console.log(a3);
console.log(a3.empId);
var array1: Array<string> = ["AngularJS", "ReactJS", "NodeJS"];
console.log(array1[2]); // NodeJS
console.log(array1[0]); // AngularJS
console.log(array1);


// Ravi, Jason, Keith, jay, Wael
var names: Array<string> = ["Ravi", "Jason", "Keith", "Jay", "Wael"];
console.log(names[3]);//Jay
console.log(names[4]);//Wael
console.log(names); 

// 12.34, 34.56, 77, 87, 32.16
var temp: Array<number> =[12.34, 34.56, 77, 87, 32.16, 98.45];
console.log(temp[3]);
console.log(temp[5]);
console.log(temp);

//Larry, 42, false, larry@janbask.com

var info: Array<any> = ["Larry", 42, false, "larry@janbask.com"];
console.log(info);


//Weekdays -->  Monday, Tuesday, Wednesday, Thursday, Friday 
//Weekends -->  Saturday, Sunday

