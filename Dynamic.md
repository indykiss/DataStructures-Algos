


## Dynammic programming 
Algorithmn technique that solves an optimization problem by breaking it down into simpler subproblems. Then find the optimal way to solve the subproblems. If the solutions for the subproblems are optimal, then the solution for the overall problem is also optimal. 

Generally, DP is used to optimize a recursive problem. Once we have a recursive solution, we either memoize or tabulate to optimize. 

How to ID a dynammic programming problem?
1. Overlapping subproblems. Smaller versions of the original problem. 
2. Optimal substructure property. Basically if the overall solution can be made by combining the subproblem solutions. 

Types of DP:
- Top down with memoization
  Saving the solution of the subproblem in like a cache. When we see the problem again, we access the answer from our cache instead of rerunning. 
- Bottom up with tabulation 
  We solve the problem "bottom-up" by solving all the related sub-problems first. This is done by filling up an n-dimensional table. Based on the results in the table, the solution to the orignal probelm is computed. 


- Fibonacci


# Knapsack using Dynammic Programming 
Basically Greedy method of programming. 

- Cashier is making change. Use smallest num of coins 
- Fancy cake vault 


# Topological Sort (Graph)
Used to find a linear ordering of elements that have 
dependencies on each other. For example, if event "B" is dependent on event "A" then "A" comes before "B" in
topological ordering. 

- Course Schedule: https://leetcode.com/problems/course-schedule/discuss/305685/java-script-dfs-100-detect-cycle-in-directed-graph 
- Practice later maybe 




## Memoization

