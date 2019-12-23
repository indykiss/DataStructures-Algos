
// Greedy algorithm: builds up a solution by choosing the option that 
// looks the best at every step.
// Say you're a cashier and need to give someone 67 cents (US) using as 
// few coins as possible. How would you do it?

// Whenever picking which coin to use, you'd take the highest-value coin you could. 
// A quarter, another quarter, then a dime, a nickel, and finally two pennies. 
// That's a greedy algorithm, because you're always greedily choosing 
// the coin that covers the biggest portion of the remaining amount.

// Greedy isn't always the best algo to use. Bad for duffel bag of cakes. 


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


  // Girl scout cookies

  // In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]