const bubbleSort = require("../bubbleSort")


const testArray = [4, 3, 2, 1]

const sortedArray = [1, 2, 3, 4]

describe("bubble sort tests", () => {
    test("returns an empty array if payload is empty", () => {
        expect(bubbleSort([])).toEqual([])

    })

    test("returns a single element if payload is single", () => {
        expect(bubbleSort([1])).toEqual([1])

    })

    test("it sorts using bubble sort", () => {
        expect(bubbleSort(testArray)).toEqual(sortedArray)
    })
})
