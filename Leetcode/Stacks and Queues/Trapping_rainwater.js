/*
Trapping Rain Water

Given n non-negative integers representing an 
elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Strategy:
- At each index, calculate how much water there should be in that space
- That depends on the height of the highest mountains to the left and right of i
    - We need to loop through the heights to the left and right of i to calc lMax and rMax
- Then, find the Math.min of these two highest buildings
    - Min bc smallest height = where the water stops rising 
- Subtract the i's current height, because above sea level (mass !== water vol)
- If this number is > 0, add it into total water volume 

Next time! Do me with a stack:
https://leetcode.com/problems/trapping-rain-water/discuss/400555/Clean-JavaScript-solutions-(brute-force-dynamic-programming-stack-two-pointers)
*/

var trap = function(heights) {
    let total_water = 0;

    for(let i = 0; i < heights.length; i++) {
        let lMax = 0;
        let rMax = 0;

        // Find height of highest building to left of current index
        for(let l = 0; l < i; l++) {
            lMax = Math.max(lMax, heights[l])
        }
        // Find height of highest building to the right of current index 
        for(let r = i + 1; r < heights.length; r++) {
            rMax = Math.max(rMax, heights[r])
        }
        // Find what the minimum height of those two minus current height (bc in case we're above sea lvl)
        let water = Math.min(lMax, rMax) - heights[i];

        if(water > 0) {
            total_water = total_water + water; 
        }
    }
    return total_water;
};