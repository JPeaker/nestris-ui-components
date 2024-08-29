import classNames from "classnames";
import { Cell, Game as GameType } from "../../../types/Game";
import getBlockImage from "../../services/block-image-map";
import "./Game.css";

const Game = ({ stack, level }: GameType) => {
  const defaultedLevel = level || 18;
  return (
    <div className="game">
      <div className="stack">
        {stack.map((row, y) => (
          <div className="row" key={y}>
            {row.map((value: Cell, x) => (
              <img
                src={getBlockImage(value || 0, defaultedLevel)}
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
    </div>
  );
};

export default Game;
