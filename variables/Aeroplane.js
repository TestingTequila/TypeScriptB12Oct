"use strict";
class Plane {
    flightNumber;
    from;
    to;
    constructor(flightNumber, from, to) {
        this.flightNumber = flightNumber;
        this.from = from;
        this.to = to;
    }
    displayFlightDetails() {
        console.log(this.flightNumber + ", " + this.from + ", " + this.to);
    }
}
var plane = new Plane(54678, "Denver", "New York");
plane.displayFlightDetails();
