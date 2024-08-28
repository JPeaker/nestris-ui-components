import classNames from "classnames";
import { Cell, Game as GameType } from "../../../types/Game";
import blockImageMap from "../../services/block-image-map";
import "./Game.css";

const Game = ({ game }: { game: GameType }) => {
  return (
    <div className="game">
      <div className="stack">
        {game.stack.map((row, y) => (
          <div className="row" key={y}>
            {row.map((value: Cell, x) => (
              <img
                src={blockImageMap[value || 0]}
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
