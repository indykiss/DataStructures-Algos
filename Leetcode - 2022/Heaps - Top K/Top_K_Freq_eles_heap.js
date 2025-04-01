



/*
Top 'K' Frequent Numbers 

Given an unsorted array of numbers, find the top ‘K’ 
frequently occurring numbers in it.


Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' apeared twice.


Strat: hash table
- Hash: {num: # of occurences}
- Sort the hash by occurence
    - object.key.order.?? 
- Return the top k # of nums 

Strat: heap (min)
- Heap: track K num of ints 
- minHeap -> root is the smallest number of occurences 
- Sort the arr (O(n log n) time) 
- iterate thru arr
- then have a counter that counts the num of times 
the curr num is seen. track the minHeap's root's count 
- IF currNumCounter > minHeapRootCounter:
    - remove the minHeap root 
    - add the curr num to minHeap 
    - update the minHeapRootCounter to be the currNumCounter

- Return minheap to array 


Edges: 
- Multiple possible outputs: [1, 2, 2, 2, 3, 3, 3] k = 1, 
=> [2] OR [3] ? 
- Valid arr. Arr.length === 0, return []
- Invalid K. K > uniq values in arr. Assume not an issue! 
[1, 2, 2, 3, 3] k = 4 
*/


// Heap way to do this. Grokking. 
// Oct, FB/ Bloomb. 
const Heap = require('collections/heap'); // imports heap

var topKFreqNums = function(arr, k) {
    // hash to track num : # of occurences
    let hash = {};
    for(let index = 0; index < arr.length; index++) {
        if(hash[index]) {
            hash[index]++;
        } else {
            hash[index] = 1;
        }
    }

    let minHeap = new Heap([], null, (a,b) => b[0] - a[0]);

    // Add everything into minHeap and remove nums that
    // are the least frequently used 
    Object.keys(hash).forEach(num => {
        minHeap.push(num);

        // remove the least used num if we're at capacity
        if(minHeap.length > k) {
            minHeap.pop();
        }
    })

    // Find just the nums that are most used, add to arr
    let res = []; 

    while(minHeap.length > 0) {
        let pair = minHeap.pop();

        res.push(pair[1]);
    }
    return res;
}


// Sort the hash by frequency: Object.keys(hash).sort((a,b) => hash[b] - hash[a]);





