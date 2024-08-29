import classNames from "classnames";
import { Cell, Game as GameType } from "../../../types/Game";
import getBlockImage from "../../services/block-image-map";
import "./Game.css";
import Piece, { getPieceGrid } from "../Piece/Piece";
import { Orientation } from "../../../types/Piece";
import NextPiece from "./NextPiece";

const Game = ({ stack, level, currentPiece, nextPiece }: GameType) => {
  const clonedStack = stack.map((row) => row.slice());
  if (currentPiece !== undefined) {
    const { grid: currentPieceGrid, color: currentPieceColor } = getPieceGrid(
      currentPiece,
      Orientation.Down
    );
    currentPieceGrid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== null) {
          clonedStack[y][x + 3] = currentPieceColor;
        }
      });
    });
  }

  return (
    <div className="game">
      <div className="stack">
        {clonedStack.map((row, y) => (
          <div className="row" key={y}>
            {row.map((value: Cell, x) => (
              <img
                src={getBlockImage(value || 0, level || 18)}
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
      {nextPiece !== undefined ? <NextPiece tetrimino={nextPiece} /> : null}
    </div>
  );
};

export default Game;
