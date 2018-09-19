const selectionSort = require("../selectionSort")


const testArray = [4, 3, 2, 1]

const sortedArray = [1, 2, 3, 4]

describe("bubble sort tests", () => {
    test("returns an empty array if payload is empty", () => {
        expect(selectionSort([])).toEqual([])

    })

    test("returns a single element if payload is single", () => {
        expect(selectionSort([1])).toEqual([1])

    })

    test("it sorts using selection sort", () => {
        expect(selectionSort(testArray)).toEqual(sortedArray)
    })
})
