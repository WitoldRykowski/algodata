export declare class Queue<T> {
    private values;
    constructor(values?: T[]);
    get length(): number;
    get isEmpty(): boolean;
    get peek(): T[] | null;
    get first(): T;
    get last(): T | null;
    enqueue(element: T): void;
    dequeue(): T | null;
}
