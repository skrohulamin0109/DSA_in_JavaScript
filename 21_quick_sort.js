const partition = (arr, l, r) => {
    let pivot = arr[l];
    let i = l + 1;
    let j = r;

    while (true) {
        while (i <= j && pivot >= arr[i]) {
            i++;
        }

        while (i <= j && pivot < arr[j]) {
            j--;
        }

        // now the following code will run only if the part of the && is false of the while loops. NOW WE SWAP.
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else {
            break;
        }
    }
    // we put pivot in it't correct place;

    [arr[l], arr[j]] = [arr[j], arr[l]];

    return j;
};

const quickSort = (arr, l, r) => {
    // l = left most , r = right most index.

    if (l < r) {
        let p = partition(arr, l, r); // after the pivot is at place [(l)...<...(p-1)] p [(p+1)...<...(r)]; //p is the index of the pivot after correct placement.
        quickSort(arr, l, p - 1);
        quickSort(arr, p + 1, r);
    }
};



const testQuickSort = () => {
    const cases = [
        { name: "Unsorted", arr: [10, 80, 30, 90, 40, 50, 70] },
        { name: "Already Sorted", arr: [1, 2, 3, 4, 5] },
        { name: "Reverse Sorted", arr: [5, 4, 3, 2, 1] },
        { name: "With Duplicates", arr: [10, 7, 8, 9, 1, 5, 10] },
        { name: "Single Element", arr: [42] },
        { name: "Empty Array", arr: [] }
    ];

    cases.forEach(({ name, arr }) => {
        // Copy the original array for comparison.
        const original = [...arr];
        quickSort(arr, 0, arr.length - 1);
        console.log(`${name}:`);
        console.log(`  Original: [${original}]`);
        console.log(`  Sorted:   [${arr}]`);
        console.log('---');
    });
};

testQuickSort();

//----------------------------------

// Gemini said:
// The reason they always cross is due to the "Stop and Swap" logic combined with the final exit condition.

// Think of i and j as two border guards moving toward each other. They only stop moving when they find someone who "doesn't belong" on their side.

// 1. The "Stop" Phase
// Guard i (moving right) stops as soon as they find a value larger than the pivot.

// Guard j (moving left) stops as soon as they find a value smaller than the pivot.

// 2. The "Swap" Phase
// If they haven't met yet (i<j), they swap the "rule-breakers" they found. Now those values are on the correct sides, and the guards keep moving.

// 3. The "Crossing" Phase (The "Why")
// Eventually, there are no more rule-breakers left to swap.

// i will keep moving right until it hits the first value of the "Big" group.

// j will keep moving left until it hits the last value of the "Small" group.

// Because i is looking for "Big" and j is looking for "Small," they must pass each other to ensure every single element in the array has been checked. If they stopped before crossing, there would be a "no-man's land" in the middle that neither guard inspected.
