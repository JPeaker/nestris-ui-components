import { Orientation, Tetrimino } from "../../types/Piece";
import { Block } from "../../types/Block";

const blockMap: {
  [tetrimino in Tetrimino]: {
    [orientation in Orientation]: {
      blocks: [number, number][];
      color: Block;
    };
  };
} = {
  [Tetrimino.T]: {
    [Orientation.Up]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [1, 0],
        [0, -1],
      ],
      color: Block.Block0,
    },
    [Orientation.Right]: {
      blocks: [
        [0, -1],
        [0, 0],
        [1, 0],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Down]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [1, 0],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Left]: {
      blocks: [
        [0, -1],
        [-1, 0],
        [0, 0],
        [0, 1],
      ],
      color: Block.Block0,
    },
  },
  [Tetrimino.J]: {
    [Orientation.Up]: {
      blocks: [
        [-1, -1],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      color: Block.Block2,
    },
    [Orientation.Right]: {
      blocks: [
        [0, -1],
        [1, -1],
        [0, 0],
        [0, 1],
      ],
      color: Block.Block2,
    },
    [Orientation.Down]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, 1],
      ],
      color: Block.Block2,
    },
    [Orientation.Left]: {
      blocks: [
        [0, -1],
        [0, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block2,
    },
  },
  [Tetrimino.Z]: {
    [Orientation.Up]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [0, 1],
        [1, 1],
      ],
      color: Block.Block1,
    },
    [Orientation.Right]: {
      blocks: [
        [1, -1],
        [0, 0],
        [1, 0],
        [0, 1],
      ],
      color: Block.Block1,
    },
    [Orientation.Down]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [0, 1],
        [1, 1],
      ],
      color: Block.Block1,
    },
    [Orientation.Left]: {
      blocks: [
        [1, -1],
        [0, 0],
        [1, 0],
        [0, 1],
      ],
      color: Block.Block1,
    },
  },
  [Tetrimino.O]: {
    [Orientation.Up]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Right]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Down]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Left]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block0,
    },
  },
  [Tetrimino.S]: {
    [Orientation.Up]: {
      blocks: [
        [0, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block2,
    },
    [Orientation.Right]: {
      blocks: [
        [0, -1],
        [0, 0],
        [1, 0],
        [1, 1],
      ],
      color: Block.Block2,
    },
    [Orientation.Down]: {
      blocks: [
        [0, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
      ],
      color: Block.Block2,
    },
    [Orientation.Left]: {
      blocks: [
        [0, -1],
        [0, 0],
        [1, 0],
        [1, 1],
      ],
      color: Block.Block2,
    },
  },
  [Tetrimino.L]: {
    [Orientation.Up]: {
      blocks: [
        [1, -1],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      color: Block.Block1,
    },
    [Orientation.Right]: {
      blocks: [
        [0, -1],
        [0, 0],
        [0, 1],
        [1, 1],
      ],
      color: Block.Block1,
    },
    [Orientation.Down]: {
      blocks: [
        [-1, 0],
        [0, 0],
        [1, 0],
        [-1, 1],
      ],
      color: Block.Block1,
    },
    [Orientation.Left]: {
      blocks: [
        [-1, -1],
        [0, -1],
        [0, 0],
        [0, 1],
      ],
      color: Block.Block1,
    },
  },
  [Tetrimino.I]: {
    [Orientation.Up]: {
      blocks: [
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      color: Block.Block0,
    },
    [Orientation.Right]: {
      blocks: [
        [0, -2],
        [0, -1],
        [0, 0],
        [0, 1],
      ],
      color: Block.Block0,
    },
    [Orientation.Down]: {
      blocks: [
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      color: Block.Block0,
    },
    [Orientation.Left]: {
      blocks: [
        [0, -2],
        [0, -1],
        [0, 0],
        [0, 1],
      ],
      color: Block.Block0,
    },
  },
};

export default blockMap;
