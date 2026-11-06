function doubleMe(x:number):void;
function doubleMe(x:string):void;


function doubleMe(x:any)
{
    if(x && typeof x ==="number")
    {
        console.log(x*2);
    }
    else if(x && typeof x ==="string")
    {
        console.log(x+ " " + x);
    }
}

doubleMe(4);
doubleMe("Ashish");
//doubleMe(true);
console.log("===================add function overloading============================");
function add(a:number, b:number):number;
function add(a:string, b: string):string;

function add(a: any, b:any)
{
   return a+b;
}

console.log(add(12,8));
console.log(add("Jason", "Hill"));

console.log("=================== Display function overloading============================");

function display(name:string):void;
function display(name:string, age: number):void;


function display(name:any, age?: any):void{
    if(age!==undefined)
    {
        console.log("Name: " + name, "Age:" + age)
    }
    else
    {
        console.log("Name: " + name);
    }
}

display("Jason");
display("Kerrie", 24);

console.log("=================== Calculate Area function overloading============================");

function calculateArea(side:number):number;
function calculateArea(length: number, width: number): number;

function calculateArea(length:any, width?:any):number
{
    if(width===undefined)
    {
        return length*length;
    }
    else
    {
        return length*width;
    }
}

console.log(calculateArea(5));
console.log(calculateArea(10, 4));

console.log("===================getValue function overloading============================");

function getValue(value:number):number;
function getValue(value:string):string;
function getValue(value:boolean):boolean;

function getValue(value:any):any{
    return value;
}

console.log(getValue(100));
console.log(getValue("Lee"));
console.log(getValue(true));

console.log("===================Real time function overloading============================");

function login(username:string, password:string):string;
function login(email:string, password:string, otp: number):string;
function login(api:string):string;

function login(usernameOrEmail:string, password?:string, otp?:number):string
{
    if(otp !==undefined)
    {
        return "Login using OTP: " + otp;
    }
    else
    {
        return "Login using UserNameOrEmail: " + usernameOrEmail;
    }
}

console.log(login("JasonHill@janbask.com", "test@1234"));
console.log(login("kerrie.wright", "test@3241", 83657));
console.log(login("facebookapi"));













