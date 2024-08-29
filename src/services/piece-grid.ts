import { Orientation, Tetrimino } from "../../types/Piece";
import { Placement } from "../../types/Placement";
import blockMap from "../components/Piece/block-map";

export const getPieceGrid = (
  tetrimino: Tetrimino,
  orientation: Orientation
) => {
  const { blocks, color } = blockMap[tetrimino][orientation];

  if (!blocks) {
    throw new Error("Invalid piece");
  }
  const pieceMinX = Math.min(...blocks.map(([x]) => x));
  const pieceMaxX = Math.max(...blocks.map(([x]) => x));
  const pieceMinY = Math.min(...blocks.map(([_, y]) => y));
  const pieceMaxY = Math.max(...blocks.map(([_, y]) => y));
  const pieceWidth = pieceMaxX - pieceMinX + 1;
  const pieceHeight = pieceMaxY - pieceMinY + 1;

  const grid = Array.from({ length: pieceHeight }, () =>
    Array(pieceWidth).fill(null)
  );
  blocks.forEach(([x, y]) => {
    grid[y - pieceMinY][x - pieceMinX] = color;
  });

  return { grid, color };
};

export const getPiecePlacementGrid = (
  tetrimino: Tetrimino,
  placement: Placement
) => {
  const { row: placementRow, column: placementColumn, orientation } = placement;
  const { blocks, color } = blockMap[tetrimino][orientation];

  if (!blocks) {
    throw new Error("Invalid piece");
  }

  const grid = Array.from({ length: 20 }, () => Array(10).fill(null));
  blocks.forEach(([x, y]) => {
    if (
      y + placementRow < 0 ||
      y + placementRow >= 20 ||
      x + placementColumn < 0 ||
      x + placementColumn >= 10
    ) {
      return;
    }
    grid[y + placementRow][x + placementColumn] = color;
  });

  return { grid, color };
};
