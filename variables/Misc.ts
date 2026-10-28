var stats = "This is TypeScript";
console.log(stats.indexOf('S'));//12
console.log(stats.indexOf('O'));//?


var email: String ="Wael@janbask.com";
var atposition: number = email.indexOf('@');
var dotposition: number = email.indexOf('.');

if(atposition==-1 || dotposition==-1)
{
    console.log("Invalid Email id");
}
else
{
    console.log("Valid Email Id")
}