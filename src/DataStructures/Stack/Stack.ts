export class Stack<T> {
  constructor(private values: T[] = []) {}

  get length(): number {
    return this.values.length
  }

  get isEmpty(): boolean {
    return this.length === 0
  }

  get peek(): T[] | null {
    if (this.isEmpty) return null
    return this.values
  }

  push(element: T): void {
    this.values.push(element)
  }

  pop(): T | null {
    return this.values.pop() || null
  }
}
