function bubbleSort(arr) {
    // for(const i of arr)// here the i only gives the values.

    for (const [index, item] of arr.entries()) {
        for (let j = 0; j < arr.length - 1 - index; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

let array = [23, 2553, 234, 123, 153, 651, 132, 4354, 214, 2424, 456, 265];

bubbleSort(array);

console.log(array);
