import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

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
    piece: {
      type: Tetrimino.T,
      orientation: Orientation.Down,
    },
  },
} satisfies Meta<typeof Piece>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    piece: {
      type: 0,
      orientation: 0,
    },
  },
};
