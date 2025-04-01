

/*
Kth Smallest Number 

Given an unsorted array of numbers, find Kth 
smallest number in it.

Please note that it is the Kth smallest number in the 
sorted order, not the Kth distinct element.

[1, 5, 12, 2, 11, 5], K = 3
Output: 5
Explanation: The 3rd smallest number is '5', 
as the first two smaller numbers are [1, 2].


Strat: 
- [1, 1, 2, 3], 2nd => 2 
- Remove dupes from input so we can:
    - Sort of the arr
    - Find the index that correlates to the Kth
    smallest, and return that num. 
    (return arr[k-1]) 

*/

// Oct, fb/ bloomb
function kthSmallestNum(arr, k) {
    if(k < arr.length) return -1; // edge

    arr = arr.sort((a,b) => a-b);
    return arr[k-1];
}
// Time: O(n log n), O(N) space


/*
Strat: Heap to save time & space 
1. Heap (max?) tracks k number 
of smallest eles in the arr. 
Root of max heap is the largest num in the heap. 

2. Var: heap. Insert 0 - k num from arr. 

3. Iterate thru the arr and ID if the curr
is smaller than the largest num in heap. 
IF it is:
    - remove the largest num in heap
    - add the curr 

4. return heap.peek to see the root which would be 
the Kth smallest num. 

*/

const heap = collection.js // import the heap so it runs 

function kthSmallestNumHeap(arr, k) {
    if(k < arr.length) return -1;

    let maxHeap = new Heap([], null, (a,b) => a-b); 

    for(let i = 0; i < k; i++) {
        maxHeap.push(arr[i]);
    }

    // optimize by starting at k+1
    for(let idx = 0; idx < arr.length; idx++) {
        let curr = arr[i];

        if(curr < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(curr);
        }
    }   

    return maxHeap.peek(); // returns the KTH smallest
        // SINGLE num; 
    
    // VARIATION: if we wanted to return k number of 
    // NUMBERS of smallest nums: maxHeap.toArray();
}


