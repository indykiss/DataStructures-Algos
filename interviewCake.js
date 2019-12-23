
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


// I am a sorting algo 
// The main algo.ie part are the edge cases 


function mergeArraysTooSimple(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    
    // First simplest way to do this is merge then .sort()
    // But this would be O(n log(n)) complexity. 
    // We can do better
    const newArr = myArray.concat(alicesArray);
    return newArr.sort((a,b) => a - b);
    
    // Let's use the fact that the arrs are already sorted
    // Edge cases: unequal arrs (main issue) and an arr is only 1 element
    // We are going to keep track of my, alice's, and new arr's indices 
    // so we can compare which is smallest then push into newArr
  }
  
  
  function mergeArrays(myArray, alicesArray) {
    
    const newArr = [];
    
    // Set up the variables that help us keep track of the arrs
    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0; 
    
    // We stop when the newArr has all the eles in both my & Alice's arrs 
    while(currentIndexMerged < (myArray.length + alicesArray.length)) {
      
      const isMyArrDone = currentIndexMine >= myArray.length; 
      const isAliceArrDone = currentIndexAlices >= alicesArray.length; 
      
      // Case: Next index in newArr is from my arr 
      // IF my arr still is going AND EITHER  
        // Alice's arr is done OR 
        // At this index, my ele is less than Alice's ele at Nth index 
        
      if (!isMyArrDone && (isAliceArrDone || 
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
        
        // We add the ele to the newArr
        
        newArr[currentIndexMerged] = myArrayp[currentIndexMine]; 
        currentIndexMine++;
        
      // Case: Next index in newArr is from Alice
      } else {
        newArr[currentIndexMerged] = alicesArray[currentIndexAlice]; 
        currentIndexAlices++
      }
      
      // Either way, we increment the newArr's index so we continue adding
      
      currentIndexMerged++
      
    }
    
    return newArr;
    
  }

