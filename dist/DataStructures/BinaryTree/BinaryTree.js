"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class BinaryTree {
    constructor(root = null) {
        this.treeRoot = root;
    }
    get root() {
        return this.treeRoot;
    }
}
exports.BinaryTree = BinaryTree;
