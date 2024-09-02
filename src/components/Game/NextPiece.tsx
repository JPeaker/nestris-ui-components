import classNames from "classnames";
import { Orientation, Tetrimino } from "../../types/Piece";
import Piece from "../Piece/Piece";
import "./NextPiece.css";
import { printTetrimino } from "../Piece/print-piece";
import { getPieceGrid } from "../../services/piece-grid";

const NextPiece = ({ tetrimino }: { tetrimino: Tetrimino }) => {
  const { grid } = getPieceGrid(tetrimino, Orientation.Down);

  const colunns = Math.max(...grid.map((row) => row.length));
  return (
    <Piece
      className={classNames("next-piece", {
        [`next-piece-row-${grid.length}`]: true,
        [`next-piece-column-${colunns}`]: true,
        [`next-piece-${printTetrimino(tetrimino)}`]: true,
      })}
      tetrimino={tetrimino}
      orientation={Orientation.Down}
    />
  );
};

export default NextPiece;
