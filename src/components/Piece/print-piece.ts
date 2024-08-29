import { Orientation, Piece, Tetrimino } from "../../../types/Piece";

export const printTetrimino = (tetrimino: Tetrimino) => {
  switch (tetrimino) {
    case Tetrimino.T:
      return "T";
    case Tetrimino.J:
      return "J";
    case Tetrimino.Z:
      return "Z";
    case Tetrimino.O:
      return "O";
    case Tetrimino.S:
      return "S";
    case Tetrimino.L:
      return "L";
    case Tetrimino.I:
      return "I";
    default:
      return "Unknown";
  }
};

export const printOrientation = (orientation: Orientation) => {
  switch (orientation) {
    case 0:
      return "Up";
    case 1:
      return "Right";
    case 2:
      return "Down";
    case 3:
      return "Left";
    default:
      return "Unknown";
  }
};

export const printPiece = (piece: Piece) => {
  return `Type: ${printTetrimino(piece.type)}, Orientation: ${printOrientation(piece.orientation)}`;
};
