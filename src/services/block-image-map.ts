import { Block, DoublePhantomBlock, PhantomBlock } from "../types/Block";
import { Level } from "../types/Level";

const getBlockImage = (
  block: Block | PhantomBlock | DoublePhantomBlock,
  level: Level
) => {
  return {
    image: require(`../images/block-${level % 10}-${block % 3}.png`),
    phantom: block === null ? null : Math.floor(block / 3),
  };
};

export default getBlockImage;
