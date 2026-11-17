class Employee {

    public firstName: string;
    public lastName: string;
    public designation: string;

    print(): void {
        console.log("=====Employee Details=====");
    }

    constructor(firstName: string, lastName: string,designation: string )
    {
        this.firstName= firstName;
        this.lastName=lastName;
        this.designation= designation;
    }
}

class Manager extends Employee {

    print(): void {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);    
    }

}

class Architect extends Employee {

    print(): void {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);    
    }

}

class Developer extends Employee {

    print(): void {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);    
    }

}

class QA extends Employee {

    print(): void {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);    
    }

}


let employee: Employee = new Manager("Kerrie", "Wright", "Manager");
employee.print();


let architect: Architect = new Architect("Jason", "Hill", "Architect");
architect.print();


let developer: Developer = new Developer("Ashish", "Mishra", "Developer");
developer.print();

let qa: QA = new QA("Denis", "Jackson", "QA");
qa.print();
console.log("====Storing Objects in an Array=====");
let emp : Employee[] = new Array(new Manager("Kerrie", "Wright", "Manager"), 
                                 new Architect("Jason", "Hill", "Architect"), 
                                 new Developer("Ashish", "Mishra", "Developer"),
                                 new QA("Denis", "Jackson", "QA")  );

for(let e of emp){
    e.print();
}                                 