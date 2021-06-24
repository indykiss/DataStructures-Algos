


/*

Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the 
price of a given stock on day i.

If you were only permitted to complete at most one 
transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.



Input: [7,1,5,3,6,4]
Output: 5

Looking for the maximum possible profit, 
being the largest difference between a 
lower number coming before a large number


Strat: Brute force O(n^2)
- Nested for loop 
    - Outer: num in arr 
        - Inner: rest of nums in arr
- maxProfit


Strat: Peaks & valleys O(n)
- Look for minbuy and maxsell
- O(n) time because we're just passing thru once
*/


// O(n^2) look at everything solution
var maxProfitSlow = function(prices) {
    let maxProf = -Infinity; 
    
    for(let i = 0; i < prices.length; i++) {
        let buy = prices[i];
        
        for(let j = i+1; j < prices.length; j++) {
            let sell = prices[j],
                profit = prices[j] - prices[i];
            
            maxProf = Math.max(maxProf, profit);
        }
    }
    return maxProf > 0 ? maxProf : 0;
};


// O(n): Find tallest peak and lowest valley
var maxProfit = function(prices) {
    let cheapestPrice = Infinity, 
        maxProf = 0; 
    
    for(let i = 0; i < prices.length; i++) {
        let currPrice = prices[i],
            profit = currPrice - cheapestPrice;
        
        if(currPrice < cheapestPrice) {
            cheapestPrice = currPrice; 
        }
        maxProf = Math.max(maxProf, profit);   
    }
    return maxProf > 0 ? maxProf : 0;
} 

