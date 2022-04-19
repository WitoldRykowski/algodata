import ListNode from "../ListNode";

describe("ListNode", () => {
  test("should create list node with value 1 and next null", () => {
    const node = new ListNode(1);

    expect(node).toBeInstanceOf(ListNode);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  test("should crate list node with value 1 and next should be ListNode instance with value 2", () => {
    const node = new ListNode(1, new ListNode(2));

    expect(node.next).toBeInstanceOf(ListNode);
    expect(node.next?.value).toBe(2);
  });
});
