//----------VARIABLE SLIDING WINDOW----------------

// Longest substring without repeating character. Given a string s , find the length o fthe longest sibstring sithout repeating sharacters.
function findLongestSubstrWithoutRepeat(str) {
    let n = str.length;
    let left = 0;
    let longestStr;
    let longest = 0;

    const sett = new Set();

    for (let right = 0; right < n; right++) {
        while (sett.has(str[right])) {
            left++;
            sett.delete(str[left - 1]);
        }
        sett.add(str[right]);

        let w = right - left + 1;
        longest = Math.max(longest, w);
    }

    console.log(longest);
    return longest;
}

let str = "sdfewfadfaferfhdfahjfhijfklafjdhe";

findLongestSubstrWithoutRepeat(str);

// Longest subarray with sum < s

function longestSubarrWithSumLessThanS(arr, s) {
    const hasNegatives = arr.some((num) => num < 0);

    if (hasNegatives) {
        console.error("Sliding window logic won't work with negative numbers!");
        return 0;
    }
    const n = arr.length;
    let left = 0; // in js arr[-1] is undefined
    let currSum = 0;
    let best = 0;

    for (let right = 0; right < n; right++) {
        currSum += arr[right];
        while (right >= left && currSum >= s) {
            currSum -= arr[left];
            left++;
        }
        let w = right - left + 1;
        best = Math.max(best, w);
    }

    console.log(best);
    return best;
}

//------------------------------------FIXED SLIDING WINDOW--------------

// Maximum Sum of Subarray of size K

function maxSumOfSubarrOfSizeK(arr, k) {
    const n = arr.length;
    let left = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum = currSum += arr[i];
    }

    let maxSum = currSum;

    for (let right = k; right < n; right++) {
        currSum = currSum - arr[left] + arr[right];
        left++;

        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
}
//--- OTHER APPROACH---

// function maxSumOfSubarrayOfSizeK(arr, k) {
//     const n = arr.length;
//     // let curr = 0;
//     // let best = 0;
//     // for (let i = 0; i < k; i++) {
//     //     curr = curr + arr[i];
//     //     best = best + arr[i];
//     // }

//     // array.reduce((accumulator, current) => newValue, initialValue)

//     let initial = arr
//         .slice(0, n)
//         .reduce((accumulator, current) => accumulator + current, 0); // 0 is the intial value
//     let curr = (best = initial);

//     for (let r = k; r < n; r++) {
//         curr = curr + arr[r] - arr[r - k];

//         best = Math.max(best, curr);
//     }
// }

//Max average subarray. You have an integer array nums consisting of n elements and an integer k. Find a contigious subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

function maxAvgSubarr(arr, k) {
    const n = arr.length;
    let left = 0;
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum = currSum += arr[i];
    }

    let maxSum = currSum;

    for (let right = k; right < n; right++) {
        left++;
        currSum = currSum + arr[right] - arr[left - 1];
        maxSum = Math.max(currSum, maxSum);
    }
    let max_avg = maxSum / k;
    console.log(max_avg);
    return max_avg;
}
