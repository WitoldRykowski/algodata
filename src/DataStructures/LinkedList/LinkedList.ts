import Node from './types/ListNode'
import ListNode from './ListNode'
import LinkedListHelper from './LinkedListHelper'
import { quickSort } from '../../Algorithms/QuickSort'

export class LinkedList {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the nothing.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */

  private header: Node = null
  private last: Node = null
  private currentLength = 0
  private doubly = false
  private readonly helper = LinkedListHelper.prototype

  constructor(values: number[] | Node = [], double = false) {
    this.doubly = double
    if (Array.isArray(values)) this.generateFromArray(values)
    else this.provideList(values)
  }

  get tail(): Node {
    return this.last
  }

  get isDoubly(): boolean {
    return this.doubly
  }

  get toArray(): number[] {
    return this.helper.convertToArray(this.header)
  }

  get head(): Node {
    return this.header
  }

  get length(): number {
    if (this.isCycled) return Infinity
    return this.currentLength
  }

  get cycleAtNode(): Node {
    return this.helper.detectCycle(this.header)
  }

  get isCycled(): boolean {
    return !!this.cycleAtNode
  }

  insertAtEnd(element: number | ListNode): void {
    if (this.isCycled) throw Error('Can not insert node and end of cycled list')
    const node = this.helper.getNode(element)
    if (node && this.isDoubly) node.previous = this.last

    if (!this.last) {
      this.last = this.header = node
      this.currentLength++
    } else {
      this.last.next = node

      if (!this.isCycled) {
        this.last = node
        this.currentLength++
      }
    }
  }

  insertAtBegin(element: number | ListNode): void {
    const temp = this.header
    this.header = this.helper.getNode(element)
    if (this.isDoubly) {
      this.header.previous = null;
      temp.previous = this.header
    }
    this.header.next = temp
    this.currentLength++
  }

  insertAfter(element: number | ListNode, value: number): void {
    if (this.tail && this.tail.value === element) {
      return this.insertAtEnd(value)
    }

    let current = this.header
    let count = 0

    while (current) {
      count++
      if (current.value === value) {
        return this.insertByValue(element, current, count)
      }
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  insertBefore(element: number | ListNode, value: number): void {
    if (this.header && this.header.value === value) {
      return this.insertAtBegin(element)
    }

    let current = this.header
    let count = 0

    while (current) {
      count++
      if (current.next?.value === value) {
        return this.insertByValue(element, current, count)
      }
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  removeFirst(): number {
    if (!this.header) throw Error('List is empty')

    const cycleAtNode = this.cycleAtNode
    if (cycleAtNode === this.head) {
      this.helper.removeCycle(cycleAtNode, this.head)
    }

    const value = this.header.value
    this.header = this.header.next
    if (this.isDoubly) this.header.previous = null

    this.currentLength--

    return value
  }

  removeLast(): number {
    if (!this.header) throw Error('List is empty')
    if (this.isCycled) {
      this.helper.removeCycle(this.cycleAtNode, this.head)
    }
    this.currentLength--

    if (!this.header.next) {
      const value = this.header.value
      this.header = this.last = null
      return value
    }
    let current = this.header.next
    let previous = this.header

    while (current.next) {
      previous = current
      current = current.next
    }

    previous.next = null
    this.last = previous
    return current.value
  }

  removeByValue(value: number): number {
    if (!this.header) throw Error('List is empty')
    if (this.tail && this.tail.value === value) return this.removeLast()
    if (this.header.value === value) return this.removeFirst()

    const cycleAtNode = this.cycleAtNode
    if (cycleAtNode?.value === value) {
      this.helper.removeCycle(cycleAtNode, this.head)
    }

    let current = this.header.next
    let previous = this.header

    while (current) {
      if (current.value === value) {
        if (this.isDoubly) current.next.previous = previous
        previous.next = current.next
        this.currentLength--
        return value
      }

      previous = current
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  reverse(): void {
    if (this.isCycled) throw Error('Can not reverse cycled list')
    if (this.isDoubly) this.header = this.helper.reverseDoubly(this.header)
    else {
      this.header = this.helper.reverse(this.header);

      let current = this.header
      while (current && current.next) {
        current = current.next
      }
      this.last = current
    }
  }

  sort(): void {
    if (this.isCycled) throw Error('Can not sort cycled linked list')
    const values = this.toArray
    this.clear()
    this.generateFromArray(quickSort(values))
  }

  clear(): void {
    this.header = null
    this.last = null
    this.currentLength = 0;
    this.doubly = false
  }

  private generateFromArray(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
      this.insertAtEnd(array[i])
    }
  }

  private provideList(list: Node): void {
    let current = list

    while (current) {
      this.insertAtEnd(current.value)
      current = current.next
    }
  }

  private insertByValue(element: number | ListNode, current: ListNode, count: number) {
    current.next = this.helper.getNode(element, current.next)
    if (this.isDoubly) {
      current.next.previous = current
      current.next.next.previous = current.next
    }

    if (this.isCycled) {
      this.currentLength = count
      this.last = current
    } else this.currentLength++
  }
}
