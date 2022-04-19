"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
describe("Node.ts", () => {
    test("should create binary tree node", () => {
        expect(new Node_1.default(1)).toEqual({
            value: 1,
            left: null,
            right: null,
        });
    });
});
