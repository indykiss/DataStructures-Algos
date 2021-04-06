
/*
Maximum Points You Can Obtain from Cards

There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain. 

Goal: to get max # of points, have to either take the k first or the 
k last points in cardPoints. 

Strategy: 
- So we know we need to add sum1 from 0 -> (k-1), 
sum2 for cardPoints.length - k to end of arr
- 2 while loops for sum1, sum2
- Compare which is larger, return larger option 


*/


// technically sliding window but fucking weird 
var maxScore = function(cardPoints, k) {
    let max = 0
    // calculate the initial sum
    let i = 0
    while (i < k){
          max += cardPoints[i]
        i++
    }
    
    let shift = 1
    let sum = max
    while(shift <= k){
      sum = sum - cardPoints[k - shift] + cardPoints[cardPoints.length - shift]
      max = Math.max(max, sum)
      shift++
    }
    
    return max
  };
  
  // Technically right BUT the question doesn't say, but does let 
  // us pick SOME cards from the beginning, as long as we choose 
  // the 1st. Same for the back. Can pick SOME cards from the back
  // as long as we pick the last number. 
  
  // var maxScore = function(cardPoints, k) {
  //     let pt1 = k - 1,
  //         sum1 = 0,
  //         pt2 = cardPoints.length - k,
  //         sum2 = 0,
  //         i = 0; 
      
  //     while(i <= pt1) {
  //         sum1 += cardPoints[i];
  //         i++; 
  //     }
      
  //     i = pt2; 
      
  //     while(i < cardPoints.length) {
  //         sum2 += cardPoints[i];
  //         i++; 
  //     }
      
  //     return sum1 > sum2 ? sum1 : sum2; 
  // };
  
  
  
  
  
  
  
  