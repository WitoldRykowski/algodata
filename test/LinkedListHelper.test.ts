import LinkedListHelper from "../src/DataStructures/LinkedList/LinkedListHelper";
import { dataStructures } from "../src";
import ListNode from "../src/DataStructures/LinkedList/ListNode";

const { LinkedList } = dataStructures

describe("LinkedListHelper", () => {
  let dummyList

  beforeEach(() => {
    dummyList = new LinkedList([1,2,3])
  })

  test('toArray should return [1,2]', () => {
    expect(LinkedListHelper.prototype.convertToArray({
      value: 1, next: { value: 2, next: null }
    })).toEqual([1,2])
  })

  test('toArray should return []', () => {
    expect(LinkedListHelper.prototype.convertToArray(null)).toEqual([])
  })

  test('should return head of list', () => {
    const head = { value: 1, next: null }

    expect(LinkedListHelper.prototype.reverse(null)).toBeNull()
    expect(LinkedListHelper.prototype.reverse(head)).toEqual(head)
  })

  test('should reverse list', () => {
    expect(LinkedListHelper.prototype.reverse(dummyList.head)).toEqual({
      value: 3, next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        }
      }
    })
  })

  test('should return ListNode instance', () => {
    expect(LinkedListHelper.prototype.getNode(1)).toBeInstanceOf(ListNode)
    expect(LinkedListHelper.prototype.getNode(new ListNode(1))).toBeInstanceOf(ListNode)
  })

  test('should return null', () => {
    expect(LinkedListHelper.prototype.getNode(null)).toBeNull()
  })

  test('should return node with next', () => {
    const node = LinkedListHelper.prototype.getNode(1, 2)

    expect(node?.value).toBe(1)
    expect(node?.next).toBeInstanceOf(ListNode)
    expect(node?.next?.value).toBe(2)
  })

  test('should remove cycle from list', () => {
    LinkedListHelper.prototype.removeCycle(null, null)
    LinkedListHelper.prototype.removeCycle(dummyList.cycleAtNode, dummyList.head)

    expect(dummyList.isCycled).toBe(false)
  })
});
