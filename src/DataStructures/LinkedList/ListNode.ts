import Node from './types/ListNode'

export default class ListNode {
  value
  next

  constructor(value: number, next: Node = null) {
    this.value = value
    this.next = next
  }
}
