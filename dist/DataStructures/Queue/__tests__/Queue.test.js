"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = require("../Queue");
describe("Queue", () => {
    let queue;
    beforeEach(() => {
        queue = new Queue_1.Queue([1, 2, 3]);
    });
    test("should create queue with values", () => {
        expect(queue).toBeInstanceOf(Queue_1.Queue);
        expect(queue.first).toBe(1);
        expect(queue.last).toBe(3);
        expect(queue.length).toBe(3);
        expect(queue.isEmpty).toBe(false);
    });
    test("should create empty queue", () => {
        queue = new Queue_1.Queue();
        expect(queue.last).toBeNull();
        expect(queue.peek).toBeNull();
        expect(queue.length).toBe(0);
        expect(queue.isEmpty).toBe(true);
    });
    test("should enqueue the element", () => {
        queue.enqueue(1);
        expect(queue.length).toBe(4);
        expect(queue.peek).toEqual([1, 2, 3, 1]);
    });
    test("should dequeue the element equal 1", () => {
        expect(queue.dequeue()).toBe(1);
        expect(queue.peek).toEqual([2, 3]);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBeNull();
    });
});
