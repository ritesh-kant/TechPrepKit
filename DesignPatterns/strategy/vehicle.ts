import { DriveStrategy, Passenger, SportyVehicle } from "./strategy";

export class Vehicle {
    private driveStrategy: DriveStrategy
    constructor(driveStrategy: DriveStrategy) {
        this.driveStrategy = driveStrategy
    }
    drive() {
        this.driveStrategy.drive();
    }
    display() {
        console.log("Base class display")
    }
}

export class PassengerVehicle extends Vehicle {
    constructor() {
        super( new Passenger())
    }
}
export class SportsVehicle extends Vehicle {
    constructor() {
        super(new SportyVehicle())
    }
}

