import blockMap from "./block-map";
import classNames from "classnames";
import "./Piece.css";
import { Orientation, Tetrimino } from "../../../types/Piece";
import blockImageMap from "../../services/block-image-map";
import getBlockImage from "../../services/block-image-map";
import { Level } from "../../../types/Level";

export interface PieceProps {
  tetrimino: Tetrimino;
  orientation: Orientation;
  level?: Level;
  className?: string;
}

const Piece = ({ tetrimino, orientation, className, level }: PieceProps) => {
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

  return (
    <div className={className}>
      {grid.map((row, y) => (
        <div className="row" key={y}>
          {row.map((value, x) => (
            <img
              src={getBlockImage(color, level || 18)}
              className={classNames({
                block: true,
                invisible: value === null,
              })}
              key={`${y}${x}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Piece;
