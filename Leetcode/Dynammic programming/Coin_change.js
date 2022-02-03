


/*
Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
*/

Python DP:
O(m * n) time, amount and num of coins
O(n) space because dp arr
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:        
        dp = [float('inf')] * (amount+1)  
        dp[0] = 0
        
        for coin in coins:
            for i in range(coin, amount+1):
                dp[i] = min(dp[i], dp[i-coin]+1)
                    
        if dp[amount] < amount + 1:
            return dp[amount]
        else:
            return - 1


            
var coinChange = function(coins, amount) {
    let dp = Array(amount+1).fill(Infinity);
    
    dp[0] = 0; 
    
    for(let i = 0; i < dp.length; i++) {
        for(let coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin]+1);
            }   
        }
    }
    return dp[amount] === Infinity ? - 1 : dp[amount];
}




// Very wrong, doesnt get close 
var coinChangeRecursWrong = function(coins, amount) {
    let options = 0;
    
    changeMaker(coins, amount);
    
    return options > 0 ? options : -1; 
    
    
    function changeMaker(coins, amount) {
        if(amount < 0) return 0;  // went too far, not an option 
        if(amount === 0) return 1; // found a perfect coin change option

        for(let coin of coins) {
            if(changeMaker(coins, amount - coin) > 0) {
                options += changeMaker(coins, amount - coin); 
            }
        }
    }
    
};



