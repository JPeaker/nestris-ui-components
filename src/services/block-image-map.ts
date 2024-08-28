import Block0 from "../images/block-0.png";
import Block1 from "../images/block-1.png";
import Block2 from "../images/block-2.png";
import { Block } from "../../types/Block";

const blockImageMap: Record<Block, string> = {
  [Block.Block0]: Block0,
  [Block.Block1]: Block1,
  [Block.Block2]: Block2,
};

export default blockImageMap;
