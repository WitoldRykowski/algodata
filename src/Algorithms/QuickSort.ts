function partition<T>(array: T[], left: number, right: number) {
  const middle = Math.floor((right + left) / 2)
  const pivot = array[middle]
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) i++

    while (array[j] > pivot) j--

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }
  return i
}

export function quickSort<T>(
  array: T[],
  left = 0,
  right: number = array.length - 1
): T[] {
  if (array.length > 1) {
    const index = partition(array, left, right)

    if (left < index - 1) quickSort(array, left, index - 1)

    if (index < right) quickSort(array, index, right)
  }

  return array
}
