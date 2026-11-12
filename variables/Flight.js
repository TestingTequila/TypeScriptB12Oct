"use strict";
class Flight {
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
var flight1 = new Flight();
