"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
function partition(array, left, right) {
    const middle = Math.floor((right + left) / 2);
    const pivot = array[middle];
    let i = left;
    let j = right;
    while (i <= j) {
        while (array[i] < pivot)
            i++;
        while (array[j] > pivot)
            j--;
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(array, left = 0, right = array.length - 1) {
    if (array.length > 1) {
        const index = partition(array, left, right);
        if (left < index - 1)
            quickSort(array, left, index - 1);
        if (index < right)
            quickSort(array, index, right);
    }
    return array;
}
exports.quickSort = quickSort;
