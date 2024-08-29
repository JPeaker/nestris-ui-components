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
    stack: sampleStack,
    level: 18,
  },
  argTypes: {
    stack: {
      control: {
        type: "object",
      },
    },
    level: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof Game>;

export default meta;
export const GameStory: StoryFn = (args) => (
  <Game stack={args.stack || sampleStack} level={args.level || 18} {...args} />
);
