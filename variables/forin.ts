console.log("=====Print the properties of student object============")

var student:any = {
    name : "Wale",
    age  : 36,
    course: "TypeScript"
};

for(var key in student)
{
    console.log(key);
}

console.log("=====Print the value of student object============")

var student:any = {
    name : "Wale",
    age  : 36,
    course: "TypeScript"
};

for(var key in student)
{
    console.log(student[key]);
}



console.log("=====Print the properties & value of student object============")

var student:any = {
    name : "Wale",
    age  : 36,
    course: "TypeScript"
};

for(var key in student)
{
    console.log(key + ": " + student[key]);
}


console.log("=======Calculate the total marks of a student======")

var marks = {
    Mathematics: 85,
    English: 70,
    Science : 92
};

var total: number =0;

for(var subject in marks)
{
    
}