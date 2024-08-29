import classNames from "classnames";
import { Cell, Game as GameType } from "../../../types/Game";
import getBlockImage from "../../services/block-image-map";
import { Orientation } from "../../../types/Piece";
import { getPieceGrid, getPiecePlacementGrid } from "../../services/piece-grid";
import NextPiece from "./NextPiece";
import "./Game.css";

const Game = ({
  stack,
  level,
  currentPiece,
  currentPiecePlacement,
  nextPiece,
  nextPiecePlacement,
}: GameType) => {
  const clonedStack = stack.map((row) => row.slice());
  if (currentPiece !== undefined) {
    if (currentPiecePlacement == undefined) {
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
    } else {
      const { grid: currentPieceGrid, color: currentPieceColor } =
        getPiecePlacementGrid(currentPiece, currentPiecePlacement);
      currentPieceGrid.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== null) {
            clonedStack[y][x] = currentPieceColor + 3;
          }
        });
      });
    }
  }

  if (nextPiece !== undefined && nextPiecePlacement !== undefined) {
    const { grid: nextPieceGrid, color: nextPieceColor } =
      getPiecePlacementGrid(nextPiece, nextPiecePlacement);
    nextPieceGrid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== null) {
          clonedStack[y][x] = nextPieceColor + 6;
        }
      });
    });
  }

  return (
    <div className="game">
      <div className="stack">
        {clonedStack.map((row, y) => (
          <div className="row" key={y}>
            {row.map((value: Cell, x: number) => {
              const { image, phantom } = getBlockImage(value || 0, level || 18);
              return (
                <img
                  src={image}
                  className={classNames({
                    block: true,
                    invisible: value === null,
                    "low-visibility": !!currentPiecePlacement && phantom === 0,
                    "medium-visibility":
                      !!currentPiecePlacement &&
                      !!nextPiecePlacement &&
                      phantom === 2,
                    "high-visibility":
                      (!currentPiecePlacement && !!nextPiecePlacement) ||
                      (currentPiecePlacement &&
                        !nextPiecePlacement &&
                        phantom === 1) ||
                      (!!currentPiecePlacement &&
                        !!nextPiecePlacement &&
                        phantom === 1),
                  })}
                  key={`${y}${x}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      {nextPiece !== undefined && !nextPiecePlacement ? (
        <NextPiece tetrimino={nextPiece} />
      ) : null}
    </div>
  );
};

export default Game;
