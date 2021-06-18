




/*

Brute force: O(n log n)
- Sort the arr each time, grab the largest 2, 
SMASH. Add remainder (if remainder) back to the arr
- Cont smashing until the last number stands 


Better time; Max heap. O(n) time 
- Add all nums to the max heap
- Pop off max num (root) from max heap twice
- SMASH
- Add remainder back to heap, continue

*/

// max heap: a-b
// min heap: b-a

var heap = require('./collections/heap'); 

var lastStoneWeight = function(stones) {
    let maxHeap = new Heap([], null, (a,b) => b-a); 
    
    for(let num of stones) {
        maxHeap.push(num);
    }
    
    while(maxHeap.size > 1) {
        let contender1 = maxHeap.pop(), 
            contender2 = maxHeap.pop(); 
        
        // we dont want to add in zeros 
        if(contender1 - contender2 > 0) {
            let remainder = contender1 - contender2; 
            maxHeap.push(remainder);            
        }
    }
    // return the winner if there is one
    return maxHeap.size === 1 ? maxHeap.pop() : 0; 
};


// just to pass LC test to add
var lastStoneWeight = function(stones) {

    stones = stones.sort((a,b) => a-b); 
    
    while(stones.length > 1) {
        let biggest = stones.pop(), 
            second = stones.pop(), 
            diff = biggest - second;
        
        if(diff > 0) {
            stones.push(diff);
            stones.sort((a,b) => a-b)
        }
    }
    
    if(stones.length === 1) {
        return stones[0];
    } else {
        return 0;
    }
}




