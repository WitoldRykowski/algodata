export class Queue<T> {
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

  get first(): T {
    return this.values[0]
  }

  get last(): T | null {
    return this.values.at(-1) || null
  }

  enqueue(element: T): void {
    this.values.push(element)
  }

  dequeue(): T | null {
    return this.values.shift() || null
  }
}
