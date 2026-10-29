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