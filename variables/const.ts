//const - When reassignment is not allowed, Use const when you don't want the variable to be reassigned after initialization.

console.log("====================var=======================");
var country1: string = "India";
console.log(country1);

country1 = "US";
console.log(country1);

console.log("==================let=========================");
let country2: string = "India";
console.log(country2);

country2 = "US";
console.log(country2);

console.log("==================const=========================");
const country3: string = "India";
console.log(country3);

//country3 = "US"; error
console.log(country3);

console.log("================================================");

const companyName: string = "Google"; 
const taxRate: number = 18;
const browser: string = "Chrome";
//taxRate = 45;
//companyName = "Microsoft";
//browser = "Edge";

console.log(companyName);
console.log(taxRate);
console.log(browser);

// const prevents reassignment of object referernces but it does not make object properties immutable[something that cannot be changed]


console.log("==============Object Reassignemrnt============")

const student = 
{
    name: "Jason",
    age : 30
}

student.age = 45;

/*
student = {
    name: "Weal",
    age : 45
};

*/

console.log(student);


const product = function(x:number, y:number): number
{
    return x+y;
}

/*
product = function(x:number, y: number)
{
    return x*y;
}
    */

console.log(product(12,4));

