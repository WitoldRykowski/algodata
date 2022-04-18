import Node from './types/ListNode';
import ListNode from './ListNode';
export declare class LinkedList {
    private header;
    private last;
    private currentLength;
    private doubly;
    private readonly helper;
    constructor(values?: number[] | Node, double?: boolean);
    get tail(): Node;
    get isDoubly(): boolean;
    get toArray(): number[];
    get head(): Node;
    get length(): number;
    get cycleAtNode(): Node;
    get isCycled(): boolean;
    insertAtEnd(element: number | ListNode): void;
    insertAtBegin(element: number | ListNode): void;
    insertAfter(element: number | ListNode, value: number): void;
    insertBefore(element: number | ListNode, value: number): void;
    removeFirst(): number;
    removeLast(): number;
    removeByValue(value: number): number;
    reverse(): void;
    sort(): void;
    clear(): void;
    private generateFromArray;
    private provideList;
    private insertByValue;
}
