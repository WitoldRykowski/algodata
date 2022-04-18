export declare class Stack<T> {
    private values;
    constructor(values?: T[]);
    get length(): number;
    get isEmpty(): boolean;
    get peek(): T[] | null;
    push(element: T): void;
    pop(): T | null;
}
