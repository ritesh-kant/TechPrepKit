enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
}

enum ElevatorStatus {
  IDLE = 'IDLE',
  MOVING = 'MOVING',
}

interface ElevatorRequest {
  floor: number;
  direction: Direction;
}

class Elevator {
  currentFloor: number;
  status: ElevatorStatus;

  constructor() {
    this.currentFloor = 1; // Starting floor
    this.status = ElevatorStatus.IDLE;
  }

  moveToFloor(floor: number): void {
    this.status = ElevatorStatus.MOVING;
    // Simulate elevator movement to the specified floor
    console.log(
      `Elevator moving from floor ${this.currentFloor} to floor ${floor}`
    );
    this.currentFloor = floor;
    this.status = ElevatorStatus.IDLE;
  }
}

class ElevatorController {
  elevators: Elevator[];

  constructor(numElevators: number) {
    this.elevators = [];
    for (let i = 0; i < numElevators; i++) {
      this.elevators.push(new Elevator());
    }
  }

  requestElevator(request: ElevatorRequest): void {
    const elevator = this.getNearestElevator(request.floor);
    elevator.moveToFloor(request.floor);
  }

  getNearestElevator(floor: number): Elevator {
    // Logic to find the nearest available elevator
    return this.elevators[0]; // For simplicity, returning the first elevator
  }
}

// Usage:
const elevatorController = new ElevatorController(3); // Create an elevator controller with 3 elevators

// Make elevator requests
elevatorController.requestElevator({ floor: 3, direction: Direction.UP });
elevatorController.requestElevator({ floor: 5, direction: Direction.DOWN });
