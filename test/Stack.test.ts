import Stack from "../src/DataStructures/Stack/Stack";

describe("Stack", () => {
  let stack: Stack<number>

  beforeEach(() => {
    stack = new Stack([1, 2, 3])
  })

  test('should create Stack with values', () => {
    expect(stack.isEmpty).toBe(false)
    expect(stack.length).toBe(3)
  })

  test('should create empty Stack', () => {
    stack = new Stack()
    expect(stack).toBeInstanceOf(Stack)
    expect(stack.isEmpty).toBe(true)
    expect(stack.peek).toBeNull()
  })

  test('should push element into stack', () => {
    stack.push(1)
    expect(stack.isEmpty).toBe(false)
    expect(stack.peek).toEqual([1,2,3,1])
  })

  test('should pop 3 elements from stack', () => {
    for (let i = 3; i >= 1; i--) {
      expect(stack.pop()).toBe(i)
    }
    expect(stack.isEmpty).toBe(true)
    expect(stack.pop()).toBeNull()
  })
})
