



/*
Minimum Cost to Connect Sticks

You have some number of sticks with positive integer lengths. 
These lengths are given as an array sticks, where sticks[i] is 
the length of the ith stick.

You can connect any two sticks of lengths x and y into one stick 
by paying a cost of x + y. You must connect all the sticks until 
there is only one stick remaining.

Return the minimum cost of connecting all the given sticks into one 
stick in this way.


Input: sticks = [2,4,3]
Output: 14
Explanation: You start with sticks = [2,4,3].
1. Combine sticks 2 and 3 for a cost of 2 + 3 = 5. 
Now you have sticks = [5,4].
2. Combine sticks 5 and 4 for a cost of 5 + 4 = 9. 
Now you have sticks = [9].
There is only one stick left, so you are done. 
The total cost is 5 + 9 = 14.


Strat: Heap, use a minHeap bc we want to find the 
minimum cost of connectin sticks

1. Add all eles into the minHeap
2. At each step within minHeap, take the top two smallest sticks and
add them together, then readd the sumation back into the heap. 
3. Keep going until we only have 1 element left in the minHeap
4. Return the ele 

*/



// LC way to do this, without using a Heap.  
// Passes EXCEPT IF HUGE INPUT BECAUSE THIS TAKE WAY TOO MUCH TIME 
// BECAUSE WE SORT LIKE SO MUCH
var connectSticks = function(sticks) {
    if(sticks.length === 0) return 0;
    
    let sortedSticks = sticks.sort((a,b) => a-b);

    let res = 0;

    while(sortedSticks.length > 1) {

        let smallest = sortedSticks.shift(),
            secondSmallest = sortedSticks.shift();

        let newStick = smallest + secondSmallest;

        res += newStick; 

        sortedSticks.push(newStick);

        sortedSticks = sortedSticks.sort((a,b) => a-b);
    }

    return res;
};






// Grokking way to do this. Also called Connect Ropes. 
// This doesn't pass leetcode but it's right.
const Heap = require('./collections/heap') // import heap 

var connectSticks = function(sticks) {
    
    let minHeap = new Heap([], null, (a,b) => b-a);
    
    let res = 0;
    
    while(minHeap.size > 1) {
        let smallest = minHeap.pop(),
            secondSmallest = minHeap.pop();
        
        let newStick = smallest + secondSmallest;

        res += newStick;
        
        minHeap.push(newStick);
    }
    return res;
};
// O(n * log n) where N is the length of the sticks 
// at each step, we take out two and add in 1, so we have N steps
// O(N) because heap holds all the sticks
