// A greedy algorithm makes the locally optimal choice at each step hoping it leads to a global optimum.
// Use it when the problem has greedy-choice property and optimal substructure.

// If choosing the best immediate option never hurts future choices → try greedy.
// If problem asks for min/max and you can sort + decide sequentially → greedy hint.
// If no backtracking or reconsideration seems needed → greedy likely works.
// If overlapping subproblems are absent → prefer greedy over DP.

//---------------------------------------------------------------

// Problem:
// You are given an array A of n elements.

// You have to remove exactly n/2 elements from an array and add it to another array B (initially empty).

// Find the maximum and minimum values of difference between these two arrays.

// The difference between those two arrays is sum(abs(A[i] - B[i])).

// Example Array:
// [ 12, 5, 25, 10, 2, 15, 8, 30 ]

function solveGreedyProblem(arr) {
    let input = [...arr];
    const n = input.length;
    const mid = n / 2;
    input.sort((a, b) => a - b);

    let A_max = input.slice(0, mid);
    let B_max = input.slice(mid);
    let maxDiff = 0;
    for (let i = 0; i < mid; i++) {
        maxDiff += Math.abs(A_max[i] - B_max[mid - 1 - i]);
    }

    let A_min = [];
    let B_min = [];
    for (let i = 0; i < n; i += 2) {
        A_min.push(input[i]);
        B_min.push(input[i + 1]);
    }
    let minDiff = 0;
    for (let i = 0; i < mid; i++) {
        minDiff += Math.abs(A_min[i] - B_min[i]);
    }

    console.log("Max Diff:", maxDiff);
    console.log("Min Diff:", minDiff);
}

function minMaxDiff(array) {
    let arr = [...array];
    const n = arr.length;
    const mid = Math.floor(n / 2);

    arr.sort((a, b) => a - b);

    let maxDiffSum = 0;
    for (let i = 0; i < mid; i++) {
        maxDiffSum += Math.abs(arr[i] - arr[n - 1 - i]);
    }

    let minDiffSum = 0;
    for (let i = 0; i < n; i += 2) {
        minDiffSum += Math.abs(arr[i] - arr[i + 1]);
    }

    console.log("Maximum Difference Sum:", maxDiffSum);
    console.log("Minimum Difference Sum:", minDiffSum);
}

const input = [12, 5, 25, 10, 2, 15, 8, 30];
solveGreedyProblem(input);
minMaxDiff(input);

// -----------------------------------------------------------------------------------------

// Problem: Find minimum number of denominations

// denominator array = [1,2,5,10,20,50,100,500]

function minDenom(num, denomArray) {
    let denomArr = [...denomArray];
    denomArr.sort((a, b) => a - b);
    const n = denomArr.length;
    let denoms = 0;
    let i = 0;

    while (num > 0 && i < n) {
        let currentCoin = denomArr[n - 1 - i];

        if (num >= currentCoin) {
            num = num - currentCoin;
            denoms++;
        } else {
            i++;
        }
    }
    console.log("Total Coins:", denoms);
    return denoms;
}

const testMinDenom = () => {
    const denominations = [1, 2, 5, 10, 20, 50, 100, 500];

    const cases = [
        { name: "Standard Amount", amount: 868 },
        { name: "Exact Match", amount: 500 },
        { name: "Small Amount", amount: 13 },
        { name: "Zero Amount", amount: 0 },
        { name: "Multiple of Large", amount: 1500 },
    ];

    console.log("--- Currency Greedy Test ---");
    cases.forEach((test) => {
        const result = minDenom(test.amount, [...denominations]);
        console.log(`${test.name} (${test.amount}): Result = ${result}`);
    });
};

testMinDenom();
