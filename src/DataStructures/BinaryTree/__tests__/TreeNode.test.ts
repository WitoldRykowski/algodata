import Node from "../Node";

describe("Node.ts", () => {
  test("should create binary tree node", () => {
    expect(new Node(1)).toEqual({
      value: 1,
      left: null,
      right: null,
    });
  });
});
