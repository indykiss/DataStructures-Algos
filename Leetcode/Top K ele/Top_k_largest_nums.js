


/*
Top 'K' Numbers

Given an unsorted array of numbers, find the ‘K’ 
largest numbers in it.

[5, 12, 2, 11], K = 3
Output: [5, 12, 11]


Strat: 
- Sort the arr -> O(n log n) time complexity 
[2, 5, 11, 12], K = 3
- arr.slice(1) => [5, 11, 12]

Edge case: 
- Arr.length < K ? return arr, -1? -1 
- [2, 5, 11, 11, 11, 12] => [11, 11, 12] 
- others? 
*/

function topKNums(arr, k) {
    if(k > arr.length) return -1;

    arr = arr.sort((a,b) => a-b); 
    return arr.slice(k); 
}
// O(n log n) time, O(1) space


// Save time using a heap! 
/*
Strat:
- Use a heap of size of K 
- Iterate thru arr, if curr is > smallest num in heap, 
add curr into heap and remove smallest num. 
- Use a min-heap to find the smallest number within a 
set of nums. Finding the smallest num in a min-heap takes 
constant time, bc the smallest num is always the root 
of the heap. TAKING OUT the smallest num would be 
O(log n). 
- Return the heap
*/

function topKNumsHeap(arr, k) {
    // insert k eles into min-heap
    // so root is always min
    const minHeap = new Heap([], null, ((a,b) => b-a));
    for(let i = 0; i < k; i++) {
        minHeap.push(arr[i]);
    }

    // iterate thru arr 
    for(let idx = 0; idx < arr.length; idx++) {
        // check if the curr num is larger
        // than the min-heap's root 
        let curr = arr[idx]

        if(curr > minHeap.peek()) {
            // remove the min heap root and insert curr 
            minHeap.pop();
            minHeap.push(curr);
        }
    }

    // return min heap OR return as array 
    return minHeap.toArray(); // ??? 
}
// O(log k) time where k is the given k
// O(k) space because we're saving k eles in a heap 



