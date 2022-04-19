"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuickSort_1 = require("../QuickSort");
describe("QuickSort", () => {
    let array;
    beforeEach(() => {
        array = [7, 5, 2, 1, 9, 4, 0, 3, 10];
    });
    test("should sort array", () => {
        expect((0, QuickSort_1.quickSort)(array)).toEqual([0, 1, 2, 3, 4, 5, 7, 9, 10]);
    });
    test("should return empty array", () => {
        expect((0, QuickSort_1.quickSort)([])).toEqual([]);
    });
});
