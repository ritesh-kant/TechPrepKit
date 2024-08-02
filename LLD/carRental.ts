enum CarType {
  SEDAN = 'SEDAN',
  SUV = 'SUV',
  HATCHBACK = 'HATCHBACK',
}

interface Car {
  id: string;
  type: CarType;
  available: boolean;
}

interface Customer {
  id: string;
  name: string;
  email: string;
}

interface Rental {
  id: string;
  customer: Customer;
  car: Car;
  startDate: Date;
  endDate: Date;
  returned: boolean;
}

class CarRentalService {
  cars: Car[];
  rentals: Rental[];

  constructor(cars: Car[]) {
    this.cars = cars;
    this.rentals = [];
  }

  rentCar(
    customer: Customer,
    carType: CarType,
    startDate: Date,
    endDate: Date
  ): Rental | null {
    const availableCar = this.findAvailableCar(carType);
    if (availableCar) {
      availableCar.available = false;
      const rental: Rental = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random ID (not suitable for production)
        customer,
        car: availableCar,
        startDate,
        endDate,
        returned: false,
      };
      this.rentals.push(rental);
      return rental;
    }
    return null; // No available car of the specified type
  }

  returnCar(rentalId: string): boolean {
    const rental = this.rentals.find((r) => r.id === rentalId && !r.returned);
    if (rental) {
      const car = this.cars.find((c) => c.id === rental.car.id);
      if (car) {
        car.available = true;
        rental.returned = true;
        return true;
      }
    }
    return false; // Rental not found or car not available for return
  }

  findAvailableCar(carType: CarType): Car | undefined {
    return this.cars.find((car) => car.type === carType && car.available);
  }
}

// Usage:
const cars: Car[] = [
  { id: '1', type: CarType.SEDAN, available: true },
  { id: '2', type: CarType.SUV, available: true },
  // ... Add more cars
];

const rentalService = new CarRentalService(cars);

const customer: Customer = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
};
const rental = rentalService.rentCar(
  customer,
  CarType.SEDAN,
  new Date('2023-11-15'),
  new Date('2023-11-20')
);
console.log('Rental:', rental);

if (rental) {
  const returned = rentalService.returnCar(rental.id);
  console.log('Car returned:', returned);
}
