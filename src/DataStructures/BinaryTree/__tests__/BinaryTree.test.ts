import { BinaryTree } from "../BinaryTree";

describe("BinaryTree.ts", () => {
  let tree: BinaryTree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test("should create empty binary tree", () => {
    expect(tree).toBeInstanceOf(BinaryTree);
    expect(tree.root).toBeNull();
  });
});
