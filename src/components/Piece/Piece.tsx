import { Piece as PieceType } from "../../../types/Piece";
import blockMap from "./block-map";

const Piece = ({ piece }: { piece: PieceType }) => {
  return <div>{blockMap[piece.type][piece.orientation]}</div>;
};

export default Piece;
