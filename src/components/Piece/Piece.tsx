import blockMap from "./block-map";
import classNames from "classnames";
import "./Piece.css";
import { Orientation, Tetrimino } from "../../../types/Piece";
import getBlockImage from "../../services/block-image-map";
import { Level } from "../../../types/Level";
import { getPieceGrid } from "../../services/piece-grid";

export interface PieceProps {
  tetrimino: Tetrimino;
  orientation: Orientation;
  level?: Level;
  className?: string;
}

const Piece = ({ tetrimino, orientation, className, level }: PieceProps) => {
  const { grid, color } = getPieceGrid(tetrimino, orientation);

  const columns = Math.max(...grid.map((row) => row.length));
  return (
    <div className={className}>
      {grid.map((row, y) => (
        <div className="row" key={y}>
          {row.map((value, x) => (
            <img
              src={getBlockImage(color, level || 18).image}
              className={classNames({
                block: true,
                [`block-column-${columns}`]: true,
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
