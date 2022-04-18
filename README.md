# Algodata-structures
 Algorithms and data structures

In progress...

## Library is not ready for production!

bug report: https://github.com/WitoldRykowski/algodata/issues
github: https://github.com/WitoldRykowski/algodata

** Version 1.0.2 **

---

## Linked List

  - constructor(values, doubly)
  - tail * readonly * -> Node
  - isDouble * readonly * -> boolean
  - toArray * readonly * -> number[]
  - head * readonly * -> Node
  - length * readonly * -> number
  - cycleAtNode * readonly * -> Node
  - isCycled * readonly * -> boolean
  - insertAtElement(element) -> void
  - insertAtBegin(element) -> void
  - insertAfter(element, value) -> void
  - insertBefore(element, value) -> void
  - removeFirst() -> Node
  - removeLast() -> Node
  - removeByValue(value) -> Node
  - reverse() -> void
  - sort() -> void
  - findNode(value) -> Node | null
  - clear() -> void

---

## Stack

  - constructor(values)
  - length * readonly * -> number
  - isEmpty * readonly * -> boolean
  - peek * readonly * -> T
  - first * readonly * -> T
  - last * readonly * -> T
  - enqueue() -> void
  - dequeue() -> T | null

---

## Queue

  - constructor(values)
  - length * readonly * -> number
  - isEmpty * readonly * -> boolean
  - peek * readonly * -> T
  - push() -> void
  - pop() -> T
