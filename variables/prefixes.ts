function test1()
{
    if(true)
    {
        var message = "Hello";
    }

    console.log(message);
}

console.log("==============let prefix=================")

function test2()
{
    if(true)
    {
        let message = "Hello";
    }

   // console.log(message); 
   // Error as let cannot be accessed outside the block in which this is defined 
}

console.log("==================let reaasigning============================");

// Use let when you expect to assign new value to the variable 
let  age: number = 25;
console.log(age);

age = 30;
console.log(age); 

console.log("==================var reaasigning============================");


var count : number =45;
console.log(count);

count = 60;
console.log(count);

console.log("=====================for loop using var=================================");

for(var i =1; i<=10; i++)
{
    console.log(i);
}

console.log("=====================for loop using let=================================");

for(let i =1; i<=10; i++)
{
    console.log(i);
}

let username: string = "Ashish";
username= "Wael";

console.log(username);

// you can update a let variable but you cannot redeclare it in the same scope 

console.log("Redeclaring variable using var")

var marks1: number = 25;
var marks1: number =30; // Error 
marks1 = 45;


console.log("Redeclaring variable using let")
let marks2: number = 25;
//let marks2: number =30; // Error 
marks2 = 45;

// A let variable cannot be accessed before its declaration is intialized, This is known as TDZ[temporary Dead Zone]

console.log("=====TDZ Example===================");
console.log(y);
let y = 10;



