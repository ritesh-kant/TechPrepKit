"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
const strategy_1 = require("./strategy");
function main() {
    let driveStrategy = new strategy_1.SportyVehicle();
    let vehicle = new vehicle_1.Vehicle(driveStrategy);
    vehicle.drive();
}
main();
