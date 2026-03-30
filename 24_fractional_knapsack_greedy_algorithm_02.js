function fractionalKnapsack(itemsWt, priceList, capacity) {
    const n = itemsWt.length;

    if (capacity == null || Number.isNaN(capacity)) {
        throw new Error("Enter a valid capacity.");
    }

    if (priceList.length !== n) {
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
        if (!itemsWt[i] || !priceList[i]) {
            console.log("Pleeaase enter correct values.");
            return;
        }
    }

    const items = itemsWt.map((_, i) => [
        itemsWt[i],
        priceList[i],
        priceList[i] / itemsWt[i],
        //  (itemsWt[i] === 0? 0 : priceList[i] / itemsWt[i]),
    ]);
    // sorting in decreasing order.
    // if we do items.sort((a, b) => b[2] - a[2]); functon the complexity become O(nlogn) , right now it is O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (items[i][2] < items[j][2]) {
                [items[i], items[j]] = [items[j], items[i]];
            }
        }
    }

    let profit = 0;

    for (const [item_wt, item_price, per_kg_price] of items) {
        if (capacity >= item_wt) {
            capacity = capacity - item_wt;
            profit = profit + item_price;
        } else {
            profit = profit + capacity * per_kg_price;
            break;
        }
    }

    console.log("Total Profit = ", profit);
    return profit;
}
//------------------------------------ Test Case--------

const testFractionalKnapsack = () => {
    const cases = [
        {
            name: "Standard Case (Partial Item Needed)",
            weights: [10, 20, 30],
            prices: [60, 100, 120],
            capacity: 50,
            expected: 240, // 60 + 100 + (2/3 of 120 = 80)
        },
        {
            name: "Small Capacity (Only Fractional)",
            weights: [10, 20],
            prices: [100, 100],
            capacity: 5,
            expected: 50, // 1/2 of the first item (which is $10/kg)
        },
        {
            name: "Capacity Exactly Fits All",
            weights: [5, 10],
            prices: [50, 100],
            capacity: 15,
            expected: 150,
        },
        {
            name: "Zero Capacity",
            weights: [10, 20],
            prices: [60, 100],
            capacity: 0,
            expected: 0,
        },
    ];

    console.log("--- Starting Fractional Knapsack Tests ---");

    cases.forEach(({ name, weights, prices, capacity, expected }) => {
        console.log(`Test: ${name}`);
        const result = fractionalKnapsack(weights, prices, capacity);
        const status =
            result === expected
                ? "✅ PASSED"
                : `❌ FAILED (Expected ${expected}, got ${result})`;
        console.log(status);
        console.log("-----------------------------------------");
    });
};

testFractionalKnapsack();
