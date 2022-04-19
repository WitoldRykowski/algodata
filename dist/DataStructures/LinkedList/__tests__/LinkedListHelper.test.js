"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListHelper_1 = require("../LinkedListHelper");
const index_1 = require("../../../index");
const ListNode_1 = require("../ListNode");
const { LinkedList } = index_1.dataStructures;
describe("LinkedListHelper", () => {
    let dummyList;
    beforeEach(() => {
        dummyList = new LinkedList([1, 2, 3]);
    });
    test("toArray should return [1,2]", () => {
        expect(LinkedListHelper_1.default.prototype.convertToArray({
            value: 1,
            next: { value: 2, next: null },
        })).toEqual([1, 2]);
    });
    test("toArray should return []", () => {
        expect(LinkedListHelper_1.default.prototype.convertToArray(null)).toEqual([]);
    });
    test("should return head of list", () => {
        const head = { value: 1, next: null };
        expect(LinkedListHelper_1.default.prototype.reverse(null)).toBeNull();
        expect(LinkedListHelper_1.default.prototype.reverse(head)).toEqual(head);
    });
    test("should reverse list", () => {
        expect(LinkedListHelper_1.default.prototype.reverse(dummyList.head)).toEqual({
            value: 3,
            next: {
                value: 2,
                next: {
                    value: 1,
                    next: null,
                },
            },
        });
    });
    test("should return ListNode instance", () => {
        expect(LinkedListHelper_1.default.prototype.getNode(1)).toBeInstanceOf(ListNode_1.default);
        expect(LinkedListHelper_1.default.prototype.getNode(new ListNode_1.default(1))).toBeInstanceOf(ListNode_1.default);
    });
    test("should return null", () => {
        expect(LinkedListHelper_1.default.prototype.getNode(null)).toBeNull();
    });
    test("should return node with next", () => {
        var _a;
        const node = LinkedListHelper_1.default.prototype.getNode(1, 2);
        expect(node === null || node === void 0 ? void 0 : node.value).toBe(1);
        expect(node === null || node === void 0 ? void 0 : node.next).toBeInstanceOf(ListNode_1.default);
        expect((_a = node === null || node === void 0 ? void 0 : node.next) === null || _a === void 0 ? void 0 : _a.value).toBe(2);
    });
    test("should remove cycle from list", () => {
        LinkedListHelper_1.default.prototype.removeCycle(null, null);
        LinkedListHelper_1.default.prototype.removeCycle(dummyList.cycleAtNode, dummyList.head);
        expect(dummyList.isCycled).toBe(false);
    });
});
