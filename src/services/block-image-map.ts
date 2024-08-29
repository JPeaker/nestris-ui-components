import { Block } from "../../types/Block";
import { Level } from "../../types/Level";

const getBlockImage = (block: Block, level: Level) => {
  return require(`../images/block-${level % 10}-${block}.png`);
};

export default getBlockImage;
