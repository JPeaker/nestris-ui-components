import type { Meta, StoryObj } from "@storybook/react";

import Piece from "./Piece";
import { Orientation, Tetrimino } from "../../../types/Piece";

const meta = {
  title: "Piece",
  component: Piece,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    tetrimino: Tetrimino.T,
    orientation: Orientation.Down,
  },
  argTypes: {
    tetrimino: {
      control: {
        type: "radio",
      },
      options: Object.values(Tetrimino).filter((v) => typeof v !== "number"),
      mapping: {
        T: Tetrimino.T,
        J: Tetrimino.J,
        Z: Tetrimino.Z,
        O: Tetrimino.O,
        S: Tetrimino.S,
        L: Tetrimino.L,
        I: Tetrimino.I,
      },
    },
    orientation: {
      control: {
        type: "radio",
      },
      options: Object.values(Orientation).filter((v) => typeof v !== "number"),
      mapping: {
        Up: Orientation.Up,
        Right: Orientation.Right,
        Down: Orientation.Down,
        Left: Orientation.Left,
      },
    },
  },
} satisfies Meta<typeof Piece>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    tetrimino: Tetrimino.T,
    orientation: Orientation.Down,
  },
};
