enum VehicleType {
  CAR,
  MOTORCYCLE,
  TRUCK,
}

interface Vehicle {
  plateNumber: string;
  type: VehicleType;
}

class ParkingSpot {
  spotNumber: number;
  occupied: boolean;
  vehicle: Vehicle | null;

  constructor(spotNumber: number) {
    this.spotNumber = spotNumber;
    this.occupied = false;
    this.vehicle = null;
  }

  parkVehicle(vehicle: Vehicle): boolean {
    if (this.occupied) {
      return false; // Spot already occupied
    }
    this.vehicle = vehicle;
    this.occupied = true;
    return true;
  }

  vacateSpot(): void {
    this.vehicle = null;
    this.occupied = false;
  }
}

class ParkingLot {
  totalSpots: number;
  spots: ParkingSpot[];

  constructor(totalSpots: number) {
    this.totalSpots = totalSpots;
    this.spots = [];
    for (let i = 0; i < totalSpots; i++) {
      this.spots.push(new ParkingSpot(i + 1));
    }
  }

  parkVehicle(vehicle: Vehicle): number {
    for (let i = 0; i < this.spots.length; i++) {
      if (!this.spots[i].occupied) {
        this.spots[i].parkVehicle(vehicle);
        return this.spots[i].spotNumber;
      }
    }
    return -1; // Parking lot full
  }

  vacateSpot(spotNumber: number): boolean {
    const spotIndex = spotNumber - 1;
    if (spotIndex >= 0 && spotIndex < this.totalSpots) {
      this.spots[spotIndex].vacateSpot();
      return true;
    }
    return false; // Spot number out of range
  }
}

// Usage:
const parkingLot = new ParkingLot(10); // Creating a parking lot with 10 spots

const vehicle1: Vehicle = { plateNumber: 'ABC123', type: VehicleType.CAR };
const vehicle2: Vehicle = {
  plateNumber: 'XYZ456',
  type: VehicleType.MOTORCYCLE,
};

const spotNumber1 = parkingLot.parkVehicle(vehicle1); // Park vehicle1
console.log(`Vehicle1 parked at spot ${spotNumber1}`);

const spotNumber2 = parkingLot.parkVehicle(vehicle2); // Park vehicle2
if (spotNumber2 !== -1) {
  console.log(`Vehicle2 parked at spot ${spotNumber2}`);
} else {
  console.log('Parking lot full');
}

parkingLot.vacateSpot(spotNumber1); // Vehicle1 leaving the spot
