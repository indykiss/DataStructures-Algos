// Greedy algorithm: builds up a solution by choosing the option that 
// looks the best at every step.
// Say you're a cashier and need to give someone 67 cents (US) using as 
// few coins as possible. 


// How much money could I have made yesterday trading Apple stocks? 
// Write an efficient function that takes stockPrices and returns 
// the best profit I could have made from one purchase and 
// one sale of one share of Apple stock yesterday.


function getMaxProfit(stockPrices) {

    // Calculate the max profit
    // Greedy algo: constantly compare the prev 2 ways 
    // update minPrice and maxProfit to initialize them as first price
    // and first possible profit 
    let maxProfit = stockPrices[1] - stockPrices[0];
    let minPrice = stockPrices[0];
    
    // Edge case
    if(stockPrices.length < 2) {
      return "We need at least 2 stock prices for a profit"
    }
    
    // Start at 2nd index to circumvent the issue of return 0 when 
    // maxProfit is negative. We can't sell at 0, so we'll start at 1
    for(let i = 1; i< stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
      
      // What would be profit if we bought at min and sold at current? 
      const potentialProfit = currentPrice - minPrice
      
      // Update the maxProfit
      maxProfit = Math.max(maxProfit, potentialProfit);
      
      // Update minPrice so it's always the lowest we've seen 
      minPrice = Math.min(minPrice, currentPrice); 
    }
    return maxProfit; 
    // Edge case of no profit all day and input errors (no price)?
  }
  
  
  getMaxProfit([10, 7, 5, 8, 11, 9]);



// Given an array of integers, find the highest product you can get from three of the integers.
// Remember that numbers can be negative so [3,2,1,-100,-100] - the highest product uses 2 negatives
// and the highest positive. So can't sort or just find the biggest 3 numbers. 




