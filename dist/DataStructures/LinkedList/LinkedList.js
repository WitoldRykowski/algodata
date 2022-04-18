"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const LinkedListHelper_1 = require("./LinkedListHelper");
const QuickSort_1 = require("../../Algorithms/QuickSort");
class LinkedList {
    constructor(values = [], double = false) {
        this.header = null;
        this.last = null;
        this.currentLength = 0;
        this.doubly = false;
        this.helper = LinkedListHelper_1.default.prototype;
        this.doubly = double;
        if (Array.isArray(values))
            this.generateFromArray(values);
        else
            this.provideList(values);
    }
    get tail() {
        return this.last;
    }
    get isDoubly() {
        return this.doubly;
    }
    get toArray() {
        return this.helper.convertToArray(this.header);
    }
    get head() {
        return this.header;
    }
    get length() {
        if (this.isCycled)
            return Infinity;
        return this.currentLength;
    }
    get cycleAtNode() {
        return this.helper.detectCycle(this.header);
    }
    get isCycled() {
        return !!this.cycleAtNode;
    }
    insertAtEnd(element) {
        if (this.isCycled)
            throw Error('Can not insert node and end of cycled list');
        const node = this.helper.getNode(element);
        if (node && this.isDoubly)
            node.previous = this.last;
        if (!this.last) {
            this.last = this.header = node;
            this.currentLength++;
        }
        else {
            this.last.next = node;
            if (!this.isCycled) {
                this.last = node;
                this.currentLength++;
            }
        }
    }
    insertAtBegin(element) {
        const temp = this.header;
        this.header = this.helper.getNode(element);
        if (this.isDoubly) {
            this.header.previous = null;
            temp.previous = this.header;
        }
        this.header.next = temp;
        this.currentLength++;
    }
    insertAfter(element, value) {
        if (this.tail && this.tail.value === element) {
            return this.insertAtEnd(value);
        }
        let current = this.header;
        let count = 0;
        while (current) {
            count++;
            if (current.value === value) {
                return this.insertByValue(element, current, count);
            }
            current = current.next;
        }
        throw Error('Provided value does not exist in list');
    }
    insertBefore(element, value) {
        var _a;
        if (this.header && this.header.value === value) {
            return this.insertAtBegin(element);
        }
        let current = this.header;
        let count = 0;
        while (current) {
            count++;
            if (((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) === value) {
                return this.insertByValue(element, current, count);
            }
            current = current.next;
        }
        throw Error('Provided value does not exist in list');
    }
    removeFirst() {
        if (!this.header)
            throw Error('List is empty');
        const cycleAtNode = this.cycleAtNode;
        if (cycleAtNode === this.head) {
            this.helper.removeCycle(cycleAtNode, this.head);
        }
        const value = this.header.value;
        this.header = this.header.next;
        if (this.isDoubly)
            this.header.previous = null;
        this.currentLength--;
        return value;
    }
    removeLast() {
        if (!this.header)
            throw Error('List is empty');
        if (this.isCycled) {
            this.helper.removeCycle(this.cycleAtNode, this.head);
        }
        this.currentLength--;
        if (!this.header.next) {
            const value = this.header.value;
            this.header = this.last = null;
            return value;
        }
        let current = this.header.next;
        let previous = this.header;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.last = previous;
        return current.value;
    }
    removeByValue(value) {
        if (!this.header)
            throw Error('List is empty');
        if (this.tail && this.tail.value === value)
            return this.removeLast();
        if (this.header.value === value)
            return this.removeFirst();
        const cycleAtNode = this.cycleAtNode;
        if ((cycleAtNode === null || cycleAtNode === void 0 ? void 0 : cycleAtNode.value) === value) {
            this.helper.removeCycle(cycleAtNode, this.head);
        }
        let current = this.header.next;
        let previous = this.header;
        while (current) {
            if (current.value === value) {
                if (this.isDoubly)
                    current.next.previous = previous;
                previous.next = current.next;
                this.currentLength--;
                return value;
            }
            previous = current;
            current = current.next;
        }
        throw Error('Provided value does not exist in list');
    }
    reverse() {
        var _a;
        if (this.isCycled)
            throw Error('Can not reverse cycled list');
        if (this.isDoubly)
            this.header = this.helper.reverseDoubly(this.header);
        else {
            const tailValue = (_a = this.header) === null || _a === void 0 ? void 0 : _a.value;
            this.header = this.helper.reverse(this.header);
            this.last = this.findNode(tailValue);
        }
    }
    sort() {
        if (this.isCycled)
            throw Error('Can not sort cycled linked list');
        const values = this.toArray;
        this.clear();
        this.generateFromArray((0, QuickSort_1.quickSort)(values));
    }
    findNode(value) {
        let current = this.header;
        while (current) {
            if (current.value === value)
                return current;
            current = current.next;
        }
        return null;
    }
    clear() {
        this.header = null;
        this.last = null;
        this.currentLength = 0;
        this.doubly = false;
    }
    generateFromArray(array) {
        for (let i = 0; i < array.length; i++) {
            this.insertAtEnd(array[i]);
        }
    }
    provideList(list) {
        let current = list;
        while (current) {
            this.insertAtEnd(current.value);
            current = current.next;
        }
    }
    insertByValue(element, current, count) {
        current.next = this.helper.getNode(element, current.next);
        if (this.isDoubly) {
            current.next.previous = current;
            current.next.next.previous = current.next;
        }
        if (this.isCycled) {
            this.currentLength = count;
            this.last = current;
        }
        else
            this.currentLength++;
    }
}
exports.LinkedList = LinkedList;
