export interface DriveStrategy {
  drive(): void;
}

export class SportyVehicle implements DriveStrategy {
  drive() {
    console.log('sproty vehicle');
  }
}

export class Passenger implements DriveStrategy {
  drive() {
    console.log('Passenger vehicle');
  }
}
