/*
Greedy algorithm: builds up a solution by choosing the option that 
looks the best at every step.
Say you're a cashier and need to give someone 67 cents (US) using as 
few coins as possible. 


How much money could I have made yesterday trading Apple stocks? 
Write an efficient function that takes stockPrices and returns 
the best profit I could have made from one purchase and 
one sale of one share of Apple stock yesterday.

Calculate the max profit
Greedy algo: constantly compare the prev 2 ways 
update minPrice and maxProfit to initialize them as first price
and first possible profit 
*/

function getMaxProfit(stockPrices) {

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





/*
Given an array of integers, find the highest product you can get from three of the integers.
Remember that numbers can be negative so [3,2,1,-100,-100] - the highest product uses 2 negatives
and the highest positive. So can't sort or just find the biggest 3 numbers. 

  Calculate the highest product of three numbers
    ideally in O(n) time worst case bc have to look at
    all the nums at least 1
  
  Edge cases: negative numbers. (-100)(-100)(2) = highest product
    given [2,1,1,-100,-100]. Less than 3 numbers given 
    
 Strategy: Loop and see if current number times
  lowestProdOf2 or highestProdOf2 yields a new highestProdOf3
  and current x highest/ lowest yields new highestProdOf2 / lowestProdOf2
  and if there's a new highest / lowest value 
*/


function highestProductOf3(arrayOfInts) {
    
  // Step 1: Populate the variables to give some value to compare in loop
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
     // I don't know why we have args of eles here 
     // instead of just arrayOfInts:
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
        
  if(arrayOfInts.length < 3) {
    return "Array has fewer than 3 elements."
  }
  
  // Step 2: Loop but start at 2, since we did some stuffs already
  for(let i = 2; i < arrayOfInts.length; i++) {
    const currentNum = arrayOfInts[i]
    
  // Step 3: Compare currentNum to our variables
    highestProductOf3 = Math.max(
      highestProductOf3,
      currentNum * lowestProductOf2, 
      currentNum * highestProductOf2);
    
    highestProductOf2 = Math.max(
      highestProductOf2, 
      currentNum * highest,
      currentNum * lowest);
      
    lowestProductOf2 = Math.min(
      lowestProductOf2, 
      currentNum * highest,
      currentNum * lowest);
      
    highest = Math.max(
      highest, 
      currentNum);
    
    lowest = Math.min(
      lowest, 
      currentNum);
  }
  
  // Step 4: Return highest prod of 3!
  return highestProductOf3;
}



/*
You have an array of integers, and for each index you want to find the 
product  of every integer except the integer at that index.
WITHOUT using division. 

For example, given:
  [1, 7, 3, 4]

your function would return:
  [84, 12, 28, 21]

by calculating:
  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Edge case: zeros and if input only has 1 integer. 
    Negative nums are fine, just gets multipled. Same with zeros. 
  
  Strategy: Get the product for all numbers before the index 
    Get the product for all numbers after the index 
    At the index number we're looking at in our return arr, 
      multiply together to get total product (except at index!)
*/    



function getProductsOfAllIntsExceptAtIndex(intArray) {

  if(intArray.length < 2) {
    throw new Error("Can't do this");
  }
  
  let prodOfAllExceptAtIndex = []
  let preIndexProduct = 1;
  let postIndexProduct = 1;
  
  // Step 2: Get the product of all the indices BEFORE the index
  for(let i = 0; i < intArray.length; i++) {
    // Reassign the arr at index to be preIndexProd
    prodOfAllExceptAtIndex[i] = preIndexProduct;
    
    // Make the preIndexProd an actual prod by multiplying
      // currentNum for the next iteration
    preIndexProduct = preIndexProduct * intArray[i] ;
  }
  
  // Step 3: Get the product of all the indices AFTER the index
    // by looping from the end of the arr
  for(let j = intArray.length -1; j >=0; j--) {
    // The index in our arr is the preIndexProduct TIMES 
      // the new postIndexProduct
    prodOfAllExceptAtIndex[j] =
      prodOfAllExceptAtIndex[j] * postIndexProduct;

    // Do maths so we can use a new postIndexProd for next iteration
    postIndexProduct = postIndexProduct * intArray[j];
  }

  // Step 4: Return answer
  return prodOfAllExceptAtIndex;  
}

// O(n) time: 1 loop
  // We only create 1 array, O(n) space



/*
Write a function for doing an in-place shuffle of an arr.

The shuffle must be "uniform," meaning each item in the original arr 
must have the same probability of ending up in each spot in the final arr.

Assume that you have a function getRandom(floor, ceiling) for getting 
a random integer that is >= floor and <= ceiling.


Strategy: Randomize the order of eles in an array
  Make a getRandom function 
  As we loop, pull a random index/value from the current 
    index til the end of array
  Swap the current index/value with this new random index/value;
*/

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  // Shuffle the input in place
  if(array.length < 2) {
    return array;
  }  
  
  // Step 1: Loop through arr
  for(let i = 0; i < array.length -1; i++) {
    // Make a variable that uses getRandom to pick an ele 
      // in the arr that hasn't been picked already, so 
      // looking from index to end of arr 
      const randomIndex = getRandom(i, array.length - 1);
      const randomValue = array[i];
    
      // Place random ele in spot by swapping random index & value
        // with the index we're iterating at
      if(randomIndex !== i) {
        array[i] = array[randomIndex];
        array[randomIndex] = randomValue;
      }
  }
}

// This is O(n) time bc of the loop and O(1) space bc it's
  // arr manipulation in place
// RN: This is called teh Fisher-Yates shuffle algorithm 
  
  

