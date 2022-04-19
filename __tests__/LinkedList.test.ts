import { LinkedList } from "../src/DataStructures/LinkedList/LinkedList";
import ListNode from "../src/DataStructures/LinkedList/ListNode";

describe("LinkedList", () => {
  let count = 1;
  let list;

  beforeEach(() => {
    if (count <= 5) {
      list = new LinkedList();
      count++;
    } else list = new LinkedList([1, 2, 3, 4]);
  });

  test("should create empty list", () => {
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.length).toBe(0);
    expect(list.isDoubly).toBe(false);
  });

  test("should return empty array because linked list is empty", () => {
    list.reverse();

    expect(list.toArray).toEqual([]);
    expect(list.tail).toEqual(null);
  });

  test("should try to remove first element from empty list and get error", () => {
    expect(() => list.removeFirst()).toThrow(new Error("List is empty"));
  });

  test("should try to remove last element from empty list and get error", () => {
    expect(() => list.removeLast()).toThrow(new Error("List is empty"));
  });

  test("should try to remove element with value from empty list", () => {
    expect(() => list.removeByValue(2)).toThrow(new Error("List is empty"));
  });

  test("should generate linked list from provided list", () => {
    list = new LinkedList({
      value: 0,
      next: { value: 1, next: { value: 2, next: null } },
    });

    expect(list.toArray).toEqual([0, 1, 2]);
    expect(list.tail).toEqual({ value: 2, next: null });
    expect(list.length).toBe(3);
    expect(list.tail).toBeInstanceOf(ListNode);
    expect(list.head).toBeInstanceOf(ListNode);
    expect(list.head?.next).toBeInstanceOf(ListNode);
  });

  test("should create list based on values", () => {
    expect(list.toArray).toEqual([1, 2, 3, 4]);
    expect(list.tail).toEqual({ value: 4, next: null });
    expect(list.length).toBe(4);
  });

  test("should insert elements to list at the end", () => {
    list = new LinkedList();

    list.insertAtEnd(1);
    expect(list.toArray).toEqual([1]);
    expect(list.tail).toEqual({ value: 1, next: null });
    expect(list.head).toEqual({ value: 1, next: null });
    expect(list.length).toBe(1);

    list.insertAtEnd(2);
    expect(list.toArray).toEqual([1, 2]);
    expect(list.tail).toEqual({ value: 2, next: null });
    expect(list.head).toEqual({ value: 1, next: { value: 2, next: null } });
    expect(list.length).toBe(2);
  });

  test("should insert elements to list at the beginning", () => {
    list.insertAtBegin(0);

    expect(list.toArray).toEqual([0, 1, 2, 3, 4]);
    expect(list.tail).toEqual({ value: 4, next: null });
    expect(list.head?.value).toBe(0);
    expect(list.length).toBe(5);
  });

  test("should try to insert element after value which not exist", () => {
    expect(() => list.insertAfter(3, 5)).toThrow(
      new Error("Provided value does not exist in list")
    );
  });

  test("should insert 3 after 1", () => {
    list.insertAfter(5, 1);

    expect(list.toArray).toEqual([1, 5, 2, 3, 4]);
    expect(list.length).toBe(5);
  });

  test("should try to insert element before value which not exist", () => {
    expect(() => list.insertBefore(4, 5)).toThrow(
      new Error("Provided value does not exist in list")
    );
  });

  test("should insert 4 before 1", () => {
    list.insertBefore(5, 1);

    expect(list.toArray).toEqual([5, 1, 2, 3, 4]);
    expect(list.length).toBe(5);
  });

  test("should insert 5 before 3", () => {
    list.insertBefore(5, 3);
    expect(list.toArray).toEqual([1, 2, 5, 3, 4]);
    expect(list.length).toBe(5);
  });

  test("should reverse list and insert 7 at the end", () => {
    list.reverse();

    expect(list.toArray).toEqual([4, 3, 2, 1]);
    expect(list.tail).toEqual({ value: 1, next: null });

    list.insertAtEnd(7);
    expect(list.toArray).toEqual([4, 3, 2, 1, 7]);
  });

  test("should remove first element and return it", () => {
    list.removeFirst();

    expect(list.toArray).toEqual([2, 3, 4]);
    expect(list.length).toBe(3);
  });

  test("should remove last element and return it", () => {
    expect(list.removeLast()).toBe(4);
    expect(list.toArray).toEqual([1, 2, 3]);
    expect(list.length).toBe(3);
  });

  test("should remove last element and return it", () => {
    const list = new LinkedList([2]);

    expect(list.removeLast()).toBe(2);
    expect(list.toArray).toEqual([]);
    expect(list.length).toBe(0);
  });

  test("should insert 5 after 4", () => {
    list.insertAfter(5, 4);
    expect(list.toArray).toEqual([1, 2, 3, 4, 5]);
    expect(list.length).toBe(5);
  });

  test("should try to remove element with not existing value and get error", () => {
    expect(() => list.removeByValue(9)).toThrow(
      new Error("Provided value does not exist in list")
    );
  });

  test("should remove first and last element", () => {
    list.removeByValue(1);
    expect(list.toArray).toEqual([2, 3, 4]);
    expect(list.length).toBe(3);

    list.removeByValue(4);
    expect(list.toArray).toEqual([2, 3]);
    expect(list.length).toBe(2);
  });

  test("should remove by value", () => {
    list.removeByValue(3);
    expect(list.toArray).toEqual([1, 2, 4]);
    expect(list.length).toBe(3);
  });

  test("should clear linked list", () => {
    list.clear();

    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
    expect(list.length).toBe(0);
  });

  test("should insert after tail", () => {
    list.insertAfter(4, 5);

    expect(list.toArray).toEqual([1, 2, 3, 4, 5]);
    expect(list.length).toBe(5);
  });

  test("should sort not cycled linked list", () => {
    list = new LinkedList([7, 5, 2, 1, 9, 4, 0, 3, 10]);
    list.sort();

    expect(list.toArray).toEqual([0, 1, 2, 3, 4, 5, 7, 9, 10]);
  });

  test('should throw error "Can not sort circular linked list"', () => {
    if (list.head) list.insertAtEnd(list.head);

    expect(() => list.sort()).toThrow(
      new Error("Can not sort cycled linked list")
    );
  });

  test("should find node with value equal 3", () => {
    expect(list.findNode(3)).toEqual({
      value: 3,
      next: { value: 4, next: null },
    });
  });

  test("should try to find node with non existing value and get error", () => {
    expect(list.findNode(9)).toBeNull();
  });
});

