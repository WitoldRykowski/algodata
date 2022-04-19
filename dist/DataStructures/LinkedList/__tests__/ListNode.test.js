"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("../ListNode");
describe("ListNode", () => {
    test("should create list node with value 1 and next null", () => {
        const node = new ListNode_1.default(1);
        expect(node).toBeInstanceOf(ListNode_1.default);
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
    });
    test("should crate list node with value 1 and next should be ListNode instance with value 2", () => {
        var _a;
        const node = new ListNode_1.default(1, new ListNode_1.default(2));
        expect(node.next).toBeInstanceOf(ListNode_1.default);
        expect((_a = node.next) === null || _a === void 0 ? void 0 : _a.value).toBe(2);
    });
});
