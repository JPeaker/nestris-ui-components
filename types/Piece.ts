enum Tetrimino {
  T,
  J,
  Z,
  O,
  S,
  L,
  I,
}

enum Orientation {
  Up,
  Right,
  Down,
  Left,
}

type Piece = {
  type: Tetrimino;
  orientation: Orientation;
};

export { Tetrimino, Orientation };

export type { Piece };