describe("Cycled LinkedList", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList([1, 2, 3, 4]);
  });

  test("should insert cycle before 4", () => {
    if (list.head?.next) list.insertBefore(list.head.next, 4);

    expect(list.length).toBe(Infinity);
    expect(list.toArray).toEqual([1, 2, 3]);
    expect(list.isCycled).toBe(true);

    list.removeLast();

    expect(list.length).toBe(2);
    expect(list.isCycled).toBe(false);
    expect(list.toArray).toEqual([1, 2]);
    expect(list.tail?.value).toBe(2); //1
  });

  test("should not detect cycle in list and return null", () => {
    expect(list.isCycled).toBe(false);
    expect(list.cycleAtNode).toBeNull();
  });

  test("should detect cycle in list and return node", () => {
    if (list.head) list.insertAtEnd(list.head);
    const node = list.cycleAtNode;

    expect(list.isCycled).toBe(true);
    expect(list.tail !== node).toBe(true);
    expect(node).toBeInstanceOf(ListNode);
    expect(node?.value).toBe(1);
  });

  test("should try to insert node at end of cycled list and get error", () => {
    if (list.head) list.insertAtEnd(list.head);
    expect(() => list.insertAtEnd(1)).toThrow(
      new Error("Can not insert node and end of cycled list")
    );
  });

  test("should return array of values from cycled list", () => {
    if (list.head) list.insertAtEnd(list.head);
    expect(list.toArray).toEqual([1, 2, 3, 4]);
    expect(list.length).toBe(Infinity);
  });

  test("should remove first element from cycled list", () => {
    if (list.head) list.insertAtEnd(list.head);
    list.removeFirst();

    expect(list.toArray).toEqual([2, 3, 4]);
    expect(list.isCycled).toBe(false);
    expect(list.length).toBe(3);
  });

  test("should insert element after 3 into cycled list", () => {
    if (list.head) list.insertAfter(list.head, 3);

    expect(list.length).toBe(Infinity);
    expect(list.isCycled).toBe(true);
    expect(list.toArray).toEqual([1, 2, 3]);

    list.removeFirst();
    expect(list.toArray).toEqual([2, 3]);
    expect(list.tail?.value).toBe(3);
    expect(list.length).toBe(2);
  });

  test("should remove node with cycle", () => {
    if (list.head?.next) list.insertAtEnd(list.head.next);
    list.removeByValue(2);
    expect(list.toArray).toEqual([1, 3, 4]);
    expect(list.length).toBe(3);
  });

  test("should get error trying reverse cycled list", () => {
    list.insertAtEnd(5);
    list.insertAtEnd(6);
    if (list.head?.next?.next) list.insertAtEnd(list.head.next.next);

    expect(list.isCycled).toBe(true);
    expect(() => list.reverse()).toThrow(
      new Error("Can not reverse cycled list")
    );
  });
});

