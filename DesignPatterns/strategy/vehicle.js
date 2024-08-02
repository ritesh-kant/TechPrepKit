"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsVehicle = exports.PassengerVehicle = exports.Vehicle = void 0;
const strategy_1 = require("./strategy");
class Vehicle {
    constructor(driveStrategy) {
        this.driveStrategy = driveStrategy;
    }
    drive() {
        this.driveStrategy.drive();
    }
    display() {
        console.log("Base class display");
    }
}
exports.Vehicle = Vehicle;
class PassengerVehicle extends Vehicle {
    constructor() {
        super(new strategy_1.Passenger());
    }
}
exports.PassengerVehicle = PassengerVehicle;
class SportsVehicle extends Vehicle {
    constructor() {
        super(new strategy_1.SportyVehicle());
    }
}
exports.SportsVehicle = SportsVehicle;
