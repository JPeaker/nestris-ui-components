import { Block } from "./Block";
import { Level } from "./Level";
import { Tetrimino } from "./Piece";

export type Cell = Block | null;
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
  nextPiece?: Tetrimino;
  level?: Level;
  score?: number;
};
