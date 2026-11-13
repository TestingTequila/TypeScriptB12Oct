"use strict";
// class Login
// {
//     private _username: string;
//     private _password: string;
//     constructor(username:string, password: string)
//     {
//         this._username= username;
//         this._password = password;
//     }
// }
// var login = new Login("Kerrie", "test@4321");
// login._username = "Jason";
// login._password= "test@1234";
// console.log(login._username);
// console.log(login._password);
class PaySalary {
    _basicSalary = 0;
    _travelAllowance = 0;
    //setter and getter function 
    set setBasicSalary(_basicSalary) {
        this._basicSalary = _basicSalary;
        if (_basicSalary < 1000 || _basicSalary > 5000) {
            this._basicSalary = 0;
        }
        else {
            this._basicSalary = _basicSalary;
        }
    }
    set setTravelAllowance(_travelAllowance) {
        this._travelAllowance = _travelAllowance;
        if (_travelAllowance < 1000 || _travelAllowance > 5000) {
            this._travelAllowance = 0;
        }
        else {
            this._travelAllowance = _travelAllowance;
        }
    }
    get getBasicSalary() {
        return this._basicSalary;
    }
    get getTravelAllowance() {
        return this._travelAllowance;
    }
}
var jasonSalary = new PaySalary();
jasonSalary.setBasicSalary = 3500;
jasonSalary.setTravelAllowance = 2500;
console.log("Pay Employee a Salaty of $" + jasonSalary.getBasicSalary);
console.log("Pay Employee a Salaty of $" + jasonSalary.getTravelAllowance);
