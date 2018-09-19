const bubbleSort = (originalArray) => {
    const array = [...originalArray]
    let swapped = false

    for (let i = 1; i < array.length; i += 1) {
        swapped = false

        for (let j = 0; j < array.length - i; j += 1) {
            if (array[j + 1] < array[j]) {
                const tmp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = tmp

                swapped = true
            }
        }

        if (!swapped) return array
    }
    return array
}
g
module.exports = bubbleSort
