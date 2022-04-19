import TreeNode from "./types/TreeNode";

export class BinaryTree {
  private treeRoot: TreeNode;

  constructor(root = null) {
    this.treeRoot = root;
  }

  get root(): TreeNode {
    return this.treeRoot;
  }
}
