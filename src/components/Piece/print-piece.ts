import { Piece, Tetrimino } from "../../../types/Piece";

export const printPieceTetrimino = (piece: Piece) => {
  switch (piece.type) {
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

export const printPieceOrientation = (piece: Piece) => {
  switch (piece.orientation) {
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
  return `Type: ${printPieceTetrimino(piece)}, Orientation: ${printPieceOrientation(piece)}`;
};