describe("Doubly LinkedList", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList([1, 2, 3, 4], true);
  });

  test("should create doubly linked list", () => {
    expect(list.isDoubly).toBe(true);
    expect(list.length).toBe(4);
    expect(list.toArray).toEqual([1, 2, 3, 4]);
    expect(list.head?.value).toBe(1);
    expect(list.head?.next?.value).toBe(2);
    expect(list.head?.previous).toBeNull();
  });

  test("should create doubly linked list", () => {
    const anotherList = new LinkedList(list.head);

    expect(anotherList.isDoubly).toBe(true);
    expect(anotherList.length).toBe(4);
    expect(anotherList.toArray).toEqual([1, 2, 3, 4]);
    expect(anotherList.head?.previous).toBeNull();
  });

  test("should insert value at begin", () => {
    list.insertAtBegin(0);
    expect(list.toArray).toEqual([0, 1, 2, 3, 4]);
    expect(list.head.previous).toBeNull();
    expect(list.head.next.previous).toEqual(list.head);
  });

  test("should insert value after 2", () => {
    list.insertAfter(0, 1);
    expect(list.toArray).toEqual([1, 0, 2, 3, 4]);
    expect(list.head.next.previous).toEqual(list.head);
    expect(list.head.next.next.previous).toEqual(list.head.next);
  });

  test("should insert value before 2", () => {
    list.insertBefore(0, 2);
    expect(list.toArray).toEqual([1, 0, 2, 3, 4]);
    expect(list.head.next.previous).toEqual(list.head);
    expect(list.head.next.next.previous).toEqual(list.head.next);
  });

  test("should remove first node", () => {
    list.removeFirst();
    expect(list.toArray).toEqual([2, 3, 4]);
    expect(list.head.previous).toBeNull();
    expect(list.length).toBe(3);
  });

  test("should remove by value", () => {
    list.removeByValue(2);
    expect(list.toArray).toEqual([1, 3, 4]);
    expect(list.length).toBe(3);
    expect(list.head.next.previous).toEqual(list.head);
  });

  test("should reverse list", () => {
    list.reverse();
    expect(list.toArray).toEqual([4, 3, 2, 1]);
    expect(list.tail).toBeDefined();
    expect(list.head.previous).toBeNull();
    expect(list.head.next.previous).toEqual(list.head);
  });

  test("should sort list", () => {
    list = new LinkedList([5, 2, 3, 1, 4, 0], true);
    list.sort();

    expect(list.toArray).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("should be cycled list", () => {
    list.insertAtEnd(list.head);
    expect(list.isCycled).toBe(true);
    expect(list.length).toBe(Infinity);

    list.removeLast();
    expect(list.isCycled).toBe(false);
    expect(list.length).toBe(3);
  });
});
