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

function longestSubarrayWithSumLessThanS(arr, s){
  const n = arr.length;
  let l = -1; // left pointer
  let curr = 0;
  let best = 0;

  for (let r = 0; r < n; r++){
    curr += arr[r];

    while(curr >= s){
      l++;
      curr -= arr[l];
    }

    best = Math.max(best, r-1)
  }
}


//------------------------------------FIXED SLIDING WINDOW--------------

// Maximum Sum of Subarray of size K

function maxSumOfSubarrayOfSizeK(arr, k){
  const n = arr.length

}


