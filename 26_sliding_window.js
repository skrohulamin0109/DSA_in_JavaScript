//----------VARIABLE SLIDING WINDOW----------------

// Longest substring without repeating character. Given a string s , find the length o fthe longest sibstring sithout repeating sharacters.
function lenOflngstStr(str) {
    let l = 0;
    let longest = 0;

    const sett = new Set();

    const n = str.length;

    for (let r = 0; r < n; r++) {
        while (sett.has(str[r])) {
            l++;
        }

        let w = r - l + 1;

        longest = Math.max(longest, w);
        sett.add(str[r]);
    }
    return longest;
}

// Longest subarray with sum < s

function longestSubarrayWithSumLessThanS(arr, s) {
    const n = arr.length;
    let l = -1; // left pointer
    let curr = 0;
    let best = 0;

    for (let r = 0; r < n; r++) {
        curr += arr[r];

        while (curr >= s) {
            l++;
            curr -= arr[l];
        }

        best = Math.max(best, r - 1);
    }
}

//------------------------------------FIXED SLIDING WINDOW--------------

// Maximum Sum of Subarray of size K

function maxSumOfSubarrayOfSizeK(arr, k) {
    const n = arr.length;
    // let curr = 0;
    // let best = 0;
    // for (let i = 0; i < k; i++) {
    //     curr = curr + arr[i];
    //     best = best + arr[i];
    // }

    // array.reduce((accumulator, current) => newValue, initialValue)

    let initial = arr
        .slice(0, n)
        .reduce((accumulator, current) => accumulator + current, 0); // 0 is the intial value
    let curr = (best = initial);

    for (let r = k; r < n; r++) {
        curr = curr + arr[r] - arr[r - k];

        best = Math.max(best, curr);
    }
}

//Max average subarray l. You have an integer array nums consisting of n elements and an integer k. Find a contigious subarray whose length is equal to k that has the maximum average value an dreturn this value. Any answer with a calculation error less than 10^-5 will be accepted.

function findmaxAvg(nums, k) {
    const n = nums.length;
    let curr_sum = 0;

    for (let i = 0; i < k; i++) {
        curr_sum += nums[i];
    }

    let max_avg = curr_sum / k;
    let avg;
    for (let i = k; i < n; i++) {
        curr_sum = curr_sum + nums[i] - nums[i - k];

        avg = curr_sum / k;
        max_avg = Math.max(max_avg, avg);
    }

    return max_avg;
}
