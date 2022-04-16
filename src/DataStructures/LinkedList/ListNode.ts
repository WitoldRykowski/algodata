import Node from './types/ListNode'

export default class ListNode<T> {
  value
  next

  constructor(value: T, next: Node<T> = null) {
    this.value = value
    this.next = next
  }
}
