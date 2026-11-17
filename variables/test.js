"use strict";
class Majdoor {
    firstName;
    lastName;
    designation;
    print() {
        console.log("Majdoor Details");
    }
    constructor(firstName, lastName, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
}
class Commmander extends Majdoor {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
class Subedaar extends Majdoor {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
class Hawaldaar extends Majdoor {
    print() {
        super.print();
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.designation);
    }
}
console.log("=================================");
let maa = new Subedaar("Sharukh", "Khan", "Actor");
maa.print();
console.log("=================================");
// let majdoor: Majdoor[]= new Array(new Commmander("Jason", "Roger", "Commander"), new Subedaar("Kerrie", "Wright", "Subedaar"), new Hawaldaar("Lee", "Hill","Hawaldaar") );
// for (let maj of majdoor)
// {
//     maj.print();
// }
