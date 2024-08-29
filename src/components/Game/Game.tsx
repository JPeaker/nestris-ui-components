import classNames from "classnames";
import { Cell, Game as GameType } from "../../../types/Game";
import getBlockImage from "../../services/block-image-map";
import "./Game.css";
import Piece from "../Piece/Piece";
import { Orientation } from "../../../types/Piece";

const Game = ({ stack, level, currentPiece, nextPiece }: GameType) => {
  return (
    <div className="game">
      <div className="stack">
        {stack.map((row, y) => (
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
      {currentPiece !== undefined ? (
        <Piece
          className="current-piece"
          tetrimino={currentPiece}
          orientation={Orientation.Down}
        />
      ) : null}
      {nextPiece !== undefined ? (
        <Piece
          className="next-piece"
          tetrimino={nextPiece}
          orientation={Orientation.Down}
        />
      ) : null}
    </div>
  );
};

export default Game;
