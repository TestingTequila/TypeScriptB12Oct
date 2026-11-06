var hellOne = ():string => {
    
    return "Hello GentleMan....."

};

console.log(hellOne());


var helloTwo = (name:string): string=>{
    return "Hello, " + name;
};

console.log(helloTwo("Wael"));

console.log("======================================")

var multiply = (num1: number, num2:number):number => {
         return num1*num2;
}

console.log(multiply(5,4));


console.log("======================================")

var multiplyOne = (num1: number, num2:number) => {
         return num1*num2;
}

console.log("Without explicitely using return keyword: "+multiplyOne(5,4));
