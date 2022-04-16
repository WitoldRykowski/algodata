import Node from './types/ListNode'
import ListNode from './ListNode'
import LinkedListHelper from './LinkedListHelper'
import quickSort from '../../Algorithms/QuickSort'

export default class LinkedList<T> {
  private header: Node<T> = null
  private last: Node<T> = null
  private currentLength = 0
  private readonly helper = LinkedListHelper.prototype

  constructor(values: T[] | Node<T> = []) {
    if (Array.isArray(values)) this.generateFromArray(values)
    else this.provideList(values)
  }

  get tail(): Node<T> {
    return this.last
  }

  get toArray(): T[] {
    return this.helper.convertToArray(this.header)
  }

  get head(): Node<T> {
    return this.header
  }

  get length(): number {
    if (this.isCycled) return Infinity
    return this.currentLength
  }

  get cycleAtNode(): Node<T> {
    return this.helper.detectCycle(this.header)
  }

  get isCycled(): boolean {
    return !!this.cycleAtNode
  }

  insertAtEnd(element: T | Node<T>): void {
    if (this.isCycled) throw Error('Can not insert node and end of cycled list')
    const node = this.helper.getNode(element)

    if (!this.last) {
      this.last = this.header = node
      this.currentLength++
    } else {
      this.last.next = node

      if (!this.isCycled) {
        this.last = this.last.next
        this.currentLength++
      }
    }
  }

  insertAtBegin(element: T | Node<T>): void {
    if (element === null || element === undefined) return
    const temp = this.header
    this.header = this.helper.getNode(element)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.header.next = temp
    this.currentLength++
  }

  insertAfter(element: T | Node<T>, value: T): void {
    if (this.tail && this.tail.value === element) {
      return this.insertAtEnd(value)
    }

    let current = this.header
    let count = 0

    while (current) {
      count++
      if (current.value === value) {
        current.next = this.helper.getNode(element, current.next)
        if (this.isCycled) {
          this.currentLength = count
          this.last = current
        } else this.currentLength++
        return
      }
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  insertBefore(element: T | Node<T>, value: T): void {
    if (this.header && this.header.value === value) {
      return this.insertAtBegin(element)
    }

    let current = this.header
    let count = 0

    while (current) {
      count++
      if (current.next?.value === value) {
        current.next = this.helper.getNode(element, current.next)
        if (this.isCycled) {
          this.currentLength = count
          this.last = current
        } else this.currentLength++
        return
      }
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  removeFirst(): T {
    if (!this.header) throw Error('List is empty')

    const cycleAtNode = this.cycleAtNode
    if (cycleAtNode === this.head) {
      this.helper.removeCycle(cycleAtNode, this.head)
    }

    const value = this.header.value
    this.header = this.header.next
    this.currentLength--

    return value
  }

  removeLast(): T {
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

  removeByValue(value: T): T {
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
        previous.next = current.next
        this.currentLength--
        return value
      }

      previous = current
      current = current.next
    }

    throw Error('Provided value does not exist in list')
  }

  reverse(): Node<T> {
    if (this.isCycled) throw Error('Can not reverse cycled list')
    if (this.header) this.last = new ListNode(this.header.value)
    return (this.header = this.helper.reverse(this.header))
  }

  sort(): void {
    if (this.isCycled) throw Error('Can not sort circular linked list')
    this.generateFromArray(quickSort(this.toArray))
  }

  clear(): void {
    this.header = null
    this.last = null
    this.currentLength = 0
  }

  private generateFromArray(array: T[]): void {
    this.clear()
    for (let i = 0; i < array.length; i++) {
      this.insertAtEnd(array[i])
    }
  }

  private provideList(list: Node<T>): void {
    this.clear()
    let current = list

    while (current) {
      this.insertAtEnd(current.value)
      current = current.next
    }
  }
}
