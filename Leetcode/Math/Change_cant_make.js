
/*
Algoexpert

Given an array of coins, find the smallest change you 
can't make with the arr. 


Strategy:
- Var posChange
- Sort the coins, bc need smallest change cant create 
- Iterate thru the coins:
	- Compare the curr coin to the posChange
	- IF currCoin > posChange + 1, return posChange + 1; 
	- posChange = currCoin + posChange (if no return)
- Return null 

Edge:
- Thru thr loop, dont find a change we cant make BUT
there's still the change thats larger than posChange
that we can't make
- Neg? 
- Integer overflow - too big an input 
*/


function nonConstructibleChange(coins) {
    let sortedCoins = coins.sort((a,b) => a-b); 
      let posChange = 0; 
      
      for(let currCoin of coins) {
          if(currCoin > posChange + 1) return posChange + 1; 
          
          posChange += currCoin; 
      }
      
    return posChange + 1;
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  