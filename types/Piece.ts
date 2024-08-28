enum PieceType {
  O,
  I,
  T,
  S,
  Z,
  L,
  J,
}

enum PieceOrientation {
  Up,
  Right,
  Down,
  Left,
}

type Piece = {
  type: PieceType;
  orientation: PieceOrientation;
};

type PotentialPiece = {
  piece: Piece;
  row: number;
  column: number;
  opacity: number;
};
