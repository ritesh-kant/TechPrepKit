class SnakeAndLadderGame {
  board: number[];
  playerPositions: { [key: string]: number };
  currentPlayerIndex: number;
  players: string[];
  isGameOver: boolean;

  constructor(players: string[]) {
    this.board = Array(100)
      .fill(0)
      .map((_, index) => index + 1);
    this.playerPositions = {};
    this.players = players;
    this.currentPlayerIndex = 0;
    this.isGameOver = false;

    for (const player of players) {
      this.playerPositions[player] = 0; // Start positions for each player
    }
  }

  rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  movePlayer(player: string, steps: number): void {
    const currentPosition = this.playerPositions[player];
    const newPosition = currentPosition + steps;

    if (newPosition <= 100) {
      this.playerPositions[player] =
        this.getNewPositionAfterSnakesAndLadders(newPosition);
    }

    if (this.playerPositions[player] === 100) {
      console.log(`${player} wins the game!`);
      this.isGameOver = true;
    }
  }

  getNewPositionAfterSnakesAndLadders(position: number): number {
    const snakes = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };
    const ladders = {
      1: 38,
      4: 14,
      9: 31,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      80: 100,
    };

    if (snakes[position]) {
      console.log(
        `Snake at position ${position}! You go down to position ${snakes[position]}`
      );
      return snakes[position];
    } else if (ladders[position]) {
      console.log(
        `Ladder at position ${position}! You climb up to position ${ladders[position]}`
      );
      return ladders[position];
    } else {
      return position;
    }
  }

  play(): void {
    while (!this.isGameOver) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      const steps = this.rollDice();
      console.log(`${currentPlayer} rolled a ${steps}`);

      this.movePlayer(currentPlayer, steps);

      this.currentPlayerIndex =
        (this.currentPlayerIndex + 1) % this.players.length;
    }
  }
}

// Usage:
const snakeGame = new SnakeAndLadderGame(['Player 1', 'Player 2']);
snakeGame.play();
