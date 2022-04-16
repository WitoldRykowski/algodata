import quickSort from "../src/Algorithms/QuickSort";

describe("QuickSort", () => {
  let array: number[]

  beforeEach(() => {
    array = [7,5,2,1,9,4,0,3,10]
  })

  test('should sort array', () => {
    expect(quickSort(array)).toEqual([
      0,1,2,3,4,5,7,9,10
    ])
  })

  test('should return empty array', () => {
    expect(quickSort([])).toEqual([])
  })
});
