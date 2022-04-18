"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
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
    push(element) {
        this.values.push(element);
    }
    pop() {
        return this.values.pop() || null;
    }
}
exports.Stack = Stack;
