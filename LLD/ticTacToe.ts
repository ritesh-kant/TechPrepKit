enum Player {
  X = 'X',
  O = 'O',
}
class TicTacToe {
  board: Player[][];
  currentPlayer: Player;
  winner: Player | null;
  isGameOver: boolean;

  constructor() {
    this.board = new Array(3).fill(0).map(() => Array(3).fill(null));
    this.currentPlayer = Player.X;
    this.winner = null;
    this.isGameOver = false;
  }

  makeMove(row: number, col: number): boolean {
    if (this.isGameOver || this.winner != null || this.board[row][col] ) {
      return false;
    }
    this.board[row][col] = this.currentPlayer;
    if (this.checkWinner(row, col)) {
      this.winner = this.currentPlayer;
      this.isGameOver = true;
    } else if (this.checkDraw()) {
      this.isGameOver = true;
    } else {
      this.currentPlayer = this.currentPlayer == Player.X ? Player.O : Player.X;
    }
    return true;
  }

  checkWinner(row: number, column: number): boolean {
    if (
      this.checkRow(row) ||
      this.checkColumn(column) ||
      this.checkDiagonal() ||
      this.checkReverseDiagonal()
    ) {
      return true;
    }
    return false;
  }
  checkRow(row: number): boolean {
    if (
      this.board[row][0] == this.currentPlayer &&
      this.board[row][1] == this.currentPlayer &&
      this.board[row][2] == this.currentPlayer
    ) {
      return true;
    }
    return false;
  }
  checkColumn(col: number): boolean {
    if (
      this.board[col][0] == this.currentPlayer &&
      this.board[col][1] == this.currentPlayer &&
      this.board[col][2] == this.currentPlayer
    ) {
      return true;
    }
    return false;
  }
  checkDiagonal(): boolean {
    if (
      this.board[0][0] == this.currentPlayer &&
      this.board[1][1] == this.currentPlayer &&
      this.board[2][2] == this.currentPlayer
    ) {
      return true;
    }
    return false;
  }
  checkReverseDiagonal(): any {
    if (
      this.board[0][2] == this.currentPlayer &&
      this.board[1][1] == this.currentPlayer &&
      this.board[2][0] == this.currentPlayer
    ) {
      return true;
    }
    return false;
  }
  checkDraw(): boolean {
    let isEmptySlot = (this.board as any).findIndex((row: any) => row.includes(null));
    if (isEmptySlot != -1) {
      return false;
    }
    return true;
  }
}

let game = new TicTacToe();
game.makeMove(0, 0);
game.makeMove(1, 1);
game.makeMove(0, 1);
game.makeMove(1, 2);
game.makeMove(0, 2);
console.log(game.board);
console.log(game.winner);
