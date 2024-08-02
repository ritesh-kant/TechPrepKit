import { Vehicle } from "./vehicle";
import { DriveStrategy, SportyVehicle } from "./strategy";
function main() {
    let driveStrategy: DriveStrategy = new SportyVehicle();
    let vehicle = new Vehicle(driveStrategy)
    vehicle.drive();
}

main();