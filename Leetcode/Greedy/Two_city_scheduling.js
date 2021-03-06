


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

Strat:
- Vars: # of ppl in city A & city B, totalCost, numOfPplThatCanBeInCity
- Sort by city A costs in desc order 
- Loop through the subset and check if ith person goes to A or B. Add cost to 
totalCost. ELSE if city A/B is maxed out, we want to add the other one 
- Retun totalCost
*/



// 35 mins. Nov.  Not bad. Only needed one big hint:
// Greedy sort the costs by DIFFERENCE DESCENDING 
// so the end of the costs arr has smaller diff. between flights

var twoCitySchedCost = function(costs) {
    let totalCosts = 0, 
        cityACount = 0, 
        cityBCount = 0, 
        capacity = costs.length / 2;
        
    // Greedy method: We want to sort by differences in descending order 
    // This is more dynamic bc we will greedily pick the lowest flight 
    // when the flight differences is high. When we have to just pick 
    // whichever towards the end of the iteration, the difference will be lower
    costs = costs.sort((a,b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
    
    for(let idx = 0; idx < costs.length; idx++) {
        
        // One city is at capacity, so let's add person to other city 
        if(cityACount === capacity) {
            totalCosts += costs[idx][1];
            cityBCount++;
        } else if(cityBCount === capacity) {
            totalCosts += costs[idx][0];
            cityACount++;
        }
        
        // Add to city A IF city A's not at capacity
        else if(costs[idx][0] < costs[idx][1]) {
            if(cityACount < capacity) {
                totalCosts += costs[idx][0]; 
                cityACount++;
            }
        }
        // Add to city B IF city B's not at capacity
        else if(costs[idx][1] < costs[idx][0]) {
            if(cityBCount < capacity) {
                totalCosts += costs[idx][1]; 
                cityBCount++;
            }
        }        
    }
    return totalCosts;
} 







// Practice me again. Oct
var twoCitySchedCost = function(costs) {
    let numOfPplA = 0,
        numOfPplB = 0,
        totalCost = 0,
        totalNumPpl = costs.length/2;
    
    costs = costs.sort((a,b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))
    
    for(let [cityACost, cityBCost] of costs) { 
        // If person should go to city A
        if(cityACost< cityBCost && numOfPplA < totalNumPpl) {
            numOfPplA++;
            totalCost = totalCost + cityACost;
        }
        // If person should go to city B
        else if(cityBCost < cityACost && numOfPplB < totalNumPpl) {
            numOfPplB++;
            totalCost = totalCost + cityBCost;
        } else {
            // Where we have to pick the more expensive flight bc other city is full
            if(numOfPplA < totalNumPpl) {
                totalCost = totalCost + cityACost;
            } else {
                totalCost = totalCost + cityBCost;               
            }
        }
    }
    
    return totalCost;    
}





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
