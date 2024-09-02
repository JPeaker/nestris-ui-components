import { Level as LevelType } from "../../types/Level";
import "./Level.css";

const Level = ({ level }: { level: LevelType }) => {
  const paddedLevel = level.toString().padStart(2, "0");
  return (
    <div className="level">
      <div className="level__label">LEVEL</div>
      <div className="level__value">{paddedLevel}</div>
    </div>
  );
};

export default Level;
