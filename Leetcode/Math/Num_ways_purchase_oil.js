
/*
Number of ways to purchase oil
'm' amount of oil can be purchased from 'n' companies. 
Every company has 'k' capacity of oil to be sold, you can take zero or 
many times the quantity offered by each company. Give the maximum number 
of combinations possible.

For examples:
There are three companies: A, B, C

A - 10
B - 15
C - 50

Target: 60

Number of Combinations: 4 {[10,50], [15,45], [20,40],[10,20,30]

Not a leetcode, but was a leetcode discuss Q for Bloomb. 
*/

var waysToBuyOil = function(nums, target) {
    let dp = nums.length;        

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j <= target; j++) {
            if(i == 0) {
                if(j % nums[i] == 0) {
                    dp[i][j] == 1
                } else {
                    if(j < nums[i]) {
                        dp[i][j] == dp[i-1][j];
                    } else {
                        dp[i][j] == dp[i-1][j] + dp[i][j-nums[i]]
                    }
                }
            }
        }
    }
    // Ya i have no idea. I tried to follow along with a java solution but 
        // got super lost. This is not something i can do in js i think
    return dp[nums.length-1][target]
}