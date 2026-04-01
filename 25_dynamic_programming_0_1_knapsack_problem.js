function knapsack_dp(wt, value, capacity) {
    const n = value.length;

    if (capacity == null || Number.isNaN(capacity)) {
        throw new Error("Enter a valid capacity.");
    }

    if (value.length !== n) {
        console.log(
            "price list is not the same size as items weight. Please check the values.",
        );
        return;
    }

    if (capacity === 0) {
        const profit = 0;
        console.log("Capacity is 0. Profit is ", profit);
        return profit;
    }

    for (let i = 0; i < n; i++) {
        if (!wt[i] || !value[i]) {
            console.log("Pleeaase enter correct values.");
            return;
        }
    }

    let dp = Array.from({ length: n + 1 }, () => {
        return Array.from({ length: capacity + 1 }, () => 0); // We are making the first column and row made out of zero. {Use logic and you'd know why.}
    });

    for (let i = 1; i < n + 1; i++) {
        for (let w = 1; w < capacity + 1; w++) {
            if (wt[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w], // excluded value
                    dp[i - 1][w - wt[i - 1]] + value[i - 1], // after inclusion value
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    console.log(" Max profit is ", dp[n][capacity]);
}

let weights = [2, 3, 4, 5];
let values = [3, 4, 5, 6];
knapsack_dp(weights, values, 5);
