

/*
General approach for knapsack 

Given the weights and profits of ‘N’ items, we are 
asked to put these items in a knapsack which has a 
capacity ‘C’. The goal is to get the maximum profit 
out of the items in the knapsack. Each item can only 
be selected once, as we don’t have multiple quantities 
of any item.

Let’s take the example of Merry, who wants to carry some 
fruits in the knapsack to get maximum profit. Here are 
the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5

Let’s try to put various combinations of fruits in the
knapsack, such that their total weight is not more 
than 5:

Apple + Orange (total weight 5) => 9 profit
Apple + Banana (total weight 3) => 7 profit
Orange + Banana (total weight 4) => 8 profit
Banana + Melon (total weight 5) => 10 profit

This shows that Banana + Melon is the best 
combo as it gives us the maximum profit and the 
total weight does not exceed the capacity.

Strat:
for each item 'i' 
  create a new set which INCLUDES item 'i' if the total 
  weight does not exceed the capacity, and 
     recursively process the remaining capacity and items
  create a new set WITHOUT item 'i', and recursively 
  process the remaining items 
return the set from the above two sets with higher profit 

*/


let solveKnapsack = function(profits, weights, capacity) {
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
      // base checks
      if (capacity <= 0 || currentIndex >= profits.length) return 0;
  
      // recursive call after choosing the element at the currentIndex
      // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
      let profit1 = 0;
      if (weights[currentIndex] <= capacity) {
        profit1 =
          profits[currentIndex] +
          knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
      }
  
      // recursive call after excluding the element at the currentIndex
      const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
  
      return Math.max(profit1, profit2);
    }
  
    return knapsackRecursive(profits, weights, capacity, 0);
  };
  
  // O(2^n) time. O(n) space





  // Same thing as above but with memoization 
  let solveKnapsack = function(profits, weights, capacity) {
    const dp = [];
  
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
      // base checks
      if (capacity <= 0 || currentIndex >= profits.length) return 0;
  
      dp[currentIndex] = dp[currentIndex] || [];
      if (typeof dp[currentIndex][capacity] !== 'undefined') {
        return dp[currentIndex][capacity];
      }
  
      // recursive call after choosing the element at the currentIndex
      // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
      let profit1 = 0;
      if (weights[currentIndex] <= capacity) {
        profit1 =
          profits[currentIndex] +
          knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
      }
  
      // recursive call after excluding the element at the currentIndex
      const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
  
      dp[currentIndex][capacity] = Math.max(profit1, profit2);
      return dp[currentIndex][capacity];
    }
  
    return knapsackRecursive(profits, weights, capacity, 0);
  };


// Bottom-up dynammic programming 
let solveKnapsack = function(profits, weights, capacity) {
    const n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length != n) return 0;
  
    const dp = Array(profits.length)
      .fill(0)
      .map(() => Array(capacity + 1).fill(0));
  
    // populate the capacity=0 columns; with '0' capacity we have '0' profit
    for (let i = 0; i < n; i++) dp[i][0] = 0;
  
    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
      if (weights[0] <= c) dp[0][c] = profits[0];
    }
  
    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
      for (let c = 1; c <= capacity; c++) {
        let profit1 = 0,
          profit2 = 0;
        // includse the item, if it is not more than the capacity
        if (weights[i] <= c) profit1 = profits[i] + dp[i - 1][c - weights[i]];
        // exclude the item
        profit2 = dp[i - 1][c];
        // take maximum
        dp[i][c] = Math.max(profit1, profit2);
      }
    }
  
    // maximum profit will be at the bottom-right corner.
    return dp[n - 1][capacity];
  };
  