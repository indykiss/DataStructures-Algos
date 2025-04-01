
/*
Best Time to Buy and Sell Stock III

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Strategy:
- Track the cheapest price to buy and maximize profit for sell
- USE THESE TWO VARS to reinvest
    - Minimize the second buy price
    - Maximize the second sell price
*/


var maxProfit = function(prices) {
    let buy1 = Infinity,
        buy2 = Infinity, 
        sell1 = -Infinity, 
        sell2 = -Infinity; 
    
    for(let price of prices) {
        // first purchase maximize
        buy1 = Math.min(price, buy1); 
        sell1 = Math.max(price-buy1, sell1); 
        
        // reinvesting profits
        buy2 = Math.min(price - sell1, buy2); 
        sell2 = Math.max(price - buy2, sell2)
    }
    
    return sell2; 
};







