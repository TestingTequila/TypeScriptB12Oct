interface IAeroPlane{
    flightNumber: number;
    from: string;
    to: string;
}

class Plane implements IAeroPlane{

    flightNumber: number;
    from: string;
    to: string;

    constructor(flightNumber: number,from: string,to: string )
    {
        this.flightNumber = flightNumber;
        this.from= from;
        this.to= to;
    }
    displayFlightDetails()
    {
        console.log(this.flightNumber+", " + this.from+", " + this.to);
    }
}

var plane =new Plane(54678, "Denver", "New York");
plane.displayFlightDetails();
