import { Orientation, Tetrimino } from "../../../types/Piece";

const blockMap: {
  [tetrimino in Tetrimino]: {
    [orientation in Orientation]: [number, number][];
  };
} = {
  [Tetrimino.T]: {
    [Orientation.Up]: [
      [-1, 0],
      [0, 0],
      [1, 0],
      [0, -1],
    ],
    [Orientation.Right]: [
      [0, -1],
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    [Orientation.Down]: [
      [-1, 0],
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    [Orientation.Left]: [
      [0, -1],
      [-1, 0],
      [0, 0],
      [0, 1],
    ],
  },
  [Tetrimino.J]: {
    [Orientation.Up]: [
      [-1, -1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [Orientation.Right]: [
      [0, -1],
      [1, -1],
      [0, 0],
      [0, 1],
    ],
    [Orientation.Down]: [
      [-1, 0],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
    [Orientation.Left]: [
      [0, -1],
      [0, 0],
      [-1, 1],
      [0, 1],
    ],
  },
  [Tetrimino.Z]: {
    [Orientation.Up]: [
      [-1, 0],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [Orientation.Right]: [
      [1, -1],
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    [Orientation.Down]: [
      [-1, 0],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [Orientation.Left]: [
      [1, -1],
      [0, 0],
      [1, 0],
      [0, 1],
    ],
  },
  [Tetrimino.O]: {
    [Orientation.Up]: [
      [-1, 0],
      [0, 0],
      [-1, 1],
      [0, 1],
    ],
    [Orientation.Right]: [
      [-1, 0],
      [0, 0],
      [-1, 1],
      [0, 1],
    ],
    [Orientation.Down]: [
      [-1, 0],
      [0, 0],
      [-1, 1],
      [0, 1],
    ],
    [Orientation.Left]: [
      [-1, 0],
      [0, 0],
      [-1, 1],
      [0, 1],
    ],
  },
  [Tetrimino.S]: {
    [Orientation.Up]: [
      [0, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
    ],
    [Orientation.Right]: [
      [0, -1],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
    [Orientation.Down]: [
      [0, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
    ],
    [Orientation.Left]: [
      [0, -1],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  },
  [Tetrimino.L]: {
    [Orientation.Up]: [
      [1, -1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [Orientation.Right]: [
      [0, -1],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [Orientation.Down]: [
      [-1, 0],
      [0, 0],
      [1, 0],
      [-1, 1],
    ],
    [Orientation.Left]: [
      [-1, -1],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
  },
  [Tetrimino.I]: {
    [Orientation.Up]: [
      [-2, 0],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [Orientation.Right]: [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
    [Orientation.Down]: [
      [-2, 0],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [Orientation.Left]: [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
  },
};

export default blockMap;
