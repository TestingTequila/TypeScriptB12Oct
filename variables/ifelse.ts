var x: number = 10;
var y : number =20;

if(x>y)
{
   console.log("X is greater....")
}
else
{
   console.log("Y is greater....")
}


console.log("======================================");

var a: number = 100;
var b: number = 200;

if(b>a)
{
    console.log("B is greater...")
}
else
{
    console.log("a is greater....")
}

console.log("======================================");

var c: number = 10;
var d: number = 10;

if(c>d)
{
    console.log("C is greater....")
}
else if(d>c)
{
    console.log("D is Greater...")
}
else
{
    console.log("Both the numbers are equal...")
}

console.log("======================================");

var x1: number = 10;
var y1: number = 20;
var z1: number = 30;

if((x1>y1) && (x1>z1) )
{
    console.log("X1 is greater...");
}
else if((y1>x1)&&(y1>z1))
{
    console.log("Y1 is greater");
}
else if((z1>x1)&&(z1>y1))
{
    console.log("Z1 is greater");
}
else
{
    console.log("Numbers are Equal");
}