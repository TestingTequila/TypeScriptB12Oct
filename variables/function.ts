//1. function without parameters and without retun type
function display()
{
       console.log("Hello Everyone...!");
}

//2. function with parameters and without return type
function showMessage(message:string)
{
       console.log("Hello, " + message);
}

//3. function without parameters and with return type
function announcement():string
{
    var info: string = "It  will be off on every second saturday";
    return info;
}

//4. function with parameters and with return type
function fullName(firstName:String, lastName:String):string
{
       return firstName +" " + lastName;
}

function hello1(name:string):string
{
       return "Hello1 " + name;
}

function hello2(name:string)
{
        console.log("Hello2 " + name);
}

var h1: String =hello1("Wael");
console.log(h1 + ", How was your day");

//var h2: String =hello2("Wael");

function add1(num1:number, num2:number):number
{
       return num1+num2;
}

function add2(num1:number, num2:number)
{
       num1+num2;
}


var sum1: number=add1(12,8);
console.log(sum1);
console.log(sum1*5);
console.log(add1(12, 34));

//var sum2: number=add2(12,8);
console.log("***************************************************")
function displayMessage(id:number, name:string, isPresent:boolean, role:String)
{
   console.log("Id: ", id );
   console.log("Name: ", name);
   console.log("IsPresent:", isPresent);
   console.log("Role: ", role);
}

displayMessage(1234, "Jason", false, "Manager");

console.log("***********************Optional Parameter Example****************************")
function displayMessageOne(id:number, name:string, isPresent:boolean, role?:String)
{
   console.log("Id: ", id );
   console.log("Name: ", name);
   console.log("IsPresent:", isPresent);
   console.log("Role: ", role);
}

displayMessageOne(4321, "Roger", true);

console.log("***********************Parameter with default value****************************")
function displayMessageTwo(id:number, name:string, isPresent:boolean, role:String="Student")
{
   console.log("Id: ", id );
   console.log("Name: ", name);
   console.log("IsPresent:", isPresent);
   console.log("Role: ", role);
}

displayMessageTwo(6543, "Kerrie", false);
displayMessageTwo(6543, "Kerrie", false, "Admin");

console.log("=============================");

function add(num1:number, num2: number):number
{
       return num1+num2;
}

function calculate(fun: any):void
{
    console.log(fun);
}

calculate(add(12,38));

console.log("=======CALCULATOR=============");
function calculator():any
{
   function subtract(num1: number, num2: number):number
   {
       return num1-num2;
   }

   return subtract;
}

var sub =calculator();
console.log(sub(20, 5));
console.log(calculator()(20,5));


console.log("=====Anonymous Functions===================");

var hello= function(name:string):string
{
       return "Hello1 " + name;
}

console.log(hello("Wael"));

console.log("======Anonymous Example 2=======");

var sum = function(num1:number, num2: number):number
{
       return num1+num2;
}
console.log(sum(30, 45));
