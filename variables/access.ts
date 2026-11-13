//public/readonly/private 

class Student
{
     readonly name: String;
    public age: number;
    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
}

var student = new Student("Jason", 23);
//student.name = "Kerrie"; this will throw error as this is readonly 
console.log(student.name);
console.log(student.age);


//console.log(new Student("Jason", 23).name);
//console.log(new Student("Jason", 19).age);


// Encapsulation 