import { Block, DoublePhantomBlock, PhantomBlock } from "./Block";
import { Level } from "./Level";
import { Tetrimino } from "./Piece";
import { Placement } from "./Placement";

export type Cell = Block | PhantomBlock | DoublePhantomBlock | null;
export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export type Stack = [
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
];

export type Game = {
  stack: Stack;
  currentPiece?: Tetrimino;
  currentPiecePlacement?: Placement;
  nextPiece?: Tetrimino;
  nextPiecePlacement?: Placement;
  level?: Level;
  score?: number;
};
