


/*
Two City Scheduling 

A company is planning to interview 2n people. Given the array costs where 
costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a 
is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n 
people arrive in each city.

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20

- Need to get the minimum costs to fly people such that 
every city has exactly n people, which is #ofsubarrs/ 2 

*/



var twoCitySchedCost = function(costs) {
    // Determine how many people each city will have, 
    // track what each city has, and total costs
    let numOfPpl = costs.length/2,
        aMax = 0,
        bMax = 0,
        totalCost = 0;
    
    // Sort costs so we iterate in a greedy method
    costs = costs.sort((a,b) => Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1]))
            
    for(let [cityA, cityB] of costs) {
        // Increment either city a's max or city b's max
        if(cityA <= cityB && aMax < numOfPpl) {
            totalCost += cityA;
            aMax++;
        }
        else if(cityB <= cityA && bMax < numOfPpl) {
            totalCost += cityB;
            bMax++;
        // If we've reached the max of either city a or b
        // add the other one into the total costs
        } else {
            if (aMax < bMax) {
                totalCost += cityA
            } else {
                totalCost += cityB
            }
        }
    }
    return totalCost;
};
