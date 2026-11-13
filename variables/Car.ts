class BMW{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string,year: number )
    {
        this.make =make;
        this.model= model;
        this.year = year;
    }

    commonEngineFunc()
    {
        console.log("Common Function");
    }

    start()
    {
        console.log("Car Start.....");
    }

    stop()
    {
        console.log("Car Stop.....");
    }
}

class ThreeSeries extends BMW{
    cruiseControlEnabled: boolean;
    constructor(make: string, model: string,year: number,cruiseControlEnabled: boolean)
    {
        super(make, model, year);
        this.cruiseControlEnabled= cruiseControlEnabled;
    }

    cruiseControl()
    {
        this.cruiseControlEnabled= true;
        console.log("Cruising.....");
    }

    start()
    {
        console.log("ThreeSeries Button Start.....");
    }

     stop()
    {
        console.log("ThreeSeries Button Stop.....");
    }
}

class FiveSeries extends BMW{
    parkingAssistEnabled: boolean;
    constructor(make: string, model: string,year: number,parkingAssistEnabled: boolean)
    {
        super(make, model, year);
        this.parkingAssistEnabled= parkingAssistEnabled;
    }

    parkingAssist()
    {
        this.parkingAssistEnabled= true;
        console.log("Parked....");
    }

    start()
    {
        console.log("Remote FiveSeries Start.....");
    }

    stop()
    {
        console.log("Remote FiveSeries Stop.....");
    }
}

console.log("======THREE SERIES FEATURES DETAIL======");
var threeSeries = new ThreeSeries("BMW", "328i", 2018, false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();


console.log("======FIVE SERIES FEATURES DETAIL======");
var fiveSeries = new FiveSeries("BMW", "535j", 2020,false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();

console.log("======CAR FEATURES DETAIL======");
var bmw = new BMW("BMW", "700i", 2024);
console.log(bmw.make);
console.log(bmw.model);
console.log(bmw.year);
bmw.commonEngineFunc();
bmw.start();
bmw.stop();



//Overriding 

