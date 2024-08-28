import blockMap from "./block-map";
import Block0 from "../../images/block-0.png";
import Block1 from "../../images/block-1.png";
import Block2 from "../../images/block-2.png";
import { useMemo } from "react";
import classNames from "classnames";
import "./Piece.css";
import { Orientation, Tetrimino } from "../../../types/Piece";

export interface PieceProps {
  tetrimino: Tetrimino;
  orientation: Orientation;
}

const Piece = ({ tetrimino, orientation }: PieceProps) => {
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

  const blockImage = useMemo(() => {
    switch (color) {
      case 0:
        return Block0;
      case 1:
        return Block1;
      case 2:
        return Block2;
      default:
        throw new Error("Invalid color");
    }
  }, [color]);

  return grid.map((row, y) => (
    <div className="row" key={y}>
      {row.map((value, x) => (
        <div
          className={classNames({
            block: true,
            invisible: value === null,
          })}
          key={`${y}${x}`}
        >
          <img src={blockImage} />
        </div>
      ))}
    </div>
  ));
};

export default Piece;
