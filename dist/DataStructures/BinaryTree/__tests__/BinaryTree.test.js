"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("../BinaryTree");
describe("BinaryTree.ts", () => {
    let tree;
    beforeEach(() => {
        tree = new BinaryTree_1.BinaryTree();
    });
    test("should create empty binary tree", () => {
        expect(tree).toBeInstanceOf(BinaryTree_1.BinaryTree);
        expect(tree.root).toBeNull();
    });
});
