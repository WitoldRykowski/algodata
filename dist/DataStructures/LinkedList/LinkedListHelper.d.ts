import Node from './types/ListNode';
export default abstract class LinkedListHelper {
    convertToArray(head: Node): number[];
    reverse(head: Node): Node;
    reverseDoubly(head: Node): Node;
    getNode(node: number | Node, next?: Node | number): Node;
    detectCycle(head: Node): Node;
    removeCycle(cycle: Node, head: Node): void;
}
