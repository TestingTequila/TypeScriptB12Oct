interface IExterior {
    color: string;
    numOfDoors: number;
}

interface IInterior{
    seats: number;
    isAutomatic: boolean;
}

interface ICar extends IExterior, IInterior{
    make: string;
    model: string;
    year: number;
}

var myCar:ICar = {
    make:"Honda",
    model: "Civic", 
    year: 2024,
    color: "black", 
    numOfDoors: 4,
    seats: 6,
    isAutomatic: true
}

console.log(myCar.make+", " + myCar.model+", "+ myCar.year+", " + myCar.color+", "+ myCar.numOfDoors+", "+ myCar.seats+", "+ myCar.isAutomatic);