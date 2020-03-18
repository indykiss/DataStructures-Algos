## Binary search 

Used to find a target number in a sorted array. Note: array must already be sorted! 
   
    1. Find a middle number. Is it bigger or smaller than target?
        Tells us if target is in the left or right half, which... 
    2. Divides the problem in half. Rule out the other half that doesn't contain the target.
    3. Do steps #1-2 with the new half, until we find the target. 

Binary search time cost is O(lg(n)), since we are dividing the problem so it's not O(n)
in terms of equal in and equal out, but not O(1). 



Binary search recursively. ROUGHLY 

    const binarySearch = function(arr,target,floor,ceiling) {
        let floor = 0;
        let ceiling = arr.length;
        
        // Base case:
        if(floor > ceiling) {
            return -1; 
        }
        // ID the midpoint
        let midpoint = Math.floor(floor + (ceiling - floor)/ 2)
                // start + (end-start) bc stack overflow 
        
        // IF the midpoint is greater than X, we want to make midpoint become the ceiling. IF midpoint is less than X, we want to make midpoint become the floor. 
        if(arr[midpoint] === target) {
            return midpoint;
        } else if(arr[midpoint] > value) {
            return binarySearch(arr, target, floor, midpoint - 1)
        } else {
            return binarySearch(arr, target, midpoint + 1, ceiling)
        }
    }


Binary search in code. This is the iterative approach. Better for time and space! : 

    function binarySearch(target, nums) {
        // We make a floor and a ceiling indices to keep track 
        let floorIndex = -1;
        let ceilingIndex = nums.length; 

        // If there isn't at least 1 index between floor & ceiling 
            // then nums does not contain target 
        while(floorIndex + 1 < ceilingIndex) {
            // Find the halfway point, round down to avoid half index
                // Then make a guess index/value to compare to target
            const distance = ceilingLength - floorIndex; 
            const halfDistance = Math.floor(distance/2);
            const guessIndex = floorIndex + halfDistance;
            const guessValue = nums[guessIndex]

            // If we guessed right, boom, done! 
            if(guessValue === target) {
                return true;
            }

            // If target is to the left of our guessed value, lets
                // move the ceiling to the left
            if(guessValue > target) {
                ceilingIndex = guessIndex;
                // OR target is right, so move floor to the right
            } else {
                floorIndex = guessIndex;
            }
        }
        return false;
    }


We will use log maths to figure out the time cost for binary search. Since we are cutting nums in half x number of times until we get the target, we can solve for X using this formula: 
    n * (1/2)^x = 1
    n * (1^x)/(2^x) = 1 
    n /(2^x) = 1
    n = 2^x 
        // Now we use log to pull that exponent down 
    log(2)(n) = log(2)(2^x)
    log(2)(n) = x
        // That's our answer!! The time complexity of our problem is: 
    O(log(2)(n))

So our time complexity of binary search is O(log n)



## Breadth-first search

Breadth-first search is a way to explore a tree or graph by looking at the nodes one step away, then two steps away. 

Kinda like throwing a stone in a cave pond. You explore the nodes that ripple out from the starting point, until we reach all the nodes.  

Pros: Finds the shortest path between the starting node and any other node. 

Cons: Generally takes more memory than the depth-first search, since we are looking at all the nodes. Breadth and all. 



## Depth-first search (also called depth-first traversal) 

Depth-first search is a way to explore a tree or graph by traveling down one node branch to the end, then turning around if couldn't find the thing, then traveling down another branch, etc, until we find the find we want. 

Kinda like being in a maze and going down each hallway option until we find the exit. 

Pros: DFS generally takes less memory than BFS. 
Can use recursion here pretty easily. 

Cons: Does not find the shortest path to a node. 

Note that BREADTH first uses a queue and DEPTH first uses a stack. 

This will help us decide which of the two to use. 

Are we looking for a solution that would needs a first in, first out (queue! therefore breadth) OR a last in, last out (stack! therefore depth). 

Are we visiting nodes in the order we see them (queue) or the last seen node first (stack)? 