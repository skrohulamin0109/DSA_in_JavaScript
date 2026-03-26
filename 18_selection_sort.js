const selectionSort = (array) => { // we are putting it in increasing order , you can do decreasng as well. Two ways to do both.
    const n = array.length;
    for (const [index, item] of array.entries()) {
        let min = index; // assuming the minimum value is prestent at at the first index of the loop.
        for (let j = index  + 1; j < n; j++) { // index + 1 ; as comparing with the next element in the first iteration.
            // each time we sort the first item and put it in the beginning we have to skip that index.
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if(min !== index ){
          [array[index], array[min]] = [array[min], array[index]];
        }
    }
};

let array = [23, 2553, 234, 123, 153, 651, 132, 4354, 214, 2424, 456, 265];

selectionSort(array);

console.log(array);
