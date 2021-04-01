


/*
Min Cost Climbing Stairs

On a staircase, the i-th step has some 
non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one 
or two steps. You need to find minimum cost to reach 
the top of the floor, and you can either start from 
the step with index 0, or the step with index 1.

cost = [10, 15, 20]
output: 15 
Cheapest = start on 1, pay 15, go to top 


Wrong Strategy:
- While i < arr.length - 1
  - 1: Add arr[i] + arr[i+1] 
  - 2: Add arr[i+2] + arr[i+3]
  - If 1 < 2, price += arr[i]; i++
  - If 2 < 1, price += arr[i+1], i+=2

Correct strategy : DP, easy :(
*/


var minCostClimbingStairs = function(cost) {
    cost.push(0) // bc we don't count the last 
    
    let dp = [cost[0], cost[1]]; 
    
    for(let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]; 
    }
    
    return dp[dp.length - 1];
};








