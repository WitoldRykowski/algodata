"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor(values = []) {
        this.values = values;
    }
    get length() {
        return this.values.length;
    }
    get isEmpty() {
        return this.length === 0;
    }
    get peek() {
        if (this.isEmpty)
            return null;
        return this.values;
    }
    get first() {
        return this.values[0];
    }
    get last() {
        return this.values.at(-1) || null;
    }
    enqueue(element) {
        this.values.push(element);
    }
    dequeue() {
        return this.values.shift() || null;
    }
}
exports.Queue = Queue;
