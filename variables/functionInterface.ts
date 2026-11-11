
interface IAdd{
(x: number, y:number): void
}

interface ISub{
    (x: number, y:number): number
}

interface IDivide{
    (x: number, y:number):void
}

var add: IAdd = function(x:number, y:number):number
{
    console.log(x+y);
    return x+y;
}

var sub: ISub = function(a: number, b: number):number
{
    console.log(a-b);
    return a-b;
}