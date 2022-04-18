"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
class LinkedListHelper {
    convertToArray(head) {
        const values = [];
        const tail = this.detectCycle(head);
        let current = head;
        let gotTile = head === tail;
        while (current) {
            values.push(current.value);
            if (current.next === tail) {
                if (gotTile)
                    return values;
                gotTile = true;
            }
            current = current.next;
        }
        return values;
    }
    reverse(head) {
        if (!head || !head.next)
            return head;
        const current = new ListNode_1.default(head.value);
        while (head.next) {
            [current.next, current.value] = [Object.assign({}, current), head.next.value];
            head = head.next;
        }
        return current;
    }
    reverseDoubly(head) {
        let temp = head;
        let current = head.next;
        temp.next = null;
        temp.previous = current;
        while (current) {
            current.previous = current.next;
            current.next = temp;
            temp = current;
            current = current.previous;
        }
        head = temp;
        return head;
    }
    getNode(node, next = null) {
        if (node === null || node === undefined)
            return null;
        const isListNode = typeof node !== 'number';
        return isListNode ? node : new ListNode_1.default(node, this.getNode(next));
    }
    detectCycle(head) {
        if (!head)
            return head;
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                slow = head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        return null;
    }
    removeCycle(cycle, head) {
        let current = cycle;
        let pointer = cycle;
        let k = 1;
        while (pointer && pointer.next !== current) {
            pointer = pointer.next;
            k++;
        }
        current = head;
        pointer = head;
        let i = 0;
        while (current && i < k) {
            current = current.next;
            i++;
        }
        while (pointer && current && current !== pointer) {
            pointer = pointer.next;
            current = current.next;
        }
        while (current && current.next !== pointer) {
            current = current.next;
        }
        if (current)
            current.next = null;
    }
}
exports.default = LinkedListHelper;
