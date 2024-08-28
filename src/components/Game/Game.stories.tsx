import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import Game from "./Game";
import sampleStack from "./sample-stack";

const meta = {
  title: "Game",
  component: Game,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    game: {
      stack: sampleStack,
    },
  },
  argTypes: {
    game: {
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GameStory: StoryFn = (args) => (
  <div style={{ width: "400px" }}>
    <Game game={{ stack: sampleStack }} {...args} />
  </div>
);
