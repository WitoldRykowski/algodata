declare type Node = {
    value: number;
    next: Node;
    previous?: Node;
} | null;
export default Node;
