// const minMax = {min: 23, max: 343};

// const {min:min1, max:max1} = minMax;

// console.log(min1 + " and " + max1)
// ----------------------------------------------------------
// To treat an object like an array—where you only care about the order or number of items—you first have to convert it into an array using Object.values() or Object.entries().
// Method 1: Using Object.values() (If you only want the data)
// This pulls the values out of the object and puts them into an array in the order they appear in the object.

// JavaScript
// const minMax = {min: 23, max: 343};

// // 1. Convert values to an array: [23, 343]
// // 2. Destructure that array into your new names
// const [min1, max1] = Object.values(minMax);

// console.log(min1 + " and " + max1); // 23 and 343
// Method 2: Using Object.entries() (If you want the keys too)
// If you need to know what those mystery keys were actually called while you unpack them, use entries.

// JavaScript
// const minMax = {min: 23, max: 343};

// // This gives you: [ ["min", 23], ["max", 343] ]
// const [[key1, val1], [key2, val2]] = Object.entries(minMax);

// console.log(`Key: ${key1}, Value: ${val1}`); // Key: min, Value: 23
// Important Warning: Object Order
// In modern JavaScript, objects generally preserve the order in which keys were added, but relying on this is slightly "risky" compared to an Array.

// EXAMPLE OF DIVIDE AND CONQUER APPROACH.


function findMinMax(arr) {
  if (arr.length === 0) {
    return { min: null, max: null };
  }
  // Only function declarations are fully hoisted; const / let variables (including arrow functions) are not.
  return findMinMaxRec(arr, 0, arr.length - 1);
}

function findMinMaxRec(arr, start, end) {
  if (start === end) {
    return { min: arr[start], max: arr[end] };
  }

  if (start + 1 === end) {
    if (arr[start] < arr[end]) {
      return { min: arr[start], max: arr[end] };
    } else {
      return { min: arr[end], max: arr[start] };
    }
  }

  const mid = Math.floor((start + end) / 2);

  const { min: min1, max: max1 } = findMinMaxRec(arr, start, mid);
  const { min: min2, max: max2 } = findMinMaxRec(arr, mid + 1, end);

  return {
    min: Math.min(min1, min2),
    max: Math.max(max1, max2),
  };
}