const merge = (arr, l, m, r) => {
    const s1 = m - l + 1; // size of the first half of the division.
    const s2 = r - m; // r - (m+1) + 1 : size of the second half of the division.

    let L = Array.from({ length: s1 }, () => 0); // New array to keep a copy of the first half (left half).
    let R = Array.from({ length: s2 }, () => 0); // New array to keep a copy of the second half (right half).

    // Copying the first half
    for (let i = 0; i < s1; i++) {
        L[i] = arr[l + i];
    }

    // Copying the second half
    for (let j = 0; j < s2; j++) {
        R[j] = arr[m + 1 + j];
    }

    let i = 0; // to keep track of the index of the first half copy
    let j = 0; // to keep track of the index of the second half copy
    let k = l; // to keep track of the index of the original array

    while (i < s1 && j < s2) {
        if (L[i] < R[j]) {
            arr[k] = L[i];
            i++;
            k++;
        } else {
            arr[k] = R[j];
            j++;
            k++; // must always advance k
        }
    }

    while (i < s1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < s2) {
        arr[k] = R[j];
        j++;
        k++;
    }
};

const divide = (arr, l, r) => {
    // l = left, r = right
    if (l < r) {
        let m = Math.floor((l + r) / 2); // m = middle point where the division would happen. You can put m on either of the array.
        divide(arr, l, m); // first half l to m
        divide(arr, m + 1, r); // second half m+1 to r
        merge(arr, l, m, r);
    }
};


//---------------------------------------

// The Test Case
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = [1, 2, 3, 4, 5];
const duplicateArray = [5, 2, 9, 1, 5, 6];

console.log("Original:", unsortedArray);

// We pass 0 as the left index (l) and length-1 as the right index (r)
divide(unsortedArray, 0, unsortedArray.length - 1);
console.log("Sorted:", unsortedArray);

// Testing duplicates
divide(duplicateArray, 0, duplicateArray.length - 1);
console.log("Duplicates handled:", duplicateArray);